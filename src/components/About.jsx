import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'

export default function About() {
  const [playing, setPlaying] = useState(false)
  const videoId = 'dQw4w9WgXcQ' // Editable YouTube Video ID for About Us

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
            {playing ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Echonix Solar Corporate Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 0, display: 'block', width: '100%', height: '100%', aspectRatio: '900/700' }}
              />
            ) : (
              <div 
                className="about__video-trigger"
                onClick={() => setPlaying(true)}
                style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
              >
                <img
                  src="/about-team.png"
                  alt="Echonix team installing solar panels on a commercial rooftop in Kerala"
                  className="about__image"
                  width="900"
                  height="700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Play Button Overlay */}
                <div className="about__play-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                  <div className="play-btn" aria-label="Play video">
                    <span className="play-btn__icon" aria-hidden="true"></span>
                  </div>
                </div>

                <div className="about__corner-tag" aria-label="Established 1985">
                  <span className="corner-tag__line">Est.</span>
                  <span className="corner-tag__year">1985</span>
                </div>
                <div className="about__exp-badge">
                  <span className="exp-badge__num">40<sup>+</sup></span>
                  <span className="exp-badge__label">Years of<br />Expertise</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

