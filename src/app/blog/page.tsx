import type { Metadata } from 'next'
import BlogsPage from '../../components/BlogsPage'

export const metadata: Metadata = {
  title: 'News & Articles — Solar Installation Advice',
  description:
    'Stay updated with Echonix Technology solar guides, news, and subsidy announcements. Learn how to maintain your solar panels and reduce energy bills in Kerala.',
}

export default function BlogRoute() {
  return <BlogsPage />
}
