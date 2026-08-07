import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', href: isHomePage ? '#about' : '/#about' },
    { label: 'Our Team', href: isHomePage ? '#about' : '/#about' },
    { label: 'Projects', to: '/projects' },
    { label: 'News', href: isHomePage ? '#why-solar' : '/#why-solar' },
  ]

  const serviceLinks = [
    { label: 'On-Grid Solar', href: isHomePage ? '#services' : '/#services' },
    { label: 'Off-Grid Solar', href: isHomePage ? '#services' : '/#services' },
    { label: 'Solar PMC', href: isHomePage ? '#services' : '/#services' },
    { label: 'Solar Inverter', href: isHomePage ? '#services' : '/#services' },
  ]

  const phoneLinks = [
    { href: 'tel:+919539220888', label: '+91 9539 22 08 88' },
    { href: 'tel:+919633059966', label: '+91 9633 05 99 66' },
  ]

  const workingAreas = ['Tirur', 'Kozhikode', 'Cherpulassery', 'Malappuram', 'Wandoor']

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/echonixtechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/echonix-technology-pvt-ltd/home/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 9.1V18H4.1V9.1h2.5Zm.2-2.8c0 .7-.5 1.2-1.4 1.2h-.1c-.8 0-1.3-.5-1.3-1.2S4.5 5 5.4 5s1.4.5 1.4 1.3Zm8.9 6.3V18h-2.5v-4.7c0-1.2-.4-2-1.5-2-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V18H7.7V9.1h2.5v1.1c.3-.6 1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.9Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100083322813630',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8Z" fill="currentColor" />
        </svg>
      ),
    },
  ]

  const renderFooterLink = (link) => {
    if (link.to) {
      return (
        <Link to={link.to} onClick={() => window.scrollTo({ top: 0 })} className="footer__link">
          {link.label}
        </Link>
      )
    }

    return (
      <a href={link.href} className="footer__link">
        {link.label}
      </a>
    )
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Signature */}
        <div className="footer__signature">
          <span className="footer__signature-text">ECHONIX</span>
          <div className="footer__signature-svg-wrap" aria-hidden="true">
            <svg viewBox="0 0 1200 160" className="footer__signature-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20h1200M0 50h1200M0 80h1200M0 110h1200M0 140h1200" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
              <path d="M100 0v160M200 0v160M300 0v160M400 0v160M500 0v160M600 0v160M700 0v160M800 0v160M900 0v160M1000 0v160M1100 0v160" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
              <rect x="202" y="22" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <rect x="502" y="82" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <rect x="802" y="52" width="96" height="26" fill="var(--clr-amber)" opacity="0.08" />
              <circle cx="600" cy="-40" r="160" stroke="var(--clr-amber)" strokeDasharray="6 8" strokeWidth="1.2" opacity="0.15" />
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
            <div className="footer__mobile-contact-split" aria-label="Mobile contact details">
              <div className="footer__mobile-contact-panel footer__mobile-contact-panel--location">
                <address className="footer__mobile-address footer__mobile-address--compact">
                  <span className="address-line">31/63F, Police Lane, Tirur,</span>
                  <span className="address-line">Malappuram, Kerala - 676101</span>
                </address>
                <p className="footer__mobile-working-areas">{workingAreas.join(' • ')}</p>
              </div>

              <div className="footer__mobile-contact-panel footer__mobile-contact-panel--links">
                <div className="footer__mobile-phone-list" aria-label="Phone numbers">
                  {phoneLinks.map((phoneLink) => (
                    <a key={phoneLink.label} href={phoneLink.href} className="footer__contact-link footer__contact-link--phone">
                      <span className="footer__contact-icon footer__contact-icon--phone" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 3.5h2.8c.7 0 1.3.4 1.6 1l1.3 3c.3.6.1 1.4-.4 1.9l-1.4 1.4c1 1.8 2.5 3.3 4.3 4.3l1.4-1.4c.5-.5 1.3-.7 1.9-.4l3 1.3c.6.3 1 .9 1 1.6v2.8c0 1-.8 1.8-1.8 1.8C11 21.5 2.5 13 2.5 5.3c0-1 .8-1.8 1.8-1.8h2.2Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span>{phoneLink.label}</span>
                    </a>
                  ))}
                </div>

                <a href="mailto:info@echonix.in" className="footer__contact-link footer__contact-link--email footer__contact-link--email-mobile">
                  <span className="footer__contact-icon footer__contact-icon--email" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6.5h16c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5Zm0 1.8v7.2h16V8.3L12 13.2 4 8.3Zm1.1-1.8L12 11.5l6.9-4.7H5.1Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>info@echonix.in</span>
                </a>
              </div>
            </div>
            <address className="footer__address">
              <span className="address-line">31/63F, Police Lane, Tirur,</span>
              <span className="address-line">Malappuram, Kerala - 676101</span>
            </address>
            <div className="footer__contact-info">
              <p className="contact-line contact-line--phone">
                <span className="label">Phone:</span>
                <span className="footer__contact-items" aria-label="Phone numbers">
                  {phoneLinks.map((phoneLink, index) => (
                    <span key={phoneLink.label} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <a href={phoneLink.href} className="footer__contact-link footer__contact-link--phone">
                        <span className="footer__contact-icon footer__contact-icon--phone" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 3.5h2.8c.7 0 1.3.4 1.6 1l1.3 3c.3.6.1 1.4-.4 1.9l-1.4 1.4c1 1.8 2.5 3.3 4.3 4.3l1.4-1.4c.5-.5 1.3-.7 1.9-.4l3 1.3c.6.3 1 .9 1 1.6v2.8c0 1-.8 1.8-1.8 1.8C11 21.5 2.5 13 2.5 5.3c0-1 .8-1.8 1.8-1.8h2.2Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span>{phoneLink.label}</span>
                      </a>
                      {index < phoneLinks.length - 1 && <span style={{ color: 'rgba(247, 246, 242, 0.7)', margin: '0 4px 0 1px' }}>,</span>}
                    </span>
                  ))}
                </span>
              </p>
              <p className="contact-line contact-line--email">
                <span className="label">Email:</span>
                <a href="mailto:info@echonix.in" className="footer__contact-link footer__contact-link--email">
                  <span className="footer__contact-icon footer__contact-icon--email" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6.5h16c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H4c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5Zm0 1.8v7.2h16V8.3L12 13.2 4 8.3Zm1.1-1.8L12 11.5l6.9-4.7H5.1Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>info@echonix.in</span>
                </a>
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links-list">
              {companyLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links-list">
              {serviceLinks.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="footer__col">
            <h3 className="footer__col-title">Follow</h3>
            <div className="footer__social-links footer__social-links--mobile" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__social-chip" aria-label={link.label} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
            <ul className="footer__links-list">
              <li><a href="https://www.instagram.com/echonixtechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/echonix-technology-pvt-ltd/home/" className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100083322813630" className="footer__link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="copyright">© 2025 Echonix Technology Pvt. Ltd.</p>
          <p className="attribution">Powered by <a href="https://zabios.in" className="bottom-link" target="_blank" rel="noopener">Zabios</a></p>
        </div>
      </div>
    </footer>
  )
}
