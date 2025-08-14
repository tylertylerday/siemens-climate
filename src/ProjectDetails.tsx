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

// Project Tab Images
import FfTab1 from './assets/projects/44/44-tab-1.webp'
import FfTab2 from './assets/projects/44/44-tab-2.webp'
import FfTab3 from './assets/projects/44/44-tab-3.webp'
import FfTab4 from './assets/projects/44/44-tab-4.webp'

import AdmaresTab1 from './assets/projects/admares/admares-tab-1.webp'
import AdmaresTab2 from './assets/projects/admares/admares-tab-2.webp'
import AdmaresTab3 from './assets/projects/admares/admares-tab-3.webp'
import AdmaresTab4 from './assets/projects/admares/admares-tab-4.webp'

import BlendTab1 from './assets/projects/blendhub/blend-tab-1.webp'
import BlendTab2 from './assets/projects/blendhub/blend-tab-2.webp'
import BlendTab3 from './assets/projects/blendhub/blend-tab-3.webp'
import BlendTab4 from './assets/projects/blendhub/blend-tab-4.webp'

import DesertTab1 from './assets/projects/desert/desert-tab-1.webp'
import DesertTab2 from './assets/projects/desert/desert-tab-2.webp'
import DesertTab4 from './assets/projects/desert/desert-tab-4.webp'

import DrinkTab1 from './assets/projects/drinkpak/drink-tab-1.webp'
import DrinkTab2 from './assets/projects/drinkpak/drink-tab-2.webp'
import DrinkTab3 from './assets/projects/drinkpak/drink-tab-3.webp'
import DrinkTab4 from './assets/projects/drinkpak/drink-tab-4.webp'

import JetTab1 from './assets/projects/jetzero/jetzero-tab-1.webp'

import SpinnTab1 from './assets/projects/spinnova/spinn-tab-1.webp'

import VacTab1 from './assets/projects/vacuum/vac-tab-1.webp'

import WayoutTab1 from './assets/projects/wayout/wayout-tab-1.webp'
import WayoutTab2 from './assets/projects/wayout/wayout-tab-2.webp'
import WayoutTab3 from './assets/projects/wayout/wayout-tab-3.webp'
import WayoutTab4 from './assets/projects/wayout/wayout-tab-4.webp'

import StartupTab1 from './assets/projects/Startups/startup-tab-1.webp'
import StartupTab2 from './assets/projects/Startups/startup-tab-2.webp'
import StartupTab3 from './assets/projects/Startups/startup-tab-3.webp'
import StartupTab4 from './assets/projects/Startups/startup-tab-4.webp'

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
  '/assets/projects/44/44-tab-1.webp': FfTab1,
  '/assets/projects/44/44-tab-2.webp': FfTab2,
  '/assets/projects/44/44-tab-3.webp': FfTab3,
  '/assets/projects/44/44-tab-4.webp': FfTab4,
  
  // Project 1 - Admares
  '/assets/projects/admares/admares-tab-1.webp': AdmaresTab1,
  '/assets/projects/admares/admares-tab-2.webp': AdmaresTab2,
  '/assets/projects/admares/admares-tab-3.webp': AdmaresTab3,
  '/assets/projects/admares/admares-tab-4.webp': AdmaresTab4,
  
  // Project 2 - Blendhub
  '/assets/projects/blendhub/blend-tab-1.webp': BlendTab1,
  '/assets/projects/blendhub/blend-tab-2.webp': BlendTab2,
  '/assets/projects/blendhub/blend-tab-3.webp': BlendTab3,
  '/assets/projects/blendhub/blend-tab-4.webp': BlendTab4,
  
  // Project 3 - Desert Control
  '/assets/projects/desert/desert-tab-1.webp': DesertTab1,
  '/assets/projects/desert/desert-tab-2.webp': DesertTab2,
  '/assets/projects/desert/desert-tab-4.webp': DesertTab4,
  
  // Project 4 - DrinkPAK
  '/assets/projects/drinkpak/drink-tab-1.webp': DrinkTab1,
  '/assets/projects/drinkpak/drink-tab-2.webp': DrinkTab2,
  '/assets/projects/drinkpak/drink-tab-3.webp': DrinkTab3,
  '/assets/projects/drinkpak/drink-tab-4.webp': DrinkTab4,
  
  // Project 5 - Jet Zero
  '/assets/projects/jetzero/jetzero-tab-1.webp': JetTab1,
  
  // Project 6 - Spinnova
  '/assets/projects/spinnova/spinn-tab-1.webp': SpinnTab1,
  
  // Project 7 - Vacuum
  '/assets/projects/vacuum/vac-tab-1.webp': VacTab1,
  
  // Project 8 - Wayout
  '/assets/projects/wayout/wayout-tab-1.webp': WayoutTab1,
  '/assets/projects/wayout/wayout-tab-2.webp': WayoutTab2,
  '/assets/projects/wayout/wayout-tab-3.webp': WayoutTab3,
  '/assets/projects/wayout/wayout-tab-4.webp': WayoutTab4,
  
  // Project 9 - Startups
  '/assets/projects/Startups/startup-tab-1.webp': StartupTab1,
  '/assets/projects/Startups/startup-tab-2.webp': StartupTab2,
  '/assets/projects/Startups/startup-tab-3.webp': StartupTab3,
  '/assets/projects/Startups/startup-tab-4.webp': StartupTab4,
}

interface TabContent {
  tabName: string
  image: string
  heading: string
  text: string
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
      
      // Resolve asset paths using assetMap
      const resolvedData: ProjectData = {
        ...rawData,
        heroMedia: assetMap[rawData.heroMedia] || rawData.heroMedia,
        tabs: rawData.tabs.map((tab: TabContent) => ({
          ...tab,
          image: assetMap[tab.image] || tab.image
        }))
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
              <img
                src={projectData.tabs[activeTab].image}
                alt={projectData.tabs[activeTab].heading}
                className="tab-image"
              />
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