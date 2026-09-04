'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import { useIsMobile } from '../hooks/useIsMobile'

const steps = [
  {
    id: 'hiw-step-1',
    num: '01',
    title: 'Consultation',
    desc: 'We understand your energy needs and site conditions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h8M12 8v8" stroke="#1A3C2E" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9" stroke="#1A3C2E" strokeWidth="1.8"/>
        <path d="M15.5 8.5C14.5 7.5 13.3 7 12 7" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'hiw-step-2',
    num: '02',
    title: 'Site Survey & Approval',
    desc: 'Our engineers conduct a detailed site survey and handle all KSEB and government approvals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="#1A3C2E" strokeWidth="1.8"/>
        <path d="M7 20h10M12 17v3" stroke="#1A3C2E" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 8l3 3 5-5" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'hiw-step-3',
    num: '03',
    title: 'Professional Installation',
    desc: 'Certified technicians install your system using premium panels and components.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 4h-5L8 8H4l1 4h2l1 8h8l1-8h2l1-4h-4L14.5 4Z" stroke="#1A3C2E" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 12l2 2 4-4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'hiw-step-4',
    num: '04',
    title: 'Handover & Support',
    desc: 'We hand over a fully operational system with monitoring setup and after-sales support.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9" stroke="#1A3C2E" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 3l3 3-3 3" stroke="#1A3C2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function StepCard({ step }) {
  return (
    <div className="hiw__step-card">
      <span className="hiw__step-num" aria-hidden="true">{step.num}</span>
      <div className="hiw__icon-circle" aria-hidden="true">{step.icon}</div>
      <h3 className="hiw__step-title">{step.title}</h3>
      <p className="hiw__step-desc">{step.desc}</p>
    </div>
  )
}

export default function HowItWorks() {
  const isMobile = useIsMobile()

  return (
    <section className="hiw" id="how-it-works" aria-labelledby="hiw-heading">
      <div className="hiw__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Process</motion.p>
          <motion.h2 className="section-title" id="hiw-heading" variants={fadeUp}>
            How We Install Your Solar System
          </motion.h2>
        </motion.div>

        {isMobile ? (
          /* ── Mobile: horizontal snap carousel ── */
          <div className="hiw__carousel" role="list" aria-label="Installation steps">
            {steps.map((step) => (
              <div key={step.id} className="hiw__carousel-item" role="listitem" id={step.id}>
                <StepCard step={step} />
              </div>
            ))}
            <div className="hiw__carousel-spacer" aria-hidden="true" />
          </div>
        ) : (
          /* ── Desktop: 4-col grid with connector line ── */
          <div className="hiw__steps" id="hiw-steps">
            <svg className="hiw__svg-connector" id="hiw-connector" viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true">
              <line className="hiw__dash-line" x1="0" y1="1" x2="1000" y2="1"/>
            </svg>
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                className="hiw__step"
                id={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hiw__step-num" aria-hidden="true">{step.num}</span>
                <div className="hiw__icon-circle" aria-hidden="true">{step.icon}</div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
