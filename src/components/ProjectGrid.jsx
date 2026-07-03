import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

// Derive unique filter categories from the data
const ALL = 'All'
const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.type).filter(Boolean)))]

const remaining = projects.filter((p) => !p.featured)

/**
 * ProjectGrid — All remaining (non-featured) projects with search + filter.
 * Reuses .gallery section layout, .gallery__grid, .form-input, .credential-badge CSS.
 */
export default function ProjectGrid() {
  const [query, setQuery] = useState('')
  const [activeType, setActiveType] = useState(ALL)

  const filtered = useMemo(() => {
    return remaining.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(query.toLowerCase())
      const matchesType = activeType === ALL || p.type === activeType
      return matchesSearch && matchesType
    })
  }, [query, activeType])

  return (
    <section className="projects-all" aria-labelledby="all-projects-heading">
      <div className="gallery__inner">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>
            All Projects
          </motion.p>
          <motion.h2
            className="section-title"
            id="all-projects-heading"
            variants={fadeUp}
          >
            Our Complete Portfolio
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            From homes to institutions — solar done right, every time.
          </motion.p>
        </motion.div>

        {/* Search + Filter Controls */}
        <motion.div
          className="projects-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Search */}
          <div className="projects-search">
            <label htmlFor="project-search" className="sr-only">
              Search projects by name
            </label>
            <input
              type="search"
              id="project-search"
              className="form-input projects-search__input"
              placeholder="Search projects…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects by name"
            />
            <svg
              className="projects-search__icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Filter pills */}
          <div className="projects-filters" role="group" aria-label="Filter by project type">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`credential-badge projects-filter-btn${activeType === cat ? ' projects-filter-btn--active' : ''}`}
                onClick={() => setActiveType(cat)}
                aria-pressed={activeType === cat}
                id={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="gallery__grid" role="list">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 0.08}
                showBadge={false}
              />
            ))}
          </div>
        ) : (
          <motion.p
            className="projects-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            No projects match your search.
          </motion.p>
        )}
      </div>
    </section>
  )
}
