import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import './styles.css'
import App from './App.jsx'

// ReactLenis (from lenis/react) integrates Lenis smooth scroll with
// framer-motion's useScroll — so scroll-driven animations work correctly.
// The `root` prop makes it take over window scroll.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          duration: 1.0,
          smoothTouch: true,
          touchMultiplier: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      >
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
)
