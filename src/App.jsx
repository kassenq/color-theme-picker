import { useState, useEffect } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker'
import TabSelector from './components/TabSelector'
import ThemeDisplay from './components/ThemeDisplay'
import {
  generateComplementary,
  generateTriadic,
  generateSplitComplementary,
  generateTetradic,
  generateSquare,
  generateAnalogous,
  generateMonochromatic,
  generateShadesAndTints,
  generatePastel,
  generateDeepRich
} from './utils/colorTheory'

function App() {
  const [baseColor, setBaseColor] = useState('#3b82f6')
  const [activeTab, setActiveTab] = useState('theory')
  const [generatedThemes, setGeneratedThemes] = useState({})

  useEffect(() => {
    const themes = {
      complementary: generateComplementary(baseColor),
      triadic: generateTriadic(baseColor),
      splitComplementary: generateSplitComplementary(baseColor),
      tetradic: generateTetradic(baseColor),
      square: generateSquare(baseColor),
      analogous: generateAnalogous(baseColor),
      monochromatic: generateMonochromatic(baseColor),
      shadesAndTints: generateShadesAndTints(baseColor),
      pastel: generatePastel(baseColor),
      deepRich: generateDeepRich(baseColor)
    }
    setGeneratedThemes(themes)
  }, [baseColor])

  return (
    <div className="app">
      <h1>Color Theme Picker</h1>
      <ColorPicker value={baseColor} onChange={setBaseColor} />
      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
      <ThemeDisplay themes={generatedThemes} activeTab={activeTab} onColorSelect={setBaseColor} />
    </div>
  )
}

export default App
