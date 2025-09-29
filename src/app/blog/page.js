"use client";

import { useState } from "react";
import Link from "next/link";
import dummyPosts from "@/data/posts";
import PageHeader from "@/components/pageHeader";



const POSTS_PER_PAGE = 9;
function Blog() {
 const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = dummyPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

    return ( 
        <>
        
             <PageHeader title="Latest Blogs & News"
        backgroundImage="/imgs/landing.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs" },
        ]}/>

         <section className="relative md:py-24 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {paginatedPosts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md shadow-sm bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.mainImage}
                  alt={post.title}
                  className="w-full h-60 object-cover group-hover:scale-110 group-hover:rotate-3 duration-500"
                />
                <div className="absolute bottom-0 left-0 p-4 space-x-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold hover:text-orange-500"
                >
                  {post.title}
                </Link>
                <p className="text-slate-500 mt-2 line-clamp-2">
                  {post.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-slate-400 flex justify-between">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sayfalama */}
        <div className="flex justify-center mt-10 space-x-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 flex items-center justify-center border border-gray-300 ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-600 hover:bg-orange-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
        </>
     );
}

export default Blog;