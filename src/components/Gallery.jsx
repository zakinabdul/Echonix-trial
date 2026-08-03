import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import { useIsMobile } from '../hooks/useIsMobile'
import projects from '../data/projects'

const homeProjects = projects.filter((p) => p.featured).slice(0, 6).map((p, i) => ({
  ...p,
  delay: [0, 0.1, 0.2, 0, 0.1, 0.2][i] ?? 0,
}))

function GalleryCard({ p, lazy = true }) {
  return (
    <article className="gallery-card" role="listitem" id={p.id}>
      <div className="gallery-card__img-wrap">
        <img
          src={p.img || p.image}
          alt={p.alt}
          className="gallery-card__img"
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          width="600"
          height="420"
        />
      </div>
      <div className="gallery-card__overlay">
        <div className="gallery-card__info">
          <h3 className="gallery-card__name">{p.name}</h3>
          <div className="gallery-card__meta-row">
            {p.kw && <span className="gallery-card__kw">{p.kw}</span>}
            {p.kw && p.location && <span className="gallery-card__divider">·</span>}
            {p.location && <span className="gallery-card__location">{p.location}</span>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Gallery() {
  const isMobile = useIsMobile()

  return (
    <section className="gallery" id="projects" aria-labelledby="gallery-heading">
      <div className="gallery__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Portfolio</motion.p>
          <motion.h2 className="section-title" id="gallery-heading" variants={fadeUp}>
            Our Work Across Kerala
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Real installations. Real results. From homes to institutions.
          </motion.p>
        </motion.div>

        {isMobile ? (
          /* ── Mobile: horizontal snap carousel ── */
          <div className="gallery__carousel" role="list" aria-label="Project photos">
            {homeProjects.map((p) => (
              <div key={p.id} className="gallery__carousel-item" role="listitem">
                <GalleryCard p={p} />
              </div>
            ))}
            <div className="gallery__carousel-spacer" aria-hidden="true" />
          </div>
        ) : (
          /* ── Desktop: 3-col grid ── */
          <div className="gallery__grid" role="list">
            {homeProjects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: p.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <GalleryCard p={p} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="gallery__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/projects" className="gallery__view-all" id="view-all-projects">
            View More
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.5 9H14.5M10 4.5L14.5 9L10 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
