import React from 'react';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import InteractiveElement from '../InteractiveElement/InteractiveElement';
import Popup from '../Popup/Popup';

const PortfolioScene = ({ activePopup, setActivePopup, popups }) => {
  const interactiveElements = [
    { id: 'quien-soy', top: '20vh', left: '35vw', width: '7vw', img: '/images/me.png' },
    { id: 'proyectos', top: '75vh', left: '15.63vw', width: '5.21vw', img: '/images/libro.png' },
    { id: 'contacto', top: '15vh', left: '50.5vw', width: '8vw', img: '/images/perro.png' },
    { id: 'como-usarlo', top: '0.93vh', left: '1.04vw', width: '5.21vw', img: '/images/libro.png' },
    { id: 'me-gusta', top: '65vh', left: '29vw', width: '6vw', img: '/images/pez.png' }
  ];

  return (
    <div className="portfolio-container">
      <BackgroundVideo />
      
      <div className="elementos-escenario">
        {interactiveElements.map((element) => (
          <InteractiveElement
            key={element.id}
            {...element}
            onClick={() => setActivePopup(element.id)}
          />
        ))}
      </div>

      {activePopup && (
        <Popup
          title={popups[activePopup].title}
          onClose={() => setActivePopup(null)}
        >
          {popups[activePopup].content}
        </Popup>
      )}
    </div>
  );
};

export default PortfolioScene;