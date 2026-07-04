import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const featured = projects.filter((p) => p.featured)

/**
 * FeaturedProjects — "Featured Projects" section on the /projects page.
 * Uses the same .gallery section layout and .gallery__grid CSS as the home Gallery.
 * Featured cards carry a small "Featured" badge.
 */
export default function FeaturedProjects({ hideHeader = false }) {
  if (featured.length === 0) return null

  return (
    <section className="gallery gallery--page" aria-labelledby="featured-heading">
      <div className="gallery__inner">
        {hideHeader ? (
          <h2 className="projects-section-title projects-section-title--white">
            Featured Installations
          </h2>
        ) : (
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="section-eyebrow" variants={fadeUp}>
              Our Best Work
            </motion.p>
            <motion.h2
              className="section-title"
              id="featured-heading"
              variants={fadeUp}
            >
              Featured Projects
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              Landmark installations that showcase our capabilities across Kerala.
            </motion.p>
          </motion.div>
        )}

        <div className="gallery__grid" role="list">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.1}
              showBadge={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
