import React from 'react';
import './Popup.css';

const Popup = ({ title, children, onClose }) => {
  return (
    <div className="popup" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="popup-contenido">
        <h2>{title}</h2>
        <div className="popup-content">{children}</div>
        <button className="cerrar-popup" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Popup;