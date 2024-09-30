// components/Bin.js
import React from 'react';

const getBinColor = (category) => {
  switch(category) {
    case 'wet-waste': return 'rgba(0, 128, 0, 0.3)'; // Green
    case 'dry-waste': return 'rgba(0, 0, 255, 0.3)'; // Blue
    case 'hazardous-waste': return 'rgba(255, 0, 0, 0.3)'; // Red
    case 'sanitary-waste': return 'rgba(255, 165, 0, 0.3)'; // Orange
    case 'e-waste': return 'rgba(128, 0, 128, 0.3)'; // Purple
    default: return 'rgba(200, 200, 200, 0.3)'; // Grey
  }
};

const Bin = ({ category, onDrop, fillLevel, isCorrectBin }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("text"));
    onDrop(item, category);
  };

  const binColor = getBinColor(category);

  return (
    <div className="bin-wrapper">
      <div 
        className={`bin ${isCorrectBin ? 'correct-bin' : ''}`}
        style={{ backgroundColor: binColor }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="bin-fill" style={{height: `${fillLevel}%`}}></div>
      </div>
      <div className="bin-label">{category.replace('-', ' ').toUpperCase()}</div>
    </div>
  );
};

export default Bin;
