import { Routes, Route } from 'react-router-dom'
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
import BlogPreview from './components/BlogPreview'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ProjectsPage from './components/ProjectsPage'
import ServicesPage from './components/ServicesPage'
import BlogsPage from './components/BlogsPage'
import BlogDetailPage from './components/BlogDetailPage'
import TeamPage from './components/TeamPage'
import SectionReveal from './components/SectionReveal'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero has its own entrance animations — no wrapper needed */}
        <Hero />

        {/* Each section fades up smoothly as it enters the viewport */}
        <SectionReveal delay={0}>
          <TrustBar />
        </SectionReveal>

        <SectionReveal delay={0}>
          <Services />
        </SectionReveal>

        <SectionReveal delay={0}>
          <About />
        </SectionReveal>

        <SectionReveal delay={0}>
          <Gallery />
        </SectionReveal>

        <SectionReveal delay={0}>
          <HowItWorks />
        </SectionReveal>

        <SectionReveal delay={0}>
          <Testimonials />
        </SectionReveal>

        <SectionReveal delay={0}>
          <WhyUs />
        </SectionReveal>

        <SectionReveal delay={0}>
          <Partners />
        </SectionReveal>

        <SectionReveal delay={0}>
          <BlogPreview />
        </SectionReveal>

        <SectionReveal delay={0}>
          <FAQ />
        </SectionReveal>

        <SectionReveal delay={0}>
          <FinalCTA />
        </SectionReveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogsPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  )
}
