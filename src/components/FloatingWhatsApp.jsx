import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWhatsApp() {
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    // Expand to show label after 3 seconds on page
    const expandTimer = setTimeout(() => {
      setShowLabel(true)
    }, 3000)

    // Shrink back to circle after another 3 seconds (6s total)
    const shrinkTimer = setTimeout(() => {
      setShowLabel(false)
    }, 6000)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(shrinkTimer)
    }
  }, [])

  return (
    <motion.a
      href="https://wa.me/919072551144"
      className="floating-wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Echonix on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="floating-wa__layout-container">
        <AnimatePresence>
          {showLabel && (
            <motion.span
              className="floating-wa__label-animated"
              initial={{ opacity: 0, width: 0, x: 20 }}
              animate={{ opacity: 1, width: 'auto', x: 0 }}
              exit={{ opacity: 0, width: 0, x: 20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <span className="floating-wa__label-text">Chat on WhatsApp</span>
            </motion.span>
          )}
        </AnimatePresence>
        
        {/* Hover-triggered label for desktop devices */}
        <span className="floating-wa__label-hover">Chat on WhatsApp</span>
        
        <span className="floating-wa__icon-wrap">
          <img src="/whatsapp-white.png" alt="" className="floating-wa__svg" style={{ display: 'block' }} />
          <span className="floating-wa__pulse-dot" />
        </span>
      </div>
    </motion.a>
  )
}
