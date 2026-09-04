'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

const products = [
  {
    id: 'on-grid',
    number: '01',
    title: 'On-Grid Solar',
    shortTitle: 'On-Grid',
    tagline: 'Save more with KSEB net metering.',
    desc: 'Connect your solar system directly to the KSEB grid and use the power you generate. Excess electricity can be exported to the grid through net metering, helping bring your electricity bills close to zero.',
    tag: 'Most Popular',
    icon: 'grid',
    image: '/images/services/on-grid.jpg',
    benefits: [
      'KSEB net-metering connection',
      'Government subsidy eligible',
      'No battery replacement costs',
      'Ideal for homes & businesses',
    ],
    actionText: 'Book Free Site Survey',
  },
  {
    id: 'off-grid',
    number: '02',
    title: 'Off-Grid Solar',
    shortTitle: 'Off-Grid',
    tagline: 'Complete energy independence with battery storage.',
    desc: 'Generate, store and use your own solar power without depending on the electrical grid. A reliable solution for properties that experience frequent or long-duration power cuts.',
    tag: 'Energy Independent',
    icon: 'battery',
    image: '/images/services/off-grid.jpg',
    benefits: [
      'Battery backup included',
      'Works during power cuts',
      'Independent from KSEB',
      'Ideal for remote locations',
    ],
    actionText: 'Request Custom Quote',
  },
  {
    id: 'hybrid',
    number: '03',
    title: 'Hybrid Solar',
    shortTitle: 'Hybrid',
    tagline: 'The best of grid power and battery backup.',
    desc: 'Stay connected to the KSEB grid while storing solar energy in batteries. Hybrid systems provide backup during outages while allowing you to use or export solar power during normal grid hours.',
    tag: 'Best of Both',
    icon: 'hybrid',
    image: '/images/services/hybrid.jpg',
    benefits: [
      'Grid + battery backup',
      'Reliable during outages',
      'Smart energy management',
      'Flexible for homes & businesses',
    ],
    actionText: 'Explore Hybrid Solar',
  },
  {
    id: 'inverters',
    number: '04',
    title: 'Solar Inverters',
    shortTitle: 'Inverters',
    tagline: 'High-efficiency power conversion for your solar system.',
    desc: 'High-efficiency inverters compatible with major solar panel brands and battery systems. We supply, install and commission reliable inverter solutions for on-grid, off-grid and hybrid systems.',
    tag: 'High Efficiency',
    icon: 'inverter',
    image: '/images/services/inverter.jpg',
    benefits: [
      'High conversion efficiency',
      'On-grid, off-grid & hybrid',
      'Major brand compatibility',
      'Professional installation',
    ],
    actionText: 'Enquire About Inverters',
  },
]

