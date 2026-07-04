import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import blogs from '../data/blogs'

const categories = ['All', 'Subsidies', 'Guides', 'Maintenance']

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = 'News & Articles | Echonix Technology — Solar Installation Advice'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Stay updated with Echonix Technology solar guides, news, and subsidy announcements. Learn how to maintain your solar panels and reduce energy bills in Kerala.'
      )
    }

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

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory)

  return (
    <>
      <Navbar />
      <main className="blogs-page">
        {/* Header Hero */}
        <div className="blogs-page__hero">
          <div className="blogs-page__hero-inner">
            <p className="section-eyebrow">News & Updates</p>
            <h1 className="blogs-page__heading">Guides & Solar Insights</h1>
            <p className="section-subtitle">
              Learn about KSEB net metering, the PM-Surya Ghar subsidy scheme, and panel upkeep during Kerala monsoons.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="blogs-page__filters-container">
          <div className="blogs-page__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="blogs-page__grid-container">
          <div className="blogs-page__grid" role="list">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="blog-card" role="listitem">
                <div className="blog-card__img-wrap">
                  <img src={blog.image} alt={blog.title} className="blog-card__img" loading="lazy" />
                  <span className="blog-card__category">{blog.category}</span>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span className="blog-card__date">{blog.date}</span>
                    <span className="blog-card__dot"></span>
                    <span className="blog-card__read-time">{blog.readTime}</span>
                  </div>
                  <h2 className="blog-card__title">
                    <Link to={`/blog/${blog.id}`} className="blog-card__title-link">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="blog-card__excerpt">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.id}`} className="blog-card__read-more" aria-label={`Read full article: ${blog.title}`}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
