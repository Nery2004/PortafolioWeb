document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const quienSoy = document.getElementById('quien-soy');
    const proyectos = document.getElementById('proyectos');
    const contacto = document.getElementById('contacto');
    const background = document.querySelector('.background');
    const escenario = document.querySelector('.escenario');
    const body = document.body;
    
    // Popups
    const popupQuienSoy = document.getElementById('popup-quien-soy');
    const popupProyectos = document.getElementById('popup-proyectos');
    const popupContacto = document.getElementById('popup-contacto');
    
    // Variables de control
    let lastScroll = 0;
    let currentPos = 0;
    let isPopupOpen = false;
    let animationId = null;

    // Función para manejar el scroll
    function handleScroll() {
        if (!isPopupOpen) {
            const scrollTop = escenario.scrollTop;
            const scrollDirection = scrollTop > lastScroll ? 1 : -1;
            lastScroll = scrollTop;
            
            currentPos += scrollDirection * 0.5;
            
            if (Math.abs(currentPos) >= 100) {
                currentPos = 0;
            }
            
            background.style.transform = `translateY(${currentPos}%)`;
        }
        
        animationId = requestAnimationFrame(handleScroll);
    }

    // Iniciar animación
    animationId = requestAnimationFrame(handleScroll);

    // Mostrar popups
    function showPopup(popup) {
        isPopupOpen = true;
        body.classList.add('body-no-scroll');
        popup.style.display = 'flex';
        // Pausar el efecto de scroll infinito
        cancelAnimationFrame(animationId);
    }

    // Ocultar popups
    function hidePopup(popup) {
        isPopupOpen = false;
        body.classList.remove('body-no-scroll');
        popup.style.display = 'none';
        // Reanudar el efecto de scroll infinito
        animationId = requestAnimationFrame(handleScroll);
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

    // Limpieza al desmontar (si usas React o similar)
    return () => {
        cancelAnimationFrame(animationId);
    };
});