'use client'

import Navbar from './Navbar'
import Team from './Team'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="team-page-main">
        <Team />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
