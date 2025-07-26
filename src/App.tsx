import { useState } from 'react'
import './App.css'
import growLogo from './assets/growLogo.webp'
import siemensLogo from './assets/siemensLogo.webp'
import FeatureGrid from './FeatureGrid'
import ProjectDetails from './ProjectDetails'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProjectId, setSelectedProjectId] = useState('')

  const renderPage = () => {
    switch (currentPage) {
      case 'featuregrid':
        return <FeatureGrid 
          onNavigateHome={() => setCurrentPage('home')} 
          onNavigateToProject={(projectId) => {
            setSelectedProjectId(projectId)
            setCurrentPage('projectdetails')
          }}
        />
      case 'projectdetails':
        return <ProjectDetails 
          projectId={selectedProjectId}
          onNavigateHome={() => setCurrentPage('home')}
          onNavigateBack={() => setCurrentPage('featuregrid')}
          onNavigateToProject={(projectId) => setSelectedProjectId(projectId)}
        />
      default:
        return (
          <div className="home-page" onClick={() => setCurrentPage('featuregrid')}>
            <img src={growLogo} alt="Grow Logo" className="grow-logo" />
            <h1 className="touch-text">Touch to begin</h1>
          </div>
        )
    }
  }

  return (
    <div className="app-container">
      {(currentPage === 'featuregrid' || currentPage === 'projectdetails') && (
        <img 
          src={siemensLogo} 
          alt="Siemens Logo" 
          className="siemens-logo"
        />
      )}
      {renderPage()}
    </div>
  )
}

export default App
