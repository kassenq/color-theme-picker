import { useState, useEffect } from 'react';
import './ColorPicker.css';

function ColorPicker({ value, onChange }) {
  const [hexInput, setHexInput] = useState(value);

  // Sync hexInput with value prop when it changes externally (e.g., from color swatch clicks)
  useEffect(() => {
    if (value !== hexInput) {
      setHexInput(value);
    }
  }, [value]);

  const handleHexInputChange = (e) => {
    const inputValue = e.target.value;
    setHexInput(inputValue);

    // Validate hex color format
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    if (hexRegex.test(inputValue)) {
      onChange(inputValue);
    }
  };

  const handleColorPickerChange = (e) => {
    const newColor = e.target.value;
    setHexInput(newColor);
    onChange(newColor);
  };

  return (
    <div className="color-picker-container">
      <div className="color-picker-inputs">
        <input
          type="color"
          value={value}
          onChange={handleColorPickerChange}
          className="color-input"
        />
        <input
          type="text"
          value={hexInput}
          onChange={handleHexInputChange}
          placeholder="#3b82f6"
          maxLength={7}
          className="hex-input"
        />
      </div>
      <div className="color-display" style={{ backgroundColor: value }}>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
