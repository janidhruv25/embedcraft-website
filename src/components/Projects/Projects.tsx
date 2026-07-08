'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/data/project'
import styles from './Projects.module.css'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  // Show only first 2 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section className={styles.projects}>
      {/* Background Circles */}
      <div className={styles.backgroundCircles}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.label}>Featured Projects</span>
          <h2 className={styles.title}>Some things we've built</h2>
          <p className={styles.subtitle}>
            From embedded systems to IoT solutions, here are some of our 
            recent projects that showcase our expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={styles.projectCard}
            >
              {/* Image */}
              <div className={styles.imageContainer}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className={styles.projectImage}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>🔧</div>
                )}
                
                {/* Category Badge - Only badge shown */}
                <div className={styles.badges}>
                  <span className={`${styles.badge} ${styles.badgeCategory}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                {/* Highlights */}
                {project.highlights && (
                  <div className={styles.highlights}>
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <span key={highlight} className={styles.highlight}>
                        {highlight}
                      </span>
                    ))}
                    {project.highlights.length > 2 && (
                      <span className={styles.highlightMore}>
                        +{project.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className={styles.technologies}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.techMore}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {projects.length > 2 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-[#0E8A62] hover:text-white font-medium border border-[#0E8A62] px-8 py-3 rounded-full hover:bg-[#0E8A62] transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  View All Projects
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}