import ColorSwatch from './ColorSwatch';
import './ThemeDisplay.css';

function ThemeDisplay({ themes, activeTab, onColorSelect }) {
  if (!themes || Object.keys(themes).length === 0) {
    return null;
  }

  // Define which themes belong to each category
  const categories = {
    theory: ['complementary', 'triadic', 'splitComplementary', 'tetradic', 'square'],
    harmonious: ['analogous', 'monochromatic', 'shadesAndTints'],
    styled: ['pastel', 'deepRich']
  };

  const activeThemes = categories[activeTab] || [];

  return (
    <div className="theme-display">
      {activeThemes.includes('complementary') && themes.complementary && (
        <div className="theme-section">
          <h2 className="theme-title">Complementary</h2>
          <p className="theme-description">Colors opposite on the color wheel (180° apart)</p>
          <div className="theme-swatches">
            {themes.complementary.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('triadic') && themes.triadic && (
        <div className="theme-section">
          <h2 className="theme-title">Triadic</h2>
          <p className="theme-description">Evenly spaced 120° apart</p>
          <div className="theme-swatches">
            {themes.triadic.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('splitComplementary') && themes.splitComplementary && (
        <div className="theme-section">
          <h2 className="theme-title">Split-Complementary</h2>
          <p className="theme-description">Base color + two colors adjacent to its complement</p>
          <div className="theme-swatches">
            {themes.splitComplementary.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('tetradic') && themes.tetradic && (
        <div className="theme-section">
          <h2 className="theme-title">Tetradic</h2>
          <p className="theme-description">Two complementary color pairs (60° spacing)</p>
          <div className="theme-swatches">
            {themes.tetradic.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('square') && themes.square && (
        <div className="theme-section">
          <h2 className="theme-title">Square</h2>
          <p className="theme-description">Evenly spaced 90° apart</p>
          <div className="theme-swatches">
            {themes.square.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('analogous') && themes.analogous && (
        <div className="theme-section">
          <h2 className="theme-title">Analogous</h2>
          <p className="theme-description">Adjacent colors creating harmonious palettes</p>
          <div className="theme-swatches">
            {themes.analogous.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('monochromatic') && themes.monochromatic && (
        <div className="theme-section">
          <h2 className="theme-title">Monochromatic</h2>
          <p className="theme-description">Same hue with varying lightness levels</p>
          <div className="theme-swatches">
            {themes.monochromatic.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('shadesAndTints') && themes.shadesAndTints && (
        <div className="theme-section">
          <h2 className="theme-title">Shades & Tints</h2>
          <p className="theme-description">Darker shades and lighter tints of the base color</p>
          <div className="theme-swatches">
            {themes.shadesAndTints.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('pastel') && themes.pastel && (
        <div className="theme-section">
          <h2 className="theme-title">Pastel Palette</h2>
          <p className="theme-description">Soft, desaturated colors with gentle appeal</p>
          <div className="theme-swatches">
            {themes.pastel.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}

      {activeThemes.includes('deepRich') && themes.deepRich && (
        <div className="theme-section">
          <h2 className="theme-title">Deep & Rich</h2>
          <p className="theme-description">Bold, saturated colors for dramatic impact</p>
          <div className="theme-swatches">
            {themes.deepRich.map((color, index) => (
              <ColorSwatch key={index} color={color} onClick={onColorSelect} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeDisplay;
