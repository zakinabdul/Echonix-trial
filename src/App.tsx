import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/ui/demo'
import About from './components/About'
import Services from './components/Services'
import MidCTA from './components/MidCTA'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
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
        {/* 1. Hero — full-screen video */}
        <Hero />

        {/* 2. About */}
        <SectionReveal delay={0}>
          <About />
        </SectionReveal>

        {/* 3. Mid-page CTA band — "Your Partner" */}
        <MidCTA />

        {/* 4. Services — numbered accordion */}
        <SectionReveal delay={0}>
          <Services />
        </SectionReveal>

        {/* 6. Project Gallery */}
        <SectionReveal delay={0}>
          <Gallery />
        </SectionReveal>

        {/* 7. Testimonials */}
        <SectionReveal delay={0}>
          <Testimonials />
        </SectionReveal>

        {/* 8. FAQ */}
        <SectionReveal delay={0}>
          <FAQ />
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
