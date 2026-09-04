'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import blogs from '../data/blogs'

export default function BlogDetailPage({ id }) {
  const blog = blogs.find((b) => b.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="blog-detail-error">
          <div className="blog-detail-error__inner">
            <h1>Article Not Found</h1>
            <p>The blog article you are looking for does not exist or has been moved.</p>
            <Link href="/blog" className="btn btn--amber">
              Back to Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="blog-detail-page">
        <article className="blog-article">
          <div className="blog-article__header">
            <Link href="/blog" className="blog-article__back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11.5 7H2.5M6 3.5L2.5 7L6 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Articles
            </Link>
            <span className="blog-article__category">{blog.category}</span>
            <h1 className="blog-article__title">{blog.title}</h1>
            <div className="blog-article__meta">
              <span className="blog-article__author">{blog.author}</span>
              <span className="blog-article__dot"></span>
              <span className="blog-article__date">{blog.date}</span>
              <span className="blog-article__dot"></span>
              <span className="blog-article__read-time">{blog.readTime}</span>
            </div>
          </div>

          <div className="blog-article__featured-img-wrap">
            <img src={blog.image} alt={blog.title} className="blog-article__featured-img" />
          </div>

          <div 
            className="blog-article__content" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          <div className="blog-article__cta">
            <h3>Ready to Switch to Solar?</h3>
            <p>Get in touch with Echonix today for a free site assessment and customized solar projection report.</p>
            <div className="blog-article__cta-btns">
              <a href="https://wa.me/919539220888?text=Hi Echonix, I read your article about solar subsidy/installation and would like to get a free consultation." target="_blank" rel="noopener noreferrer" className="btn btn--amber">
                Enquire on WhatsApp
              </a>
              <a href="https://wa.me/919539220888?text=Hi%20Echonix,%20I%20would%20like%20to%20get%20a%20free%20quote." target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Request Free Quote
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="blog-related" aria-labelledby="related-heading">
            <div className="blog-related__inner">
              <h2 className="blog-related__heading" id="related-heading">Recommended Articles</h2>
              <div className="blog-related__grid">
                {related.map((post) => (
                  <article key={post.id} className="blog-card blog-card--related">
                    <div className="blog-card__img-wrap">
                      <img src={post.image} alt={post.title} className="blog-card__img" />
                      <span className="blog-card__category">{post.category}</span>
                    </div>
                    <div className="blog-card__content">
                      <h3 className="blog-card__title">
                        <Link href={`/blog/${post.id}`} className="blog-card__title-link">
                          {post.title}
                        </Link>
                      </h3>
                      <Link href={`/blog/${post.id}`} className="blog-card__read-more">
                        Read Article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
