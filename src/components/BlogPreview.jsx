'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import { useIsMobile } from '../hooks/useIsMobile'
import blogs from '../data/blogs'

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
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
        <h3 className="blog-card__title">
          <Link href={`/blog/${blog.id}`} className="blog-card__title-link">
            {blog.title}
          </Link>
        </h3>
        <p className="blog-card__excerpt">{blog.excerpt}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="blog-card__read-more"
          aria-label={`Read full article: ${blog.title}`}
        >
          Read Article
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function BlogPreview() {
  const isMobile = useIsMobile()
  const previewBlogs = blogs.slice(0, 3)

  return (
    <section className="blog-preview" id="news" aria-labelledby="blog-preview-heading">
      <div className="blog-preview__inner">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>Guides & Insights</motion.p>
          <motion.h2 className="section-title" id="blog-preview-heading" variants={fadeUp}>
            Latest Solar Updates
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Practical solar advice, subsidy regulations, and panel optimization guides written by our industry experts.
          </motion.p>
        </motion.div>

        {isMobile ? (
          /* ── Mobile: horizontal snap carousel ── */
          <div className="blog__carousel" role="list" aria-label="Latest articles">
            {previewBlogs.map((blog) => (
              <div key={blog.id} className="blog__carousel-item" role="listitem">
                <BlogCard blog={blog} />
              </div>
            ))}
            <div className="blog__carousel-spacer" aria-hidden="true" />
          </div>
        ) : (
          /* ── Desktop: 3-col grid ── */
          <div className="blog-preview__grid" role="list">
            {previewBlogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="blog-preview__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/blog" className="btn btn--outline" id="view-all-blogs">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
