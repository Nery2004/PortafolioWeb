document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const quienSoy = document.getElementById('quien-soy');
    const proyectos = document.getElementById('proyectos');
    const contacto = document.getElementById('contacto');
    const comousarlo = document.getElementById('como-usarlo');
    const megusta = document.getElementById('me-gusta');
    const background = document.querySelector('.background');
    const escenario = document.querySelector('.escenario');
    const body = document.body;
    
    // Popups
    const popupQuienSoy = document.getElementById('popup-quien-soy');
    const popupProyectos = document.getElementById('popup-proyectos');
    const popupContacto = document.getElementById('popup-contacto');
    const popupComoUsarlo = document.getElementById('popup-como-usarlo');
    const popupMeGusta = document.getElementById('popup-me-gusta');
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
    function setFixedSize() {
        const pixelRatio = window.devicePixelRatio;
        const scale = (1 / pixelRatio) * 0.5;
        const el = document.querySelector('.me');
        
        document.documentElement.style.setProperty('--pixel-ratio', pixelRatio);
        
        if (!el.classList.contains('animation-ended')) {
            el.addEventListener('animationend', function() {
                this.style.transform = `translateX(-54%) scale(${scale})`;
                this.classList.add('animation-ended');
            }, { once: true });
        } else {
            el.style.transform = `translateX(-54%) scale(${scale})`;
        }
        
        el.style.transformOrigin = 'top left';
    }

    window.addEventListener('resize', setFixedSize);
    window.addEventListener('DOMContentLoaded', function() {
        const pixelRatio = window.devicePixelRatio;
        document.documentElement.style.setProperty('--pixel-ratio', pixelRatio);
        const el = document.querySelector('.me');
        el.style.transform = `translateX(-54%) scale(${(1 / pixelRatio) * 0.5})`;
        el.style.transformOrigin = 'top left';
        void el.offsetWidth;
        el.style.animation = 'fadeIn 1s ease-out';
    });

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

    // Limpieza al desmontar (si usas React o similar)
    return () => {
        cancelAnimationFrame(animationId);
    };
});