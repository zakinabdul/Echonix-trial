import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'

/**
 * ProjectCard — single project card.
 * Reuses the existing .gallery-card CSS classes exactly.
 * Handles missing/broken images gracefully with a placeholder.
 */
export default function ProjectCard({ project, delay = 0, showBadge = false }) {
  const [imgError, setImgError] = useState(false)

  const hasImage = project.image && !imgError

  return (
    <motion.article
      className="gallery-card"
      role="listitem"
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      tabIndex={0}
    >
      {/* Featured badge — reuses .service-card__badge-popular */}
      {showBadge && (
        <span className="service-card__badge-popular" aria-label="Featured project">
          Featured
        </span>
      )}

      <div className="gallery-card__img-wrap">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.alt || project.name}
            className="gallery-card__img"
            loading="lazy"
            decoding="async"
            width="600"
            height="420"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Graceful placeholder when image is missing */
          <div className="gallery-card__placeholder" aria-hidden="true">
            <span className="gallery-card__placeholder-name">{project.name}</span>
          </div>
        )}
      </div>

      <div className="gallery-card__overlay">
        <div className="gallery-card__info">
          <h3 className="gallery-card__name">{project.name}</h3>
          <div className="gallery-card__meta-row">
            {project.kw && <span className="gallery-card__kw">{project.kw}</span>}
            {project.kw && project.location && <span className="gallery-card__divider">·</span>}
            {project.location && <span className="gallery-card__location">{project.location}</span>}
          </div>
          {project.type && (
            <p className="gallery-card__meta" style={{ fontSize: '13px', marginTop: '4px', opacity: 0.8 }}>
              {project.type}{project.year ? ` · ${project.year}` : ''}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  )
}
