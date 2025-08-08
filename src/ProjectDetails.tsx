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

// Project 0 - 44.01
export { default as ffHero } from './assets/heroImages/4401-header-web.webp'
export { default as FfTab1 } from './assets/projects/44/44-tab-1.webp'
export { default as FfTab2 } from './assets/projects/44/44-tab-2.webp'
export { default as FfTab3 } from './assets/projects/44/44-tab-3.webp'
export { default as FfTab4 } from './assets/projects/44/44-tab-4.webp'

// Project 1 - Admares
export { default as AdmaresHero } from './assets/heroImages/admares-header-web.webp'
export { default as AdmaresTab1 } from './assets/projects/admares/admares-tab-1.webp'
export { default as AdmaresTab2 } from './assets/projects/admares/admares-tab-2.webp'
export { default as AdmaresTab3 } from './assets/projects/admares/admares-tab-3.webp'
export { default as AdmaresTab4 } from './assets/projects/admares/admares-tab-4.webp'


// Project 2 - Blendhub
export { default as BlendhubHero } from './assets/heroImages/blendhub-header-web.webp'
export { default as BlendTab1 } from './assets/projects/blendhub/blend-tab-1.webp'
export { default as BlendTab2 } from './assets/projects/blendhub/blend-tab-2.webp'
export { default as BlendTab3 } from './assets/projects/blendhub/blend-tab-3.webp'
export { default as BlendTab4 } from './assets/projects/blendhub/blend-tab-4.webp'

// Project 3 - Desert Control
export { default as DesertControlHero } from './assets/heroImages/desertcontrol-header-web.webp'
export { default as DesertTab1 } from './assets/projects/desert/desert-tab-1.webp'
export { default as DesertTab2 } from './assets/projects/desert/desert-tab-2.webp'
export { default as DesertTab3 } from './assets/projects/desert/desert-tab-4.webp'
export { default as DesertTab4 } from './assets/projects/desert/desert-tab-4.webp'

// Project 4 - DrinkPAK
export { default as DrinkPAKHero } from './assets/heroImages/drinkpak-header-web.webp'
export { default as DrinkTab1 } from './assets/projects/drinkpak/drink-tab-1.webp'
export { default as DrinkTab2 } from './assets/projects/drinkpak/drink-tab-2.webp'
export { default as DrinkTab3 } from './assets/projects/drinkpak/drink-tab-3.webp'
export { default as DrinkTab4 } from './assets/projects/drinkpak/drink-tab-4.webp'

// Project 5 - Jet Zero
export { default as JetZeroHero } from './assets/heroImages/jetzero-header-web.webp'
export { default as JetTab1 } from './assets/projects/jetzero/jetzero-tab-1.webp'
export { default as JetTab2 } from './assets/projects/jetzero/jetzero-tab-1.webp'
export { default as JetTab3 } from './assets/projects/jetzero/jetzero-tab-1.webp'
export { default as JetTab4 } from './assets/projects/jetzero/jetzero-tab-1.webp'

// Project 6 - Spinnova
export { default as SpinnovaHero } from './assets/heroImages/spinnova-header-web.webp'
export { default as SpinnTab1 } from './assets/projects/spinnova/spinn-tab-1.webp'
export { default as SpinnTab2 } from './assets/projects/spinnova/spinn-tab-1.webp'
export { default as SpinnTab3 } from './assets/projects/spinnova/spinn-tab-1.webp'
export { default as SpinnTab4 } from './assets/projects/spinnova/spinn-tab-1.webp'

// Project 7 - Vacuumschmelze
export { default as VacuumHero } from './assets/heroImages/vacuum-header-web.webp'
export { default as VacTab1 } from './assets/projects/vacuum/vac-tab-1.webp'

// Project 8 - Wayout
export { default as WayoutHero } from './assets/heroImages/wayout-header-web.webp'
export { default as WayoutTab1 } from './assets/projects/wayout/wayout-tab-1.webp'
export { default as WayoutTab2 } from './assets/projects/wayout/wayout-tab-2.webp'
export { default as WayoutTab3 } from './assets/projects/wayout/wayout-tab-3.webp'
export { default as WayoutTab4 } from './assets/projects/wayout/wayout-tab-4.webp'

