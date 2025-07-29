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
}

function BottomNav({
  onNavigateHome,
  showNavArrows = false,
  onPrevious,
  onNext,
  className = ''
}: BottomNavProps) {
  return (
    <div className={`bottom-navigation ${className}`}>
      {showNavArrows && onPrevious && (
        <img
          src={ArrowLeft}
          alt="Previous"
          className="nav-arrow"
          onClick={onPrevious}
        />
      )}

      <img
        src={homeButton}
        alt="Home"
        className="home-button animate__animated animate__fadeInUp"
        onClick={onNavigateHome}
      />

      {showNavArrows && onNext && (
        <img
          src={ArrowRight}
          alt="Next"
          className="nav-arrow"
          onClick={onNext}
        />
      )}
    </div>
  )
}

export default BottomNav