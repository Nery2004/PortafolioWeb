document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const quienSoy = document.getElementById('quien-soy');
    const proyectos = document.getElementById('proyectos');
    const contacto = document.getElementById('contacto');
    const comousarlo = document.getElementById('como-usarlo');
    const megusta = document.getElementById('me-gusta');
    const videoBackground = document.querySelector('.background-video');
    
    // Popups
    const popupQuienSoy = document.getElementById('popup-quien-soy');
    const popupProyectos = document.getElementById('popup-proyectos');
    const popupContacto = document.getElementById('popup-contacto');
    const popupComoUsarlo = document.getElementById('popup-como-usarlo');
    const popupMeGusta = document.getElementById('popup-me-gusta');

    // Mostrar popups
    function showPopup(popup) {
        popup.style.display = 'flex';
    }

    // Ocultar popups
    function hidePopup(popup) {
        popup.style.display = 'none';
    }

    // Event listeners para popups
    quienSoy.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(popupQuienSoy);
    });
    
    proyectos.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(popupProyectos);
    });
    
    contacto.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(popupContacto);
    });

    comousarlo.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(popupComoUsarlo);
    });

    megusta.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(popupMeGusta);
    });

    // Cerrar popups
    document.querySelectorAll('.cerrar-popup').forEach(function(boton) {
        boton.addEventListener('click', function() {
            hidePopup(this.closest('.popup'));
        });
    });
    
    // Cerrar al hacer click fuera del contenido
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                hidePopup(this);
            }
        });
    });

    // Asegurar que el video se reproduzca
    videoBackground.play().catch(e => {
        console.log('Video autoplay prevented:', e);
    });
});