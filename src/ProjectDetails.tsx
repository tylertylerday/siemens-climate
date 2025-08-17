import { useState, useEffect } from 'react'
import './ProjectDetails.css'
import BottomNav from './BottomNav'

// =============================================================================
// ASSET IMPORTS - Replace paths with actual project assets
// =============================================================================

// Common assets
export { default as HomeButton } from './assets/homeButton.webp'
export { default as ArrowLeft } from './assets/arrowLeft.webp'
export { default as ArrowRight } from './assets/arrowRight.webp'
export { default as DefaultBackground } from './assets/dottedBackground.webp'

// Hero Images
import ffHero from './assets/heroImages/4401-header-web.webp'
import AdmaresHero from './assets/heroImages/admares-header-web.webp'
import BlendhubHero from './assets/heroImages/blendhub-header-web.webp'
import DesertControlHero from './assets/heroImages/desertcontrol-header-web.webp'
import DrinkPAKHero from './assets/heroImages/drinkpak-header-web.webp'
import JetZeroHero from './assets/heroImages/jetzero-header-web.webp'
import SpinnovaHero from './assets/heroImages/spinnova-header-web.webp'
import VacuumHero from './assets/heroImages/vacuum-header-web.webp'
import WayoutHero from './assets/heroImages/wayout-header-web.webp'
import StartupsHero from './assets/heroImages/startups-header-web.webp'

// Project 0 - 44.01 Tab Images
import FfTab1 from './assets/projects/44.01/4401-tab1.webp'
import FfTab2 from './assets/projects/44.01/4401-tab2.webp'
import FfTab3 from './assets/projects/44.01/4401-tab3.webp'
import FfTab4 from './assets/projects/44.01/4401-tab4.webp'

// Project 1 - Admares Tab Media (mix of video and images)
import AdmaresTab1Video from './assets/projects/Admares/admares-tab1.mp4'
import AdmaresTab2 from './assets/projects/Admares/admares-tab2.webp'
import AdmaresTab3 from './assets/projects/Admares/admares-tab3.webp'
import AdmaresTab4 from './assets/projects/Admares/admares-tab4.webp'

// Project 2 - Blendhub Tab Media (mix of video and images)
import BlendTab1 from './assets/projects/Blendhub/blendhub-tab1.webp'
import BlendTab2 from './assets/projects/Blendhub/blendhub-tab2.webp'
import BlendTab3Video from './assets/projects/Blendhub/blendhub-tab3.mp4'
import BlendTab4 from './assets/projects/Blendhub/blendhub-tab4.webp'

// Project 3 - Desert Control Tab Media (mix of video and images)
import DesertTab1Video from './assets/projects/Desert Controls/desert-tab1.mp4'
import DesertTab2 from './assets/projects/Desert Controls/desert-tab2.webp'
import DesertTab4Video from './assets/projects/Desert Controls/desert-tab4.mp4'

// Project 4 - DrinkPak Tab Images
import DrinkTab1 from './assets/projects/DrinkPak/drinkpak-tab1.webp'
import DrinkTab2 from './assets/projects/DrinkPak/drinkpak-tab2.webp'
import DrinkTab3 from './assets/projects/DrinkPak/drinkpak-tab3.webp'
import DrinkTab4 from './assets/projects/DrinkPak/drinkpak-tab4.webp'

// Project 5 - Jet Zero Tab Media (mix of video and images)
import JetTab1 from './assets/projects/Jet Zero/jetzero-tab1.webp'
import JetTab2Video from './assets/projects/Jet Zero/jetzero-tab2.mp4'

// Project 6 - Spinnova Tab Media (mix of video and images)
import SpinnTab1Video from './assets/projects/Spinnova/spinnova-tab1.mp4'
import SpinnTab2Video from './assets/projects/Spinnova/spinnova-tab2.mp4'
import SpinnTab3 from './assets/projects/Spinnova/spinnova-tab3.webp'
import SpinnTab4 from './assets/projects/Spinnova/spinnova-tab4.webp'

