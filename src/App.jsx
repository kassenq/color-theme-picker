import { useState } from 'react'
import './App.css'

function App() {
  const [selectedColor, setSelectedColor] = useState('#3b82f6')

  return (
    <div className="app">
      <h1>Color Theme Picker</h1>
      <div className="color-picker-container">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="color-input"
        />
        <div className="color-display" style={{ backgroundColor: selectedColor }}>
          <p>{selectedColor}</p>
        </div>
      </div>
    </div>
  )
}

export default App
