"use client";

import React from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
  icon: string;
}

export default function PortfolioLatestBlogs() {
  const blogs: BlogPost[] = [
    {
      id: 1,
      category: "FinTech",
      title: "How to Build a Seamless Fintech App",
      excerpt:
        "Crucial design and engineering patterns to build high-scale, ultra-secure banking and cryptocurrency applications.",
      gradient: "from-blue-600 via-indigo-600 to-sky-500",
      icon: "💳",
    },
    {
      id: 2,
      category: "Mobile App",
      title: "Top Cross-Platform Frameworks in 2024",
      excerpt:
        "Explore how Flutter and React Native compare for modern mobile app velocity, code reuse, and native UI performance.",
      gradient: "from-slate-900 via-slate-800 to-indigo-950",
      icon: "📱",
    },
    {
      id: 3,
      category: "E-Commerce",
      title: "Boosting Conversion Rates on Mobile E-Commerce",
      excerpt:
        "Essential UI/UX strategies and frictionless one-tap checkout workflows that multiply retail conversion rates.",
      gradient: "from-rose-500 via-pink-600 to-amber-500",
      icon: "🛍️",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 px-4 border-t border-slate-100">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Latest Blogs
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Stay smart with insights from our blog.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Banner with Icon Illustration */}
              <div
                className={`h-40 bg-gradient-to-tr ${blog.gradient} flex items-center justify-center p-6 text-white relative`}
              >
                <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {blog.icon}
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  {blog.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/#blogs"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 text-decoration-none"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
