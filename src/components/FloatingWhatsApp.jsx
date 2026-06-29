import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="floating-wa__label">Chat with us</span>
      <span className="floating-wa__icon-wrap">
        <img src="/whatsapp-white.png" alt="" className="floating-wa__svg" style={{ display: 'block' }} />
        <motion.span
          className="floating-wa__ping"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
        />
      </span>
    </motion.a>
  )
}
