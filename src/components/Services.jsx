import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const cards = [
  {
    id: 'service-on-grid',
    title: 'On-Grid Solar',
    desc: 'Connect to the KSEB grid and earn credits from surplus power through net metering. Ideal for homes and businesses with stable grid supply.',
    href: '/services#on-grid',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="16" r="6" stroke="#F5A623" strokeWidth="1.8" fill="rgba(245,166,35,0.1)"/>
        <line x1="20" y1="6" x2="20" y2="9" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="20" y1="23" x2="20" y2="26" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="16" x2="13" y2="16" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="27" y1="16" x2="30" y2="16" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="12.9" y1="8.9" x2="15.1" y2="11.1" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="24.9" y1="20.9" x2="27.1" y2="23.1" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="27.1" y1="8.9" x2="24.9" y2="11.1" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="15.1" y1="20.9" x2="12.9" y2="23.1" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M14 31H26M20 27V31" stroke="#1A3C2E" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 35H30M14 31V35M26 31V35" stroke="#1A3C2E" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'service-off-grid',
    title: 'Off-Grid Solar',
    desc: 'Complete energy independence with battery storage. Perfect for remote locations and areas with frequent or extended power outages.',
    href: '/services#off-grid',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="22" width="26" height="12" rx="3" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <rect x="32" y="25.5" width="3" height="5" rx="1" fill="#F5A623"/>
        <rect x="8" y="24" width="10" height="8" rx="1.5" fill="rgba(245,166,35,0.2)"/>
        <circle cx="20" cy="12" r="4.5" stroke="#F5A623" strokeWidth="1.8" fill="rgba(245,166,35,0.1)"/>
        <line x1="20" y1="5" x2="20" y2="7" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="20" y1="16.5" x2="20" y2="19" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M20 19 L20 22" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    id: 'service-hybrid',
    title: 'Hybrid Solar',
    desc: 'The best of both worlds — grid-connected with battery backup. Enjoy zero bills and uninterrupted power even during outages.',
    href: '/services#hybrid',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="#F5A623" strokeWidth="1.8" fill="rgba(245,166,35,0.1)"/>
        <line x1="14" y1="6" x2="14" y2="8.5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="6" y1="14" x2="8.5" y2="14" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <rect x="22" y="22" width="14" height="10" rx="2.5" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <rect x="36" y="25" width="2.5" height="4" rx="1" fill="#F5A623"/>
        <rect x="24" y="24" width="5" height="6" rx="1" fill="rgba(245,166,35,0.25)"/>
        <path d="M8 32H20M14 28V32" stroke="#1A3C2E" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M20 14 L22 20" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'service-inverter',
    title: 'Solar Inverter',
    desc: 'High-efficiency inverters for reliable DC-to-AC conversion. Compatible with all major panel brands, with smart monitoring built in.',
    href: '/services#inverters',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <rect x="12" y="10" width="16" height="8" rx="1.5" stroke="#F5A623" strokeWidth="1.6" fill="none"/>
        <path d="M21 9.5l-3.5 4h4l-2 5 4.5-5H20l1.5-4z" fill="#F5A623" opacity="0.85"/>
        <circle cx="13.5" cy="25" r="1.5" fill="#F5A623"/>
        <circle cx="20" cy="25" r="1.5" fill="#F5A623"/>
        <circle cx="26.5" cy="25" r="1.5" fill="#F5A623"/>
        <line x1="12" y1="29.5" x2="28" y2="29.5" stroke="#1A3C2E" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function ServiceCard({ card }) {
  return (
    <article className="svc-card" id={card.id}>
      <div className="svc-card__icon-wrap" aria-hidden="true">
        {card.icon}
      </div>
      <h3 className="svc-card__title">{card.title}</h3>
      <p className="svc-card__desc">{card.desc}</p>
      <div className="svc-card__footer">
        <span className="svc-card__survey-pill">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Free site survey
        </span>
        <a href={card.href} className="svc-card__link" aria-label={`Learn more about ${card.title}`}>
          Learn more
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  )
}

/* ── Mobile: horizontal swipeable carousel ── */
function MobileServices() {
  return (
    <section className="svc-section" id="services" aria-labelledby="services-heading">
      {/* Header */}
      <div className="svc-section__header">
        <p className="section-eyebrow">SOLAR SOLUTIONS</p>
        <h2 className="section-title" id="services-heading">Our Solar Solutions</h2>
        <p className="section-subtitle">
          From grid-connected systems to complete energy independence.
        </p>
      </div>

      {/* Swipeable carousel */}
      <div className="svc-carousel" role="list" aria-label="Solar service cards">
        {cards.map((card) => (
          <div key={card.id} className="svc-carousel__item" role="listitem">
            <ServiceCard card={card} />
          </div>
        ))}
        {/* trailing spacer so last card isn't flush with edge */}
        <div className="svc-carousel__spacer" aria-hidden="true" />
      </div>

      {/* Scroll hint dots */}
      <div className="svc-carousel__hint" aria-hidden="true">
        <span className="svc-carousel__hint-text">Swipe to explore</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
          <path d="M1 6h18M13 1l5 5-5 5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

/* ── Desktop: 4-column grid ── */
export default function Services() {
  const isMobile = useIsMobile()

  if (isMobile) return <MobileServices />

  return (
    <section className="svc-section" id="services" aria-labelledby="services-heading">
      <div className="svc-section__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={cardVariant}>SOLAR SOLUTIONS</motion.p>
          <motion.h2 className="section-title" id="services-heading" variants={cardVariant}>
            Our Solar Solutions
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariant}>
            From grid-connected systems to complete energy independence — find the right fit for your home or business.
          </motion.p>
        </motion.div>

        <motion.div
          className="svc-grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={cardVariant} role="listitem" className="svc-grid__item">
              <ServiceCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
