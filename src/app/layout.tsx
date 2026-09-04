import type { Metadata } from 'next'
import './globals.css'
import LenisProvider from '../components/LenisProvider'

export const metadata: Metadata = {
  title: {
    default: 'Solar Panel Installation in Kerala | Echonix Technology',
    template: '%s | Echonix Technology',
  },
  description:
    'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company. Free site survey. Call +91 9539 22 08 88',
  keywords: [
    'solar installation Kerala',
    'on-grid solar',
    'off-grid solar',
    'hybrid solar',
    'solar inverter',
    'MNRE',
    'Mahindra Solarize',
    'Echonix',
  ],
  openGraph: {
    title: 'Solar Panel Installation in Kerala | Echonix Technology',
    description:
      'Professional solar installation across Kerala. Up to ₹78,000 government subsidy. MNRE empanelled EPC company.',
    url: 'https://echonix.in',
    siteName: 'Echonix Technology',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://echonix.in'),
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://echonix.in/#organization',
      name: 'Echonix Technology Pvt. Ltd.',
      url: 'https://echonix.in',
      logo: 'https://echonix.in/logo.png',
      image: 'https://echonix.in/about-team.png',
      telephone: '+919539220888',
      email: 'info@echonix.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '31/63F, Police Lane, Tirur',
        addressLocality: 'Malappuram',
        addressRegion: 'Kerala',
        postalCode: '676101',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '10.9029',
        longitude: '75.9238',
      },
      sameAs: [
        'https://www.instagram.com/echonixtechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        'https://www.linkedin.com/company/echonix-technology-pvt-ltd/home/',
        'https://www.facebook.com/profile.php?id=100083322813630',
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Solar Panel Installation',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://echonix.in/#organization',
      },
      areaServed: {
        '@type': 'State',
        name: 'Kerala',
      },
      description:
        'Premium on-grid, off-grid, and hybrid solar system design, grid approvals, and installation for residential and commercial spaces across Kerala.',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/heroes/hero-solar.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
