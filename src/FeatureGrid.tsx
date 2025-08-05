import { useState, useEffect } from 'react'
import './FeatureGrid.css'
import BottomNav from './BottomNav'
import gridImage1 from './assets/gridImages/gridImage_1.webp'
// import FeatureCarousel from './FeatureCarousel'

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
  { title: '44.01', backgroundImage: gridImage1, backText: 'Driving breakthrough solutions for carbon removal' },
  { title: 'Admares', backgroundImage: gridImage1, backText: 'Driving breakthrough solutions for carbon removal' },
  { title: 'Blendhub', backgroundImage: gridImage1, backText: 'Transforming global food systems for people and planet' },
  { title: 'Desert Control', backgroundImage: gridImage1, backText: 'Enabling greener agriculture in the world’s driest regions' },
  { title: 'DrinkPAK', backgroundImage: gridImage1, backText: 'Powering the future of sustainable manufacturing' },
  { title: 'Jet Zero', backgroundImage: gridImage1, backText: 'Shaping the future of climate-conscious aviation' },
  { title: 'Spinnova', backgroundImage: gridImage1, backText: 'Revolutionizing the textile industry for a cleaner future ' },
  { title: 'Vacuumschmelze', backgroundImage: gridImage1, backText: 'Fueling the shift to electric, efficient transportation ' },
  { title: 'Wayout', backgroundImage: gridImage1, backText: 'Revolutionizing access to clean water everywhere' },
  { title: 'Siemens for Startups', backgroundImage: gridImage1, backText: 'Accelerating climate innovation around the world' }
]

function FeatureGrid({ onNavigateHome, onNavigateToProject, gridItems: overrideGridItems }: FeatureGridProps) {
  // Use override items if provided, otherwise use the customGridItems defined above
  const gridItems = overrideGridItems || customGridItems
  // const [isCarouselView, setIsCarouselView] = useState(false)
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

  // const toggleView = () => {
  //   setIsCarouselView(!isCarouselView)
  // }

  // if (isCarouselView) {
  //   return (
  //     <>
  //       <button className="carousel-toggle-button" onClick={toggleView}>
  //         Grid View
  //       </button>
  //       <FeatureCarousel
  //         onNavigateHome={onNavigateHome}
  //         onNavigateToProject={onNavigateToProject}
  //         gridItems={gridItems}
  //       />
  //     </>
  //   )
  // }

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
      {/* <button className="carousel-toggle-button" onClick={toggleView}>
        Carousel View
      </button> */}
      <div className="feature-grid">
        {renderedGridItems}
      </div>
      <BottomNav onNavigateHome={onNavigateHome} />
    </div>
  )
}

export default FeatureGrid