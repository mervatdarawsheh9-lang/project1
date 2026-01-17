const db = require('../db');

class User {
    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows;
    }

    static async create(username, email, passwordHash) {
        const [result] = await db.execute(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
            [username, email, passwordHash]
        );
        return result;
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async findByEmailAndPassword(email, password) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ? AND password_hash = ?', [email, password]);
        return rows;
    }
}

module.exports = User;
