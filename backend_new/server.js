const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const db = require('./db');
const User = require('./models/User');
const Plant = require('./models/Plant');
require('dotenv').config();
const axios = require('axios');


const PLANT_ID_API_KEY = "ZWYkexXfRlpCjo9dCL9eojI2fLrBb4jbTiSt6ryXVdod46om3S"; // API Key moved to backend

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.uploadsDir = path.join(__dirname, 'uploads');
        this.upload = null;

        this.ensureUploadsDir();
        this.configMulter();
        this.configMiddleware();
        this.configRoutes();
    }

    ensureUploadsDir() {
        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(this.uploadsDir)) {
            fs.mkdirSync(this.uploadsDir);
        }
    }

    configMulter() {
        // Configure multer for file uploads
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.uploadsDir);
            },
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
                cb(null, uniqueName);
            }
        });
        this.upload = multer({ storage });
    }

    configMiddleware() {
        this.app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(session({
            secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
            resave: false,
            saveUninitialized: false,
            cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
        }));
    }

    configRoutes() {
        // ============ API ROUTES (must be before static middleware) ============

        // Register API
        this.app.post('/api/register', async (req, res) => {
            try {
                const { fullName, email, password } = req.body;
                if (!fullName || !email || !password) {
                    return res.status(400).json({ message: 'All fields are required' });
                }

                // Check if user already exists
                const existingUsers = await User.findByEmail(email);
                if (existingUsers.length > 0) {
                    return res.status(409).json({ message: 'User already exists' });
                }

                // Insert new user
                // Note: In a real production app, password should be hashed (e.g., using bcrypt)
                const result = await User.create(fullName, email, password);

                res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        });

        // Login API
        this.app.post('/api/login', async (req, res) => {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.status(400).json({ message: 'Email and password are required' });
                }

                const users = await User.findByEmailAndPassword(email, password);

                if (users.length === 0) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }

                const user = users[0];
                req.session.userId = user.id; // Store user ID in session
                res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.username, email: user.email } });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        });

        // Save Plant Info API
        this.app.post('/api/save-plant', async (req, res) => {
            try {
                // Check if user is logged in
                if (!req.session.userId) {
                    return res.status(401).json({ message: 'User not logged in' });
                }

                const { plantName, probability, description, imageData } = req.body;

                if (!plantName || !imageData) {
                    return res.status(400).json({ message: 'Plant name and image are required' });
                }

                // Convert base64 to file
                const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`;
                const filepath = path.join(this.uploadsDir, filename);

                fs.writeFileSync(filepath, buffer);

                const imagePath = `/uploads/${filename}`;

                const result = await Plant.create({
                    userId: req.session.userId,
                    imagePath,
                    plantName,
                    species: plantName,
                    confidenceScore: probability,
                    rawApiResponse: JSON.stringify({ description })
                });

                res.status(201).json({ message: 'Plant info saved', id: result.insertId });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        });

        // Get User's Plant Images API
        this.app.get('/api/user-plants', async (req, res) => {
            try {
                if (!req.session.userId) {
                    return res.status(401).json({ message: 'User not logged in' });
                }

                const plants = await Plant.findByUserId(req.session.userId);

                res.status(200).json({ plants });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        });


        // Identify Plant Proxy API
        this.app.post('/api/identify', async (req, res) => {
            try {
                const { images, similar_images } = req.body;

                if (!images || !Array.isArray(images) || images.length === 0) {
                    return res.status(400).json({ message: 'Image data is required' });
                }

                // Proxy request to Plant.id
                const response = await axios.post("https://api.plant.id/v2/identify", {
                    images,
                    similar_images: !!similar_images
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Api-Key": PLANT_ID_API_KEY
                    }
                });

                res.json(response.data);

            } catch (error) {
                console.error("Plant.id API Error:", error.message);

                if (error.response) {
                    // API responded with an error status code
                    const status = error.response.status;
                    const data = error.response.data;

                    if (status === 429) {
                        return res.status(429).json({
                            message: 'Quota Limit Exceeded. Please use a new API Key.',
                            details: data
                        });
                    }

                    return res.status(status).json({
                        message: 'Error from Plant API',
                        details: data
                    });
                }

                res.status(500).json({ message: 'Internal Server Error during identification' });
            }
        });


        // ============ STATIC FILES & REDIRECTS ============

        // Redirect root URL to login page
        this.app.get('/', (req, res) => {
            res.redirect('/login.html');
        });

       // this.app.use(express.static(path.join(__dirname, '../Frontend')));
        this.app.use(express.static(path.join(__dirname, '../frontend_new')));
        this.app.use('/uploads', express.static(this.uploadsDir));
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

// Instantiate and start
const server = new Server();
server.start();
