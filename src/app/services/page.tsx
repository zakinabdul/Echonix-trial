import type { Metadata } from 'next'
import ServicesPage from '../../components/ServicesPage'

export const metadata: Metadata = {
  title: 'Solar Services & Products',
  description:
    "Compare Echonix On-Grid, Off-Grid, and Hybrid Solar systems. Explore solar inverters. Find the right system for your Kerala home with our interactive Solar Calculator.",
}

export default function ServicesRoute() {
  return <ServicesPage />
}
