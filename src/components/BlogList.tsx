"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Trickle Solutions Perfects App Launches",
    excerpt:
      "A mobile app launch involves several critical stages, such as architecture design, performance optimization, platform compliance, and post-release stability.",
    date: "January 30, 2026",
    tag: "APP Development",
  },
  {
    id: 2,
    title: "Next-Gen Web Architecture for Scalability",
    excerpt:
      "A mobile app launch involves several critical stages, such as architecture design, performance optimization, platform compliance, and post-release stability.",
    date: "January 30, 2026",
    tag: "APP Development",
  },
  {
    id: 3,
    title: "AI-Driven Database Analytics in Modern Apps",
    excerpt:
      "A mobile app launch involves several critical stages, such as architecture design, performance optimization, platform compliance, and post-release stability.",
    date: "January 30, 2026",
    tag: "APP Development",
  },
];

const extraPosts: BlogPost[] = [
  {
    id: 4,
    title: "Mastering Cloud Infrastructure with Serverless",
    excerpt:
      "Explore how cloud-native serverless functions reduce operational overhead while scaling seamlessly to millions of concurrent app users.",
    date: "February 15, 2026",
    tag: "Cloud & DevOps",
  },
  {
    id: 5,
    title: "Essential Security Protocols for Fintech Systems",
    excerpt:
      "Discover the zero-trust architecture, biometric verification, and data masking protocols critical for enterprise-grade mobile financial apps.",
    date: "February 22, 2026",
    tag: "Security",
  },
  {
    id: 6,
    title: "Conversion-Focused UI/UX Principles for 2026",
    excerpt:
      "How minimalist interface hierarchies, micro-interactions, and accessible typography directly enhance retention and conversion rates.",
    date: "March 02, 2026",
    tag: "UI/UX Design",
  },
];

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setPosts((prev) => [...prev, ...extraPosts]);
    setLoadedAll(true);
  };

  return (
    <section className="bg-[#EBF4FD] py-14 sm:py-20 px-4">
      <div className="container max-w-6xl mx-auto text-center space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            Explore the World of Development <br />
            with Trickle Solutions Blog
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-[13.5px] leading-relaxed font-normal">
            Welcome to Trickle Solutions Blog, your one-stop destination for insightful blogs, tutorials, and resources on various aspects of software development, programming languages, web development, and much more. Start exploring our latest articles and resources today and take your development skills to new heights!
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left border border-blue-100/60 group"
            >
              {/* Card Thumbnail Banner: Glowing Neon Tech Mockup */}
              <div className="relative h-44 bg-gradient-to-tr from-[#091428] via-[#0C2346] to-[#0A1A36] overflow-hidden p-4 flex items-center justify-between">
                
                {/* Tech glowing wireframe screen */}
                <div className="relative w-28 h-36 bg-blue-900/60 rounded-xl border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] p-2 flex flex-col justify-between transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <div className="flex justify-between items-center border-b border-cyan-400/30 pb-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="w-8 h-1 bg-cyan-400/50 rounded"></span>
                  </div>
                  <div className="space-y-1 py-1">
                    <div className="w-full h-4 bg-blue-500/30 rounded flex items-center px-1">
                      <span className="w-10 h-1.5 bg-cyan-300 rounded"></span>
                    </div>
                    <div className="w-full h-4 bg-cyan-500/40 rounded flex items-center px-1">
                      <span className="w-8 h-1.5 bg-white rounded"></span>
                    </div>
                  </div>
                  <div className="w-full h-5 bg-cyan-400 text-[#091428] rounded font-bold text-[8px] flex items-center justify-center">
                    LAUNCH
                  </div>
                </div>

                {/* Right Text inside thumbnail */}
                <div className="text-right space-y-0.5">
                  <span className="text-xl font-black text-white tracking-wider block drop-shadow-md">
                    APP
                  </span>
                  <span className="text-xs font-semibold text-cyan-300 tracking-wide block">
                    Development
                  </span>
                </div>

                {/* Ambient glow dots */}
                <div className="absolute top-2 right-14 w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></div>
                <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* Metadata & Read More */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    🗓️ {post.date}
                  </span>
                  <Link
                    href="#"
                    className="font-bold text-blue-600 hover:text-blue-800 transition-colors text-decoration-none"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!loadedAll && (
          <div className="pt-4">
            <button
              onClick={handleLoadMore}
              style={{ borderRadius: "9999px" }}
              className="px-8 py-2.5 bg-[#0F4C81] text-white font-bold text-xs sm:text-sm hover:bg-[#0B3D6A] transition-all shadow-md cursor-pointer border-0"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
