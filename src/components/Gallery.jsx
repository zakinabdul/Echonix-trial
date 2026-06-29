import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/animations'

const projects = [
  { id: 'gallery-university', img: '/project-university.png', alt: 'Kannur University solar installation', name: 'Kannur University', kw: '236 KW', delay: 0 },
  { id: 'gallery-polytechnic', img: '/project-polytechnic.png', alt: "Women's Polytechnic Kottakkal solar installation", name: "Women's Polytechnic, Kottakkal", kw: '92 KW', delay: 0.1 },
  { id: 'gallery-civil-station', img: '/project-civil-station.png', alt: 'Mini Civil Station Ponnani solar installation', name: 'Mini Civil Station, Ponnani', kw: '85 KW', delay: 0.2 },
  { id: 'gallery-ksidc', img: '/project-industrial.png', alt: 'KSIDC solar installation', name: 'KSIDC Installation', kw: '70 KW', delay: 0 },
  { id: 'gallery-residential', img: '/project-residential.png', alt: 'Residential solar installation in Malappuram', name: 'Residential', kw: 'Malappuram', delay: 0.1 },
  { id: 'gallery-commercial', img: '/project-commercial.png', alt: 'Commercial solar installation in Tirur', name: 'Commercial', kw: 'Tirur', delay: 0.2 },
]

export default function Gallery() {
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
          <motion.h2 className="section-title" id="gallery-heading" variants={fadeUp}>Our Work Across Kerala</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>Real installations. Real results. From homes to institutions.</motion.p>
        </motion.div>

        <div className="gallery__grid" role="list">
          {projects.map((p) => (
            <motion.article
              key={p.id}
              className="gallery-card"
              role="listitem"
              id={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: p.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="gallery-card__img-wrap">
                <img src={p.img} alt={p.alt} className="gallery-card__img" loading="lazy" decoding="async" width="600" height="420" />
              </div>
              <div className="gallery-card__overlay">
                <div className="gallery-card__info">
                  <p className="gallery-card__name">{p.name}</p>
                  <p className="gallery-card__kw">{p.kw}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="gallery__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a href="#" className="gallery__view-all" id="view-all-projects">
            View All Projects
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.5 9H14.5M10 4.5L14.5 9L10 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
