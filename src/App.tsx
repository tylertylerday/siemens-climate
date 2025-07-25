import './App.css'
import growLogo from './assets/growLogo.webp'

function App() {
  return (
    <div className="app-container">
      <img src={growLogo} alt="Grow Logo" className="grow-logo" />
      <h1 className="touch-text">Touch to begin</h1>
    </div>
  )
}

export default App
