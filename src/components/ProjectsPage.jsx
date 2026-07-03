import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import FeaturedProjects from './FeaturedProjects'
import ProjectGrid from './ProjectGrid'

/**
 * ProjectsPage — the /projects route.
 * Shares Navbar, Footer, FloatingWhatsApp with the home page.
 * Layout follows the same section rhythm as the rest of the site.
 */
export default function ProjectsPage() {
  // Reset scroll position and update page metadata on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = 'Our Projects | Echonix Technology — Solar Installations Across Kerala'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Explore Echonix Technology\'s complete portfolio of solar installations across Kerala — universities, government buildings, industrial units, commercial spaces, and residences.'
      )
    }

    // Restore home-page title/description on unmount
    return () => {
      document.title = 'Solar Panel Installation in Kerala | Echonix Technology'
      if (meta) {
        meta.setAttribute(
          'content',
          'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9072 55 11 44'
        )
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="projects-page">
        {/* Page hero strip */}
        <div className="projects-page__hero" aria-hidden="false">
          <div className="gallery__inner">
            <p className="section-eyebrow">Our Portfolio</p>
            <h1 className="projects-page__heading">Projects Across Kerala</h1>
            <p className="section-subtitle">
              Real installations. Real results. From homes to institutions — every project built to last.
            </p>
          </div>
        </div>

        {/* Featured projects section */}
        <FeaturedProjects />

        {/* All remaining projects + search/filter */}
        <ProjectGrid />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
