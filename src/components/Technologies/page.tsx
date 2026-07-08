'use client'

import { motion } from 'framer-motion'
import { technologyCategories } from '@/data/technologies'
import styles from './Technologies.module.css'

export default function Technologies() {
  const totalTechs = technologyCategories.reduce((acc, cat) => acc + cat.items.length, 0)
  const uniqueTechs = new Set(technologyCategories.flatMap(cat => cat.items)).size

  return (
    <section className={styles.technologies}>
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
          <span className={styles.label}>Technologies We Use</span>
          <h2 className={styles.title}>The tools. The tech. The edge we build with.</h2>
          <p className={styles.subtitle}>
            We work with modern, reliable and industry-proven technologies to design and 
            deliver embedded systems that are efficient, scalable and future-ready.
          </p>
        </motion.div>

        {/* Categories Grid - 3 columns */}
        <div className={styles.categoriesGrid}>
          {technologyCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={styles.categoryCard}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.techList}>
                {category.items.map((item) => (
                  <span key={item} className={styles.techItem}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.stats}
        >
          <div className={styles.statCard}>
            <div className={styles.statValue}>{technologyCategories.length}</div>
            <div className={styles.statLabel}>Technology Areas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{totalTechs}</div>
            <div className={styles.statLabel}>Total Technologies</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{uniqueTechs}</div>
            <div className={styles.statLabel}>Unique Tools</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>2+</div>
            <div className={styles.statLabel}>Years of Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}