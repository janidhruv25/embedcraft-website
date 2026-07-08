'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import styles from './OurStory.module.css'

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className={styles.story}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
        <div className={styles.glowOrb3} />
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        <div className={styles.particle} style={{ left: '10%', animationDelay: '0s' }} />
        <div className={styles.particle} style={{ left: '25%', animationDelay: '2s' }} />
        <div className={styles.particle} style={{ left: '40%', animationDelay: '4s' }} />
        <div className={styles.particle} style={{ left: '55%', animationDelay: '1s' }} />
        <div className={styles.particle} style={{ left: '70%', animationDelay: '3s' }} />
        <div className={styles.particle} style={{ left: '85%', animationDelay: '5s' }} />
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={styles.content}
        >
          {/* Label with animated line */}
          <motion.div variants={itemVariants} className={styles.labelWrapper}>
            <span className={styles.label}>Our Story</span>
            <div className={styles.labelLine} />
          </motion.div>

          {/* Main Title with gradient */}
          <motion.h2 variants={itemVariants} className={styles.title}>
            From a shared dream
            <br />
            <span className={styles.titleHighlight}>to a shared mission.</span>
          </motion.h2>

          {/* Decorative quote mark */}
          <motion.div variants={itemVariants} className={styles.quoteMark}>"</motion.div>

          {/* Story Text with elegant styling */}
          <motion.div variants={itemVariants} className={styles.textWrapper}>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                It all started in the college lab — late nights, soldering irons, 
                and lines of code that refused to work. We were two engineering 
                students with a shared curiosity for how things worked, and a 
                stubborn belief that we could make them work better.
              </p>
              <p className={styles.text}>
                Over the years, we built robots, designed PCBs, wrote firmware, 
                broke things, fixed them, and learned more from our failures 
                than our successes.
              </p>
            </div>
            <div className={styles.textColumn}>
              <p className={styles.text}>
                We competed in ABU ROBOCON, worked on real-world projects, 
                and realised that the best ideas come from collaboration, 
                not isolation.
              </p>
              <p className={styles.text}>
                This is not just a company. It's the next chapter of a journey 
                we started years ago — a commitment to building products that 
                are thoughtful, reliable, and truly useful.
              </p>
            </div>
          </motion.div>

          {/* Signature with animated underline */}
          <motion.div variants={itemVariants} className={styles.signatureWrapper}>
            <div className={styles.signatureLine} />
            <p className={styles.signoff}>— Dhruv & Parth</p>
            <div className={styles.signatureLine} />
          </motion.div>

          {/* Stats highlight */}
          <motion.div variants={itemVariants} className={styles.statsHighlight}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Years of Collaboration</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6+</span>
              <span className={styles.statLabel}>Projects Together</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>Shared Vision</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}