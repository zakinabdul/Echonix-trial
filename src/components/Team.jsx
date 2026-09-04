'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const team = [
  {
    name: 'C.H. Muhammad',
    role: 'Founder & Managing Director',
    bio: 'Pioneered electrical engineering contracting in Tirur since 1985. Directs overall strategy and ensures long-term operational integrity.',
    experience: '40+ Years Experience',
    cert: 'A-Grade Electrical License Holder',
    avatar: 'CH'
  },
  {
    name: 'Engr. Faisal Rahiman',
    role: 'Head of Solar Engineering',
    bio: 'B.Tech in Electrical Engineering. Has designed and supervised over 3.5 MW of rooftop solar installations across institutional and residential premises in Kerala.',
    experience: '12+ Years Experience',
    cert: 'ANERT Certified Solar Installer',
    avatar: 'FR'
  },
  {
    name: 'Suresh Kumar',
    role: 'Senior Operations & Liaison',
    bio: 'Specialist in government liaisons. Manages all KSEB net-metering installations, feasibility reports, and PM-Surya Ghar subsidy claims.',
    experience: '15+ Years Experience',
    cert: 'KSEB Liaison Expert',
    avatar: 'SK'
  },
  {
    name: 'Vipin Das',
    role: 'Lead Installation Technician',
    bio: 'Supervises mechanical structural integrity, wind load stability calculations, and precision electrical cabling on site.',
    experience: '10+ Years Experience',
    cert: 'Certified Safety Engineer',
    avatar: 'VD'
  }
]

export default function Team() {
  return (
    <section className="team" id="team" aria-labelledby="team-heading">
      <div className="team__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Our Experts</motion.p>
          <motion.h2 className="section-title" id="team-heading" variants={fadeUp}>Meet Echonix Solar Team</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Highly experienced electrical engineers and certified technicians dedicated to delivering quality rooftop solar systems.
          </motion.p>
        </motion.div>

        <div className="team__grid" role="list">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="team-card"
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="team-card__image-container">
                <div className="team-card__avatar-placeholder">
                  {member.avatar}
                </div>
                <div className="team-card__exp-badge">{member.experience}</div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <span className="team-card__cert">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="team-card__cert-icon" aria-hidden="true">
                    <path d="M6 1L7.5 4.5h3.5L8.2 6.8l1.3 3.7L6 8.2l-3.5 2.3 1.3-3.7L1 4.5h3.5L6 1z" fill="currentColor"/>
                  </svg>
                  {member.cert}
                </span>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
