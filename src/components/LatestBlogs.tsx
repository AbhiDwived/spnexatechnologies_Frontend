"use client";

import React from "react";

const blogs = [
  {
    title: "Why Next.js App Router is the Future of Enterprise Web Apps",
    category: "Web Development",
    date: "Oct 05, 2026",
    excerpt: "Discover how Server Components and Turbopack improve page load speed by up to 60%.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "10 Essential UI/UX Design Principles for Higher Conversion Rates",
    category: "UI/UX Design",
    date: "Sep 28, 2026",
    excerpt: "Learn how subtle micro-animations and accessibility compliance drive product engagement.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Building Microservices Architecture with AWS & Docker Containers",
    category: "Cloud & DevOps",
    date: "Sep 20, 2026",
    excerpt: "A step-by-step guide to deploying scalable, zero-downtime microservices on cloud infrastructure.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LatestBlogs() {
  return (
    <section id="blogs" className="py-20 px-4 bg-slate-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">
            Insights & Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Latest Blogs
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-2 flex items-center gap-1">
                    <i className="bi bi-calendar3 text-blue-600"></i> {post.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <a
                  href="#blogs"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase hover:text-blue-800 transition-colors text-decoration-none"
                >
                  <span>Read Full Article</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
