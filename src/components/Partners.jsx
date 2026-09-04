'use client'

import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'
import { useRef, useEffect } from 'react'

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

function CountUpInline({ count, suffix = '', isDecimal = false }) {
  const elRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = elRef.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const duration = 1400
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()
          const raf = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutQuart(progress)
            const value = eased * count
            node.textContent = isDecimal ? value.toFixed(1) + suffix : Math.round(value) + suffix
            if (progress < 1) requestAnimationFrame(raf)
            else node.textContent = (isDecimal ? count.toFixed(1) : count) + suffix
          }
          requestAnimationFrame(raf)
        }
      },
      { threshold: 0.4 }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [count, suffix, isDecimal])

  return (
    <span className="partners__num" ref={elRef} aria-label={`${count}${suffix}`}>
      0
    </span>
  )
}

// Using SVG logos for partner brands
const logos = [
  {
    id: 'partner-mahindra',
    label: 'Mahindra Solarize',
    svg: (
      <svg viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mahindra Solarize">
        <rect x="2" y="2" width="48" height="48" rx="6" fill="currentColor" opacity="0.08"/>
        <path d="M8 38V14h6l6 14 6-14h6v24h-5V24l-5 11h-4l-5-11v14H8Z" fill="currentColor"/>
        <text x="62" y="21" fontFamily="Arial" fontWeight="700" fontSize="10" fill="currentColor">MAHINDRA</text>
        <text x="62" y="36" fontFamily="Arial" fontWeight="400" fontSize="9" fill="currentColor" opacity="0.7">SOLARIZE</text>
      </svg>
    ),
  },
  {
    id: 'partner-waaree',
    label: 'Waaree Solar',
    svg: (
      <svg viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Waaree Solar">
        <path d="M8 14l8 24 6-16 6 16 8-24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="46" y="26" fontFamily="Arial" fontWeight="700" fontSize="13" fill="currentColor">WAAREE</text>
        <text x="46" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
  {
    id: 'partner-vikram',
    label: 'Vikram Solar',
    svg: (
      <svg viewBox="0 0 145 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vikram Solar">
        <circle cx="22" cy="26" r="16" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 26l5 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="46" y="26" fontFamily="Arial" fontWeight="700" fontSize="12" fill="currentColor">VIKRAM</text>
        <text x="46" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
  {
    id: 'partner-sma',
    label: 'SMA Solar',
    svg: (
      <svg viewBox="0 0 110 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SMA Solar">
        <rect x="4" y="10" width="32" height="32" rx="8" fill="currentColor" opacity="0.1"/>
        <text x="8" y="33" fontFamily="Arial" fontWeight="900" fontSize="18" fill="currentColor">SMA</text>
        <text x="46" y="26" fontFamily="Arial" fontWeight="600" fontSize="11" fill="currentColor">SOLAR</text>
        <text x="46" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">TECHNOLOGY</text>
      </svg>
    ),
  },
  {
    id: 'partner-havells',
    label: 'Havells Solar',
    svg: (
      <svg viewBox="0 0 138 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Havells Solar">
        <path d="M8 14v24M8 26h14M22 14v24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
        <text x="36" y="26" fontFamily="Arial" fontWeight="700" fontSize="12" fill="currentColor">HAVELLS</text>
        <text x="36" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
  {
    id: 'partner-luminous',
    label: 'Luminous Solar',
    svg: (
      <svg viewBox="0 0 148 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Luminous Solar">
        <path d="M18 10v12M14 16l4-6 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="28" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <text x="36" y="26" fontFamily="Arial" fontWeight="700" fontSize="11" fill="currentColor">LUMINOUS</text>
        <text x="36" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
  {
    id: 'partner-tata',
    label: 'Tata Power Solar',
    svg: (
      <svg viewBox="0 0 148 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tata Power Solar">
        <path d="M8 18h20M18 18v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
        <text x="36" y="22" fontFamily="Arial" fontWeight="700" fontSize="11" fill="currentColor">TATA POWER</text>
        <text x="36" y="37" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
  {
    id: 'partner-adani',
    label: 'Adani Solar',
    svg: (
      <svg viewBox="0 0 132 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Adani Solar">
        <path d="M18 10l10 26H8l10-26Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <text x="38" y="26" fontFamily="Arial" fontWeight="700" fontSize="13" fill="currentColor">ADANI</text>
        <text x="38" y="40" fontFamily="Arial" fontSize="9" fill="currentColor" opacity="0.6">SOLAR</text>
      </svg>
    ),
  },
]

export default function Partners() {
  return (
    <section className="partners" id="partners" aria-label="Brands we work with">
      <div className="partners__inner">
        <motion.p
          className="partners__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          Brands We Work With
        </motion.p>

        {/* ── Optional stats to draw attention above the marquees */}
        <motion.div
          className="partners__stats"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {[
            { value: 40, label: 'Years in Business', suffix: '+' },
            { value: 500, label: 'Installations Done', suffix: '+' },
            { value: 3.5, label: 'Solar Energy (MW)', suffix: '+ MW', isDecimal: true },
          ].map((s, i) => (
            <div className="partners__stat" key={i}>
              <CountUpInline count={s.value} suffix={s.suffix} isDecimal={s.isDecimal} />
              <div className="partners__stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="partners__marquee-wrap" aria-label="Scrolling list of partner brands">
          <div className="partners__track" id="partners-track">
            {/* Original set */}
            <div className="partners__logo-set" aria-hidden="false">
              {logos.map((logo) => (
                <span key={logo.id} className="partner-logo" id={logo.id}>{logo.svg}</span>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="partners__logo-set" aria-hidden="true">
              {logos.map((logo) => (
                <span key={`dup-${logo.id}`} className="partner-logo">{logo.svg}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
