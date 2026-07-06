import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import { fadeUp } from '../hooks/animations'

const ease = [0.16, 1, 0.3, 1]

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
        height: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-solar.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '76px 24px 48px', // reduced bottom padding from 90px
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
            fontSize: 10,
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
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.15,
            marginTop: 12,
            marginBottom: 0,
            fontFamily: 'var(--font-display)',
          }}
        >
          Sun-Powered Solutions for Every Kerala Home
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease }}
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: 14,
            lineHeight: 1.6,
            marginTop: 12,
            marginBottom: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          Professional solar installation with up to ₹78,000 government subsidy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5, ease }}
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
              fontSize: 14,
              borderRadius: 99,
              textDecoration: 'none',
              border: 'none',
            }}
          >
            Get Free Quote
          </a>
          <a
            href="#projects"
            style={{
              flex: 1,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#fff',
              fontWeight: 500,
              fontSize: 14,
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
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 20,
          }}
        >
          {['✓ Free Site Survey', '✓ MNRE Certified', '✓ Since 1985'].map((text) => (
            <span
              key={text}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom anchor: scroll dot */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Scroll indicator */}
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
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0 }}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#F5A623',
            }}
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
      {/* Dark Overlay */}
      <div className="hero__overlay" />

      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__inner">
        {/* LEFT: Text Content */}
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>Kerala's Trusted Solar Experts</motion.p>
          <motion.h1 className="hero__headline" variants={fadeUp}>Sun-Powered Solutions for Every Kerala Home</motion.h1>
          <motion.p className="hero__subheadline" variants={fadeUp}>
            Professional solar installation with up to <strong>₹78,000 government subsidy</strong>. MNRE empanelled. Mahindra Solarize authorized partner.
          </motion.p>
          <motion.div className="hero__ctas" variants={fadeUp}>
            <a href="#contact" className="btn btn--amber btn--hero" id="cta-hero-primary">Get Free Quote</a>
            <a href="#projects" className="btn btn--outline btn--hero" id="cta-hero-secondary">View Our Work</a>
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
            <li className="trust-signal">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4.5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Since 1985
            </li>
          </motion.ul>
        </motion.div>

        {/* RIGHT: Hero Image */}
        <motion.div
          className="hero__image-wrapper"
          id="hero-image-wrapper"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__image-frame">
            <div className="hero__image-container">
              <img
                src="/hero-solar.png"
                alt="Professional solar panel installation on a Kerala home rooftop"
                className="hero__image"
                id="hero-img"
                width="900"
                height="900"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            {/* Badge — desktop only */}
            <div className="hero__badge">
              <div className="hero__badge-inner">
                <span className="badge-number">500+</span>
                <span className="badge-label">Homes Powered</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}