import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './FeatureCarousel.css'
import BottomNav from './BottomNav'
// Grid Images
import gridImage4401 from './assets/gridImages/4401.webp'
import gridImageAdmares from './assets/gridImages/admares.webp'
import gridImageBlendhub from './assets/gridImages/blendhub.webp'
import gridImageDesertControl from './assets/gridImages/desertcontrol.webp'
import gridImageDrinkPAK from './assets/gridImages/drinkpak.webp'
import gridImageJetZero from './assets/gridImages/jetzero.webp'
import gridImageSpinnova from './assets/gridImages/spinnova.webp'
import gridImageVacuum from './assets/gridImages/vacuum.webp'
import gridImageWayout from './assets/gridImages/vacuum-1.webp'
import gridImageStartups from './assets/gridImages/startups.webp'

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
  { title: '44.01', backgroundImage: gridImage4401 },
  { title: 'Admares', backgroundImage: gridImageAdmares },
  { title: 'Blendhub', backgroundImage: gridImageBlendhub },
  { title: 'Desert Control', backgroundImage: gridImageDesertControl },
  { title: 'DrinkPAK', backgroundImage: gridImageDrinkPAK },
  { title: 'Jet Zero', backgroundImage: gridImageJetZero },
  { title: 'Spinnova', backgroundImage: gridImageSpinnova },
  { title: 'Vacuumschmelze', backgroundImage: gridImageVacuum },
  { title: 'Wayout', backgroundImage: gridImageWayout },
  { title: 'Siemens for Startups', backgroundImage: gridImageStartups }
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