import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/ui/demo'
import About from '../components/About'
import Services from '../components/Services'
import MidCTA from '../components/MidCTA'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import SectionReveal from '../components/SectionReveal'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Kerala | Echonix Technology',
  description:
    'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9539 22 08 88',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — full-screen video */}
        <Hero />

        {/* 2. About */}
        <SectionReveal delay={0}>
          <About />
        </SectionReveal>

        {/* 3. Mid-page CTA band */}
        <MidCTA />

        {/* 4. Services — numbered accordion */}
        <SectionReveal delay={0}>
          <Services />
        </SectionReveal>

        {/* 5. Project Gallery */}
        <SectionReveal delay={0}>
          <Gallery />
        </SectionReveal>

        {/* 6. Testimonials */}
        <SectionReveal delay={0}>
          <Testimonials />
        </SectionReveal>

        {/* 7. FAQ */}
        <SectionReveal delay={0}>
          <FAQ />
        </SectionReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
