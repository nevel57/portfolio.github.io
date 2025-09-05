// Добавляем эффект "пульсации" при наведении на иконки
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
});