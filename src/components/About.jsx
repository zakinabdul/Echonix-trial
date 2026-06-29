import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/animations'

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <motion.div
          className="about__text"
          id="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow about__eyebrow">Who We Are</p>
          <h2 className="about__heading" id="about-heading">
            Four Decades of Electrical Expertise, Now Powering Kerala with Solar
          </h2>
          <p className="about__body">
            Echonix Technology Pvt. Ltd. is a renewable energy developer based in Tirur, Malappuram. We are a division of ECHO — a trusted name in the electrical and electronics industry since 1985. With over 3.5 MW of solar installed across Kerala, we bring four decades of technical expertise to every rooftop we touch.
          </p>
          <div className="about__badges">
            <span className="credential-badge">
              <span className="credential-badge__icon" aria-hidden="true">🏛</span>
              MNRE Empanelled EPC Company
            </span>
            <span className="credential-badge">
              <span className="credential-badge__icon" aria-hidden="true">⚡</span>
              Mahindra Solarize Authorized Channel Partner
            </span>
          </div>
        </motion.div>

        <motion.div
          className="about__image-wrap"
          id="about-image-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="about__image-frame">
            <img
              src="/about-team.png"
              alt="Echonix team installing solar panels on a commercial rooftop in Kerala"
              className="about__image"
              width="900"
              height="700"
              loading="lazy"
              decoding="async"
            />
            <div className="about__corner-tag" aria-label="Established 2020">
              <span className="corner-tag__line">Est.</span>
              <span className="corner-tag__year">2020</span>
            </div>
            <div className="about__exp-badge">
              <span className="exp-badge__num">40<sup>+</sup></span>
              <span className="exp-badge__label">Years of<br />Expertise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
