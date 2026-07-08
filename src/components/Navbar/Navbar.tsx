'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/work' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href) || false
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232, 235, 239, 0.5)' : 'none'
      }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Original dimensions 1534x1024 */}
          <Link href="/" className="flex items-center gap-2">
            {scrolled ? (
              <Image
                src="/images/logos/logo.png"
                alt="EMBEDCRAFT"
                width={500}
                height={500}
                className="w-auto h-12 md:h-14 object-contain"
                priority
              />
            ) : (
              <Image
                src="/images/logos/logo-transparent.png"
                alt="EMBEDCRAFT"
                width={200}
                height={133}
                className="w-auto h-12 md:h-14 object-contain"
                priority
              />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    active 
                      ? 'text-[#0E8A62]' 
                      : 'text-[#1D2A39]/70 hover:text-[#0E8A62]'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0E8A62] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="bg-[#0E8A62] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0E8A62]/90 transition shadow-lg shadow-[#0E8A62]/20 hover:shadow-xl hover:shadow-[#0E8A62]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Build Together
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="#1D2A39" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 bg-white border-t border-[#E8EBEF]"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition ${
                    active 
                      ? 'text-[#0E8A62] bg-[#0E8A62]/5' 
                      : 'text-[#1D2A39]/70 hover:text-[#0E8A62] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="block mt-3 bg-[#0E8A62] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#0E8A62]/90 transition mx-4"
              onClick={() => setIsOpen(false)}
            >
              Let's Build Together
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}