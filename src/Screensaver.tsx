import { useEffect } from 'react'
import screensaverVideo from './assets/screensaver.webm'
import './Screensaver.css'

interface ScreensaverProps {
  onUserActivity: () => void
}

function Screensaver({ onUserActivity }: ScreensaverProps) {
  useEffect(() => {
    const handleActivity = () => {
      onUserActivity()
    }

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
    
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true)
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true)
      })
    }
  }, [onUserActivity])

  return (
    <div className="screensaver-overlay">
      <video
        className="screensaver-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={screensaverVideo} type="video/webm" />
      </video>
    </div>
  )
}

export default Screensaver