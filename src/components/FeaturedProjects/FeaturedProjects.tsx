'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { projects } from '@/data/project'

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              OUR WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              Projects That Define Us
            </h2>
          </div>
          <Link
            href="/work"
            className="group text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </Link>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="space-y-4">
              <span className="inline-block text-sm text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
                {currentProject.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900">{currentProject.title}</h3>
              <p className="text-gray-600 leading-relaxed">{currentProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${currentProject.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Learn More
                <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl h-64 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <span className="relative z-10">{currentProject.title.split(' ')[0]}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition hover:border-blue-400 hover:shadow-md"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition hover:border-blue-400 hover:shadow-md"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}