import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919539220888"
      className="floating-wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Echonix on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="floating-wa__icon-wrap">
        <img src="/whatsapp-white.png" alt="" className="floating-wa__svg" style={{ display: 'block' }} />
        <span className="floating-wa__pulse-dot" />
      </div>
    </motion.a>
  )
}
