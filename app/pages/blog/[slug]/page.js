// src/app/blog/[slug]/page.js
import { blogPosts } from '@/app/data/blogData';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}