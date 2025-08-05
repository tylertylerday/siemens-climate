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
export { default as ffHero } from './assets/heroImages/4401-header-web.webp'
export { default as Project0Overview } from './assets/dottedBackground.webp'
export { default as Project0Details } from './assets/dottedBackground.webp'
export { default as Project0Results } from './assets/dottedBackground.webp'

// Project 1 - Admares
export { default as AdmaresHero } from './assets/heroImages/admares-header-web.webp'
export { default as Project1About } from './assets/dottedBackground.webp'
export { default as Project1Process } from './assets/dottedBackground.webp'

// Project 2 - Blendhub
export { default as BlendhubHero } from './assets/heroImages/blendhub-header-web.webp'
export { default as Project2Overview } from './assets/dottedBackground.webp'
export { default as Project2Features } from './assets/dottedBackground.webp'
export { default as Project2Technology } from './assets/dottedBackground.webp'
export { default as Project2Impact } from './assets/dottedBackground.webp'

// Project 3 - Desert Control
export { default as DesertControlHero } from './assets/heroImages/desertcontrol-header-web.webp'
export { default as DesertTab1 } from './assets/projects/desert/desert-tab-1.webp'
export { default as DesertTab2 } from './assets/projects/desert/desert-tab-2.webp'
export { default as DesertTab3 } from './assets/projects/desert/desert-tab-4.webp'
export { default as DesertTab4 } from './assets/projects/desert/desert-tab-4.webp'

// Project 4 - DrinkPAK
export { default as DrinkPAKHero } from './assets/heroImages/drinkpak-header-web.webp'
export { default as Project4Mission } from './assets/dottedBackground.webp'
export { default as Project4Technology } from './assets/dottedBackground.webp'

// Project 5 - Jet Zero
export { default as JetZeroHero } from './assets/heroImages/jetzero-header-web.webp'
export { default as Project5Design } from './assets/dottedBackground.webp'
export { default as Project5Implementation } from './assets/dottedBackground.webp'
export { default as Project5Impact } from './assets/dottedBackground.webp'

// Project 6 - Spinnova
export { default as SpinnovaHero } from './assets/heroImages/spinnova-header-web.webp'
export { default as Project6Platform } from './assets/dottedBackground.webp'
export { default as Project6Solutions } from './assets/dottedBackground.webp'

// Project 7 - Vacuumschmelze
export { default as VacuumHero } from './assets/heroImages/vacuum-header-web.webp'
export { default as Project7Overview } from './assets/dottedBackground.webp'

// Project 8 - Wayout
export { default as WayoutHero } from './assets/heroImages/wayout-header-web.webp'
export { default as WayoutTab1 } from './assets/projects/wayout/wayout-tab-1.webp'
export { default as WayoutTab2 } from './assets/projects/wayout/wayout-tab-2.webp'
export { default as WayoutTab3 } from './assets/projects/wayout/wayout-tab-3.webp'
export { default as WayoutTab4 } from './assets/projects/wayout/wayout-tab-4.webp'

// Project 9 - Siemens for Startups
export { default as StartupsHero } from './assets/heroImages/startups-header-web.webp'
export { default as Project9Details } from './assets/dottedBackground.webp'
export { default as Project9Analysis } from './assets/dottedBackground.webp'
export { default as Project9Outcomes } from './assets/dottedBackground.webp'

