import type { Metadata } from 'next'
import TeamPage from '../../components/TeamPage'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the expert team at Echonix Technology — the engineers, project managers, and installation specialists behind Kerala\'s top solar installations.',
}

export default function TeamRoute() {
  return <TeamPage />
}
