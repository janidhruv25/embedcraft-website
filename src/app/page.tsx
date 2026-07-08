import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Projects from '@/components/Projects/Projects'
import Process from '@/components/Process/Process'
import Technologies from '@/components/Technologies/page'
import AboutUs from '@/components/About/AboutUs'
import Testimonials from '@/components/Testimonial/Testimonial'
import CTA from '@/components/ContactCTA/CTA'

export default function Home() {
  return (
    <>
      <Hero />                    {/* Beige (FAFAF7) - with animations */}
      <Services />                {/* White - no wrapper needed */}
      <Projects />               {/* Beige - will use section-alt */}
      <Process />                {/* White - will use section-white */}
      <Technologies />           {/* Beige - will use section-alt */}
      <AboutUs />                {/* White - will use section-white */}
      <Testimonials />           {/* Beige - will use section-alt */}
      <CTA />                    {/* White - will use section-white */}
    </>
  )
}