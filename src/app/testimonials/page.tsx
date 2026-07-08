'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#FAFAF7]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-[#0E8A62] uppercase tracking-wider">
            WHAT CLIENTS SAY
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[#1D2A39]">
            Client Testimonials
          </h1>
          <p className="text-[#1D2A39]/60 mt-4 text-lg leading-relaxed">
            Real feedback from real clients who trusted us with their projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-[#E8EBEF] hover:border-[#0E8A62] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="text-3xl text-[#0E8A62] mb-3 opacity-30">"</div>

              {/* Content */}
              <p className="text-[#1D2A39]/70 leading-relaxed text-sm flex-1">
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="mt-6 pt-6 border-t border-[#E8EBEF]">
                <p className="font-semibold text-[#1D2A39]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#1D2A39]/50">
                  {testimonial.project}
                </p>
                <span className="inline-block mt-2 text-xs font-medium text-[#0E8A62] bg-[#0E8A62]/10 px-2.5 py-0.5 rounded-full">
                  Verified Client
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white p-6 rounded-xl border border-[#E8EBEF]">
            <div className="text-2xl font-bold text-[#0E8A62]">
              {testimonials.length}
            </div>
            <div className="text-sm text-[#1D2A39]/60">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#E8EBEF]">
            <div className="text-2xl font-bold text-[#0E8A62]">100%</div>
            <div className="text-sm text-[#1D2A39]/60">Satisfaction Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#E8EBEF] col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-[#0E8A62]">4+</div>
            <div className="text-sm text-[#1D2A39]/60">Years of Trust</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}