import React, { useState } from 'react'
import './FeatureGrid.css'
import homeButton from './assets/homeButton.webp'
import gridImage1 from './assets/gridImages/gridImage_1.webp'
import FeatureCarousel from './FeatureCarousel'

interface GridItem {
  title: string
  backgroundImage: string
}

interface FeatureGridProps {
  onNavigateHome?: () => void
  onNavigateToProject?: (projectId: string) => void
  gridItems?: GridItem[]
}

// Customize your grid items here
const customGridItems: GridItem[] = [
  { title: '44.01', backgroundImage: gridImage1 },
  { title: 'Project Description', backgroundImage: gridImage1 },
  { title: 'Blendhub', backgroundImage: gridImage1 },
  { title: 'DrinkPAK', backgroundImage: gridImage1 },
  { title: 'Jet Zero', backgroundImage: gridImage1 },
  { title: 'Siemens Screensaver', backgroundImage: gridImage1 },
  { title: 'Siemens Xcelerator', backgroundImage: gridImage1 },
  { title: 'Example title', backgroundImage: gridImage1 },
  { title: 'Vacuumschmelze', backgroundImage: gridImage1 },
  { title: 'Another long example', backgroundImage: gridImage1 }
]

function FeatureGrid({ onNavigateHome, onNavigateToProject, gridItems: overrideGridItems }: FeatureGridProps) {
  // Use override items if provided, otherwise use the customGridItems defined above
  const gridItems = overrideGridItems || customGridItems
  const [isCarouselView, setIsCarouselView] = useState(false)

  const toggleView = () => {
    setIsCarouselView(!isCarouselView)
  }

  if (isCarouselView) {
    return (
      <>
        <button className="carousel-toggle-button" onClick={toggleView}>
          Grid View
        </button>
        <FeatureCarousel 
          onNavigateHome={onNavigateHome}
          onNavigateToProject={onNavigateToProject}
          gridItems={gridItems}
        />
      </>
    )
  }

  const renderedGridItems = gridItems.map((item, index) => (
    <div 
      key={index} 
      className="grid-square"
      style={{ backgroundImage: `url(${item.backgroundImage})` }}
      onClick={() => onNavigateToProject?.(index.toString())}
    >
      <span className="grid-title">{item.title}</span>
    </div>
  ))

  return (
    <div className="feature-grid-container">
      <button className="carousel-toggle-button" onClick={toggleView}>
        Carousel View
      </button>
      <div className="feature-grid">
        {renderedGridItems}
      </div>
      <img 
        src={homeButton} 
        alt="Home" 
        className="grid-home-button" 
        onClick={onNavigateHome}
      />
    </div>
  )
}

export default FeatureGrid