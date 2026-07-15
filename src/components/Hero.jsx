import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import { fadeUp } from '../hooks/animations'

const ease = [0.16, 1, 0.3, 1]

// ── Hero image slideshow config ───────────────────────────
// To add more images, just push new paths to this array.
const HERO_IMAGES = [
  '/heroes/hero-solar.png',
  '/heroes/hero1.jpeg',
]

const SLIDE_INTERVAL = 3000  // ms between slides
const FADE_DURATION  = 1.2   // seconds for cross-fade

// ── Slideshow hook ─────────────────────────────────────────
function useHeroSlideshow(images, interval) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        return (c + 1) % images.length
      })
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [images.length, interval])

  return { current, prev }
}

// ── Shared background slideshow component ─────────────────
function HeroSlideshow({ images }) {
  const { current, prev } = useHeroSlideshow(images, SLIDE_INTERVAL)

  return (
    <>
      {/* Always-visible base layer (current) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Outgoing slide fades out on top */}
      <AnimatePresence>
        {prev !== null && prev !== current && (
          <motion.div
            key={prev}
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${images[prev]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Hero() {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileHero />
  return <DesktopHero />
}

/* ─── MOBILE HERO ─────────────────────────────────────── */
function MobileHero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        position: 'relative',
        height: '100dvh', // dynamic viewport height for mobile browser bars
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background slideshow */}
      <HeroSlideshow images={HERO_IMAGES} />

      {/* Dark overlay */}
      <div className="hero__overlay" style={{ zIndex: 2 }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 24px 48px', // reduced top padding
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease }}
          style={{
            color: '#F5A623',
            fontSize: 12, // minimum 12px small labels
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Kerala's Trusted Solar Experts
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          style={{
            color: '#fff',
            fontSize: 32, // 36px max, using 32px to guarantee fit above fold
            fontWeight: 800,
            lineHeight: 1.15,
            marginTop: 12,
            marginBottom: 0,
            fontFamily: 'var(--font-display)',
          }}
        >
          Sun-Powered Solutions for Kerala
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5, ease }}
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: 15,
            lineHeight: 1.6,
            marginTop: 12,
            marginBottom: 0,
            fontFamily: 'var(--font-body)'
          }}
        >
          Solar installation with up to ₹78,000 government subsidy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease }}
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 24,
          }}
        >
          <a
            href="#contact"
            style={{
              flex: 1,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#F5A623',
              color: '#1A3C2E',
              fontWeight: 700,
              fontSize: 16, // button text min 16px on mobile
              borderRadius: 99,
              textDecoration: 'none',
            }}
          >
            Get Free Quote
          </a>
          <a
            href="/projects"
            style={{
              flex: 1,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#fff',
              fontWeight: 500,
              fontSize: 16, // button text min 16px on mobile
              borderRadius: 99,
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.7)',
            }}
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          style={{
            display: 'flex',
            gap: 12, // 12px gap
            justifyContent: 'center',
            flexWrap: 'nowrap', // keep on one line
            marginTop: 18,
          }}
        >
          {['✓ Free Survey', '✓ MNRE Certified', '✓ Since 1985'].map((text) => (
            <span
              key={text}
              style={{
                color: 'rgba(255,255,255,0.85)', // contrast boost to 85%
                fontSize: 11, // 11px font size to fit on one line
                whiteSpace: 'nowrap'
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: '#F5A623' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ─── DESKTOP HERO ────────────────────────────────────── */
function DesktopHero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Slideshow backgrounds */}
      <HeroSlideshow images={HERO_IMAGES} />

      {/* Dark overlay — sits above slideshow */}
      <div className="hero__overlay" style={{ zIndex: 2 }} />

      <div className="hero__inner" style={{ position: 'relative', zIndex: 3 }}>
        {/* LEFT: Text Content */}
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>Kerala's Trusted Solar Experts</motion.p>
          <motion.h1 className="hero__headline" variants={fadeUp}>
            Sun-Powered Solutions for Kerala
          </motion.h1>
          <motion.p className="hero__subheadline" variants={fadeUp}>
            Up to <strong>₹78,000 government subsidy</strong>. MNRE empanelled &amp; Mahindra Solarize partner.
          </motion.p>
          <motion.div className="hero__ctas" variants={fadeUp}>
            <a href="#contact" className="btn btn--amber btn--hero" id="cta-hero-primary">Get Free Quote</a>
            <a href="/projects" className="btn btn--outline btn--hero" id="cta-hero-secondary">View Our Work</a>
          </motion.div>
          <motion.ul className="hero__trust-signals" role="list" variants={fadeUp}>
            <li className="trust-signal">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4.5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Free Site Survey
            </li>
            <li className="trust-signal">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4.5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              MNRE Certified
            </li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true" style={{ zIndex: 3 }}>
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}