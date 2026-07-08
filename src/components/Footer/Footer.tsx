import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8EBEF] py-8 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo - Original dimensions 1534x1024 */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/logo.png"
                alt="EMBEDCRAFT"
                width={200}
                height={133}
                className="w-auto h-12 md:h-14 object-contain"
              />
            </Link>
            <p className="text-xs text-[#1D2A39]/40 mt-1">
              Embedded Solutions. Real Impact.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Projects
            </Link>
            <Link href="/technologies" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Technologies
            </Link>
            <Link href="/testimonials" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Testimonials
            </Link>
            <Link href="/about" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#1D2A39]/50 hover:text-[#0E8A62] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-[#1D2A39]/30 mt-6 pt-6 border-t border-[#E8EBEF]">
          <p>© {new Date().getFullYear()} EMBEDCRAFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}