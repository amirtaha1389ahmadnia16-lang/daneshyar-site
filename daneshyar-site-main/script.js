// نمایش پیام خوش‌آمدگویی
document.addEventListener('DOMContentLoaded', function() {
    console.log('به دانشیار خوش آمدید! 🎓');
    
    // انیمیشن برای کارت‌ها
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// تابع نمایش پیام با کلیک روی کارت‌ها
function showMessage(grade) {
    // ایجاد المان پیام
    const message = document.createElement('div');
    message.className = 'toast-message';
    message.innerHTML = `
        <i class="fas fa-graduation-cap"></i>
        <span>شما وارد بخش ${grade} شدید. به زودی محتوای این پایه اضافه می‌شود!</span>
    `;
    
    // استایل پیام
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideDown 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(message);
    
    // حذف خودکار پیام بعد از ۳ ثانیه
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// جستجو
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        showMessage(`جستجو برای: ${searchTerm}`);
    } else {
        alert('لطفاً کلمه مورد نظر خود را وارد کنید.');
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// اسکرول نرم به بخش‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// افکت hover روی دکمه‌ها
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// نمایش سال جاری در فوتر
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = `تمامی حقوق برای دانشیار محفوظ است © ${currentYear}`;
}