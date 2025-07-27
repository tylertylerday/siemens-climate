import { useState } from 'react'
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

// Project 0 - 44.01
export { default as ffHero } from './assets/projects/44/44_hero.webp'
export { default as Project0Overview } from './assets/dottedBackground.webp'
export { default as Project0Details } from './assets/dottedBackground.webp'
export { default as Project0Results } from './assets/dottedBackground.webp'

// Project 1 - Project Description  
export { default as Project1About } from './assets/dottedBackground.webp'
export { default as Project1Process } from './assets/dottedBackground.webp'

// Project 2 - Blendhub
export { default as Project2Overview } from './assets/dottedBackground.webp'
export { default as Project2Features } from './assets/dottedBackground.webp'
export { default as Project2Technology } from './assets/dottedBackground.webp'
export { default as Project2Impact } from './assets/dottedBackground.webp'

// Project 3 - DrinkPAK
export { default as DrinkPakHero } from './assets/projects/drinkpak/drinkpakVideo.webm'
export { default as Project3Overview } from './assets/projects/drinkpak/drinkpak_overview.webp'
export { default as Project3Partnership } from './assets/dottedBackground.webp'
export { default as Project3Technologies } from './assets/dottedBackground.webp'
export { default as Project3Finance } from './assets/dottedBackground.webp'

// Project 4 - Jet Zero
export { default as Project4Mission } from './assets/dottedBackground.webp'
export { default as Project4Technology } from './assets/dottedBackground.webp'

// Project 5 - Siemens Screensaver
export { default as Project5Design } from './assets/dottedBackground.webp'
export { default as Project5Implementation } from './assets/dottedBackground.webp'
export { default as Project5Impact } from './assets/dottedBackground.webp'

// Project 6 - Siemens Xcelerator
export { default as Project6Platform } from './assets/dottedBackground.webp'
export { default as Project6Solutions } from './assets/dottedBackground.webp'

// Project 7 - Example title
export { default as Project7Overview } from './assets/dottedBackground.webp'

// Project 8 - Vacuumschmelze
export { default as Project8Materials } from './assets/dottedBackground.webp'
export { default as Project8Applications } from './assets/dottedBackground.webp'

// Project 9 - Another long example
export { default as Project9Details } from './assets/dottedBackground.webp'
export { default as Project9Analysis } from './assets/dottedBackground.webp'
export { default as Project9Outcomes } from './assets/dottedBackground.webp'

// Import the exports to use in component
import {
  DefaultBackground,
  DrinkPakHero, ffHero,
  Project0Overview, Project0Details, Project0Results,
  Project1About, Project1Process,
  Project2Overview, Project2Features, Project2Technology, Project2Impact,
  Project3Overview, Project3Partnership, Project3Technologies, Project3Finance,
  Project4Mission, Project4Technology,
  Project5Design, Project5Implementation, Project5Impact,
  Project6Platform, Project6Solutions,
  Project7Overview,
  Project8Materials, Project8Applications,
  Project9Details, Project9Analysis, Project9Outcomes
} from './ProjectDetails'

interface TabContent {
  tabName: string
  image: string
  heading: string
  text: string
}


interface ProjectDetailsProps {
  projectId: string
  onNavigateHome?: () => void
  onNavigateBack?: () => void
  onNavigateToProject?: (projectId: string) => void
}

