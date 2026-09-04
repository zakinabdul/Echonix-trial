import type { Metadata } from 'next'
import ProjectsPage from '../../components/ProjectsPage'

export const metadata: Metadata = {
  title: 'Our Projects — Solar Installations Across Kerala',
  description:
    "Explore Echonix Technology's complete portfolio of solar installations across Kerala — universities, government buildings, industrial units, commercial spaces, and residences.",
}

export default function ProjectsRoute() {
  return <ProjectsPage />
}
