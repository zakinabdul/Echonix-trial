import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { count: 3.5, suffix: '+ MW', label: 'Solar Installed', isDecimal: true },
  { count: 500, suffix: '+', label: 'Happy Customers', isDecimal: false },
  { count: 40, suffix: '+ Years', label: 'In Business', isDecimal: false },
  { count: null, text: 'MNRE', label: 'Empanelled EPC' },
]

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

function CountUp({ count, suffix, isDecimal }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (count === null) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const startTime = performance.now()
          const update = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutQuart(progress)
            const value = eased * count
            if (ref.current) {
              ref.current.textContent = isDecimal
                ? value.toFixed(1) + suffix
                : Math.round(value) + suffix
            }
            if (progress < 1) requestAnimationFrame(update)
            else if (ref.current) {
              ref.current.textContent = (isDecimal ? count.toFixed(1) : count) + suffix
            }
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, suffix, isDecimal])

  return <span className="stat-number" ref={ref} aria-label={`${count}${suffix}`}>0</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function TrustBar() {
  return (
    <div className="trust-bar" id="trust-bar">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="stat-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: i * 0.1 }}
        >
          {stat.text ? (
            <span className="stat-number" aria-label={stat.text}>{stat.text}</span>
          ) : (
            <CountUp count={stat.count} suffix={stat.suffix} isDecimal={stat.isDecimal} />
          )}
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
