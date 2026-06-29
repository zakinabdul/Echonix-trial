import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const faqs = [
  {
    id: 'faq-1',
    q: 'How much does solar installation cost in Kerala?',
    a: 'The cost depends on your system size. A typical 3KW residential system costs ₹1.5–2 lakh before subsidy. With the PM Surya Ghar subsidy, you can receive up to ₹78,000, significantly reducing your investment.',
  },
  {
    id: 'faq-2',
    q: 'What is the government subsidy for solar in Kerala?',
    a: 'Under the PM Surya Ghar Muft Bijli Yojana, homeowners can get ₹30,000 for 1KW, ₹60,000 for 2KW, and ₹78,000 for 3KW and above systems.',
  },
  {
    id: 'faq-3',
    q: 'How long does the installation take?',
    a: 'A typical residential installation is completed in 2–4 days after all approvals are in place. We handle KSEB and government approvals on your behalf.',
  },
  {
    id: 'faq-4',
    q: 'Will solar work during power cuts?',
    a: 'On-grid systems do not work during power cuts for safety reasons. However, our Hybrid systems with battery backup provide uninterrupted power even when the grid is down.',
  },
  {
    id: 'faq-5',
    q: 'What maintenance does a solar system need?',
    a: 'Solar panels require minimal maintenance — primarily cleaning every 3–6 months. We offer Annual Maintenance Contract (AMC) plans for worry-free ownership.',
  },
  {
    id: 'faq-6',
    q: 'How soon will I recover my investment?',
    a: 'Most residential solar systems in Kerala achieve payback within 4–6 years, after which you enjoy virtually free electricity for 20+ years.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="faq-item"
      id={item.id}
      role="listitem"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className="faq-question"
        aria-expanded={open}
        aria-controls={`${item.id}-answer`}
        id={`${item.id}-btn`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-question__text">{item.q}</span>
        <span className="faq-question__icon" aria-hidden="true">
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            id={`${item.id}-answer`}
            role="region"
            aria-labelledby={`${item.id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer__inner">
              <p>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__inner">
        <motion.div
          className="faq__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Got Questions?</motion.p>
          <motion.h2 className="section-title faq__title" id="faq-heading" variants={fadeUp}>Clear Your Doubts</motion.h2>
        </motion.div>

        <div className="faq__list" id="faq-list" role="list">
          {faqs.map((item, i) => (
            <FAQItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
