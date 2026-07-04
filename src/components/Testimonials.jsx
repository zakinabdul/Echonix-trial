import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const testimonials = [
  {
    id: 'testi-card-1',
    quote: "Echonix installed our 5KW system in just 3 days. The subsidy process was handled completely by them. Our electricity bill dropped from ₹4,500 to under ₹300.",
    name: 'Abdul Rahiman',
    location: 'Malappuram, Kerala',
    avatar: 'A',
    label: 'Customer Testimonial · Malappuram',
    videoId: 'dQw4w9WgXcQ', // Featured video testimonial
    delay: 0,
  },
  {
    id: 'testi-card-2',
    quote: "Professional team, quality panels, and excellent after-service. Best decision we made for our home in Tirur.",
    name: 'Mohammed Shafi',
    location: 'Tirur, Malappuram',
    avatar: 'M',
    label: 'Customer Testimonial · Tirur',
    delay: 0.1,
  },
  {
    id: 'testi-card-3',
    quote: "Extremely satisfied with the commercial installation. The bi-monthly utility charges of our offices dropped significantly. Fast net metering approval from KSEB.",
    name: 'Dr. Anjali Nair',
    location: 'Kozhikode, Kerala',
    avatar: 'A',
    label: 'Customer Testimonial · Kozhikode',
    delay: 0.2,
  },
  {
    id: 'testi-card-4',
    quote: "Their 40-year electrical heritage really shows in their safety and precision. The wiring and structural mounts are neat, strong, and monsoon-proof.",
    name: 'K. Raghavan',
    location: 'Ernakulam, Kerala',
    avatar: 'R',
    label: 'Customer Testimonial · Ernakulam',
    delay: 0.3,
  }
]

function TestiCard({ card }) {
  const [playing, setPlaying] = useState(false)
  const hasVideo = !!card.videoId

  return (
    <motion.div
      className={`testi-card ${hasVideo ? 'testi-card--video' : 'testi-card--text'}`}
      id={card.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay: card.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {hasVideo && (
        <div className="testi-card__video">
          <div className="testi-card__video-inner">
            {playing ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1`}
                title={card.label}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 0, display: 'block', height: '100%', width: '100%' }}
              />
            ) : (
              <div
                className="testi-card__thumb"
                role="button"
                tabIndex={0}
                aria-label="Play customer testimonial video"
                onClick={() => setPlaying(true)}
                onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
              >
                <button className="play-btn" aria-label="Play video" tabIndex={-1}>
                  <span className="play-btn__icon" aria-hidden="true"></span>
                </button>
                <span className="testi-card__thumb-label">{card.label}</span>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="testi-card__text">
        <div className="testi-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote className="testi-card__quote">{card.quote}</blockquote>
        <div className="testi-card__customer">
          <div className="testi-card__avatar" aria-hidden="true">{card.avatar}</div>
          <div>
            <p className="testi-card__name">{card.name}</p>
            <p className="testi-card__location">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.97 3.5 6.5 3.5 6.5s3.5-3.53 3.5-6.5C9.5 2.57 7.93 1 6 1Zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" fill="currentColor"/>
              </svg>
              {card.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const videoReview = testimonials.find(t => t.videoId)
  const textReviews = testimonials.filter(t => !t.videoId)

  return (
    <section className="testimonials" id="reviews" aria-labelledby="testi-heading">
      <div className="testimonials__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Customer Stories</motion.p>
          <motion.h2 className="section-title" id="testi-heading" variants={fadeUp}>Hear From Our Customers</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>Real homeowners and businesses sharing their solar journey.</motion.p>
        </motion.div>

        {/* Featured Video Card */}
        {videoReview && (
          <div className="testimonials__featured">
            <TestiCard card={videoReview} />
          </div>
        )}

        {/* Sub-grid of Text-only Cards */}
        <div className="testimonials__text-grid">
          {textReviews.map((card) => (
            <TestiCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
