import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getBlog(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch blog');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);

  return {
    title: `${blog.title} | I-Games Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.bannerImage],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlog(params.slug);

  return (
    <article className="container mx-auto px-4 mt-10 py-12 max-w-4xl">
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.bannerImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {blog.title}
      </h1>

      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
        <time dateTime={blog.publishedDate}>
          {new Date(blog.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}