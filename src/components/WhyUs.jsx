import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const cards = [
  {
    id: 'diff-card-1',
    title: 'MNRE & KSEB Certified',
    desc: 'All installations are fully compliant with MNRE guidelines and KSEB grid connection standards.',
    delay: 0,
    icon: (
      <svg className="diff-card__icon" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" stroke="#F5A623" strokeWidth="1.8"/>
        <path d="M12 18l4 4 8-8" stroke="#F5A623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8v2M18 26v2M8 18h2M26 18h2" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'diff-card-2',
    title: 'Subsidy Assistance',
    desc: 'We handle the entire government subsidy paperwork — up to ₹78,000 — on your behalf.',
    delay: 0.15,
    icon: (
      <svg className="diff-card__icon" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="20" rx="4" stroke="#F5A623" strokeWidth="1.8"/>
        <path d="M4 16h28" stroke="#F5A623" strokeWidth="1.8"/>
        <path d="M10 22h6M22 22h4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 6l2-2 2 2 2-2 2 2" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'diff-card-3',
    title: 'End-to-End Service',
    desc: 'From survey to installation to maintenance, we handle every step in-house.',
    delay: 0.3,
    icon: (
      <svg className="diff-card__icon" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="10" r="4" stroke="#F5A623" strokeWidth="1.8"/>
        <path d="M18 14v8" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 28c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 18l12 4 12-4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'diff-card-4',
    title: '5-Year Warranty',
    desc: 'Comprehensive warranty on all panels, inverters, and workmanship.',
    delay: 0.45,
    icon: (
      <svg className="diff-card__icon" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L6 8v10c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V8L18 4Z" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M13 18l3 3 7-7" stroke="#F5A623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="diff" id="why-us" aria-labelledby="diff-heading">
      <div className="diff__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow diff__eyebrow" variants={fadeUp}>Our Edge</motion.p>
          <motion.h2 className="section-title diff__title" id="diff-heading" variants={fadeUp}>Why Kerala Trusts Echonix</motion.h2>
        </motion.div>

        <div className="diff__grid">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="diff-card"
              id={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: card.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="diff-card__icon-wrap" aria-hidden="true">{card.icon}</div>
              <h3 className="diff-card__title">{card.title}</h3>
              <p className="diff-card__desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
