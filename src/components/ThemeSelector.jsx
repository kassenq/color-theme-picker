import './ThemeSelector.css';

function ThemeSelector({ selectedSize, onSizeChange }) {
  const sizes = [2, 3, 4];

  return (
    <div className="theme-selector">
      {sizes.map((size) => (
        <button
          key={size}
          className={`theme-size-btn ${selectedSize === size ? 'active' : ''}`}
          onClick={() => onSizeChange(size)}
        >
          {size} Colors
        </button>
      ))}
    </div>
  );
}

export default ThemeSelector;
