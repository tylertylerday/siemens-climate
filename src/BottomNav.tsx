import React from 'react'
import './BottomNav.css'
import homeButton from './assets/homeButton.webp'
import ArrowLeft from './assets/arrowLeft.webp'
import ArrowRight from './assets/arrowRight.webp'

interface BottomNavProps {
  onNavigateHome?: () => void
  showNavArrows?: boolean
  onPrevious?: () => void
  onNext?: () => void
  className?: string
  showHomeButton?: boolean
}

function BottomNav({
  onNavigateHome,
  showNavArrows = false,
  onPrevious,
  onNext,
  className = '',
  showHomeButton = true
}: BottomNavProps) {
  return (
    <div className={`bottom-navigation ${className}`}>
      {showNavArrows && onPrevious && (
        <div className="nav-arrow-container" onClick={onPrevious}>
          <span className="nav-arrow-text">Previous Story</span>
          <img
            src={ArrowLeft}
            alt="Previous"
            className="nav-arrow"
          />
        </div>
      )}

      {showHomeButton && (
        <img
          src={homeButton}
          alt="Home"
          className="home-button"
          onClick={onNavigateHome}
        />
      )}

      {showNavArrows && onNext && (
        <div className="nav-arrow-container" onClick={onNext}>
          <img
            src={ArrowRight}
            alt="Next"
            className="nav-arrow"
          />
          <span className="nav-arrow-text">Next Story</span>
        </div>
      )}
    </div>
  )
}

export default BottomNav