const Icon = ({ type, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'grid') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    )
  }

  if (type === 'battery') {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="17" height="12" rx="2" />
        <path d="M20 10h1.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H20" />
        <path d="M10 8.5 7.8 12h2.8l-1 3.5 3.4-4.5h-2.8L12 8.5Z" />
      </svg>
    )
  }

  if (type === 'hybrid') {
    return (
      <svg {...common}>
        <path d="M12 3v18M3 12h18" />
        <path d="M7 7a7 7 0 0 1 10 0M7 17a7 7 0 0 0 10 0" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M13 2 4.5 13h6L10 22l9.5-13h-6L13 2Z" />
    </svg>
  )
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('on-grid')
  const [wizardStep, setWizardStep] = useState(0)
  const [answers, setAnswers] = useState({
    userType: '',
    monthlyBill: '',
    powerCuts: '',
  })

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

        {/* Hero */}
        <section className="services-page__hero">
          <div className="services-page__hero-inner">
            <p className="section-eyebrow">Solar Solutions</p>

            <h1 className="services-page__heading">
              Power your future
              <br />
              <span>your way.</span>
            </h1>

            <p className="section-subtitle">
              From grid-connected systems to complete energy independence,
              choose the solar solution that fits your home, business and
              energy goals.
            </p>
          </div>
        </section>

        {/* New Interactive Service Showcase */}
        <section className="services-selector" aria-labelledby="solar-solutions-heading">
          <div className="services-selector__inner">

            <div className="services-selector__intro">
              <div className="services-selector__eyebrow">
                <span />
                <p>Explore Solar Solutions</p>
                <span />
              </div>

              <h2 id="solar-solutions-heading">
                Find the right solar system
                <br />
                <strong>for your energy needs.</strong>
              </h2>

              <p>
                Whether you want lower electricity bills, reliable backup,
                or complete energy independence, Echonix has a solution
                designed around the way you use power.
              </p>
            </div>

            <div className="services-selector__showcase">

              {/* Service Navigation */}
              <div className="services-selector__menu">
                <p className="services-selector__menu-label">
                  Explore solutions
                </p>

                <div className="services-selector__items">
                  {products.map((service) => {
                    const isActive = activeService === service.id

                    return (
                      <button
                        key={service.id}
                        type="button"
                        className={`services-selector__item ${
                          isActive ? 'is-active' : ''
                        }`}
                        onClick={() => setActiveService(service.id)}
                        aria-pressed={isActive}
                      >
                        <span className="services-selector__number">
                          {service.number}
                        </span>

                        <span className="services-selector__item-icon">
                          <Icon type={service.icon} size={19} />
                        </span>

                        <span className="services-selector__item-copy">
                          <strong>{service.title}</strong>
                          <small>{service.tag}</small>
                        </span>

                        <span className="services-selector__arrow">
                          ↗
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="services-selector__help">
                  <span>Not sure which system is right for you?</span>
                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById('solar-wizard')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Use our Solar Wizard →
                  </button>
                </div>
              </div>

              {/* Active Service */}
              <AnimatePresence mode="wait">
                {products
                  .filter((service) => service.id === activeService)
                  .map((service) => (
                    <motion.div
                      key={service.id}
                      className="services-selector__visual"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.35 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="services-selector__image"
                      />

                      <div className="services-selector__overlay" />

                      <div className="services-selector__visual-content">
                        <div className="services-selector__top">
                          <span className="services-selector__tag">
                            <i />
                            {service.tag}
                          </span>
                        </div>

                        <div className="services-selector__details">
                          <div className="services-selector__service-icon">
                            <Icon type={service.icon} size={22} />
                          </div>

                          <span className="services-selector__solution-number">
                            Solar Solution {service.number}
                          </span>

                          <h3>{service.title}</h3>

                          <p className="services-selector__tagline">
                            {service.tagline}
                          </p>

                          <p className="services-selector__description">
                            {service.desc}
                          </p>

                          <div className="services-selector__benefits">
                            {service.benefits.map((benefit) => (
                              <span key={benefit}>
                                <b>✓</b>
                                {benefit}
                              </span>
                            ))}
                          </div>

                          <a
                            href={`https://wa.me/919539220888?text=${encodeURIComponent(
                              `Hi Echonix, I would like to enquire about the ${service.title} for my site.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="services-selector__cta"
                          >
                            {service.actionText}
                            <span>↗</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>

            </div>

            {/* Trust strip */}
            <div className="services-selector__trust">
              <span>✓ KSEB compliant installations</span>
              <span>✓ Quality components</span>
              <span>✓ Professional installation</span>
              <span>✓ After-sales support</span>
            </div>

          </div>
        </section>

        {/* Solar Wizard */}
        <section
          className="wizard-section"
          id="solar-wizard"
          aria-labelledby="wizard-heading"
        >
          <div className="wizard-section__inner">
            <div className="wizard-card">

              <div className="wizard-card__text-side">
                <p className="section-eyebrow">Smart Calculator</p>

                <h2 id="wizard-heading">
                  Not sure which system you need?
                </h2>

                <p>
                  Use our interactive Solar Recommendation Wizard. Answer
                  three simple questions, and our algorithms will calculate
                  your recommended size and type based on Kerala's local
                  grid conditions.
                </p>
              </div>

              <div className="wizard-card__wizard-side">
                <AnimatePresence mode="wait">

                  {wizardStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="wizard-step"
                    >
                      <h3>Find Your Perfect Solar Fit</h3>

                      <p>
                        Answer 3 quick questions about your property, bill,
                        and power grid status in under 1 minute.
                      </p>

                      <button
                        className="btn btn--amber"
                        onClick={() => setWizardStep(1)}
                      >
                        Start Solar Wizard
                      </button>
                    </motion.div>
                  )}

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
                          className={`wizard-opt-btn ${
                            answers.userType === 'Residential'
                              ? 'is-selected'
                              : ''
                          }`}
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              userType: 'Residential',
                            }))
                            setWizardStep(2)
                          }}
                        >
                          🏠 Residential Home
                        </button>

                        <button
                          className={`wizard-opt-btn ${
                            answers.userType === 'Commercial'
                              ? 'is-selected'
                              : ''
                          }`}
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              userType: 'Commercial',
                            }))
                            setWizardStep(2)
                          }}
                        >
                          🏢 Commercial Office / Shop
                        </button>
                      </div>
                    </motion.div>
                  )}

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
                            setAnswers((prev) => ({
                              ...prev,
                              monthlyBill: 'Low',
                            }))
                            setWizardStep(3)
                          }}
                        >
                          💸 Under ₹1,500
                        </button>

                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              monthlyBill: 'Medium',
                            }))
                            setWizardStep(3)
                          }}
                        >
                          💳 ₹1,500 to ₹4,000
                        </button>

                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              monthlyBill: 'High',
                            }))
                            setWizardStep(3)
                          }}
                        >
                          ⚡ Over ₹4,000
                        </button>
                      </div>

                      <button
                        className="wizard-back-btn"
                        onClick={() => setWizardStep(1)}
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

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
                            setAnswers((prev) => ({
                              ...prev,
                              powerCuts: 'Rare',
                            }))
                            setWizardStep(4)
                          }}
                        >
                          ☀️ Rare / Never (Good grid connection)
                        </button>

                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              powerCuts: 'Occasional',
                            }))
                            setWizardStep(4)
                          }}
                        >
                          ⛈️ Occasional (Mainly during rain/monsoons)
                        </button>

                        <button
                          className="wizard-opt-btn"
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              powerCuts: 'Frequent',
                            }))
                            setWizardStep(4)
                          }}
                        >
                          🔌 Frequent (Power goes down daily/weekly)
                        </button>
                      </div>

                      <button
                        className="wizard-back-btn"
                        onClick={() => setWizardStep(2)}
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {wizardStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="wizard-step wizard-step--result"
                    >
                      <span className="result-badge">
                        YOUR RECOMMENDED FIT
                      </span>

                      <h3>{recommendation.type}</h3>

                      <p className="result-size">
                        Recommended Size:{' '}
                        <strong>{recommendation.size}</strong>
                      </p>

                      <div className="result-card">
                        <p>{recommendation.desc}</p>

                        <div className="result-card__meta">
                          <p>
                            <strong>Government Subsidy:</strong>{' '}
                            {recommendation.subsidy}
                          </p>

                          <p>
                            <strong>Estimated Savings:</strong>{' '}
                            {recommendation.savings}
                          </p>
                        </div>
                      </div>

                      <div className="result-actions">
                        <a
                          href={`https://wa.me/919539220888?text=${encodeURIComponent(
                            recommendation.whatsappMsg
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--amber"
                        >
                          Book Free Site Survey
                        </a>

                        <button
                          className="btn btn--outline"
                          onClick={() => {
                            setAnswers({
                              userType: '',
                              monthlyBill: '',
                              powerCuts: '',
                            })
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
