// Translation Dictionary
const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-plants': 'Plants',
    'nav-diseases': 'Diseases',
    'nav-community': 'Community',
    'nav-about': 'About',
    
    // Index Page
    'welcome-title': 'Welcome to the world of plants!',
    'welcome-subtitle': 'An all-in-one platform to identify plants, explore their varieties, and their care',
    'search-placeholder': 'Search for a plant...',
    
    'special-title': 'What Makes MyPlant Special',
    'care-time-title': 'Care Time',
    'care-time-desc': 'Set reminders for watering, and receive timely notifications for your plants to stay healthy.',
    'plant-id-title': 'Plant Identification',
    'plant-id-desc': 'Not sure what plant it is? Use AI to identify it quickly and get information about it',
    'weather-title': 'Weather',
    'weather-desc': 'Check the weather near you to adjust watering and care routines , especially on hot, rainy, or windy days.',
    'nursery-title': 'Plant Nursery',
    'nursery-desc': 'Find nearby plant nurseries across Jordan and discover the nearest nursery to your location.',
    
    'explore-plants': 'Explore The Plants',
    'see-more-plants': 'See more plants',
    
    'plant-diseases': 'Plant Diseases',
    'infectious-diseases': 'Infectious Diseases',
    'infectious-desc': 'Caused by bacteria, fungi or viruses.',
    'non-infectious-diseases': 'Non-Infectious Diseases',
    'non-infectious-desc': 'Caused by environmental or nutritional factors.',
    
    'about-title': 'About MyPlant',
    'about-text': 'MyPlant is a simple and user-friendly platform designed to help plant lovers identify plants, understand their diseases, and learn the best care practices. Our goal is to make plant care easier by providing useful information such as plant identification, weather-based tips, reminders, and disease awareness. This project was developed as an educational frontend project, focusing on clean design, usability, and accessibility, using modern web technologies to create an enjoyable learning experience.',
    
    'footer-text': 'MyPlant – Botanist in your pocket',
    'footer-copyright': '© 2025 MyPlant . All rights reserved',
    
    // Community Page
    'community-title': 'Plant Community',
    'community-subtitle': 'Ask plant care questions, describe your plant problem, and contact agricultural support directly through WhatsApp',
    'expert-title': 'Ask an Agricultural Expert',
    'expert-desc': 'Connect with plant experts through WhatsApp',
    'name-label': 'Your Name',
    'name-placeholder': 'Enter your name',
    'plant-type-label': 'Plant Type',
    'plant-type-placeholder': 'Example: Rose, Cactus, Mint...',
    'problem-label': 'Problem Type',
    'message-label': 'Your Message',
    'message-placeholder': 'Describe your plant problem...',
    'send-whatsapp': 'Send via WhatsApp',
    'whatsapp-note': 'This will open WhatsApp with your message ready to send.',
    'watering-problem': 'Watering problem',
    'yellow-leaves': 'Yellow leaves',
    'plant-disease': 'Plant disease',
    'sunlight-issue': 'Sunlight issue',
    'soil-fertilizer': 'Soil or fertilizer problem',
    'general-question': 'General question',
    'fill-all-fields': 'Please fill all fields',
    'choose-problem': 'Choose a problem',
    
    // Login/Signup
    'welcome-back': 'Welcome Back',
    'login-subtitle': 'Please login to your account',
    'email-label': 'Email Address',
    'email-placeholder': 'name@example.com',
    'password-label': 'Password',
    'password-placeholder': 'Enter your password',
    'remember-me': 'Remember me',
    'forgot-password': 'Forgot password?',
    'login-btn': 'Login',
    'no-account': 'Don\'t have an account?',
    'signup-link': 'Sign up',
    
    'create-account': 'Create Account',
    'signup-subtitle': 'Join MyPlant community',
    'full-name-label': 'Full Name',
    'full-name-placeholder': 'Your full name',
    'confirm-password-label': 'Confirm Password',
    'confirm-password-placeholder': 'Confirm your password',
    'have-account': 'Already have an account?',
    'signup-btn': 'Sign Up',
    
    // Plant AI
    'history-title': 'Plant History',
    'ai-title': 'Upload or capture a plant image for analysis',
    'start-camera': 'Start Camera',
    'capture-image': 'Capture Image',
    'choose-file': 'Choose File',
    
    // Reminder
    'care-time-title': 'Care Time',
    'care-time-desc': 'Never miss watering, sunlight, or plant care tasks again.',
    'create-task': 'Create Care Task',
    'task-subtitle': 'Choose a time and write the plant care task you want to follow.',
    'care-time-label': 'Care Time',
    'task-description': 'Task Description',
    'add-task': 'Add Task',
    'active-tasks': 'Active Tasks',
    'no-tasks': 'No tasks yet. Create one to get started!',
    'delete-btn': 'Delete',
    
    // Weather
    'weather-tips': 'Weather & Plant Tips',
    'enter-city': 'Enter city name',
    'get-weather': 'Get Weather',
    'getting-location': 'Getting location...',
    'allow-location': 'Allow location or use city input above',
    'city-not-found': 'City not found',
    'browser-no-geolocation': 'Browser does not support geolocation',
    
    // Feedback
    'feedback-center': 'Feedback Center',
    'feedback-subtitle': 'Share a complaint if something is not working, or send a suggestion to help improve MyPlant.',
    'complaint': 'Complaint',
    'suggestion': 'Suggestion',
    'complaint-category': 'Complaint Category',
    'suggestion-text': 'Suggestion Text',
    'submit': 'Submit',
    'admin-dashboard': 'Admin Dashboard',
    
    // Plant Nursery
    'nearest-nursery': 'Nearest Plant Nursery in Jordan',
    'find-nearby': 'Find nearby agricultural nurseries across Jordan',
    'search-placeholder': 'Search by nursery name, area, or plant type...',
    'no-nurseries': 'No nurseries found',
  },
  
  ar: {
    // Navigation
    'nav-home': 'الرئيسية',
    'nav-plants': 'النباتات',
    'nav-diseases': 'الأمراض',
    'nav-community': 'المجتمع',
    'nav-about': 'عن التطبيق',
    
    // Index Page
    'welcome-title': 'مرحبا بك في عالم النباتات!',
    'welcome-subtitle': 'منصة شاملة لتحديد النباتات واستكشاف أنواعها والعناية بها',
    'search-placeholder': 'ابحث عن نبات...',
    
    'special-title': 'ما يميز MyPlant',
    'care-time-title': 'وقت العناية',
    'care-time-desc': 'اضبط التذكيرات للري واستقبل إشعارات في الوقت المناسب لإبقاء نباتاتك صحية.',
    'plant-id-title': 'تحديد النبات',
    'plant-id-desc': 'غير متأكد من نوع النبات؟ استخدم الذكاء الاصطناعي لتحديده بسرعة والحصول على معلومات عنه',
    'weather-title': 'الطقس',
    'weather-desc': 'تحقق من الطقس بالقرب منك لتعديل جداول الري والعناية، خاصة في الأيام الحارة أو الممطرة أو العاصفة.',
    'nursery-title': 'مشتل النباتات',
    'nursery-desc': 'ابحث عن مشاتل النباتات القريبة منك في الأردن واكتشف أقرب مشتل إلى موقعك.',
    
    'explore-plants': 'استكشف النباتات',
    'see-more-plants': 'شاهد المزيد من النباتات',
    
    'plant-diseases': 'أمراض النباتات',
    'infectious-diseases': 'الأمراض المعدية',
    'infectious-desc': 'التي تسببها البكتيريا أو الفطريات أو الفيروسات.',
    'non-infectious-diseases': 'الأمراض غير المعدية',
    'non-infectious-desc': 'التي تسببها عوامل بيئية أو غذائية.',
    
    'about-title': 'عن MyPlant',
    'about-text': 'MyPlant منصة بسيطة وسهلة الاستخدام مصممة لمساعدة محبي النباتات على تحديد النباتات وفهم أمراضها وتعلم أفضل ممارسات العناية. هدفنا هو تسهيل العناية بالنباتات من خلال توفير معلومات مفيدة مثل تحديد النبات والنصائح المستندة إلى الطقس والتذكيرات والوعي بالأمراض. تم تطوير هذا المشروع كمشروع واجهة أمامية تعليمية، مع التركيز على التصميم النظيف وقابلية الاستخدام والإمكانية الوصولية، باستخدام تقنيات الويب الحديثة لإنشاء تجربة تعليمية ممتعة.',
    
    'footer-text': 'MyPlant - الخبير النباتي في جيبك',
    'footer-copyright': '© 2025 MyPlant . جميع الحقوق محفوظة',
    
    // Community Page
    'community-title': 'مجتمع النباتات',
    'community-subtitle': 'اطرح أسئلة العناية بالنباتات، صف مشكلة نبات، واتصل بدعم زراعي مباشر عبر واتساب',
    'expert-title': 'اطلب من خبير زراعي',
    'expert-desc': 'تواصل مع خبراء النباتات عبر واتساب',
    'name-label': 'اسمك',
    'name-placeholder': 'أدخل اسمك',
    'plant-type-label': 'نوع النبات',
    'plant-type-placeholder': 'مثال: ورد، صبار، نعناع...',
    'problem-label': 'نوع المشكلة',
    'message-label': 'رسالتك',
    'message-placeholder': 'صف مشكلة نبات...',
    'send-whatsapp': 'إرسال عبر واتساب',
    'whatsapp-note': 'سيفتح واتساب مع رسالتك جاهزة للإرسال.',
    'watering-problem': 'مشكلة في الري',
    'yellow-leaves': 'أوراق صفراء',
    'plant-disease': 'مرض النبات',
    'sunlight-issue': 'مشكلة الضوء',
    'soil-fertilizer': 'مشكلة التربة أو السماد',
    'general-question': 'سؤال عام',
    'fill-all-fields': 'يرجى ملء جميع الحقول',
    'choose-problem': 'اختر مشكلة',
    
    // Login/Signup
    'welcome-back': 'أهلا بعودتك',
    'login-subtitle': 'الرجاء تسجيل الدخول إلى حسابك',
    'email-label': 'عنوان البريد الإلكتروني',
    'email-placeholder': 'name@example.com',
    'password-label': 'كلمة المرور',
    'password-placeholder': 'أدخل كلمة المرور',
    'remember-me': 'تذكرني',
    'forgot-password': 'هل نسيت كلمة المرور؟',
    'login-btn': 'تسجيل الدخول',
    'no-account': 'ليس لديك حساب؟',
    'signup-link': 'اشترك الآن',
    
    'create-account': 'إنشاء حساب',
    'signup-subtitle': 'انضم إلى مجتمع MyPlant',
    'full-name-label': 'الاسم الكامل',
    'full-name-placeholder': 'اسمك الكامل',
    'confirm-password-label': 'تأكيد كلمة المرور',
    'confirm-password-placeholder': 'أكد كلمة المرور',
    'have-account': 'هل لديك حساب بالفعل؟',
    'signup-btn': 'إنشاء حساب',
    
    // Plant AI
    'history-title': 'سجل النباتات',
    'ai-title': 'ارفع أو التقط صورة للنبات ليتم تحليله',
    'start-camera': 'تشغيل الكاميرا',
    'capture-image': 'التقاط الصورة',
    'choose-file': 'اختر ملف',
    
    // Reminder
    'care-time-title': 'وقت العناية',
    'care-time-desc': 'لا تفوت أي مهمة عناية بالنبات مرة أخرى.',
    'create-task': 'إنشاء مهمة عناية',
    'task-subtitle': 'اختر الوقت واكتب مهمة العناية بالنبات التي تريد متابعتها.',
    'care-time-label': 'وقت العناية',
    'task-description': 'وصف المهمة',
    'add-task': 'إضافة مهمة',
    'active-tasks': 'المهام النشطة',
    'no-tasks': 'لا توجد مهام بعد. أنشئ واحدة للبدء!',
    'delete-btn': 'حذف',
    
    // Weather
    'weather-tips': 'نصائح الطقس والنبات',
    'enter-city': 'أدخل اسم المدينة',
    'get-weather': 'الحصول على الطقس',
    'getting-location': 'جاري الحصول على الموقع...',
    'allow-location': 'السماح بالموقع أو استخدم إدخال المدينة أعلاه',
    'city-not-found': 'المدينة غير موجودة',
    'browser-no-geolocation': 'المتصفح لا يدعم تحديد الموقع الجغرافي',
    
    // Feedback
    'feedback-center': 'مركز التعليقات',
    'feedback-subtitle': 'شارك شكوى إذا كان هناك خطأ ما، أو أرسل اقتراح لمساعدة MyPlant على التحسن.',
    'complaint': 'شكوى',
    'suggestion': 'اقتراح',
    'complaint-category': 'فئة الشكوى',
    'suggestion-text': 'نص الاقتراح',
    'submit': 'إرسال',
    'admin-dashboard': 'لوحة المسؤول',
    
    // Plant Nursery
    'nearest-nursery': 'أقرب مشتل للنباتات في الأردن',
    'find-nearby': 'ابحث عن المشاتل الزراعية القريبة منك في الأردن',
    'search-placeholder': 'ابحث باسم المشتل أو المنطقة أو نوع النبات...',
    'no-nurseries': 'لم يتم العثور على مشاتل',
  }
};

// Get translation
function t(key, lang = null) {
  const currentLang = lang || localStorage.getItem('appLanguage') || 'en';
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

// Translate all elements with data-translate attribute
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    const text = t(key, lang);
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  });
}
