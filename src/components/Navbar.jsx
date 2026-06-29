import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { label: 'On-Grid Solar', href: '#', desc: 'Grid-tied systems with net metering' },
  { label: 'Off-Grid Solar', href: '#', desc: 'Complete energy independence' },
  { label: 'Hybrid Solar', href: '#', desc: 'Best of grid & battery backup' },
  { label: 'Solar Inverter', href: '#', desc: 'High-efficiency power conversion' },
]

const overlayVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
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
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
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
                            <span>{s.desc}</span>
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
              style={{ display: 'flex' }} // force flex display on mobile/tablet viewports
            >
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
              <span className="hamburger__bar" style={{ backgroundColor: scrolled ? 'var(--clr-dark)' : '#ffffff' }}></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu mobile-menu--react"
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'var(--clr-white)',
              borderBottom: '1px solid var(--clr-grey)',
              padding: '16px 24px 32px',
              overflowY: 'auto',
              maxHeight: 'calc(100vh - var(--nav-h))',
              display: 'block',
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav__list" role="list">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <a href="#" className="mobile-nav__link" onClick={closeMenu}>Home</a>
                </motion.li>

                {/* Services accordion */}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mobile-nav__group"
                >
                  <button
                    className="mobile-nav__link mobile-nav__group-trigger"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                  >
                    Services
                    <svg className={`dropdown-chevron${mobileServicesOpen ? ' dropdown-chevron--open' : ''}`} width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.ul
                        className="mobile-nav__submenu"
                        role="list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden', listStyle: 'none', padding: '0 0 0 16px', margin: 0 }}
                      >
                        {services.map((s, i) => (
                          <li key={i}>
                            <a href={s.href} className="mobile-nav__sublink" onClick={closeMenu} style={{ display: 'block', padding: '8px 12px', textDecoration: 'none', color: 'var(--clr-grey-dark)', fontSize: '1rem' }}>{s.label}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>

                {[
                  { label: 'Projects', href: '#projects', delay: 0.15 },
                  { label: 'Reviews', href: '#reviews', delay: 0.2 },
                  { label: 'Contact', href: '#contact', delay: 0.25 },
                ].map(({ label, href, delay }) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay }}
                  >
                    <a href={href} className="mobile-nav__link" onClick={closeMenu}>{label}</a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mobile-nav__cta"
                  style={{ marginTop: 16, paddingTop: 16 }}
                >
                  <a href="#contact" className="btn btn--amber btn--full" id="cta-quote-mobile" onClick={closeMenu}>Get Free Quote</a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
