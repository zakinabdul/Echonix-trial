import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { label: 'On-Grid Solar', href: '#' },
  { label: 'Off-Grid Solar', href: '#' },
  { label: 'Hybrid Solar', href: '#' },
  { label: 'Solar Inverter', href: '#' },
]

// Desktop dropdown variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
}

// Mobile overlay — slides in from right
const overlayVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
}

// Container for staggering nav links
const navListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

// Each individual nav link
const navItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}
        id="navbar"
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo" id="logo-link" aria-label="Echonix Technology — Home">
            <div className="logo-mark" aria-hidden="true">
              <img src="/logo.png" alt="Echonix Technology" />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__nav" id="main-nav" aria-label="Main navigation">
            <ul className="nav__list" role="list">
              <li className="nav__item"><a href="#" className="nav__link">Home</a></li>

              <li className="nav__item nav__item--dropdown" id="services-dropdown-container" ref={dropdownRef}>
                <button
                  className="nav__link nav__link--dropdown-trigger"
                  id="services-dropdown-btn"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  aria-controls="services-dropdown-menu"
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  Services
                  <svg className={`dropdown-chevron${dropdownOpen ? ' dropdown-chevron--open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      id="services-dropdown-menu"
                      role="menu"
                      aria-labelledby="services-dropdown-btn"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {services.map((s, i) => (
                        <a key={i} href={s.href} className="dropdown-item" role="menuitem" onClick={() => setDropdownOpen(false)}>
                          <span className="dropdown-item__icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M11 2L3 11h6v7l8-9h-6V2z" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                          </span>
                          <div>
                            <strong>{s.label}</strong>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
              <li className="nav__item"><a href="#reviews" className="nav__link">Reviews</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="navbar__actions">
            <a href="#contact" className="btn btn--amber" id="cta-quote-nav">Get Free Quote</a>
            <button
              className={`hamburger${mobileOpen ? ' hamburger--active' : ''}`}
              id="hamburger-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              style={{ display: 'flex' }}
            >
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100dvh',
              background: '#1A3C2E',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {/* ── Top bar ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0 24px',
              height: 64,
              flexShrink: 0,
            }}>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M6 6L22 22M22 6L6 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* ── Nav Links ── */}
            <motion.nav
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: 32,
                paddingTop: 16,
                paddingBottom: 16,
              }}
              variants={navListVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Home */}
              <motion.div variants={navItemVariants}>
                <a
                  href="#"
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    paddingBottom: 28,
                  }}
                >
                  Home
                </a>
              </motion.div>

              {/* Services with accordion */}
              <motion.div variants={navItemVariants}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: mobileServicesOpen ? 16 : 28,
                  }}
                >
                  Services
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden', paddingLeft: 16, marginBottom: 28 }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 4 }}>
                        {services.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            onClick={closeMenu}
                            style={{
                              fontSize: 18,
                              color: 'rgba(255,255,255,0.70)',
                              textDecoration: 'none',
                              fontWeight: 400,
                            }}
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Projects */}
              <motion.div variants={navItemVariants}>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    paddingBottom: 28,
                  }}
                >
                  Projects
                </a>
              </motion.div>

              {/* Reviews */}
              <motion.div variants={navItemVariants}>
                <a
                  href="#reviews"
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    paddingBottom: 28,
                  }}
                >
                  Reviews
                </a>
              </motion.div>

              {/* Contact */}
              <motion.div variants={navItemVariants}>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    paddingBottom: 0,
                  }}
                >
                  Contact
                </a>
              </motion.div>
            </motion.nav>

            {/* ── Bottom area ── */}
            <div style={{ padding: '0 32px 32px', flexShrink: 0 }}>
              <a
                href="#contact"
                onClick={closeMenu}
                id="cta-quote-mobile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: 52,
                  background: '#F5A623',
                  color: '#1A3C2E',
                  fontSize: 16,
                  fontWeight: 700,
                  borderRadius: 99,
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                Get Free Quote
              </a>
              <a
                href="https://wa.me/919847000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginTop: 16,
                  color: 'rgba(255,255,255,0.70)',
                  textDecoration: 'none',
                  fontSize: 14,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
