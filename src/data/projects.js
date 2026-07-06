// src/data/projects.js
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all project data.
// To add a new project, append an object to this array — no component changes needed.
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'gallery-university',
    name: 'Kannur University',
    image: '/project-university.png',
    alt: 'Kannur University solar installation',
    location: 'Kannur, Kerala',
    type: 'Institutional',
    year: '2023',
    description: '236 KW rooftop solar system installed across multiple buildings of Kannur University campus, reducing institutional energy costs significantly.',
    kw: '236 KW',
    featured: true,
  },
  {
    id: 'gallery-polytechnic',
    name: "Women's Polytechnic, Kottakkal",
    image: '/project-polytechnic.png',
    alt: "Women's Polytechnic Kottakkal solar installation",
    location: 'Kottakkal, Malappuram',
    type: 'Institutional',
    year: '2023',
    description: "92 KW on-grid solar installation at Women's Polytechnic College, Kottakkal — enabling clean energy for education.",
    kw: '92 KW',
    featured: true,
  },
  {
    id: 'gallery-civil-station',
    name: 'Mini Civil Station, Ponnani',
    image: '/project-civil-station.png',
    alt: 'Mini Civil Station Ponnani solar installation',
    location: 'Ponnani, Kerala',
    type: 'Government',
    year: '2022',
    description: '85 KW solar installation at the Mini Civil Station, Ponnani — a landmark government green-energy initiative in Malappuram district.',
    kw: '85 KW',
    featured: true,
  },
  {
    id: 'gallery-ksidc',
    name: 'KSIDC Industrial Installation',
    image: '/project-industrial.png',
    alt: 'KSIDC solar installation',
    location: 'Kerala',
    type: 'Industrial',
    year: '2022',
    description: '70 KW industrial-grade solar system for KSIDC, delivering reliable renewable energy for heavy industrial operations.',
    kw: '70 KW',
    featured: false,
  },
  {
    id: 'gallery-residential',
    name: 'Residential Solar, Malappuram',
    image: '/project-residential.png',
    alt: 'Residential solar installation in Malappuram',
    location: 'Malappuram, Kerala',
    type: 'Residential',
    year: '2023',
    description: 'Premium rooftop solar installation for a private residence in Malappuram, designed with full government subsidy support.',
    kw: '',
    featured: false,
  },
  {
    id: 'gallery-commercial',
    name: 'Commercial Solar, Tirur',
    image: '/project-commercial.png',
    alt: 'Commercial solar installation in Tirur',
    location: 'Tirur, Malappuram',
    type: 'Commercial',
    year: '2023',
    description: 'High-efficiency commercial rooftop solar system in Tirur, delivering measurable ROI through reduced grid dependency.',
    kw: '',
    featured: false,
  },
]

export default projects
