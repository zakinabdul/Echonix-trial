'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from './ui/count-up'

// Stats are defined inline when rendering per design requirements

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

function CountUp({ count, suffix, isDecimal }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (count === null) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const startTime = performance.now()
          const update = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutQuart(progress)
            const value = eased * count
            if (ref.current) {
              ref.current.textContent = isDecimal
                ? value.toFixed(1) + suffix
                : Math.round(value) + suffix
            }
            if (progress < 1) requestAnimationFrame(update)
            else if (ref.current) {
              ref.current.textContent = (isDecimal ? count.toFixed(1) : count) + suffix
            }
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, suffix, isDecimal])

  return (
    <span className="trustbar2__num" ref={ref} aria-label={`${count}${suffix}`}>
      0
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function TrustBar() {
  return (
    <div className="trustbar2" id="trust-bar">
      <div className="trustbar2__inner">
        {/* Left: about blurb */}
        <motion.div
          className="trustbar2__blurb"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p>
            At Echonix, we believe energy should be clean, affordable, and accessible to everyone.
            Our mission is to simplify Kerala's transition to solar, empowering homes and businesses
            to take control of their energy future.
          </p>
          <a href="#about" className="trustbar2__link">
            Learn About Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="trustbar2__divider" aria-hidden="true" />

        {/* Right: 4 stats (3 numeric + 1 static MNRE label) */}
        <div className="trustbar2__stats">
          <motion.div
            className="trustbar2__stat"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp} transition={{ delay: 0 }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
              <CountUp to={3.5} from={0} digitEffect="slide" duration={2} className={`text-4xl md:text-5xl font-extrabold text-amber-400 tabular-nums tracking-tight`} />
              <span className="trustbar2__suffix">+ MW</span>
            </div>
            <span className="trustbar2__stat-label">Solar Capacity Installed</span>
          </motion.div>

          <div className="trustbar2__sep" aria-hidden="true" />

          <motion.div
            className="trustbar2__stat"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp} transition={{ delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
              <CountUp to={500} from={0} digitEffect="slide" duration={2.2} delay={0.1} className={`text-4xl md:text-5xl font-extrabold text-amber-400 tabular-nums tracking-tight`} />
              <span className="trustbar2__suffix">+</span>
            </div>
            <span className="trustbar2__stat-label">Happy Customers</span>
          </motion.div>

          <div className="trustbar2__sep" aria-hidden="true" />

          <motion.div
            className="trustbar2__stat"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp} transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
              <CountUp to={40} from={0} digitEffect="slide" duration={1.8} delay={0.2} className={`text-4xl md:text-5xl font-extrabold text-amber-400 tabular-nums tracking-tight`} />
              <span className="trustbar2__suffix">+ Yrs</span>
            </div>
            <span className="trustbar2__stat-label">Years of Combined Expertise</span>
          </motion.div>

          <div className="trustbar2__sep" aria-hidden="true" />

          <motion.div
            className="trustbar2__stat"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp} transition={{ delay: 0.3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="trustbar2__mnre">MNRE</span>
            </div>
            <span className="trustbar2__stat-label">Empanelled EPC</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
