import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button className="color-picker-button" onClick={handleButtonClick}>
        Pick a color
      </button>
      {isOpen && (
        <ul className="color-picker-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-picker-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="color-picker-selected" style={{ backgroundColor: selectedColor }}>
          Selected color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
