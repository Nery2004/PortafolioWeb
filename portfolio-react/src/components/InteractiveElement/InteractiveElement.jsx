import React from 'react';
import './InteractiveElement.css';

const InteractiveElement = ({ id, top, left, width, img, onClick }) => {
  return (
    <div 
      className="elemento-interactivo"
      style={{ top, left, width }}
      onClick={onClick}
    >
      <img src={img} alt={id} />
    </div>
  );
};

export default InteractiveElement;