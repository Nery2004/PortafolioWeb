// Este es solo un ejemplo básico, luego lo integrarás con React
document.addEventListener('DOMContentLoaded', function() {
    // Elementos interactivos
    const quienSoy = document.getElementById('quien-soy');
    const proyectos = document.getElementById('proyectos');
    const contacto = document.getElementById('contacto');
    const background = document.querySelector('.background');
    const escenario = document.querySelector('.escenario');
    let lastScroll = 0;
    let currentPos = 0;
    // Popups
    const popupQuienSoy = document.getElementById('popup-quien-soy');
    const popupProyectos = document.getElementById('popup-proyectos');
    const popupContacto = document.getElementById('popup-contacto');
    
    // Botones cerrar
    const cerrarPopups = document.querySelectorAll('.cerrar-popup');
        escenario.addEventListener('scroll', function() {
        const scrollTop = escenario.scrollTop;
        const scrollDirection = scrollTop > lastScroll ? 1 : -1;
        lastScroll = scrollTop;
        
        // Ajusta la posición del fondo
        currentPos += scrollDirection * 0.5; // Controla la velocidad
        
        // Reinicia la posición para crear el efecto infinito
        if (Math.abs(currentPos) >= 100) {
            currentPos = 0;
        }
        
    background.style.transform = `translateY(${currentPos}%)`;
    });
    // Mostrar popups
    quienSoy.addEventListener('click', function(e) {
        e.preventDefault();
        popupQuienSoy.style.display = 'flex';
    });
    
    proyectos.addEventListener('click', function(e) {
        e.preventDefault();
        popupProyectos.style.display = 'flex';
    });
    
    contacto.addEventListener('click', function(e) {
        e.preventDefault();
        popupContacto.style.display = 'flex';
    });
    
    // Cerrar popups
    cerrarPopups.forEach(function(boton) {
        boton.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });
    
    // Cerrar al hacer click fuera del contenido
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
});