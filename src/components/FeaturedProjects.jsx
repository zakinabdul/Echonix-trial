'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../hooks/animations'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const featured = projects.filter((p) => p.featured)

export default function FeaturedProjects({ hideHeader = false }) {
  if (featured.length === 0) return null

  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-heading"
    >
      <div className="featured-projects__inner">

        {/* Header */}
        {!hideHeader && (
          <motion.div
            className="featured-projects__header"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="featured-projects__eyebrow"
              variants={fadeUp}
            >
              <span />
              <p>Selected Installations</p>
              <span />
            </motion.div>

            <div className="featured-projects__heading-row">
              <motion.h2
                id="featured-heading"
                variants={fadeUp}
              >
                Powering Kerala,
                <br />
                <strong>one project at a time.</strong>
              </motion.h2>

              <motion.p
                className="featured-projects__intro"
                variants={fadeUp}
              >
                From homes to commercial spaces, explore some of our
                landmark solar installations across Kerala.
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Featured Projects */}
        <div
          className="featured-projects__grid"
          role="list"
        >

          {/* Main Featured Project */}
          {featured[0] && (
            <motion.div
              className="featured-projects__main"
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <ProjectCard
                project={featured[0]}
                delay={0}
                showBadge={true}
              />

              <div className="featured-projects__main-label">
                <span>01</span>
                <span>Featured Installation</span>
              </div>
            </motion.div>
          )}

          {/* Secondary Projects */}
          <div className="featured-projects__side">

            {featured.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.id}
                className="featured-projects__secondary"
                role="listitem"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i}
              >
                <ProjectCard
                  project={project}
                  delay={(i + 1) * 0.1}
                  showBadge={true}
                />

                <div className="featured-projects__secondary-label">
                  <span>
                    {String(i + 2).padStart(2, '0')}
                  </span>

                  <span>
                    {project.location || 'Kerala'}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="featured-projects__footer"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="featured-projects__stats">
            <strong>{featured.length}+</strong>
            <span>Featured installations</span>
          </div>

          <div className="featured-projects__line" />

          <a
            href="/projects"
            className="featured-projects__button"
          >
            Explore All Projects
            <span>↗</span>
          </a>
        </motion.div>

      </div>

      <style jsx>{`
        .featured-projects {
          position: relative;
          overflow: hidden;
          background: #f7f7f3;
          padding: 110px 24px;
        }

        .featured-projects__inner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        /* --------------------------------
           HEADER
        -------------------------------- */

        .featured-projects__header {
          margin-bottom: 54px;
        }

        .featured-projects__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #e99b1b;
        }

        .featured-projects__eyebrow span {
          width: 34px;
          height: 1px;
          background: #f2a321;
        }

        .featured-projects__eyebrow p {
          margin: 0;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .featured-projects__heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
        }

        .featured-projects__heading-row h2 {
          max-width: 700px;
          margin: 0;
          color: #17382e;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.02;
          letter-spacing: -.05em;
        }

        .featured-projects__heading-row h2 strong {
          color: #e99b1b;
          font-weight: inherit;
        }

        .featured-projects__intro {
          max-width: 350px;
          margin: 0 0 4px;
          color: #69716e;
          font-size: 15px;
          line-height: 1.7;
        }

        /* --------------------------------
           PROJECT GRID
        -------------------------------- */

        .featured-projects__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(320px, .75fr);
          gap: 22px;
          align-items: stretch;
        }

        .featured-projects__main,
        .featured-projects__secondary {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
        }

        .featured-projects__main {
          min-height: 650px;
        }

        .featured-projects__side {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 22px;
        }

        .featured-projects__secondary {
          min-height: 314px;
        }

        /*
          These selectors allow the new layout
          to control the existing ProjectCard.
        */

        .featured-projects__main :global(.project-card),
        .featured-projects__secondary :global(.project-card) {
          width: 100%;
          height: 100%;
        }

        .featured-projects__main :global(.project-card img),
        .featured-projects__secondary :global(.project-card img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* --------------------------------
           PROJECT LABELS
        -------------------------------- */

        .featured-projects__main-label,
        .featured-projects__secondary-label {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          pointer-events: none;
        }

        .featured-projects__main-label {
          top: 22px;
          left: 22px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.94);
          color: #17382e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          box-shadow: 0 8px 25px rgba(0,0,0,.12);
        }

        .featured-projects__main-label span:first-child {
          color: #e99b1b;
        }

        .featured-projects__secondary-label {
          left: 18px;
          bottom: 18px;
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-shadow: 0 2px 12px rgba(0,0,0,.4);
        }

        .featured-projects__secondary-label span:first-child {
          color: #f2a321;
        }

        /* --------------------------------
           FOOTER
        -------------------------------- */

        .featured-projects__footer {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-top: 30px;
        }

        .featured-projects__stats {
          display: flex;
          align-items: baseline;
          gap: 9px;
          white-space: nowrap;
        }

        .featured-projects__stats strong {
          color: #17382e;
          font-size: 25px;
          letter-spacing: -.03em;
        }

        .featured-projects__stats span {
          color: #737b77;
          font-size: 12px;
        }

        .featured-projects__line {
          flex: 1;
          height: 1px;
          background: #dfe1dc;
        }

        .featured-projects__button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid #17382e;
          border-radius: 999px;
          color: #17382e;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: .25s ease;
        }

        .featured-projects__button span {
          font-size: 18px;
          transition: transform .25s ease;
        }

        .featured-projects__button:hover {
          background: #17382e;
          color: white;
        }

        .featured-projects__button:hover span {
          transform: translate(2px, -2px);
        }

        /* --------------------------------
           TABLET
        -------------------------------- */

        @media (max-width: 900px) {
          .featured-projects {
            padding: 80px 20px;
          }

          .featured-projects__heading-row {
            display: block;
          }

          .featured-projects__intro {
            margin-top: 20px;
          }

          .featured-projects__grid {
            grid-template-columns: 1fr;
          }

          .featured-projects__main {
            min-height: 560px;
          }

          .featured-projects__side {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: none;
          }

          .featured-projects__secondary {
            min-height: 300px;
          }
        }

        /* --------------------------------
           MOBILE
        -------------------------------- */

        @media (max-width: 600px) {
          .featured-projects {
            padding: 70px 16px;
          }

          .featured-projects__header {
            margin-bottom: 35px;
          }

          .featured-projects__heading-row h2 {
            font-size: 38px;
          }

          .featured-projects__intro {
            font-size: 14px;
          }

          .featured-projects__grid {
            gap: 14px;
          }

          .featured-projects__main {
            min-height: 480px;
            border-radius: 22px;
          }

          .featured-projects__side {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .featured-projects__secondary {
            min-height: 300px;
            border-radius: 22px;
          }

          .featured-projects__footer {
            gap: 18px;
          }

          .featured-projects__stats {
            display: none;
          }

          .featured-projects__line {
            display: none;
          }

          .featured-projects__button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}