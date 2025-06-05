import React, { useState } from 'react';
import PortfolioScene from './components/PortfolioScene/PortfolioScene';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';

function App() {
  const [activePopup, setActivePopup] = useState(null);

  const popups = {
    'quien-soy': {
      title: 'Quién Soy',
      content: (
        <>
          <p>¡Hola! Soy un desarrollador apasionado por crear experiencias digitales únicas. Me especializo en desarrollo web y diseño de interfaces interactivas.</p>
          <p>Mi enfoque combina creatividad y funcionalidad para construir sitios web que no solo se ven bien, sino que también ofrecen una excelente experiencia de usuario.</p>
        </>
      )
    },
    'proyectos': {
      title: 'Mis Proyectos',
      content: (
        <>
          <p><strong>Portafolio Interactivo</strong> - Un sitio web con elementos interactivos y video de fondo.</p>
          <p><strong>Aplicación Web</strong> - Sistema de gestión desarrollado con tecnologías modernas.</p>
          <p><strong>Landing Page</strong> - Páginas de aterrizaje optimizadas para conversión.</p>
        </>
      )
    },
    'contacto': {
      title: 'Contacto',
      content: (
        <>
          <p><strong>Email:</strong> contacto@miportafolio.com</p>
          <p><strong>Teléfono:</strong> +502 1234-5678</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/miportafolio</p>
          <p><strong>GitHub:</strong> github.com/miportafolio</p>
        </>
      )
    },
    'como-usarlo': {
      title: 'Cómo Usarlo',
      content: (
        <>
          <p><strong>Navegar:</strong> Los elementos están fijos en la pantalla para una navegación estática.</p>
          <p><strong>Interactuar:</strong> Haz clic en los elementos coloridos para abrir ventanas con información.</p>
          <p><strong>Cerrar:</strong> Usa el botón X o haz clic fuera de las ventanas para cerrarlas.</p>
        </>
      )
    },
    'me-gusta': {
      title: 'Me Gusta',
      content: (
        <>
          <p><strong>Programación:</strong> JavaScript, React, Node.js, Python</p>
          <p><strong>Diseño:</strong> UI/UX, animaciones, experiencias interactivas</p>
          <p><strong>Hobbies:</strong> Fotografía, música, videojuegos, naturaleza</p>
          <p><strong>Aprendizaje:</strong> Nuevas tecnologías, tendencias de diseño</p>
        </>
      )
    },
    'erick': {
      title: 'Erick',
      content: (
        <>
          <p><strong>Erick:</strong> Hola Soy Erick y no se que hago en este Portafolio</p>
        </>
      )
    }
  };

  return (
    <>
      <BackgroundMusic />
      <PortfolioScene 
        activePopup={activePopup}
        setActivePopup={setActivePopup}
        popups={popups}
      />
    </>
  );
}

export default App;