// Import the exports to use in component
import {
  DefaultBackground,
  ffHero, AdmaresHero, BlendhubHero, DesertControlHero, DrinkPAKHero, JetZeroHero, SpinnovaHero, VacuumHero, WayoutHero, StartupsHero,
  Project0Overview, Project0Details, Project0Results,
  Project1About, Project1Process,
  Project2Overview, Project2Features, Project2Technology, Project2Impact,
  DesertTab1, DesertTab2, DesertTab3, DesertTab4,
  Project4Mission, Project4Technology,
  Project5Design, Project5Implementation, Project5Impact,
  Project6Platform, Project6Solutions,
  Project7Overview,
  WayoutTab1, WayoutTab2, WayoutTab3, WayoutTab4,
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
      // PROJECT 1 - Admares
      // -------------------------------------------------------------------------
      '1': {
        title: 'Admares',
        description: 'Admares Project Details',
        heroMedia: AdmaresHero,
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
        heroMedia: BlendhubHero,
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
      // PROJECT 3 - Desert Control
      // -------------------------------------------------------------------------
      '3': {
        title: 'Desert Control',
        description: 'Desert Control Project Information',
        heroMedia: DesertControlHero,
        tabs: [
          {
            tabName: 'Who is Desert Control',
            image: DesertTab1,
            heading: 'Who is Desert Control',
            text: 'Desert Control develops solutions to improve soil quality, increasing the ability to retain water and nutrients. By scaling their Liquid Natural Clay (LNC) production system, they create global impact by developing local communities. They have evolved from a startup organization with custom-built prototypes to a system that delivers more output at a lower cost while maintaining precision.'
          },
          {
            tabName: 'Siemens Partnership',
            image: DesertTab2,
            heading: 'Siemens Partnership',
            text: 'Through a modular design using Siemens solutions, Desert Control has been able to build an adaptive production process powered by algorithms for formulation, automation, and analytics. This approach enables efficient mass production of LNC while protecting intellectual property. Field test deployments and productive projects in the USA have refined the technology, optimizing formulations and processes for specific soils & crops.'
          },
          {
            tabName: 'Technologies to Scale',
            image: DesertTab3,
            heading: 'Siemens solutions and technologies:',
            text: '<ul><li>Adaptive production</li><li>Industrial Operations X portfolio, especially Software-defined Automation</li><li>SIMATIC AX</li><li>Industrial Edge</li><li>Virtual Runtime Solutions</li></ul>'
          },
          {
            tabName: 'Benefits',
            image: DesertTab3,
            heading: 'Benefits',
            text: '<ul><li>50% of desert restored for agricultural use</li><li>50% less water in agriculture</li><li>+30 more crop yield</li></ul>'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 4 - DrinkPAK
      // -------------------------------------------------------------------------
      '4': {
        title: 'DrinkPAK',
        description: 'DrinkPAK Project Details',
        heroMedia: DrinkPAKHero,
        tabs: [
          {
            tabName: 'Overview',
            image: Project4Mission,
            heading: 'DrinkPAK Overview',
            text: 'Detailed information about DrinkPAK goes here. This innovative packaging solution revolutionizes the beverage industry.'
          },
          {
            tabName: 'Innovation',
            image: Project4Technology,
            heading: 'Packaging Innovation',
            text: 'Explore the innovative packaging technologies that power sustainable manufacturing in the beverage industry.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 5 - Jet Zero
      // -------------------------------------------------------------------------
      '5': {
        title: 'Jet Zero',
        description: 'Jet Zero Project',
        heroMedia: JetZeroHero,
        tabs: [
          {
            tabName: 'Mission',
            image: Project5Design,
            heading: 'Jet Zero Mission',
            text: 'Detailed information about Jet Zero goes here. Learn about our mission to shape the future of climate-conscious aviation.'
          },
          {
            tabName: 'Technology',
            image: Project5Implementation,
            heading: 'Aviation Technology',
            text: 'Explore the cutting-edge technologies driving the Jet Zero initiative for sustainable aviation.'
          },
          {
            tabName: 'Impact',
            image: Project5Impact,
            heading: 'Climate Impact',
            text: 'Understand the environmental impact and climate benefits of zero-emission aviation solutions.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 6 - Spinnova
      // -------------------------------------------------------------------------
      '6': {
        title: 'Spinnova',
        description: 'Spinnova Platform',
        heroMedia: SpinnovaHero,
        tabs: [
          {
            tabName: 'Innovation',
            image: Project6Platform,
            heading: 'Textile Innovation',
            text: '<p>Spinnova is revolutionizing the textile industry with breakthrough innovations:</p><ul><li>Creates textile fibers from cellulose without harmful chemicals</li><li>Eliminates microplastics in textile production</li><li>Reduces water consumption by up to 99%</li><li>Provides carbon-neutral fiber production</li><li>Offers sustainable alternative to cotton and synthetic fibers</li></ul>'
          },
          {
            tabName: 'Technology',
            image: Project6Solutions,
            heading: 'Sustainable Technology',
            text: '<p>Spinnova\'s revolutionary manufacturing process transforms wood-based cellulose into high-quality textile fibers.</p><p>Key technological advantages:</p><ul><li>No dissolving chemicals required</li><li>Mechanical process using only water and wood cellulose</li><li>Closed-loop production system</li><li>Compatible with existing textile machinery</li><li>Scalable industrial production methods</li></ul>'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 7 - Vacuumschmelze
      // -------------------------------------------------------------------------
      '7': {
        title: 'Vacuumschmelze',
        description: 'Vacuumschmelze Project Details',
        heroMedia: VacuumHero,
        tabs: [
          {
            tabName: 'Materials',
            image: Project7Overview,
            heading: 'Advanced Materials',
            text: 'Detailed information about Vacuumschmelze goes here. Fueling the shift to electric, efficient transportation with advanced magnetic materials.'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 8 - Wayout
      // -------------------------------------------------------------------------
      '8': {
        title: 'Wayout',
        description: 'Wayout Project',
        heroMedia: WayoutHero,
        tabs: [
          {
            tabName: 'Who is Wayout?',
            image: WayoutTab1,
            heading: 'Who is Wayout',
            text: 'Wayout International, a start-up originally from Sweden, provides water production systems (POD) that can convert any source of water into safe and healthy drinking water. This sustainable solution enhances water accessibility while eliminating chemical treatments and minimizing plastic waste'
          },
          {
            tabName: 'Siemens Partnership',
            image: WayoutTab2,
            heading: 'Siemens Partnership',
            text: 'Embedded in Wayout’s philosophy is the drive to contribute to a more sustainable world. Powered by the Digital Twin, real-time monitoring and control data enable Wayout to ensure continuous improvements. They show how any company – no matter the size – can benefit from digitalization and become a sustainable Digital Enterprise.'
          },
          {
            tabName: 'Technologies to Scale',
            image: WayoutTab3,
            heading: 'Technologies to Scale',
            text: '<ul><li>Insights Hub Production Copilot</li><li>Industrial Edge</li><li>WinCC Unified</li><li>TIA Portal</li><li>HMI</li><li>S7 controllers</li><li>SiGreen</li></ul>'
          },
          {
            tabName: 'Benefits',
            image: WayoutTab4,
            heading: 'Water Technology',
            text: '<ul><li>22,000 liters of mineral water can be produced per day</li><li>16mn single use plastic bottles per year</li><li>100% self-sufficient and circular</li></ul>'
          }
        ]
      },

      // -------------------------------------------------------------------------
      // PROJECT 9 - Siemens for Startups
      // -------------------------------------------------------------------------
      '9': {
        title: 'Siemens for Startups',
        description: 'Siemens for Startups Project',
        heroMedia: StartupsHero,
        tabs: [
          {
            tabName: 'Mission',
            image: Project9Details,
            heading: 'Startup Mission',
            text: 'Detailed information about Siemens for Startups goes here. Accelerating climate innovation around the world through strategic partnerships.'
          },
          {
            tabName: 'Innovation',
            image: Project9Analysis,
            heading: 'Climate Innovation',
            text: 'Explore how Siemens for Startups accelerates breakthrough climate technologies and sustainable solutions.'
          },
          {
            tabName: 'Impact',
            image: Project9Outcomes,
            heading: 'Global Impact',
            text: 'Discover the global impact and success stories from startups partnering with Siemens for climate innovation.'
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
              <div
                className="content-paragraph"
                dangerouslySetInnerHTML={{ __html: project.tabs[activeTab].text }}
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