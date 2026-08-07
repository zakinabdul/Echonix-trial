import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 'on-grid',
    num: '01',
    title: 'Residential Solar Installation',
    desc: 'Connect to the KSEB grid and earn credits from surplus power through net metering. Ideal for homes and businesses with stable grid supply. Our team handles every step from survey to subsidy.',
    tags: ['Net Metering', 'KSEB Approved', 'PM Subsidy'],
    href: '/services#on-grid',
    image: '/project-residential.png',
  },
  {
    id: 'off-grid',
    num: '02',
    title: 'Commercial & Industrial Solar',
    desc: 'Large-scale solar solutions for factories, offices, and commercial establishments. Significantly reduce operating costs and achieve sustainability targets with our customised EPC service.',
    tags: ['EPC Service', 'ROI Focused', 'High Capacity'],
    href: '/services#off-grid',
    image: '/project-commercial.png',
  },
  {
    id: 'pmc',
    num: '03',
    title: 'Solar PMC (Project Management Consultancy)',
    desc: 'End-to-end management, supervision, and technical oversight for solar projects. We ensure quality assurance, timeline adherence, regulatory compliance, and seamless execution from site audit to grid integration.',
    tags: ['Quality Assurance', 'Project Supervision', 'Vendor Management', 'Grid Integration'],
    href: '/services#pmc',
    image: '/project-industrial.png',
  },
  {
    id: 'maintenance',
    num: '04',
    title: 'Solar Maintenance & Performance Monitoring',
    desc: 'Keep your system running at peak efficiency. Our AMC plans cover regular cleaning, inverter health checks, panel inspection, and real-time performance monitoring.',
    tags: ['AMC Plans', 'Remote Monitoring', '5-Year Warranty'],
    href: '/services#inverters',
    image: '/project-polytechnic.png',
  },
]

export default function Services() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeId, setActiveId] = useState('on-grid')

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 860
      setIsMobile(mobile)
      if (mobile) {
        setActiveId(null)
      } else {
        setActiveId(prev => prev || 'on-grid')
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const active = services.find((s) => s.id === activeId) || services[0]

  return (
    <section className="svc2" id="services" aria-labelledby="svc2-heading">
      <div className="svc2__inner">
        {/* Header */}
        <div className="svc2__header">
          <p className="section-eyebrow">SERVICES</p>
          <h2 className="section-title" id="svc2-heading">
            Our Services Complete<br />
            <em className="svc2__heading-em">One Solution</em> for Every Need
          </h2>
        </div>

        <div className="svc2__layout">
          {/* Left: accordion list */}
          <div className="svc2__list" role="list">
            {services.map((svc) => {
              const isOpen = activeId === svc.id
              return (
                <div
                  key={svc.id}
                  className={`svc2__item${isOpen ? ' svc2__item--active' : ''}`}
                  role="listitem"
                >
                  <button
                    className="svc2__item-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`svc2-panel-${svc.id}`}
                    onClick={() => {
                      if (isMobile) {
                        setActiveId(isOpen ? null : svc.id)
                      } else {
                        setActiveId(svc.id)
                      }
                    }}
                  >
                    <span className="svc2__item-num" aria-hidden="true">{svc.num}</span>
                    <span className="svc2__item-title">{svc.title}</span>
                    <span className="svc2__item-chevron" aria-hidden="true">
                      <svg
                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      >
                        <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`svc2-panel-${svc.id}`}
                        className="svc2__item-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="svc2__item-body">
                          <p className="svc2__item-desc">{svc.desc}</p>
                          <div className="svc2__item-tags" aria-label="Features">
                            {svc.tags.map((tag) => (
                              <span key={tag} className="svc2__tag">{tag}</span>
                            ))}
                          </div>
                          {/* Mobile image (shows inside accordion on mobile) */}
                          <div className="svc2__mobile-img" aria-hidden="true">
                            <img src={svc.image} alt="" loading="lazy" />
                          </div>
                          <a href={svc.href} className="svc2__item-link" aria-label={`Learn more about ${svc.title}`}>
                            Learn More
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right: image panel (desktop only) */}
          <div className="svc2__image-panel" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="svc2__image-wrap"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="svc2__image"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="svc2__image-badge">
                  <span className="svc2__image-badge-num">{active.num}</span>
                  <span className="svc2__image-badge-title">{active.title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
