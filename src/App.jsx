import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
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

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Team />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <WhyUs />
        <Partners />
        <BlogPreview />
        <FAQ />
        <FinalCTA />
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
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogsPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  )
}

