'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const benefits = [
  { id: 'benefit-1', icon: '🌱', label: 'Renewable Clean Energy' },
  { id: 'benefit-2', icon: '💰', label: 'Return on Investment' },
  { id: 'benefit-3', icon: '🔋', label: 'Energy Independence' },
  { id: 'benefit-4', icon: '📉', label: 'Escape Rising Bills' },
  { id: 'benefit-5', icon: '🏛', label: 'Government Subsidy' },
  { id: 'benefit-6', icon: '🔧', label: 'Low Maintenance' },
  { id: 'benefit-7', icon: '⚡', label: 'Stable Power Supply' },
  { id: 'benefit-8', icon: '🌍', label: 'Zero Carbon Emission' },
  { id: 'benefit-9', icon: '📅', label: '25-Year Panel Life' },
  { id: 'benefit-10', icon: '🏠', label: 'Increases Property Value' },
]

export default function WhySolar() {
  return (
    <section className="why-solar" id="why-solar" aria-labelledby="why-solar-heading">
      <div className="why-solar__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>The Case for Solar</motion.p>
          <motion.h2 className="section-title" id="why-solar-heading" variants={fadeUp}>Why Switch to Solar Power?</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            The future of energy is here — and it makes complete financial and environmental sense.
          </motion.p>
        </motion.div>

        <motion.div
          className="why-solar__grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.id}
              className="solar-benefit"
              id={b.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <span className="solar-benefit__icon" aria-hidden="true">{b.icon}</span>
              <span className="solar-benefit__label">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Amber subsidy banner */}
      <div className="subsidy-banner" id="subsidy-banner" role="complementary">
        <div className="subsidy-banner__inner">
          <p className="subsidy-banner__text">
            <strong>Get up to ₹78,000 government subsidy</strong> on your solar installation.
            <span className="subsidy-banner__sub"> Limited time — apply now.</span>
          </p>
          <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20check%20my%20solar%20subsidy%20eligibility." target="_blank" rel="noopener noreferrer" className="subsidy-banner__btn" id="check-eligibility-btn">
            Check My Eligibility
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
