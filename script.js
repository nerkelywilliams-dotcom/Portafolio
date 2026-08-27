// Cambiar sombra o fondo del menú al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(56, 189, 248, 0.2)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
    }
});
