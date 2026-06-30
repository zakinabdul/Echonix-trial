import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const cards = [
  {
    id: 'service-on-grid',
    title: 'On-Grid Solar',
    desc: 'Connect your system to the KSEB grid and earn from excess power generation through net metering.',
    popular: true,
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
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
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
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
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
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
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
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

// ── Mobile: single card that receives its scroll-driven opacity/scale ──
function MobileCard({ card, opacity, scale, y }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
        width: '90vw',
        maxWidth: 340,
        opacity,
        scale,
        y,
        willChange: 'opacity, transform',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          border: '1px solid rgba(26,60,46,0.08)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          padding: 28,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 3,
          height: '100%',
          background: '#1A3C2E',
          borderRadius: 0,
        }} />

        {/* Most Popular badge */}
        {card.popular && (
          <div style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: '#F5A623',
            color: '#1A3C2E',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '4px 11px',
            borderRadius: 50,
          }}>
            Most Popular
          </div>
        )}

        {/* Icon */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: '#FFF4E0',
          border: '1px solid rgba(245,166,35,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}>
          {card.icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: 22,
          color: '#0F1C15',
          lineHeight: 1.2,
          margin: '0 0 10px',
        }}>
          {card.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: '#666',
          margin: '0 0 20px',
        }}>
          {card.desc}
        </p>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          paddingTop: 16,
          borderTop: '1px solid #E8E6E1',
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.78rem',
            color: '#1A3C2E',
            fontWeight: 500,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Free site survey included
          </span>
          <a
            href="#"
            aria-label={`Learn more about ${card.title}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#1A3C2E',
              textDecoration: 'none',
            }}
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ── Mobile Services section with sticky scroll-driven stack ──
function MobileServices() {
  const outerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  // Progress ranges for each card (0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1)
  const n = cards.length
  const seg = 1 / n

  // Opacity for each card
  const opacity0 = useTransform(scrollYProgress, [0, 0.03, seg - 0.05, seg], [1, 1, 1, 0])
  const opacity1 = useTransform(scrollYProgress, [seg - 0.05, seg, seg * 2 - 0.05, seg * 2], [0, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [seg * 2 - 0.05, seg * 2, seg * 3 - 0.05, seg * 3], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [seg * 3 - 0.05, seg * 3, 1, 1], [0, 1, 1, 1])
  const opacities = [opacity0, opacity1, opacity2, opacity3]

  // Scale for each card
  const scale0 = useTransform(scrollYProgress, [0, 0.03, seg - 0.05, seg], [1, 1, 1, 0.95])
  const scale1 = useTransform(scrollYProgress, [seg - 0.05, seg, seg * 2 - 0.05, seg * 2], [0.92, 1, 1, 0.95])
  const scale2 = useTransform(scrollYProgress, [seg * 2 - 0.05, seg * 2, seg * 3 - 0.05, seg * 3], [0.92, 1, 1, 0.95])
  const scale3 = useTransform(scrollYProgress, [seg * 3 - 0.05, seg * 3, 1, 1], [0.92, 1, 1, 1])
  const scales = [scale0, scale1, scale2, scale3]

  // Y offset (outgoing card moves up slightly)
  const y0 = useTransform(scrollYProgress, [seg - 0.05, seg], [0, -20])
  const y1 = useTransform(scrollYProgress, [seg * 2 - 0.05, seg * 2], [0, -20])
  const y2 = useTransform(scrollYProgress, [seg * 3 - 0.05, seg * 3], [0, -20])
  const y3 = useTransform(scrollYProgress, [1, 1], [0, 0])
  const ys = [y0, y1, y2, y3]

  // Active card index for dots
  const activeCard = useTransform(scrollYProgress, [0, seg, seg * 2, seg * 3, 1], [0, 1, 2, 3, 3])

  return (
    // Outer wrapper — 300vh gives scroll space without visual gap
    <div ref={outerRef} style={{ height: '300vh', position: 'relative' }}>
      {/* Sticky inner container — fills viewport */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#F8F6F1',
      }}>
        {/* Section header */}
        <div style={{ padding: '48px 24px 0', textAlign: 'center', flexShrink: 0 }}>
          <p style={{
            color: '#F5A623',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            SOLAR SOLUTIONS
          </p>
          <h2 id="services-heading" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 28,
            color: '#0F1C15',
            marginTop: 8,
            marginBottom: 8,
          }}>
            Our Solar Solutions
          </h2>
          <p style={{
            fontSize: 13,
            color: '#6B7C72',
            lineHeight: 1.6,
            maxWidth: 280,
            margin: '0 auto',
          }}>
            From grid-connected systems to complete energy independence.
          </p>
        </div>

        {/* Cards stack */}
        <div style={{ flex: 1, position: 'relative' }}>
          {cards.map((card, i) => (
            <MobileCard
              key={card.id}
              card={card}
              opacity={opacities[i]}
              scale={scales[i]}
              y={ys[i]}
            />
          ))}
        </div>

        {/* Progress dots */}
        <div style={{
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
          {cards.map((_, i) => (
            <ProgressDot key={i} index={i} activeCard={activeCard} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProgressDot({ index, activeCard }) {
  const width = useTransform(
    activeCard,
    [index - 0.5, index, index + 0.5],
    [6, 20, 6]
  )
  const bg = useTransform(
    activeCard,
    [index - 0.5, index, index + 0.5],
    ['#E8E6E1', '#F5A623', '#E8E6E1']
  )
  return (
    <motion.div style={{
      width,
      height: 6,
      borderRadius: 99,
      background: bg,
      flexShrink: 0,
    }} />
  )
}

export default function Services() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <section id="services" aria-labelledby="services-heading">
        <MobileServices />
      </section>
    )
  }

  // ── Desktop: 4-column grid with staggered fade-up ──
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

        <motion.div
          className="services__grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
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
      </div>
    </section>
  )
}
