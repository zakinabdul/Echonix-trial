import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const cards = [
  {
    id: 'service-on-grid',
    title: 'On-Grid Solar',
    desc: 'Connect your system to the KSEB grid and earn from excess power generation through net metering.',
    popular: true,
    icon: (
      <svg className="service-card__icon" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="18" r="6" stroke="#F5A623" strokeWidth="2" fill="rgba(245,166,35,0.12)"/>
        <line x1="22" y1="6" x2="22" y2="9" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="22" y1="27" x2="22" y2="30" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="18" x2="13" y2="18" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="31" y1="18" x2="34" y2="18" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="13.8" y1="9.8" x2="16.1" y2="12.1" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="27.9" y1="23.9" x2="30.2" y2="26.2" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30.2" y1="9.8" x2="27.9" y2="12.1" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16.1" y1="23.9" x2="13.8" y2="26.2" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 34 H28" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 30 V34" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 38 H34" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 34 V38" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M30 34 V38" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'service-off-grid',
    title: 'Off-Grid Solar',
    desc: 'Complete energy independence with battery storage. Perfect for areas with frequent power cuts.',
    icon: (
      <svg className="service-card__icon" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="22" width="28" height="14" rx="3" stroke="#F5A623" strokeWidth="2" fill="none"/>
        <rect x="36" y="26" width="3" height="6" rx="1" fill="#F5A623"/>
        <rect x="10" y="24" width="12" height="10" rx="1.5" fill="rgba(245,166,35,0.25)"/>
        <circle cx="22" cy="12" r="4.5" stroke="#F5A623" strokeWidth="1.8" fill="rgba(245,166,35,0.12)"/>
        <line x1="22" y1="4" x2="22" y2="6.5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="22" y1="17.5" x2="22" y2="20" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M22 20 L22 22" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    id: 'service-hybrid',
    title: 'Hybrid Solar',
    desc: 'Best of both worlds — stay grid-connected with battery backup for completely uninterrupted power.',
    icon: (
      <svg className="service-card__icon" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <clipPath id="left-half"><rect x="0" y="0" width="22" height="44"/></clipPath>
        <circle cx="22" cy="16" r="6" stroke="#F5A623" strokeWidth="2" fill="rgba(245,166,35,0.12)" clipPath="url(#left-half)"/>
        <line x1="22" y1="5" x2="22" y2="8" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="16" x2="13" y2="16" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="24" y="24" width="16" height="10" rx="2.5" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <rect x="40" y="27" width="2.5" height="4" rx="1" fill="#F5A623"/>
        <rect x="26" y="26" width="6" height="6" rx="1" fill="rgba(245,166,35,0.3)"/>
        <path d="M8 34 H20" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M14 30 V34" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 38 H22" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'service-inverter',
    title: 'Solar Inverter',
    desc: 'High-efficiency solar inverters for reliable power conversion. Compatible with all major solar panel brands and battery systems.',
    icon: (
      <svg className="service-card__icon" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="10" y="8" width="24" height="28" rx="3" stroke="#F5A623" strokeWidth="2" fill="none"/>
        <rect x="14" y="12" width="16" height="8" rx="1.5" stroke="#F5A623" strokeWidth="1.8" fill="none"/>
        <path d="M23 11l-4 4.5h4.5l-2.5 5.5 5-5.5h-4.5l1.5-4.5z" fill="#F5A623" stroke="#F5A623" strokeWidth="0.8" strokeLinejoin="round"/>
        <circle cx="15" cy="27" r="1.5" fill="#F5A623"/>
        <circle cx="22" cy="27" r="1.5" fill="#F5A623"/>
        <circle cx="29" cy="27" r="1.5" fill="#F5A623"/>
        <line x1="14" y1="31" x2="30" y2="31" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ServiceCard({ card }) {
  return (
    <article className="service-card" role="listitem" id={card.id}>
      {card.popular && <div className="service-card__badge-popular" aria-label="Most Popular">Most Popular</div>}
      <div className="service-card__icon-wrap" aria-hidden="true">{card.icon}</div>
      <h3 className="service-card__title">{card.title}</h3>
      <p className="service-card__desc">{card.desc}</p>
      <div className="service-card__footer">
        <span className="service-card__survey-badge">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Free site survey included
        </span>
        <a href="#" className="service-card__link" aria-label={`Learn more about ${card.title}`}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </article>
  )
}

export default function Services() {
  const isMobile = useIsMobile()
  const constraintsRef = useRef(null)

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={cardVariant}>SOLAR SOLUTIONS</motion.p>
          <motion.h2 className="section-title" id="services-heading" variants={cardVariant}>Our Solar Solutions</motion.h2>
          <motion.p className="section-subtitle" variants={cardVariant}>
            From grid-connected systems to complete energy independence — find the right solar solution for your home or business.
          </motion.p>
        </motion.div>

        {isMobile ? (
          /* Draggable carousel on mobile */
          <div ref={constraintsRef} style={{ overflow: 'hidden' }}>
            <motion.div
              className="services__grid"
              role="list"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              style={{ display: 'flex', gap: 16, cursor: 'grab', paddingBottom: 8, width: 'max-content' }}
              whileTap={{ cursor: 'grabbing' }}
            >
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  style={{ minWidth: 280, flex: '0 0 auto' }}
                >
                  <ServiceCard card={card} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Desktop 4-col grid */
          <motion.div
            className="services__grid"
            role="list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {cards.map((card) => (
              <motion.article
                key={card.id}
                className="service-card"
                role="listitem"
                id={card.id}
                variants={cardVariant}
              >
                {card.popular && <div className="service-card__badge-popular" aria-label="Most Popular">Most Popular</div>}
                <div className="service-card__icon-wrap" aria-hidden="true">{card.icon}</div>
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__desc">{card.desc}</p>
                <div className="service-card__footer">
                  <span className="service-card__survey-badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Free site survey included
                  </span>
                  <a href="#" className="service-card__link" aria-label={`Learn more about ${card.title}`}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
