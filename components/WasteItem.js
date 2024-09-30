// components/WasteItem.js
import React from 'react';

const WasteItem = ({ name, category }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ name, category }));
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
  };

  return (
    <div 
      className="waste-item"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {name}
    </div>
  );
};

export default WasteItem;
