'use client'

import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'

export default function SectionReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      style={{ width: '100%', display: 'block' }}
    >
      {children}
    </motion.div>
  )
}
