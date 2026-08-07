import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'

const stats = [
  { value: '3.5+', unit: 'MW', label: 'Solar Energy Bill' },
  { value: '500+', unit: '', label: 'Installations Done' },
  { value: '40+', unit: 'Yrs', label: 'In Business' },
]

export default function MidCTA() {
  return (
    <section className="midcta" aria-labelledby="midcta-heading">
      {/* Background video/image layer */}
      <div className="midcta__bg" aria-hidden="true">
        <img
          src="/heroes/hero-solar.png"
          alt=""
          className="midcta__bg-img"
          loading="lazy"
        />
        <div className="midcta__bg-overlay" />
      </div>

      <div className="midcta__inner">
        <div className="midcta__layout">
          {/* Left: text */}
          <motion.div
            className="midcta__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="midcta__eyebrow">YOUR PARTNER IN</p>
            <h2 className="midcta__heading" id="midcta-heading">
              Your Partner in<br />
              the Transition to<br />
              <em className="midcta__heading-em">Clean Energy</em>
            </h2>
            <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20get%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="midcta__btn">
              Let's Enquire Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            className="midcta__stats"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="midcta__stat">
                <span className="midcta__stat-value">
                  {s.value}
                  {s.unit && <span className="midcta__stat-unit">{s.unit}</span>}
                </span>
                <span className="midcta__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
