'use client'

import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import FeaturedProjects from './FeaturedProjects'
import ProjectGrid from './ProjectGrid'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
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
        <FeaturedProjects hideHeader={true} />

        {/* All remaining projects + search/filter */}
        <ProjectGrid hideHeader={true} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
