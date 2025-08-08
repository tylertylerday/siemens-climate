import { useState } from 'react'
import './App.css'
import growLogo from './assets/growLogo.webp'
import siemensLogo from './assets/siemensLogo.webp'
import backgroundVideo from './assets/background-video.webm'
import FeatureGrid from './FeatureGrid'
import ProjectDetails from './ProjectDetails'

function App() {
  const [currentPage, setCurrentPage] = useState('featuregrid')
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
          onNavigateHome={() => setCurrentPage('featuregrid')}
          onNavigateBack={() => setCurrentPage('featuregrid')}
          onNavigateToProject={(projectId) => setSelectedProjectId(projectId)}
        />
      default:
        return (
          <div className="home-page" onClick={() => setCurrentPage('featuregrid')}>
            <img src={growLogo} alt="Grow Logo" className="animate__animated animate__slideInDown grow-logo" />
            <h1 className="touch-text animate__animated animate__fadeIn animate__delay-1s">Touch to begin</h1>
          </div>
        )
    }
  }

  return (
    <div className="app-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>
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
