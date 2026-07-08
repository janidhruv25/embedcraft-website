'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { processSteps } from '@/data/process'

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const stepVariants = {
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  }

  return (
    <section ref={sectionRef} className="section-padding section-alt overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#0E8A62] uppercase tracking-wider">
            OUR ENGINEERING PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1D2A39]">
            How we bring ideas to life
          </h2>
          <p className="text-[#1D2A39]/60 mt-3 leading-relaxed">
            A systematic approach that ensures quality, reliability, and 
            innovation at every stage of development.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={controls}
            className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E8A62]/20 via-[#0E8A62] to-[#0E8A62]/20"
            style={{ transformOrigin: 'left' }}
          />

          {/* Steps - Horizontal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center">
                  {/* Number Circle */}
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.15 : 1,
                      backgroundColor: activeStep === index ? '#0E8A62' : '#FAFAF7',
                      borderColor: activeStep === index ? '#0E8A62' : '#E8EBEF',
                      boxShadow: activeStep === index 
                        ? '0 8px 30px rgba(14, 138, 98, 0.25)' 
                        : '0 2px 10px rgba(0, 0, 0, 0.04)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative w-12 h-12 rounded-full border-2 bg-[#FAFAF7] flex items-center justify-center font-bold text-sm text-[#0E8A62] transition-all duration-300 z-10"
                  >
                    <span className="text-xs md:text-sm">{step.number}</span>
                    
                    {/* Pulse Ring */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                        className="absolute inset-0 rounded-full border-2 border-[#0E8A62]/20"
                      />
                    )}
                  </motion.div>

                  {/* Icon */}
                  <div className="text-2xl mt-2">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-[#1D2A39] mt-3 text-center group-hover:text-[#0E8A62] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#1D2A39]/50 text-center mt-1 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details - Expand on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeStep === index ? 'auto' : 0,
                      opacity: activeStep === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    <div className="mt-3 pt-3 border-t border-[#E8EBEF]">
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-xs text-[#1D2A39]/60 flex items-start gap-1.5"
                          >
                            <span className="w-1 h-1 bg-[#0E8A62] rounded-full flex-shrink-0 mt-1.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
             href="/contact"  // ← Changed from /contact (already correct)
            className="inline-flex items-center gap-2 bg-[#0E8A62] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0E8A62]/90 transition shadow-lg shadow-[#0E8A62]/20"
          >
            Start Your Project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}