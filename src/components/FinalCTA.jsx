import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../hooks/animations'

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone) setSubmitted(true)
  }

  return (
    <section className="final-cta" id="contact" aria-labelledby="final-cta-heading">
      <div className="final-cta__inner">
        <div className="final-cta__layout">
          {/* Left Column */}
          <motion.div
            className="final-cta__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="final-cta__eyebrow-wrap">
              <span className="cta-eyebrow-line"></span>
              <span className="cta-eyebrow">FREE CONSULTATION</span>
              <span className="cta-eyebrow-line"></span>
            </div>
            <h2 className="final-cta__heading" id="final-cta-heading">Ready to Go Solar?</h2>
            <p className="final-cta__subtext">Get a free consultation and site survey. No commitment, no cost.</p>
            <ul className="final-cta__bullets" role="list">
              <li role="listitem">
                <span className="bullet-icon" aria-hidden="true">✓</span>
                <span className="bullet-text">Response within 2 hours</span>
              </li>
              <li role="listitem">
                <span className="bullet-icon" aria-hidden="true">✓</span>
                <span className="bullet-text">Free site survey included</span>
              </li>
              <li role="listitem">
                <span className="bullet-icon" aria-hidden="true">✓</span>
                <span className="bullet-text">MNRE certified installation team</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="final-cta__right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="cta-card">
              <h3 className="cta-card__title">Get Your Free Quote</h3>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '24px 0', color: '#1A3C2E' }}
                >
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🌞</div>
                  <p style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>We'll be in touch soon!</p>
                  <p style={{ fontSize: 14, opacity: 0.7 }}>Expect a call within 2 hours.</p>
                </motion.div>
              ) : (
                <>
                  <a
                    href="https://wa.me/919072551144"
                    className="cta-card__wa-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: '#25D366',
                      color: '#fff',
                      height: '56px',
                      borderRadius: '99px',
                      fontSize: '17px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(37,211,102,0.3)',
                      width: '100%',
                      boxSizing: 'border-box',
                      marginBottom: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>💬 WhatsApp us for a free quote</span>
                  </a>
                  <div style={{
                    textAlign: 'center',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '13px',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    — or fill the form below —
                  </div>
                  <form className="cta-card__form" id="cta-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="cta-name" className="sr-only">Full Name</label>
                      <input
                        type="text"
                        id="cta-name"
                        className="form-input"
                        placeholder="Your Name"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cta-phone" className="sr-only">Phone Number</label>
                      <input
                        type="tel"
                        id="cta-phone"
                        className="form-input"
                        placeholder="Phone Number"
                        required
                        aria-required="true"
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    <button type="submit" className="cta-submit-btn" id="cta-submit-btn">
                      <span>Get Free Quote</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
