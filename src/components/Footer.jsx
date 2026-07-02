import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Signature */}
        <div className="footer__signature">
          <span className="footer__signature-text">ECHONIX</span>
          <div className="footer__signature-svg-wrap" aria-hidden="true">
            <svg viewBox="0 0 1200 160" className="footer__signature-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20h1200M0 50h1200M0 80h1200M0 110h1200M0 140h1200" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
              <path d="M100 0v160M200 0v160M300 0v160M400 0v160M500 0v160M600 0v160M700 0v160M800 0v160M900 0v160M1000 0v160M1100 0v160" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
              <rect x="202" y="22" width="96" height="26" fill="var(--clr-amber)" opacity="0.08"/>
              <rect x="502" y="82" width="96" height="26" fill="var(--clr-amber)" opacity="0.08"/>
              <rect x="802" y="52" width="96" height="26" fill="var(--clr-amber)" opacity="0.08"/>
              <circle cx="600" cy="-40" r="160" stroke="var(--clr-amber)" strokeDasharray="6 8" strokeWidth="1.2" opacity="0.15"/>
            </svg>
          </div>
        </div>

        {/* Main Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo-wrap">
              <span className="footer__logo-text">ECHONIX</span>
            </div>
            <p className="footer__tagline">Delivering High Quality Solar Solutions Since 1985</p>
            <address className="footer__address">
              <span className="address-line">31/63F, Police Lane, Tirur,</span>
              <span className="address-line">Malappuram, Kerala - 676101</span>
            </address>
            <div className="footer__contact-info">
              <p className="contact-line">
                <span className="label">Phone:</span>
                <a href="tel:+919072551144" className="footer__link">+91 9072 55 11 44</a> |{' '}
                <a href="tel:+919633059966" className="footer__link">+91 9633 05 99 66</a>
              </p>
              <p className="contact-line">
                <span className="label">Email:</span>
                <a href="mailto:info@echonix.in" className="footer__link">info@echonix.in</a>
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links-list">
              <li><a href="#" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About Us</a></li>
              <li><a href="#about" className="footer__link">Our Team</a></li>
              <li><a href="#projects" className="footer__link">Projects</a></li>
              <li><a href="#why-solar" className="footer__link">News</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links-list">
              <li><a href="#services" className="footer__link">On-Grid Solar</a></li>
              <li><a href="#services" className="footer__link">Off-Grid Solar</a></li>
              <li><a href="#services" className="footer__link">Hybrid Solar</a></li>
              <li><a href="#services" className="footer__link">Solar Inverter</a></li>
              <li><a href="#services" className="footer__link">Solar Accessories</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className="footer__col">
            <h3 className="footer__col-title">Follow</h3>
            <ul className="footer__links-list">
              <li><a href="https://www.instagram.com/echonix" className="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com/@echonix" className="footer__link" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://linkedin.com/company/echonix" className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://wa.me/919072551144" className="footer__link" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="copyright">© 2025 Echonix Technology Pvt. Ltd. · <a href="#" className="bottom-link">Privacy Policy</a></p>
          <p className="attribution">Powered by <a href="https://zabios.com" className="bottom-link" target="_blank" rel="noopener">Zabios</a></p>
        </div>
      </div>
    </footer>
  )
}
