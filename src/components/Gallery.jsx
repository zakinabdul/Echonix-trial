import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import projects from '../data/projects'

// Show all 6 projects (3 featured first, then the rest)
const featured = projects.filter((p) => p.featured)
const rest = projects.filter((p) => !p.featured)
const homeProjects = [...featured, ...rest]

function GalleryCard({ p, index = 0 }) {
  return (
    <motion.article
      className="gal__card"
      id={p.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="gal__card-inner">
        <div className="gal__img-wrap">
          <img
            src={p.image}
            alt={p.alt || p.name}
            className="gal__img"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Overlay — always visible, with gradient fade */}
        <div className="gal__overlay">
          <div className="gal__overlay-bg" />
          <div className="gal__info">
            {p.type && <span className="gal__type">{p.type}</span>}
            <h3 className="gal__name">{p.name}</h3>
            <div className="gal__meta">
              {p.kw && <span className="gal__kw">{p.kw}</span>}
              {p.kw && p.location && <span className="gal__dot" aria-hidden="true">·</span>}
              {p.location && <span className="gal__location">{p.location}</span>}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Gallery() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    let intervalId
    const startAutoScroll = () => {
      const isMobile = window.innerWidth <= 600
      if (!isMobile) return

      intervalId = setInterval(() => {
        if (!grid) return
        const maxScroll = grid.scrollWidth - grid.clientWidth
        if (grid.scrollLeft >= maxScroll - 5) {
          grid.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          const scrollAmount = grid.clientWidth * 0.85 + 16
          grid.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }, 3500)
    }

    startAutoScroll()

    const handleResize = () => {
      clearInterval(intervalId)
      startAutoScroll()
    }

    window.addEventListener('resize', handleResize)

    const handleTouchStart = () => {
      clearInterval(intervalId)
    }

    const handleTouchEnd = () => {
      clearInterval(intervalId)
      startAutoScroll()
    }

    grid.addEventListener('touchstart', handleTouchStart, { passive: true })
    grid.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('resize', handleResize)
      if (grid) {
        grid.removeEventListener('touchstart', handleTouchStart)
        grid.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  return (
    <section className="gal" id="projects" aria-labelledby="gal-heading">
      <div className="gal__inner">

        {/* Header */}
        <motion.div
          className="gal__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Portfolio</motion.p>
          <motion.h2 className="section-title" id="gal-heading" variants={fadeUp}>
            Our Work Speaks<br />Through <em className="gal__heading-em">Our Clients</em>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Real installations across Kerala — homes, institutions, and industry.
          </motion.p>
        </motion.div>

        {/* Grid — 3-col desktop, 2-col tablet, 1-col swipe on mobile */}
        <div className="gal__grid" role="list" ref={gridRef}>
          {homeProjects.map((p, i) => (
            <div key={p.id} role="listitem" className="gal__grid-item">
              <GalleryCard p={p} index={i} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gal__cta">
          <Link to="/projects" className="gal__view-all">
            View All Projects
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.5 9H14.5M10 4.5L14.5 9L10 13.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