// Project 9 - Siemens for Startups
export { default as StartupsHero } from './assets/heroImages/startups-header-web.webp'
export { default as StartupTab1 } from './assets/projects/Startups/startup-tab-1.webp'
export { default as StartupTab2 } from './assets/projects/Startups/startup-tab-2.webp'
export { default as StartupTab3 } from './assets/projects/Startups/startup-tab-3.webp'
export { default as StartupTab4 } from './assets/projects/Startups/startup-tab-4.webp'


// Import the exports to use in component
import {
  DefaultBackground,
  ffHero, AdmaresHero, BlendhubHero, DesertControlHero, DrinkPAKHero, JetZeroHero, SpinnovaHero, VacuumHero, WayoutHero, StartupsHero,
  FfTab1, FfTab2, FfTab3, FfTab4,
  AdmaresTab1, AdmaresTab2, AdmaresTab3, AdmaresTab4,
  BlendTab1, BlendTab2, BlendTab3, BlendTab4,
  DesertTab1, DesertTab2, DesertTab3, DesertTab4,
  DrinkTab1, DrinkTab2, DrinkTab3, DrinkTab4,
  JetTab1, JetTab2, JetTab3, JetTab4,
  SpinnTab1, SpinnTab2, SpinnTab3, SpinnTab4,
  VacTab1,
  WayoutTab1, WayoutTab2, WayoutTab3, WayoutTab4,
  StartupTab1, StartupTab2, StartupTab3, StartupTab4,
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
            tabName: 'What is 44.01',
            image: FfTab1,
            heading: 'What is 44.01',
            text: 'Safe, scalable & permanent carbon removal. 44.01 eliminates CO2 by turning it into rock. The company\’s pioneering technology accelerates the natural process of CO2 mineralization to remove captured CO2 permanently in less than twelve months. 44.01 takes CO2 captured directly from the air, or from hard-to-abate industrial processes, helping decarbonize vital industries and ultimately return the atmosphere to sustainable levels of CO2.'
          },
          {
            tabName: 'Siemens Partnership',
            image: FfTab2,
            heading: 'Siemens Partnership',
            text: 'Siemens Financial Services (SFS) is a strategic investor in 44.01 to support the scaling of the early-stage technology and business. SFS is actively collaborating with 44.01 to find opportunities to leverage Siemens’ experienced ecosystem, including our technologies and our global network.'
          },
          {
            tabName: 'Technologies to Scale',
            image: FfTab3,
            heading: 'Technologies to Scale',
            text: '<ul><li>Industrial AI</li><li>DI Instrumentation solutions</li></ul>'
          },
          {
            tabName: 'Finance Solutions to Scale',
            image: FfTab4,
            heading: 'Financial Investment',
            text: 'Investing in innovative carbon capture technologies such as carbon mineralization underscores SFS’s commitment to decarbonization and gives Siemens potential access to removal certificates in the future.'
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
            tabName: 'Who is Admares',
            image: AdmaresTab1,
            heading: 'About This Project',
            text: 'Admares is redefining homebuilding by introducing the worlds first fully digitalized, industrialized, and productized approach to construction. Their automated and robotized manufacturing processes enable entire buildings to be mass-produced in a factory with unparalleled speed, precision, and quality. Their buildings are designed to be operating with minimal carbon emissions and are equipped with sensors allowing them to monitor and perform analytics.'
          },
          {
            tabName: 'Siemens Partnership',
            image: AdmaresTab2,
            heading: 'Siemens Partnership',
            text: '<p>With consulting and technology partners like MHP, EDAG and Siemens, Admares has found the right ecosystem to realize their vision of the smart factory for construction.</p> <p>With Siemens Xcelerator technologies for home design, factory planning, production operations as well as operating the smart home once they are built, Siemens is making ADMARES’ vision a reality.</p>'
          },
          {
            tabName: 'Technologies to Scale',
            image: AdmaresTab3,
            heading: 'Technologies to Scale',
            text: '<ul><li>Insights Hub Production Copilot</li><li>Industrial Edge</li><li>WinCC Unified</li><li>TIA Portal</li><li>HMI</li><li>S7 controllers</li><li>SiGreen</li></ul>'
          },
          {
            tabName: 'Benefits',
            image: AdmaresTab4,
            heading: 'Benefits',
            text: '<ul><li>80% less material waste</li><li>75% less CO2 emissions</li><li>Majority of materials recyclable</li><li>Minimal environmental disruption on site</li><li>No traditional construction site</li></ul>'
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
            tabName: 'Food production close to the crop',
            image: BlendTab1,
            heading: 'Food production close to the crop',
            text: '<p>Who says food production must be centralized? Blendhub is revolutionizing access to nutrition with portable production hubs. These compact, plug & play food and beverage factories are delivered in 40-foot containers and can be deployed in strategic locations or underserved areas.</p><p>With Blendhub it is possible to safely produce powders from locally available foodstuffs for local markets, thereby empowering communities to capture more value from their harvests. The solution actively contributes to a circular economy and fosters long-term economic stability.</p>'
          },
          {
            tabName: 'Advantages through proven technology',
            image: BlendTab2,
            heading: 'Advantages through proven technology',
            text: 'Blendhub has employed a Food as a Service model, which includes everything – from deployment of the hub to hiring the staff and all operations and maintenance activities. At the heart of Blendhub are solutions from Siemens – like Totally Integrated Automation (TIA), Opcenter RD&L, and Teamcenter X – which together help ensure accuracy, consistency, and safety in a unique global replication model.'
          },
          {
            tabName: 'Scaling Sustainable Impact in Food and Beverage',
            image: BlendTab3,
            heading: 'Scaling Sustainable Impact in Food and Beverage',
            text: '<p>Tap new optimization potential in buildings and production facilities as well as in power supply in the food and beverage industry. From research and development to automation, logistics, power supply, and building management, we help you produce high-quality food while also boosting your productivity and sustainability.</p><p>The key is becoming a Digital Enterprise, which can be done at speed and scale with Siemens Xcelerator. This is facilitated by linked and traceable sequences of specific business workflows in the product and production lifecycle that are digitalized and automated, known as Digital Threads.</p>'
          },
          {
            tabName: 'Making a difference',
            image: BlendTab4,
            heading: 'Making a difference',
            text: 'From its beginnings in 2010, the partnership with Siemens has allowed Blendhub to scale up its concept. Today there are hubs in 6 countries with over 2,000 recipes available. What has made people at Blendhub proudest is the impact their solution is having on empowering local youth and underserved communities through nutrition projects.'
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
            tabName: 'Who is DrinkPAK',
            image: DrinkTab1,
            heading: 'Who is DrinkPAK',
            text: 'As the most technologically advanced contract manufacturer of canned beverages in the world, DrinkPAK batches, fills, tests, warehouses, and distributes drinks for global brands like Lucky Energy, Poppi, Arizona Iced Tea, and Monster Energy. In 2020, DrinkPAK opened its first production and warehousing facility — a 1.4 million square foot space in California — and has since expanded with the construction of its second location in Texas, set to open in 2025, with a third facility expected to launch in late 2026.'
          },
          {
            tabName: 'Partnership with Siemens',
            image: DrinkTab2,
            heading: 'Siemens Partnership',
            text: 'As DrinkPAK expanded its operations with new facilities, they needed state-of-the-art equipment and technology to ensure best-in-class production and warehousing automation. Siemens Financial Services (SFS) supported this growth by providing a $13.2 million leasing solution and worked closely with DrinkPAK’s supplier, E80 Group — a global leader in automated intralogistics solutions for the manufacturing and distribution of consumer goods — to integrate Siemens components into the project.'
          },
          {
            tabName: 'Technologies to Scale',
            image: DrinkTab3,
            heading: 'Siemens solutions and technologies:',
            text: '<ul><li>Industrial Automation and Intralogistics</li><li>Process Controls</li><li>Power Generation and Energy Efficient Operation</li><li>Data-Driven Insights</li></ul>'
          },
          {
            tabName: 'Benefits',
            image: DrinkTab4,
            heading: 'Benefits',
            text: 'A $13.2 million leasing solution, DrinkPAK was able to invest in state-of-the-art equipment and automation technology without tying up critical capital — enabling them to scale production capacity while preserving cash flow for further growth.'
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
            tabName: 'Who is Jet Zero',
            image: JetTab1,
            heading: 'Who is Jet Zero',
            text: 'JetZero is an innovative aerospace company focused on revolutionizing air travel by developing cutting-edge aircraft technology that prioritizes efficiency, sustainability and the entire passenger experience. Founded with the mission to address the challenges of modern aviation, JetZero combines advanced engineering with visionary thinking to create solutions that are both practical and groundbreaking. The company\'s commitment to reducing the environmental impact of air travel while enhancing the overall flying experience has positioned it as a leader in the aerospace industry.'
          },
          {
            tabName: 'Siemens Partnership',
            image: JetTab2,
            heading: 'Siemens Partnership',
            text: 'Through extensive collaboration with industry partners like Siemens to leverage advanced technologies, the Z4 evolved from a visionary idea to a tangible reality. The journey of the Z4 has been marked by rigorous design innovation, simulation, testing and a steadfast dedication to excellence. Key development milestones included the successful completion of critical design reviews, prototype testing and successful negotiation of a site acquisition with the state of North Carolina at the PTI International Airport in Greensboro NC. The aircraft\'s design incorporates state-of-the-art materials and aerodynamics, resulting in a sleek and ultra-efficient structure that promises to set new benchmarks in the aviation sector.'
          },
          {
            tabName: 'Technologies to Scale',
            image: JetTab3,
            heading: 'Siemens solutions and technologies:',
            text: '<p>JetZero has identified Siemens\' solutions as critical factors in achieving its goals. These include:</p><ul><li>Siemens Xcelerator open digital business platform: As part of the collaboration, Siemens will provide software solutions to support Jet Zero’s advanced manufacturing processes. Siemens\' capabilities in digital design and simulation will be instrumental in the development and certification of the Z4 aircraft platform.</li><li>Smart Infrastructure: Siemens will support the planning and construction of JetZero\'s future Smart Factory. The Greensboro facility will leverage Siemens\' SI solutions including our Low and Medium Voltage equipment for electrification, along with our Building Technologies solutions for environmental control, fire and safety.</li><li>Siemens\' automation hardware will play a crucial role in ensuring the seamless operation of the Smart Factory, enhancing productivity and reducing potential risks. Siemens will engage with JetZero and their system integrators and machine/line builders to drive smart manufacturing capabilities throughout the product lifecycle.</li><li>Industrial Metaverse: The collaboration will highlight the use of the Industrial Metaverse showcasing the journey to build the factory of the future</li></ul>'
          },
          {
            tabName: 'Benefits',
            image: JetTab4,
            heading: 'Benefits',
            text: 'The Siemens Xcelerator portfolio will enable accelerated design, adaptable manufacturing and digital testing and validation, shaving years off development time while maintaining high quality and safety standards. The Z4 aircraft promises up to 50 percent better fuel efficiency and an elevated passenger experience, addressing growing demand for air travel while contributing to the aviation industry\'s decarbonization goals by 2050.'
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
            tabName: 'Who is Spinnova',
            image: SpinnTab1,
            heading: 'Solving sustainability challenges in the global textile industry',
            text: '<p>The fashion industry consumes billions of liters of water and is estimated to generate more than 90 million tons of water annually.</p><p>Spinnova’s technology enables customers – raw material producers, fiber producers, and textile industry players – to produce textile fiber from a variety of cellulosic raw materals through a mechanical process that mimics how spiders weave their webs. This unique process results in fibers that look and feel similar to natural fibers such as cotton and linen.</p><p>Multiple global clothing brands such as H&M, Bestseller and Adidas have used SPINNOVA® fibers in their collections.</p>'
          },
          {
            tabName: 'Siemens Partnership',
            image: SpinnTab1,
            heading: 'Building a success story based on true partnership at eye leve',
            text: '<p>The main challenge to producing their fiber on an industrial scale was the lack of existing technology. Working with Siemens, from the pilot to an industrial demonstration factory, helped overcome the technology hurdles and scale up production faster.</p><p>Spinnova uses automation hardware, instrumentation, drives and motors, as well as simulation software, engineering software and Manufacturing Operations Management (MOM) solutions from Siemens. The OT network was developed in collaboration and is protected by the holistic cybersecurity concept from Siemens to secure production and IP. In addition, Siemens helped orchestrate more than 50 companies, including 10 technology providers, in the construction of the Woodspin factory.</p>'
          },
          {
            tabName: 'Technologies to Scale',
            image: SpinnTab1,
            heading: 'Turning wood pulp into fibers with a digital-first approach',
            text: '<p>With a digital-first mindset, the Spinnova combines the real and digital worlds with software and a harmonized automation system from the Siemens Xcelerator portfolio to design, realize and optimize its product and production processes.</p><p>Data is key, and Siemens technology such as Industrial Edge enables Spinnova to converge IT and OT data to track KPIs like energy consumption in near real-time and make them transparent to customers and partners. At the Woodspin factory, a joint venture with Brazilian pulp producer Suzano, Spinnova demonstrates its technology on an industrial scale.</p>'
          },
          {
            tabName: 'Benefits',
            image: SpinnTab1,
            heading: 'Faster ramp-up from piloting to commercial production',
            text: '<ul><li>Global scalability: With the help of Siemens global network, know-how and technology, Spinnova is ready to fundamentally change the textile industry.</li><li>Faster time to market: The factory is simulated using a Digital Twins to simulate “what if” scenarios, optimizations and bottlenecks to shorten factory comissioning time.</li><li>Consistent quality: Using Digital Twins of the product to research, design, optimize and align final product formulations ensures consistent quality from raw material to finished fiber.</li><li>Increase machine up-time and minimize errors: Data-driven decisions from the convergence of IT and OT allows Spinnova to optimize energy efficiency and minimize prodution errors.</li></ul>'
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
            tabName: 'Who is Vacuumschmelze',
            image: VacTab1,
            heading: 'Who is Vacuumschmelze',
            text: 'Advancing growth and reducing carbon in advanced magnetic technologies. Vacuumschmelze is a leading manufacturer of advanced magnetic solutions for a wide variety of industries, generating best in class efficient solutions in an environmentally conscious manner. Founded in 1923 and headquartered in Germany, VAC serves critical industries including e-mobility, renewable energy, and smart manufacturing'
          },
          {
            tabName: 'Siemens Partnership',
            image: VacTab1,
            heading: 'Siemens Partnership',
            text: 'Ara Partners – a global private equity firm that invests in technologies and businesses displace existing, polluting industrial processes – teamed up with Siemens Financial Services (SFS) to obtain flexible growth capital for Vacuumschmelze (VAC) at time ofits acquisition. The financing solution helped support VAC\'s growth initiatives in advanced magnetic technologies for decarbonization applications. VAC can focus resources on growth, providing solutions that enable reduction in greenhouse gas emissions.'
          },
          {
            tabName: 'Technologies to Scale',
            image: VacTab1,
            heading: 'Siemens solutions and technologies:',
            text: '<ul><li>Automation</li><li>Advanced magnetic technologies</li></ul>'
          },
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
            text: 'Wayout International, a start-up originally from Sweden, provides water production systems (POD) that can convert any source of water into safe and healthy drinking water. This sustainable solution enhances water accessibility while eliminating chemical treatments and minimizing plastic waste.'
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
            tabName: 'What is Siemens Xcelerator for Startups',
            image: StartupTab1,
            heading: 'What is Siemens Xcelerator for Startups',
            text: 'Siemens Xcelerator for Startups is a program designed to help early-stage engineering and manufacturing startups accelerate their product development by offering access to Siemens software and hardware at reduced cost, along with venture-related services. It aims to streamline collaboration, foster new partnerships, and accelerate innovation for these young companies.'
          },
          {
            tabName: 'Benefits',
            image: StartupTab2,
            heading: 'Benefits',
            text: '<p>Siemens Xcelerator for Startups is designed to empower young companies with the tools, resources, and connections they need to succeed in today’s competitive landscape. Benefits include:</p><ul><li>Faster time to market</li><li>Improved product development</li><li>Reduced development costs</li><li>Enhanced collaboration and innovation</li></ul>'
          },
          {
            tabName: 'Programs Supported',
            image: StartupTab3,
            heading: 'Programs Supported',
            text: '<ul><li>Product Designers: Design and development, simulation and product lifecycle management for startups building physical products.</li><li>Software Developers: Tools and resources to build on top of our engineering solutions or an ISV app.</li><li>Technology Collaborators: Opportunity for startups to work with Siemens on dramatic proof of concepts and cutting-edge solutions.</li></ul>'
          },
          {
            tabName: 'Apply Today',
            image: StartupTab4,
            heading: 'Apply Today!',
            text: 'Ready to support your team with scalable design and simulation engineering solutions? Reach out below to learn more about our startups program and begin your organization’s application. <strong>Qualified new program members can accelerate their startup journey with up to $5,000 USD in AWS credits.</strong>'
          }
        ]
      }
    }

    return projects[id] || { title: 'Unknown Project', description: 'Project not found', heroMedia: DefaultBackground, tabs: [{ tabName: 'Info', image: DefaultBackground, heading: 'No Information', text: 'No details available.' }] }
  }

  const project = getProjectData(projectId)
  const [activeTab, setActiveTab] = useState(0)

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