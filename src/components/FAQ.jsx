'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const faqs = [
  {
    id: 'faq-1',
    q: 'How much can I save by switching to solar?',
    a: 'Most Kerala households save 80–95% on electricity bills. A 3KW system typically saves ₹18,000–₹24,000 per year, paying back the investment in 4–6 years.',
  },
  {
    id: 'faq-2',
    q: 'How long does the installation process take?',
    a: 'A typical residential installation is completed in 2–4 days after all approvals. We handle KSEB and government approvals on your behalf, end-to-end.',
  },
  {
    id: 'faq-3',
    q: 'What happens on cloudy days or at night?',
    a: 'On-grid systems use grid power at night. Hybrid systems with battery storage give you power 24/7. On cloudy days, panels still produce 10–25% of their rated output.',
  },
  {
    id: 'faq-4',
    q: 'Are there government incentives available?',
    a: 'Yes. Under PM Surya Ghar Muft Bijli Yojana, homeowners get up to ₹78,000 in subsidy. We handle all paperwork and ensure you receive the full benefit.',
  },
  {
    id: 'faq-5',
    q: 'How long do solar panels last?',
    a: 'Quality panels last 25–30 years with minimal degradation. We supply Tier-1 panels backed by 25-year performance warranties. Inverters typically last 10–15 years.',
  },
  {
    id: 'faq-6',
    q: 'Does solar increase property value?',
    a: 'Yes. Studies show solar installations increase property value by 3–5%. A solar home sells faster and is more attractive to buyers due to the savings it provides.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq__item${open ? ' faq__item--open' : ''}`} id={item.id}>
      <button
        className="faq__q"
        aria-expanded={open}
        aria-controls={`${item.id}-ans`}
        onClick={() => setOpen(v => !v)}
      >
        <span className="faq__q-text">{item.q}</span>
        <span className="faq__q-icon" aria-hidden="true">
          <svg
            width="18" height="18" viewBox="0 0 18 18" fill="none"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
          >
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${item.id}-ans`}
            role="region"
            aria-labelledby={`${item.id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="faq__a">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__inner">

        {/* Left column — heading + image card */}
        <motion.div
          className="faq__left"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="section-eyebrow"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="section-title faq__heading" id="faq-heading"
            initial="hidden" whileInView="visible"
            viewport={viewportOnce} variants={fadeUp}
          >
            Everything You Need<br />
            to Know Before<br />
            <em className="faq__heading-em">Going Solar</em>
          </motion.h2>

          {/* Image card with CTA overlay */}
          <div className="faq__img-card">
            <img
              src="/heroes/hero-solar.png"
              alt="Solar panels installation"
              className="faq__img"
              loading="lazy"
            />
            <div className="faq__img-overlay">
              <p className="faq__img-text">
                <span className="hide-on-mobile">Switching to solar is an important investment, and we understand you may have questions. </span>
                At Echonix we believe in full transparency from system performance to financing and maintenance.
              </p>
              <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20get%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="faq__img-cta">
                Contact Us Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right column — accordion */}
        <motion.div
          className="faq__right"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={item.id} item={item} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
