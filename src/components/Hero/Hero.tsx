'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Circles Only */}
      <div className={styles.backgroundShapes}>
        {/* Circles */}
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape4}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape5}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape6}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape7}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape8}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape9}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape10}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape11}`}></div>
        <div className={`${styles.shape} ${styles.shapeCircle} ${styles.shape12}`}></div>

        {/* Animated Lines */}
        <div className={`${styles.animatedLine} ${styles.line1}`}></div>
        <div className={`${styles.animatedLine} ${styles.line2}`}></div>
        <div className={`${styles.animatedLine} ${styles.line3}`}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Engineering ideas into
              <br />
              intelligent embedded
              <br />
              <span className={styles.titleAccent}>products.</span>
            </h1>

            <p className={styles.description}>
              We design hardware, develop firmware, and build embedded systems 
              that are reliable, manufacturable, and ready for real-world deployment.
            </p>

            <div className={styles.buttons}>
              <Link href="/work" className={styles.btnPrimary}>
                Explore Our Work
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                Work With Us
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div>
                <div className={styles.statValue}>5+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div>
                <div className={styles.statValue}>2+</div>
                <div className={styles.statLabel}>Years of Experience</div>
              </div>
              <div>
                <div className={styles.statValue}>3+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div>
                <div className={styles.statValue}>1+</div>
                <div className={styles.statLabel}>Ongoing Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/projects/pcb-hero.jpg"
                alt="PCB Design and Embedded Systems"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className={styles.imageOverlay}></div>

              {/* Live Badge - Top Right */}
              <div className={styles.liveBadge}>
                <span className={styles.liveDot}></span>
                <span className={styles.liveText}>Live Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}