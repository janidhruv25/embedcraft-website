'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { teamMembers } from '@/data/about'
import styles from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <section className={styles.about}>
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
          <span className={styles.label}>About Us</span>
          <h2 className={styles.title}>Two engineers, one mission.</h2>
          <p className={styles.subtitle}>
            We're Dhruv and Parth — two engineers who build products that matter.
            One focuses on hardware and PCB design. The other on firmware and embedded systems.
          </p>
        </motion.div>

        {/* Team Members - Side by Side */}
        <div className={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={styles.teamMember}
            >
              {/* Photo */}
              <div className={styles.photoWrapper}>
                <div className={styles.photoContainer}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className={styles.photo}
                      priority
                    />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              {/* Name and Info */}
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.description}>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className={styles.ctaContainer}>
          <Link
            href="/about"
            className={styles.learnMore}
          >
            Learn More About Us
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}