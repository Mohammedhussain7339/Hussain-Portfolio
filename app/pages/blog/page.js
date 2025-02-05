import React from 'react'
import { blogPosts } from '@/app/data/blogData.js';
import Link from 'next/link';

function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 ">My Blog</h1>
      <p className="text-lg text-gray-200 mb-8 ">Thoughts, tutorials, and insights on web development.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-black text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}Title</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
