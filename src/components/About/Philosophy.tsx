'use client'

import { motion } from 'framer-motion'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <span className={styles.label}>Our Philosophy</span>
          <h2 className={styles.title}>Build what matters.</h2>
          
          <div className={styles.values}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Quality over speed</h3>
              <p className={styles.valueDescription}>
                We believe that good engineering takes time. We don't rush — we refine.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>People first</h3>
              <p className={styles.valueDescription}>
                The best products come from understanding the people who use them. 
                We design for humans, not just machines.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Collaboration over ego</h3>
              <p className={styles.valueDescription}>
                We're stronger together. We listen, we learn, and we build as a team.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Relentless curiosity</h3>
              <p className={styles.valueDescription}>
                We never stop asking "why" and "how." Every challenge is an opportunity 
                to grow and innovate.
              </p>
            </div>
          </div>

          <p className={styles.closing}>
            This is not just a company. It's a commitment to building products 
            that are thoughtful, reliable, and truly useful.
          </p>
        </motion.div>
      </div>
    </section>
  )
}