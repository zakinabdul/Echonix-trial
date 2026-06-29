import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import WhySolar from './components/WhySolar'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <WhyUs />
        <Partners />
        <FAQ />
        <WhySolar />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
