import { useState, useEffect } from 'react'
import './FeatureGrid.css'
import BottomNav from './BottomNav'
import gridImage1 from './assets/gridImages/gridImage_1.webp'
import FeatureCarousel from './FeatureCarousel'

interface GridItem {
  title: string
  backgroundImage: string
  backText: string
}

interface FeatureGridProps {
  onNavigateHome?: () => void
  onNavigateToProject?: (projectId: string) => void
  gridItems?: GridItem[]
}

// Customize your grid items here
const customGridItems: GridItem[] = [
  { title: '44.01', backgroundImage: gridImage1, backText: 'Revolutionary carbon capture technology for sustainable future.' },
  { title: 'Project Description', backgroundImage: gridImage1, backText: 'Comprehensive project overview and technical specifications.' },
  { title: 'Blendhub', backgroundImage: gridImage1, backText: 'Advanced blending solutions for industrial applications.' },
  { title: 'DrinkPAK', backgroundImage: gridImage1, backText: 'Innovative packaging technology for beverage industry.' },
  { title: 'Jet Zero', backgroundImage: gridImage1, backText: 'Net-zero aviation solutions for sustainable flight.' },
  { title: 'Siemens Screensaver', backgroundImage: gridImage1, backText: 'Interactive digital display solutions for modern workspaces.' },
  { title: 'Siemens Xcelerator', backgroundImage: gridImage1, backText: 'Digital business platform accelerating innovation.' },
  { title: 'Example title', backgroundImage: gridImage1, backText: 'Sample project demonstrating cutting-edge technology.' },
  { title: 'Vacuumschmelze', backgroundImage: gridImage1, backText: 'Advanced magnetic materials for precision applications.' },
  { title: 'Another long example', backgroundImage: gridImage1, backText: 'Extended demonstration of comprehensive project capabilities.' }
]

function FeatureGrid({ onNavigateHome, onNavigateToProject, gridItems: overrideGridItems }: FeatureGridProps) {
  // Use override items if provided, otherwise use the customGridItems defined above
  const gridItems = overrideGridItems || customGridItems
  const [isCarouselView, setIsCarouselView] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    const flipRandomCards = () => {
      // Get 3 random indices
      const availableIndices = Array.from({ length: gridItems.length }, (_, i) => i)
      const shuffled = availableIndices.sort(() => Math.random() - 0.5)
      const selectedIndices = shuffled.slice(0, 4)

      // Clear any currently flipped cards
      setFlippedCards(new Set())

      // Flip the selected cards with staggered timing
      selectedIndices.forEach((index, i) => {
        const timer = setTimeout(() => {
          setFlippedCards(prev => new Set([...prev, index]))
        }, 3000 + i * 500) // 500ms delay between each flip
        timers.push(timer)
      })

      // Flip them back after 10 seconds of being shown
      selectedIndices.forEach((index, i) => {
        const timer = setTimeout(() => {
          setFlippedCards(prev => {
            const newSet = new Set(prev)
            newSet.delete(index)
            return newSet
          })
        }, 13000 + i * 500) // Show for 10 seconds then flip back
        timers.push(timer)
      })

      // Set up next cycle to start when the last card flips back
      const lastCardFlipBackTime = 13000 + (selectedIndices.length - 1) * 500
      const nextCycleTimer = setTimeout(() => {
        flipRandomCards()
      }, lastCardFlipBackTime + 1000) // Start next cycle 1 second after last card flips back
      timers.push(nextCycleTimer)
    }

    // Start the first cycle
    flipRandomCards()

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [gridItems])

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
      className={`grid-square ${flippedCards.has(index) ? 'flipped' : ''}`}
      onClick={() => onNavigateToProject?.(index.toString())}
    >
      <div className="card-inner">
        <div
          className="card-front"
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <span className="grid-title">{item.title}</span>
        </div>
        <div className="card-back">
          <span className="card-back-text">{item.backText}</span>
        </div>
      </div>
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
      <BottomNav onNavigateHome={onNavigateHome} />
    </div>
  )
}

export default FeatureGrid