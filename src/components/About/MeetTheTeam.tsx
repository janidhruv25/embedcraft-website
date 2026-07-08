'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { teamMembers } from '@/data/about'
import styles from './MeetTheTeam.module.css'

export default function MeetTheTeam() {
  return (
    <section className={styles.team}>
      {/* Semi-circle gradient at top right */}
      <div className={styles.backgroundElements}>
        <div className={styles.semiCircleTop} />
        <div className={styles.semiCircleBottom} />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.label}>Meet the Engineers</span>
          <h2 className={styles.title}>Two minds, one vision.</h2>
        </motion.div>

        {/* Team Photo - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.teamPhotoWrapper}
        >
          <div className={styles.teamPhotoContainer}>
            <Image
              src="/images/team/team-photo.jpg"
              alt="Dhruv and Parth - Embedded Engineers"
              width={600}
              height={400}
              className={styles.teamPhoto}
              priority
            />
            <div className={styles.photoOverlay}>
              <div className={styles.photoLabel}>Dhruv & Parth</div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Info - Side by Side below photo */}
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={styles.card}
            >
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>

              {/* Short Description - Concise */}
              <p className={styles.description}>
                {member.shortDescription}
              </p>

              {/* Key Skills Tags */}
              <div className={styles.skills}>
                {member.description.split(' | ').map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}