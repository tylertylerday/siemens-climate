import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './FeatureCarousel.css'
import BottomNav from './BottomNav'
import gridImage1 from './assets/gridImages/gridImage_1.webp'

interface GridItem {
  title: string
  backgroundImage: string
}

interface FeatureCarouselProps {
  onNavigateHome?: () => void
  onNavigateToProject?: (projectId: string) => void
  gridItems?: GridItem[]
}

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

function FeatureCarousel({ onNavigateHome, onNavigateToProject, gridItems: overrideGridItems }: FeatureCarouselProps) {
  const gridItems = overrideGridItems || customGridItems

  const renderedSlides = gridItems.map((item, index) => (
    <SwiperSlide
      key={index}
      className="carousel-slide"
      style={{ backgroundImage: `url(${item.backgroundImage})` }}
      onClick={() => onNavigateToProject?.(index.toString())}
    >
      <span className="carousel-title">{item.title}</span>
    </SwiperSlide>
  ))

  return (
    <div className="feature-carousel-container">
      <div className="carousel-with-controls">
        <button className="carousel-prev" aria-label="Previous slide">
          <svg className="arrowIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={5}
            navigation={{
              prevEl: '.carousel-prev',
              nextEl: '.carousel-next',
            }}
            autoplay={{
              delay: 4000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            loop={false}
            className="feature-swiper"
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            {renderedSlides}
          </Swiper>
        </div>

        <button className="carousel-next" aria-label="Next slide">
          <svg className="arrowIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <BottomNav onNavigateHome={onNavigateHome} />
    </div>
  )
}

export default FeatureCarousel