// Project 7 - Vacuumschmelze Tab Images
import VacTab1 from './assets/projects/Vacuumschmelze/vacuum-tab1.webp'
import VacTab3 from './assets/projects/Vacuumschmelze/vacuum-tab3.webp'
import VacTab4 from './assets/projects/Vacuumschmelze/vacuum-tab4.webp'

// Project 8 - Wayout International Tab Media (mix of video and images)
import WayoutTab1Video from './assets/projects/Wayout International/wayout-tab1.mp4'
import WayoutTab2 from './assets/projects/Wayout International/wayout-tab2.webp'
import WayoutTab3 from './assets/projects/Wayout International/wayout-tab3.webp'
import WayoutTab4 from './assets/projects/Wayout International/wayout-tab4.webp'

// Project 9 - Siemens Xcelerator for Startups Tab Media (mix of video and images)
import StartupTab1Video from './assets/projects/Siemens Xcelerator for Startups/startup-tab1.mp4'
import StartupTab2Video from './assets/projects/Siemens Xcelerator for Startups/startup-tab2.mp4'
import StartupTab3Video from './assets/projects/Siemens Xcelerator for Startups/startup-tab3.mp4'
import StartupTab4 from './assets/projects/Siemens Xcelerator for Startups/startup-tab4.webp'

// QR Code placeholder
import QRPlaceholder from './assets/qr-placeholder.svg'

// Import the exports to use in component
import { DefaultBackground } from './ProjectDetails'

// Asset mapping for resolving JSON paths to imported assets
const assetMap: { [key: string]: string } = {
  // Hero images
  '/assets/heroImages/4401-header-web.webp': ffHero,
  '/assets/heroImages/admares-header-web.webp': AdmaresHero,
  '/assets/heroImages/blendhub-header-web.webp': BlendhubHero,
  '/assets/heroImages/desertcontrol-header-web.webp': DesertControlHero,
  '/assets/heroImages/drinkpak-header-web.webp': DrinkPAKHero,
  '/assets/heroImages/jetzero-header-web.webp': JetZeroHero,
  '/assets/heroImages/spinnova-header-web.webp': SpinnovaHero,
  '/assets/heroImages/vacuum-header-web.webp': VacuumHero,
  '/assets/heroImages/wayout-header-web.webp': WayoutHero,
  '/assets/heroImages/startups-header-web.webp': StartupsHero,
  
  // Project 0 - 44.01
  '/assets/projects/44.01/4401-tab1.webp': FfTab1,
  '/assets/projects/44.01/4401-tab2.webp': FfTab2,
  '/assets/projects/44.01/4401-tab3.webp': FfTab3,
  '/assets/projects/44.01/4401-tab4.webp': FfTab4,
  
  // Project 1 - Admares
  '/assets/projects/Admares/admares-tab1.mp4': AdmaresTab1Video,
  '/assets/projects/Admares/admares-tab2.webp': AdmaresTab2,
  '/assets/projects/Admares/admares-tab3.webp': AdmaresTab3,
  '/assets/projects/Admares/admares-tab4.webp': AdmaresTab4,
  
  // Project 2 - Blendhub
  '/assets/projects/Blendhub/blendhub-tab1.webp': BlendTab1,
  '/assets/projects/Blendhub/blendhub-tab2.webp': BlendTab2,
  '/assets/projects/Blendhub/blendhub-tab3.mp4': BlendTab3Video,
  '/assets/projects/Blendhub/blendhub-tab4.webp': BlendTab4,
  
  // Project 3 - Desert Control
  '/assets/projects/Desert Controls/desert-tab1.mp4': DesertTab1Video,
  '/assets/projects/Desert Controls/desert-tab2.webp': DesertTab2,
  '/assets/projects/Desert Controls/desert-tab4.mp4': DesertTab4Video,
  
  // Project 4 - DrinkPak
  '/assets/projects/DrinkPak/drinkpak-tab1.webp': DrinkTab1,
  '/assets/projects/DrinkPak/drinkpak-tab2.webp': DrinkTab2,
  '/assets/projects/DrinkPak/drinkpak-tab3.webp': DrinkTab3,
  '/assets/projects/DrinkPak/drinkpak-tab4.webp': DrinkTab4,
  
  // Project 5 - Jet Zero
  '/assets/projects/Jet Zero/jetzero-tab1.webp': JetTab1,
  '/assets/projects/Jet Zero/jetzero-tab2.mp4': JetTab2Video,
  
  // Project 6 - Spinnova
  '/assets/projects/Spinnova/spinnova-tab1.mp4': SpinnTab1Video,
  '/assets/projects/Spinnova/spinnova-tab2.mp4': SpinnTab2Video,
  '/assets/projects/Spinnova/spinnova-tab3.webp': SpinnTab3,
  '/assets/projects/Spinnova/spinnova-tab4.webp': SpinnTab4,
  
  // Project 7 - Vacuumschmelze
  '/assets/projects/Vacuumschmelze/vacuum-tab1.webp': VacTab1,
  '/assets/projects/Vacuumschmelze/vacuum-tab3.webp': VacTab3,
  '/assets/projects/Vacuumschmelze/vacuum-tab4.webp': VacTab4,
  
  // Project 8 - Wayout International
  '/assets/projects/Wayout International/wayout-tab1.mp4': WayoutTab1Video,
  '/assets/projects/Wayout International/wayout-tab2.webp': WayoutTab2,
  '/assets/projects/Wayout International/wayout-tab3.webp': WayoutTab3,
  '/assets/projects/Wayout International/wayout-tab4.webp': WayoutTab4,
  
  // Project 9 - Siemens Xcelerator for Startups
  '/assets/projects/Siemens Xcelerator for Startups/startup-tab1.mp4': StartupTab1Video,
  '/assets/projects/Siemens Xcelerator for Startups/startup-tab2.mp4': StartupTab2Video,
  '/assets/projects/Siemens Xcelerator for Startups/startup-tab3.mp4': StartupTab3Video,
  '/assets/projects/Siemens Xcelerator for Startups/startup-tab4.webp': StartupTab4,

  // QR Code placeholder
  '/assets/qr-placeholder.svg': QRPlaceholder,
}

