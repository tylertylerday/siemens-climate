import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import growLogo from './assets/growLogo.webp'
import siemensLogo from './assets/siemensLogo.webp'
import backgroundVideo from './assets/background-video.mp4'
import FeatureGrid from './FeatureGrid'
import ProjectDetails from './ProjectDetails'
import Screensaver from './Screensaver'

function App() {
  const [currentPage, setCurrentPage] = useState('featuregrid')
  const [selectedProjectId, setSelectedProjectId] = useState('')
  const [showScreensaver, setShowScreensaver] = useState(false)
  const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(null)

  const resetInactivityTimer = useCallback(() => {
    setInactivityTimer(prevTimer => {
      if (prevTimer) {
        clearTimeout(prevTimer)
      }
      
      return setTimeout(() => {
        setShowScreensaver(true)
      }, 3 * 60 * 1000) // 3 minutes in milliseconds
    })
  }, [])

  const handleUserActivity = useCallback(() => {
    setShowScreensaver(false)
    resetInactivityTimer()
  }, [resetInactivityTimer])

  // Throttle activity detection to avoid excessive timer resets
  const lastActivityTime = useRef<number>(0)
  
  const throttledActivityHandler = useCallback(() => {
    const now = Date.now()
    if (now - lastActivityTime.current > 1000) { // Throttle to once per second
      lastActivityTime.current = now
      if (showScreensaver) {
        handleUserActivity()
      } else {
        resetInactivityTimer()
      }
    }
  }, [showScreensaver, handleUserActivity, resetInactivityTimer])

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']

    events.forEach(event => {
      document.addEventListener(event, throttledActivityHandler, true)
    })

    // Initialize timer on mount
    resetInactivityTimer()

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, throttledActivityHandler, true)
      })
      if (inactivityTimer) {
        clearTimeout(inactivityTimer)
      }
    }
  }, [throttledActivityHandler, resetInactivityTimer]) // Remove showScreensaver from dependencies

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
      {showScreensaver && <Screensaver onUserActivity={handleUserActivity} />}
    </div>
  )
}

export default App
