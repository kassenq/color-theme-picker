import './ColorSwatch.css';

function ColorSwatch({ color, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(color);
    }
  };

  return (
    <div className="color-swatch" style={{ backgroundColor: color }} onClick={handleClick}>
      <span className="color-swatch-hex">{color}</span>
    </div>
  );
}

export default ColorSwatch;