interface TabContent {
  tabName: string
  image: string
  heading: string
  text: string
  isVideo?: boolean
  qrCode?: string
}

interface ProjectData {
  projectId: string
  title: string
  description: string
  heroMedia: string
  isVideo?: boolean
  tabs: TabContent[]
}

interface ProjectDetailsProps {
  projectId: string
  onNavigateHome?: () => void
  onNavigateBack?: () => void
  onNavigateToProject?: (projectId: string) => void
}

function ProjectDetails({ projectId, onNavigateHome, onNavigateToProject }: ProjectDetailsProps) {
  const [projectData, setProjectData] = useState<ProjectData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  // Load project data from JSON file
  const loadProjectData = async (id: string): Promise<ProjectData> => {
    try {
      // Dynamic import of JSON files
      const module = await import(`./projects/project-${id}.json`)
      const rawData = module.default
      
      // Helper function to determine if a file is a video based on extension
      const isVideoFile = (path: string): boolean => {
        const videoExtensions = ['.mp4', '.webm', '.mov']
        return videoExtensions.some(ext => path.toLowerCase().includes(ext))
      }
      
      // Resolve asset paths using assetMap
      const resolvedData: ProjectData = {
        ...rawData,
        heroMedia: assetMap[rawData.heroMedia] || rawData.heroMedia,
        tabs: rawData.tabs.map((tab: TabContent) => {
          const resolvedImagePath = assetMap[tab.image] || tab.image
          const resolvedQRPath = tab.qrCode ? (assetMap[tab.qrCode] || tab.qrCode) : undefined
          return {
            ...tab,
            image: resolvedImagePath,
            isVideo: isVideoFile(tab.image),
            qrCode: resolvedQRPath
          }
        })
      }
      
      return resolvedData
    } catch (err) {
      console.error('Error loading project data:', err)
      throw err
    }
  }

  // Load project data when projectId changes
  useEffect(() => {
    const fetchProjectData = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await loadProjectData(projectId)
        setProjectData(data)
      } catch (err) {
        setError(`Failed to load project ${projectId}`)
        // Fallback to default project data
        setProjectData({
          projectId: projectId,
          title: 'Unknown Project',
          description: 'Project not found',
          heroMedia: DefaultBackground,
          tabs: [{
            tabName: 'Info',
            image: DefaultBackground,
            heading: 'No Information',
            text: 'No details available.'
          }]
        })
      } finally {
        setLoading(false)
      }
    }

    fetchProjectData()
  }, [projectId])

  // Reset active tab to 0 when projectId changes
  useEffect(() => {
    setActiveTab(0)
  }, [projectId])

  // Navigation functions for cycling through projects
  const currentProjectIndex = parseInt(projectId)
  const totalProjects = 10 // We have projects 0-9

  const handlePreviousProject = () => {
    const prevIndex = currentProjectIndex === 0 ? totalProjects - 1 : currentProjectIndex - 1
    onNavigateToProject?.(prevIndex.toString())
  }

  const handleNextProject = () => {
    const nextIndex = currentProjectIndex === totalProjects - 1 ? 0 : currentProjectIndex + 1
    onNavigateToProject?.(nextIndex.toString())
  }

  if (loading) {
    return (
      <div className="project-details-container">
        <div className="loading-message">Loading project data...</div>
        <BottomNav
          onNavigateHome={onNavigateHome}
          showNavArrows={true}
          onPrevious={handlePreviousProject}
          onNext={handleNextProject}
        />
      </div>
    )
  }

  if (error || !projectData) {
    return (
      <div className="project-details-container">
        <div className="error-message">{error || 'Project not found'}</div>
        <BottomNav
          onNavigateHome={onNavigateHome}
          showNavArrows={true}
          onPrevious={handlePreviousProject}
          onNext={handleNextProject}
        />
      </div>
    )
  }

  return (
    <div className="project-details-container">
      <div className="hero-section">
        {projectData.isVideo ? (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={projectData.heroMedia} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${projectData.heroMedia})` }}
          />
        )}
        <div className="hero-overlay"></div>
        <h1 className="project-title-hero">{projectData.title}</h1>
      </div>
      <div className="project-details-content">

        {/* Tab Navigation */}
        <div className="tab-navigation">
          {projectData.tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          <div className="content-columns">
            <div className="content-image">
              {projectData.tabs[activeTab].isVideo ? (
                <video
                  key={`video-${projectData.projectId}-${activeTab}-${projectData.tabs[activeTab].image}`}
                  className="tab-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={projectData.tabs[activeTab].image} type="video/mp4" />
                  <source src={projectData.tabs[activeTab].image} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={projectData.tabs[activeTab].image}
                  alt={projectData.tabs[activeTab].heading}
                  className="tab-image"
                />
              )}
            </div>
            <div className="content-text">
              <h3 className="content-heading">{projectData.tabs[activeTab].heading}</h3>
              <div
                className="content-paragraph"
                dangerouslySetInnerHTML={{ __html: projectData.tabs[activeTab].text }}
              />
            </div>
          </div>
        </div>
        {/* QR Code Display */}
        {projectData.tabs[activeTab].qrCode && (
          <div className="qr-code-container">
            <img
              src={projectData.tabs[activeTab].qrCode}
              alt="QR Code"
              className="qr-code"
            />
          </div>
        )}
      </div>
      <BottomNav
        onNavigateHome={onNavigateHome}
        showNavArrows={true}
        onPrevious={handlePreviousProject}
        onNext={handleNextProject}
      />
    </div>
  )
}

export default ProjectDetails