function ProjectDetails({ projectId, onNavigateHome, onNavigateBack, onNavigateToProject }: ProjectDetailsProps) {
  // =============================================================================
  // PROJECT DATA CONFIGURATION
  // =============================================================================
  const getProjectData = (id: string) => {
    const projects: { [key: string]: { title: string; description: string; heroMedia: string; isVideo?: boolean; tabs: TabContent[] } } = {
      
      // -------------------------------------------------------------------------
      // PROJECT 0 - 44.01
      // -------------------------------------------------------------------------
      '0': {
        title: '44.01',
        description: 'Project 44.01 Description',
        heroMedia: ffHero,
        tabs: [
          {
            tabName: 'Overview',
            image: Project0Overview,
            heading: 'Project Overview',
            text: 'This is the overview tab content for project 44.01. Here you can provide detailed information about the project overview, goals, and initial concepts.'
          },
          {
            tabName: 'Details',
            image: Project0Details,
            heading: 'Project Details',
            text: 'This tab contains detailed specifications, technical requirements, and implementation details for project 44.01.'
          },
          {
            tabName: 'Results',
            image: Project0Results,
            heading: 'Project Results',
            text: 'Here you can showcase the final results, outcomes, and achievements of project 44.01.'
          }
        ]
      },
      
      // -------------------------------------------------------------------------
      // PROJECT 1 - Project Description
      // -------------------------------------------------------------------------
      '1': {
        title: 'Project Description',
        description: 'Project Description Details',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'About',
            image: Project1About,
            heading: 'About This Project',
            text: 'Detailed information about the Project Description goes here. You can customize this content for each individual project.'
          },
          {
            tabName: 'Process',
            image: Project1Process,
            heading: 'Development Process',
            text: 'Learn about the development process and methodology used for this project.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 2 - Blendhub
      // -------------------------------------------------------------------------
      '2': {
        title: 'Blendhub',
        description: 'Blendhub Project Details',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Overview',
            image: Project2Overview,
            heading: 'Blendhub Overview',
            text: 'Detailed information about Blendhub goes here. Each project can have its own unique content and layout.'
          },
          {
            tabName: 'Features',
            image: Project2Features,
            heading: 'Key Features',
            text: 'Explore the key features and capabilities of the Blendhub platform.'
          },
          {
            tabName: 'Technology',
            image: Project2Technology,
            heading: 'Technology Stack',
            text: 'Learn about the technical architecture and technologies powering Blendhub.'
          },
          {
            tabName: 'Impact',
            image: Project2Impact,
            heading: 'Business Impact',
            text: 'Discover the business impact and value delivered by the Blendhub solution.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 3 - DrinkPAK
      // -------------------------------------------------------------------------
      '3': {
        title: 'DrinkPAK',
        description: 'DrinkPAK Project Information',
        heroMedia: DrinkPakHero,
        isVideo: true,
        tabs: [
          {
            tabName: 'Overview',
            image: Project3Overview,
            heading: 'DrinkPAK Overview',
            text: 'Detailed information about DrinkPAK goes here. This innovative packaging solution revolutionizes the beverage industry.'
          },
          {
            tabName: 'Partnership',
            image: Project3Partnership,
            heading: 'Innovation Focus',
            text: 'Explore the innovative aspects of DrinkPAK and how it addresses industry challenges.'
          },
          {
            tabName: 'Technologies to Scale',
            image: Project3Technologies,
            heading: 'Innovation Focus',
            text: 'Explore the innovative aspects of DrinkPAK and how it addresses industry challenges.'
          },
          {
            tabName: 'Finance Solutions to Scale',
            image: Project3Finance,
            heading: 'Innovation Focus',
            text: 'Explore the innovative aspects of DrinkPAK and how it addresses industry challenges.'
          }
        ]
      },
      
      // -------------------------------------------------------------------------
      // PROJECT 4 - Jet Zero
      // -------------------------------------------------------------------------
      '4': {
        title: 'Jet Zero',
        description: 'Jet Zero Project Details',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Mission',
            image: Project4Mission,
            heading: 'Jet Zero Mission',
            text: 'Detailed information about Jet Zero goes here. Learn about our mission to achieve carbon-neutral aviation.'
          },
          {
            tabName: 'Technology',
            image: Project4Technology,
            heading: 'Advanced Technology',
            text: 'Explore the cutting-edge technologies driving the Jet Zero initiative.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 5 - Siemens Screensaver
      // -------------------------------------------------------------------------
      '5': {
        title: 'Siemens Screensaver',
        description: 'Siemens Screensaver Project',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Design',
            image: Project5Design,
            heading: 'Design Concept',
            text: 'Detailed information about Siemens Screensaver goes here. Discover the design philosophy and visual concepts.'
          },
          {
            tabName: 'Implementation',
            image: Project5Implementation,
            heading: 'Technical Implementation',
            text: 'Learn about the technical implementation and deployment of the screensaver system.'
          },
          {
            tabName: 'Impact',
            image: Project5Impact,
            heading: 'Brand Impact',
            text: 'Understand the brand impact and user engagement metrics of the screensaver.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 6 - Siemens Xcelerator
      // -------------------------------------------------------------------------
      '6': {
        title: 'Siemens Xcelerator',
        description: 'Siemens Xcelerator Platform',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Platform',
            image: Project6Platform,
            heading: 'Xcelerator Platform',
            text: 'Detailed information about Siemens Xcelerator goes here. Explore the comprehensive digital business platform.'
          },
          {
            tabName: 'Solutions',
            image: Project6Solutions,
            heading: 'Digital Solutions',
            text: 'Discover the range of digital solutions and services available on the Xcelerator platform.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 7 - Example title
      // -------------------------------------------------------------------------
      '7': {
        title: 'Example title',
        description: 'Example Project Details',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Overview',
            image: Project7Overview,
            heading: 'Example Overview',
            text: 'Detailed information about this example project goes here. This serves as a template for new projects.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 8 - Vacuumschmelze
      // -------------------------------------------------------------------------
      '8': {
        title: 'Vacuumschmelze',
        description: 'Vacuumschmelze Project',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Materials',
            image: Project8Materials,
            heading: 'Advanced Materials',
            text: 'Detailed information about Vacuumschmelze goes here. Explore advanced magnetic materials and solutions.'
          },
          {
            tabName: 'Applications',
            image: Project8Applications,
            heading: 'Industry Applications',
            text: 'Learn about the various industry applications and use cases for Vacuumschmelze materials.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 9 - Another long example
      // -------------------------------------------------------------------------
      '9': {
        title: 'Another long example',
        description: 'Long Example Project',
        heroMedia: DefaultBackground,
        tabs: [
          {
            tabName: 'Details',
            image: Project9Details,
            heading: 'Detailed Information',
            text: 'Detailed information about this long example project goes here. This demonstrates how longer project names are handled.'
          },
          {
            tabName: 'Analysis',
            image: Project9Analysis,
            heading: 'Project Analysis',
            text: 'In-depth analysis and insights from this long example project.'
          },
          {
            tabName: 'Outcomes',
            image: Project9Outcomes,
            heading: 'Project Outcomes',
            text: 'Final outcomes and deliverables from this comprehensive project example.'
          }
        ]
      }
    }
    
    return projects[id] || { title: 'Unknown Project', description: 'Project not found', heroMedia: DefaultBackground, tabs: [{ tabName: 'Info', image: DefaultBackground, heading: 'No Information', text: 'No details available.' }] }
  }

  const project = getProjectData(projectId)
  const [activeTab, setActiveTab] = useState(0)

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

  return (
    <div className="project-details-container">
      <div className="hero-section">
        {project.isVideo ? (
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={project.heroMedia} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${project.heroMedia})` }}
          />
        )}
        <div className="hero-overlay"></div>
        <h1 className="project-title-hero">{project.title}</h1>
      </div>
      <div className="project-details-content">
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          {project.tabs.map((tab, index) => (
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
                src={project.tabs[activeTab].image} 
                alt={project.tabs[activeTab].heading}
                className="tab-image"
              />
            </div>
            <div className="content-text">
              <h3 className="content-heading">{project.tabs[activeTab].heading}</h3>
              <p className="content-paragraph">{project.tabs[activeTab].text}</p>
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