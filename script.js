// script.js – интерактив: кнопка заказа, бургер-меню

document.addEventListener('DOMContentLoaded', function () {
    // 1. Кнопка "Заказать букет" – показываем сообщение
    const orderBtn = document.getElementById('orderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function () {
            alert('Спасибо за заказ! Мы свяжемся с вами');
        });
    }

    // 2. Бургер-меню для мобильных
    const burger = document.getElementById('burger');
    const navMenu = document.querySelector('.nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Закрываем меню при клике на ссылку (опционально, для удобства)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }
});
