import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

const products = [
  {
    id: 'on-grid',
    title: 'On-Grid Solar System',
    tagline: 'Best for bringing your KSEB bills to near-zero.',
    desc: 'Connect your rooftop solar system directly to the Kerala State Electricity Board (KSEB) grid. The solar power generated is consumed first. Any surplus is exported to the grid, earning you net metering credits that reduce your bi-monthly bill. Fully eligible for central government subsidies.',
    subsidy: 'Eligible for up to ₹78,000 central subsidy under PM-Surya Ghar Scheme.',
    features: [
      'Bidirectional net-metering connection with KSEB',
      'No battery replacement costs (longest system lifespan)',
      'High-performance Tier-1 panels (DCR compliant)',
      'Grid protection and anti-islanding safety features'
    ],
    specs: {
      capacity: '3 kW to 100+ kW',
      warranty: '25-year panel warranty, 5-year inverter warranty',
      inverter: 'On-Grid String Inverter (KSEB approved)',
      idealFor: 'Homes, colleges, hospitals, and commercial units with high daytime usage and stable grid supply.'
    },
    actionText: 'Book Free On-Grid Site Survey'
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Solar System',
    tagline: 'Complete energy independence with battery backup.',
    desc: 'Completely disconnect from the electrical grid or protect yourself fully from load shedding. Off-grid systems store solar energy in deep-cycle solar battery banks. This stored power runs your home or estate during the night and throughout power outages.',
    subsidy: 'Note: Pure off-grid installations are not eligible for KSEB grid-connected subsidies.',
    features: [
      '100% independence from KSEB grids and power cuts',
      'Heavy-duty battery bank (Tubular/Lithium options)',
      'Intelligent solar charge controller (MPPT technology)',
      'Backup generator integration compatible'
    ],
    specs: {
      capacity: '1 kW to 15+ kW',
      warranty: '25-year panel warranty, 3 to 5-year battery warranty',
      inverter: 'Off-Grid Sine Wave Solar Inverter',
      idealFor: 'Remote plantations, high-range estate bungalows, and areas with frequent long-duration load shedding.'
    },
    actionText: 'Request Off-Grid Custom Quote'
  },
  {
    id: 'pmc',
    title: 'Solar PMC (Project Management Consultancy)',
    tagline: 'End-to-end solar project supervision and oversight.',
    desc: 'End-to-end management, supervision, and technical oversight for solar projects. We ensure quality assurance, timeline adherence, regulatory compliance, and seamless execution from site audit to grid integration.',
    subsidy: null,
    features: [
      'Comprehensive site audit and feasibility assessment',
      'Vendor selection, procurement, and quality assurance',
      'Project timeline tracking and milestone-based supervision',
      'Regulatory compliance and grid integration management'
    ],
    specs: {
      scope: 'Residential, Commercial & Industrial Solar Projects',
      services: 'Site Audit, Vendor Management, Project Supervision',
      compliance: 'MNRE, KSEB, and Local Regulatory Standards',
      deliverables: 'From site survey to final grid integration handover'
    },
    actionText: 'Enquire About Solar PMC'
  },
  {
    id: 'inverters',
    title: 'Solar Inverters & Accessories',
    tagline: 'Premium power conversion for maximum performance.',
    desc: 'An inefficient inverter can cause up to 20% power loss. We supply and commission only high-efficiency grid-tied, off-grid, and hybrid inverters from leading global brands, ensuring maximum generation yields and reliable thermal management under Kerala humidity.',
    subsidy: 'Included as part of complete system packages under standard MNRE guidelines.',
    features: [
      'Authorized Mahindra Solarize channel partner in Kerala',
      'Multiple MPPT trackers for complex, shaded rooftops',
      'High-speed cooling fans and IP65 dust/waterproof ratings',
      'In-built Wi-Fi/GPRS modules for solar production mobile apps'
    ],
    specs: {
      brands: 'Mahindra Solarize, Growatt, Fronius, Solis',
      efficiency: 'Up to 98.6% peak efficiency',
      monitoring: 'Mobile App / Web Portal dashboard included',
      safety: 'DC surge protection (SPD), short-circuit, and overload cut-offs'
    },
    actionText: 'Inquire About Inverters'
  }
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('on-grid')
  const [wizardStep, setWizardStep] = useState(0) // 0: intro, 1: type, 2: bill, 3: cuts, 4: result
  const [answers, setAnswers] = useState({
    userType: '', // Residential, Commercial
    monthlyBill: '', // Low (<1500), Medium (1500-4000), High (4000+)
    powerCuts: '' // Rare, Occasional, Frequent
  })

  const onGridRef = useRef(null)
  const offGridRef = useRef(null)
  const pmcRef = useRef(null)
  const invertersRef = useRef(null)

  const refMap = {
    'on-grid': onGridRef,
    'off-grid': offGridRef,
    'pmc': pmcRef,
    'inverters': invertersRef
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = 'Solar Services & Products | Echonix Technology Tirur'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Compare Echonix On-Grid, Off-Grid, and Hybrid Solar systems. Explore solar inverters. Find the right system for your Kerala home with our interactive Solar Calculator.'
      )
    }

    return () => {
      document.title = 'Solar Panel Installation in Kerala | Echonix Technology'
      if (meta) {
        meta.setAttribute(
          'content',
          'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9072 55 11 44'
        )
      }
    }
  }, [])

  // Auto scroll tab handler
  const handleTabClick = (id) => {
    setActiveTab(id)
    const element = refMap[id].current
    if (element) {
      const offset = 140 // height of sticky bar + navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle active tab state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // offset for trigger line
      
      const refs = {
        'on-grid': onGridRef,
        'off-grid': offGridRef,
        'pmc': pmcRef,
        'inverters': invertersRef
      }

      for (const [id, ref] of Object.entries(refs)) {
        const element = ref.current
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onGridRef, offGridRef, pmcRef, invertersRef])

  // Recommendation logic
  const getRecommendation = () => {
    const { userType, monthlyBill, powerCuts } = answers

    if (powerCuts === 'Frequent') {
      return {
        type: 'Hybrid Solar System',
        size: userType === 'Residential' ? '5 kW Hybrid' : '10 kW+ Hybrid',
        desc: `Since you experience frequent power cuts, a Hybrid system is essential. It keeps your lights, fans, and refrigerator running smoothly while exporting excess power to KSEB during grid hours.`,
        subsidy: userType === 'Residential' ? 'Yes, eligible for ₹78,000 subsidy.' : 'Commercial systems get tax benefits (accelerated depreciation) instead of subsidies.',
        savings: 'Can reduce your bi-monthly bill by up to 90%.',
        whatsappMsg: `Hi Echonix, I used your Solar Wizard. Recommendation: ${userType === 'Residential' ? '5kW' : '10kW+'} Hybrid System. My details: ${userType}, Bill: ${monthlyBill}, Power Cuts: ${powerCuts}. Please contact me.`
      }
    } else if (powerCuts === 'Occasional' && monthlyBill !== 'Low') {
      return {
        type: 'Hybrid Solar System (or On-Grid + UPS)',
        size: userType === 'Residential' ? '3 kW to 5 kW Hybrid' : '10 kW Hybrid',
        desc: `A Hybrid system is highly recommended to manage occasional power cuts and clear high electricity charges. If you already own an inverter/UPS, a standard On-Grid system is a cheaper alternative.`,
        subsidy: userType === 'Residential' ? 'Yes, eligible for up to ₹78,000 subsidy.' : 'Commercial units get 40% accelerated depreciation.',
        savings: 'Brings your electricity bills to near-zero.',
        whatsappMsg: `Hi Echonix, I used your Solar Wizard. Recommendation: Hybrid or On-Grid. My details: ${userType}, Bill: ${monthlyBill}, Power Cuts: ${powerCuts}. Please contact me.`
      }
    } else {
      // Rare or low bill
      return {
        type: 'On-Grid Solar System',
        size: monthlyBill === 'Low' ? '2 kW On-Grid' : (userType === 'Residential' ? '3 kW to 5 kW On-Grid' : '10 kW+ On-Grid'),
        desc: `Since power cuts are rare, a standard On-Grid system is your best financial investment. It is the most affordable setup, has the longest lifespan, and qualifies for the maximum subsidy, yielding the quickest ROI (under 4 years).`,
        subsidy: userType === 'Residential' 
          ? (monthlyBill === 'Low' ? 'Yes, eligible for ₹60,000 subsidy.' : 'Yes, eligible for ₹78,000 flat subsidy.') 
          : 'Commercial installations qualify for accelerated depreciation and solar tax incentives.',
        savings: 'Brings electricity bill down to ₹300 or less (KSEB fixed charges).',
        whatsappMsg: `Hi Echonix, I used your Solar Wizard. Recommendation: On-Grid. My details: ${userType}, Bill: ${monthlyBill}, Power Cuts: ${powerCuts}. Please contact me.`
      }
    }
  }

  const recommendation = getRecommendation()

  return (
    <>
      <Navbar />
      <main className="services-page">
        {/* Banner Hero */}
        <section className="services-page__hero">
          <div className="services-page__hero-inner">
            <p className="section-eyebrow">Product Catalog</p>
            <h1 className="services-page__heading">Solar Solutions & Products</h1>
            <p className="section-subtitle">
              Engineered with premium Tier-1 components. Tailored specifically for Kerala's coastal air and heavy monsoon seasons.
            </p>
          </div>
        </section>

        {/* Sticky Mobile/Desktop Horizontal Tab Bar */}
        <div className="services-page__sticky-nav">
          <div className="services-page__sticky-nav-inner">
            {products.map((p) => (
              <button
                key={p.id}
                className={`sticky-nav-btn ${activeTab === p.id ? 'is-active' : ''}`}
                onClick={() => handleTabClick(p.id)}
              >
                {p.id === 'pmc' ? 'Solar PMC' : `${p.title.split(' ')[0]} ${p.title.split(' ')[1] === 'Solar' ? 'Solar' : ''}`}
              </button>
            ))}
          </div>
        </div>

        {/* Products Showcase */}
        <section className="services-page__list">
          <div className="services-page__list-inner">
            {products.map((p) => (
              <article
                key={p.id}
                id={p.id}
                ref={refMap[p.id]}
                className="service-showcase-card"
              >
                <div className="service-showcase-card__content">
                  <span className="product-badge">{p.id.toUpperCase()}</span>
                  <h2 className="product-title">{p.title}</h2>
                  <p className="product-tagline">{p.tagline}</p>
                  <p className="product-desc">{p.desc}</p>
                  
                  {p.subsidy && (
                    <div className="product-subsidy-alert">
                      <span className="alert-icon">🎁</span>
                      <p>{p.subsidy}</p>
                    </div>
                  )}

                  <h3 className="sub-title">Key Advantages</h3>
                  <ul className="product-features" role="list">
                    {p.features.map((feature, i) => (
                      <li key={i}>
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/919539220888?text=Hi Echonix, I would like to enquire about the ${p.title} for my site.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--amber"
                  >
                    {p.actionText}
                  </a>
                </div>

                <div className="service-showcase-card__specs">
                  <h3>Technical Specifications</h3>
                  <div className="specs-table">
                    {Object.entries(p.specs).map(([key, val]) => (
                      <div key={key} className="specs-row">
                        <span className="specs-key">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                        <span className="specs-val">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Wizard Section */}
        <section className="wizard-section" id="solar-wizard" aria-labelledby="wizard-heading">
          <div className="wizard-section__inner">
            <div className="wizard-card">
              <div className="wizard-card__text-side">
                <p className="section-eyebrow">Smart Calculator</p>
                <h2 id="wizard-heading">Not sure which system you need?</h2>
                <p>Use our interactive Solar Recommendation Wizard. Answer three simple questions, and our algorithms will calculate your recommended size and type based on Kerala's local grid conditions.</p>
              </div>

              <div className="wizard-card__wizard-side">
                <AnimatePresence mode="wait">
                  {/* Step 0: Intro */}
                  {wizardStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="wizard-step"
                    >
                      <h3>Find Your Perfect Solar Fit</h3>
                      <p>Answer 3 quick questions about your property, bill, and power grid status in under 1 minute.</p>
                      <button className="btn btn--amber" onClick={() => setWizardStep(1)}>
                        Start Solar Wizard
                      </button>
                    </motion.div>
                  )}

                  {/* Step 1: User Type */}
                  {wizardStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="wizard-step"
                    >
                      <span className="step-indicator">Question 1 of 3</span>
                      <h3>Where do you want to install solar?</h3>
                      <div className="wizard-options">
                        <button
                          className={`wizard-opt-btn ${answers.userType === 'Residential' ? 'is-selected' : ''}`}
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, userType: 'Residential' }))
                            setWizardStep(2)
                          }}
                        >
                          🏠 Residential Home
                        </button>
                        <button
                          className={`wizard-opt-btn ${answers.userType === 'Commercial' ? 'is-selected' : ''}`}
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, userType: 'Commercial' }))
                            setWizardStep(2)
                          }}
                        >
                          🏢 Commercial Office / Shop
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Bill */}
                  {wizardStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="wizard-step"
                    >
                      <span className="step-indicator">Question 2 of 3</span>
                      <h3>What is your average bi-monthly KSEB bill?</h3>
                      <div className="wizard-options">
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, monthlyBill: 'Low' }))
                            setWizardStep(3)
                          }}
                        >
                          💸 Under ₹1,500
                        </button>
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, monthlyBill: 'Medium' }))
                            setWizardStep(3)
                          }}
                        >
                          💳 ₹1,500 to ₹4,000
                        </button>
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, monthlyBill: 'High' }))
                            setWizardStep(3)
                          }}
                        >
                          ⚡ Over ₹4,000
                        </button>
                      </div>
                      <button className="wizard-back-btn" onClick={() => setWizardStep(1)}>← Back</button>
                    </motion.div>
                  )}

                  {/* Step 3: Power Cuts */}
                  {wizardStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="wizard-step"
                    >
                      <span className="step-indicator">Question 3 of 3</span>
                      <h3>How frequent are power cuts in your area?</h3>
                      <div className="wizard-options">
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, powerCuts: 'Rare' }))
                            setWizardStep(4)
                          }}
                        >
                          ☀️ Rare / Never (Good grid connection)
                        </button>
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, powerCuts: 'Occasional' }))
                            setWizardStep(4)
                          }}
                        >
                          ⛈️ Occasional (Mainly during rain/monsoons)
                        </button>
                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers(prev => ({ ...prev, powerCuts: 'Frequent' }))
                            setWizardStep(4)
                          }}
                        >
                          🔌 Frequent (Power goes down daily/weekly)
                        </button>
                      </div>
                      <button className="wizard-back-btn" onClick={() => setWizardStep(2)}>← Back</button>
                    </motion.div>
                  )}

                  {/* Step 4: Results */}
                  {wizardStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="wizard-step wizard-step--result"
                    >
                      <span className="result-badge">YOUR RECOMMENDED FIT</span>
                      <h3>{recommendation.type}</h3>
                      <p className="result-size">Recommended Size: <strong>{recommendation.size}</strong></p>
                      
                      <div className="result-card">
                        <p>{recommendation.desc}</p>
                        <div className="result-card__meta">
                          <p><strong>Government Subsidy:</strong> {recommendation.subsidy}</p>
                          <p><strong>Estimated Savings:</strong> {recommendation.savings}</p>
                        </div>
                      </div>

                      <div className="result-actions">
                        <a
                          href={`https://wa.me/919539220888?text=${encodeURIComponent(recommendation.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--amber"
                        >
                          Book Free Site Survey
                        </a>
                        <button
                          className="btn btn--outline"
                          onClick={() => {
                            setAnswers({ userType: '', monthlyBill: '', powerCuts: '' })
                            setWizardStep(0)
                          }}
                        >
                          Retake Quiz
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
