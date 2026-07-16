import Navbar from './Navbar'
import Team from './Team'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Team />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
