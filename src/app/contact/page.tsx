'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll get back to you within 24 hours.'
        })
        setFormData({ name: '', email: '', project: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.backgroundCircles}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.label}>Let's Connect</span>
          <h1 className={styles.title}>Start Your Project</h1>
          <p className={styles.subtitle}>
            Have an idea? Let's bring it to life. Reach out to us and we'll
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Project Type</label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Embedded Systems / PCB Design / IoT / Other"
                  disabled={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus.type === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
                  {submitStatus.message}
                </div>
              )}
              {submitStatus.type === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.info}
          >
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Email</p>
              <p className={styles.infoValue}>support@embedcraft.online</p>
              <p className={styles.infoDescription}>We'll respond within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Phone</p>
              <p className={styles.infoValue}>+91 9429282770</p>
              <p className={styles.infoDescription}>Available during business hours</p>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Location</p>
              <p className={styles.infoValue}>Ahmedabad, India</p>
              <p className={styles.infoDescription}>GMT +5:30</p>
            </div>

            <div className={styles.responseNote}>
              <p>
                We typically respond within <span>24 hours</span>. 
                All messages are treated with confidentiality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}