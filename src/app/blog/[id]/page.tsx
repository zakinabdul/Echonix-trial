import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import blogs from '../../../data/blogs'
import BlogDetailPage from '../../../components/BlogDetailPage'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    return { title: 'Article Not Found' }
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  }
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id }))
}

export default async function BlogDetailRoute({ params }: Props) {
  const { id } = await params
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    notFound()
  }

  return <BlogDetailPage id={id} />
}
