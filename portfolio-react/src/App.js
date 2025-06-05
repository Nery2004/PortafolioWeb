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
          <p><strong>Email:</strong> josemolinatics@gmail.com</p>
          <p><strong>Teléfono:</strong> +502 5412-3422</p>
          <p href="https://github.com/nery2004"><strong>GitHub:</strong> Nery2004</p>
        </>
      )
    },
    'como-usarlo': {
      title: 'Cómo Usarlo',
      content: (
        <>
          <p><strong>Música:</strong> Arriba a la derecha puedes quitar la música si lo deseas.</p>
          <p><strong>Interacción:</strong> La mayoría de personas no son interactivas, solo te hablarán. El único personaje interactivo es Nery (el chavo de camisa negra con logo rojo de Spotify) - soy yo, y te compartirá información breve sobre mí.</p>
          <p><strong>Información:</strong> Las personas normales no contienen información. Los objetos son los que guardan los elementos importantes de mi portafolio.</p>
          <p><strong>Navegación:</strong> Haz clic en los elementos coloridos para abrir ventanas con información relevante.</p>
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
    },
    'amigos': {
      title: 'Vaconas',
      content: (
        <>
          <p><strong>Amigos:</strong> Vaconas 4ever!!! </p>
        </>
      )
    },
    'beto': {
      title: 'Beto',
      content: (
        <>
          <p><strong>Beto:</strong> Hola Soy Beto...</p>
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