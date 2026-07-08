import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-[#0E8A62]">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Have a project in mind?
        </h2>
        <p className="text-white/80 mt-4 max-w-xl mx-auto">
          Let's build something amazing together.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-[#0E8A62] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  )
}