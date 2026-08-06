import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

const testimonials = [
  {
    id: 't1',
    quote: "Since this solar company is experienced in the solar field, I was able to understand it deeply. The sales executive was highly professional and explained everything clearly.",
    name: 'Aseem Hassan',
    location: 'Malappuram, Kerala',
    avatar: 'AH',
    stars: 5,
  },
  {
    id: 't2',
    quote: "Professional team, quality panels, and excellent after-service. Best decision we made for our home in Tirur. Bills dropped by over 90%.",
    name: 'Mohammed Shafi',
    location: 'Tirur, Malappuram',
    avatar: 'MS',
    stars: 5,
  },
  {
    id: 't3',
    quote: "Extremely satisfied with our commercial installation. Bi-monthly utility charges dropped significantly. Fast net metering approval from KSEB.",
    name: 'Dr. Anjali Nair',
    location: 'Kozhikode, Kerala',
    avatar: 'AN',
    stars: 5,
  },
  {
    id: 't4',
    quote: "Their 40-year electrical heritage really shows in their safety and precision. The wiring and mounts are neat, strong, and monsoon-proof.",
    name: 'K. Raghavan',
    location: 'Ernakulam, Kerala',
    avatar: 'KR',
    stars: 5,
  },
]

function StarRow({ count }) {
  return (
    <div className="tr__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F5A623" aria-hidden="true">
          <path d="M7 1l1.55 3.14L12 4.63l-2.5 2.44.59 3.43L7 8.77l-3.09 1.73.59-3.43L2 4.63l3.45-.49L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

function TestiCard({ t }) {
  return (
    <div className="tr__card">
      <StarRow count={t.stars} />
      <blockquote className="tr__quote">"{t.quote}"</blockquote>
      <div className="tr__customer">
        <div className="tr__avatar" aria-hidden="true">{t.avatar}</div>
        <div className="tr__meta">
          <p className="tr__name">{t.name}</p>
          <p className="tr__location">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.97 3.5 6.5 3.5 6.5s3.5-3.53 3.5-6.5C9.5 2.57 7.93 1 6 1Zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" fill="currentColor"/>
            </svg>
            {t.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef(null)

  // Auto-scroll loop on small viewports (mobile)
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let intervalId = null

    const startAutoScroll = () => {
      const isMobile = window.innerWidth <= 600
      if (!isMobile) return

      intervalId = setInterval(() => {
        if (!container) return
        const maxScroll = container.scrollWidth - container.clientWidth
        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          const itemWidth = container.clientWidth * 0.84 + 16
          container.scrollBy({ left: itemWidth, behavior: 'smooth' })
        }
      }, 3000)
    }

    startAutoScroll()

    const handleResize = () => {
      clearInterval(intervalId)
      intervalId = null
      startAutoScroll()
    }

    const handleTouchStart = () => {
      clearInterval(intervalId)
      intervalId = null
    }

    const handleTouchEnd = () => {
      clearInterval(intervalId)
      intervalId = null
      setTimeout(startAutoScroll, 1000)
    }

    window.addEventListener('resize', handleResize)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('resize', handleResize)
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  return (
    <section className="tr" id="reviews" aria-labelledby="tr-heading">
      <div className="tr__inner">

        {/* Header */}
        <motion.div
          className="tr__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Customer Stories</motion.p>
          <motion.h2 className="section-title" id="tr-heading" variants={fadeUp}>
            What Our Customers Say
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Real homeowners and businesses across Kerala sharing their solar journey.
          </motion.p>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, 2-col grid on desktop */}
        <div className="tr__grid" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="tr__grid-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <TestiCard t={t} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
