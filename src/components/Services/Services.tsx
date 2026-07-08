'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { services } from '@/data/services'
import styles from './Services.module.css'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
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
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className={styles.services}>
      {/* Background Circles */}
      <div className={styles.backgroundCircles}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left Column - Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={styles.leftColumn}
          >
            {/* Label */}
            <span className={styles.label}>What We Build</span>

            {/* Main Headline */}
            <h2 className={styles.headline}>
              Human-made
              <br />
              solutions that
              <br />
              <span className={styles.headlineAccent}>power real products.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              We design, develop, and deliver complete embedded solutions—
              from the first sketch to the final product in your hands.
            </p>

            {/* Process Flow Image - IDEA → DESIGN → BUILD → DEPLOY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.processImageWrapper}
            >
              <Image
                src="/images/services/process.png"
                alt="IDEA → DESIGN → BUILD → DEPLOY process flow"
                width={600}
                height={180}
                className={styles.processImage}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={styles.cardsGrid}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={styles.serviceCard}
              >
                {/* Image Icon */}
                <div className={styles.iconContainer}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={28}
                    height={28}
                    className={styles.iconImage}
                  />
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* Description */}
                <p className={styles.cardDescription}>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}