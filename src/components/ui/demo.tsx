import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <section className="hero2" aria-label="Hero">
      {/* ── Video Background ── */}
      <div className="hero2__bg">
        <video
          ref={videoRef}
          className="hero2__video"
          src="/heronew.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setLoaded(true)}
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div className="hero2__overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero2__inner">
        <motion.div
          className="hero2__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <motion.p
            className="hero2__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            MNRE EMPANELLED · MAHINDRA SOLARIZE PARTNER
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="hero2__headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Kerala's #1 Choice<br />
            for Solar<br />
            <em>Installation</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero2__subtext"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Cut your electricity bill by up to 90% with professional solar installation. Get up to ₹78,000 government subsidy — we handle all the paperwork.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero2__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20get%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="hero2__btn hero2__btn--primary">
              Get Free Quote →
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="hero2__btn-arrow">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="hero2__btn hero2__btn--outline">
              <span className="hero2__btn-text-desktop">Explore Services</span>
              <span className="hero2__btn-text-mobile">Explore</span>
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="hero2__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="hero2__trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5L3 3.5v5.5c0 3.8 2.8 7 5.5 8 2.7-1 5.5-4.2 5.5-8V3.5L8 1.5Z" stroke="#F5A623" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                <path d="M5.5 8l2 2L11 5.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              MNRE Certified
            </span>
            <span className="hero2__trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="#F5A623" strokeWidth="1.5" fill="none"/>
                <path d="M8 4.5v4.5l2.5 2.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="hero2__trust-text-desktop">40+ Years of Expertise</span>
              <span className="hero2__trust-text-mobile">40+ Years</span>
            </span>
            <span className="hero2__trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2.5 8.5L4.5 10.5L13.5 2" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Free Site Survey
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll hint (mobile only) ── */}
      <motion.div
        className="hero2__scroll-mobile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="hero2__scroll-label">SCROLL</span>
        <div className="hero2__scroll-dot" />
      </motion.div>
    </section>
  )
}
