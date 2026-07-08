'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const totalSlides = testimonials.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(true)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change every 5 seconds
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className={styles.testimonials}>
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
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>
            Trusted by clients.
            <span>Driven by results.</span>
          </h2>
          <p className={styles.subtitle}>
            We take pride in the relationships we build and the impact we create for our clients.
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className={styles.carouselContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.carouselWrapper}>
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.card}>
                  {/* Quote Icon - Proper quotes */}
                  <div className={styles.quote}>❝</div>

                  {/* Content */}
                  <p className={styles.content}>{testimonial.content}</p>

                  {/* Client Info */}
                  <div className={styles.clientInfo}>
                    <p className={styles.clientName}>{testimonial.name}</p>
                    <p className={styles.clientProject}>{testimonial.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className={styles.navButtons}>
            <button
              onClick={prevSlide}
              className={styles.navButton}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className={styles.navButton}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.stats}
        >
          <div className={styles.statCard}>
            <div className={styles.statValue}>5+</div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>3+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Support & Communication</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}