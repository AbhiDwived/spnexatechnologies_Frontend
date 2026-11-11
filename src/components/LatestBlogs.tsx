"use client";

import React from "react";
import Image from "next/image";

const blogs = [
  {
    cover: "/images/blog-cover-1.png",
    coverHeight: 167,
    tag: "BLOG",
    title: "START BUSINESS WITH TAXI BOOKING APP LIKE LYFT",
    excerpt:
      "Start Business With Taxi Booking App Like Lyft – The dynamic world of developing a taxi booking app akin to the renowned Lyft...",
    href: "/blogs",
  },
  {
    cover: "/images/blog-cover-2.png",
    coverHeight: 162,
    tag: "BLOG",
    title: "TOP 10 TAXI BOOKING APPS IN 2024",
    excerpt:
      "Top 10 Taxi Booking Apps In 2024 – When was the last time you waited for a cab outside on the sidewalk? You mean, years ago? With the advent of taxi booking apps...",
    href: "/blogs",
  },
  {
    cover: "/images/blog-cover-3.png",
    coverHeight: 167,
    tag: "BLOG",
    title: "RIDING INNOVATION: THE COMPREHENSIVE GUIDE TO TAXI ....",
    excerpt:
      "Due to the fast growth of the world's population, the transportation industry has experienced significant...",
    href: "/blogs",
  },
];

export default function LatestBlogs() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-[100px]">
        {/* Heading */}
        <h2 className="text-[50px] font-extrabold text-black text-center mb-3 leading-normal">
          Latest Blogs
        </h2>
        <p className="text-[18px] text-[#090808] text-center mb-8 leading-normal">
          Check out our newest blog posts for the latest<br />
          insights and updates. Dive into our latest articles to stay informed and inspired!.
        </p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] overflow-hidden relative"
              style={{ boxShadow: "0px 0px 3px rgba(0,0,0,0.25)" }}
            >
              {/* Cover Image */}
              <div className="relative w-full overflow-hidden rounded-t-[20px]" style={{ height: blog.coverHeight }}>
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                {/* Code Fire logo badge */}
                <div className="absolute top-2 left-2 bg-white rounded-[20px] px-3 py-0.5">
                  <Image src="/images/blog-codefire-logo.png" alt="Code Fire" width={46} height={9} className="object-contain" />
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-5">
                <p className="text-[16px] text-[#6c6c6c] font-bold uppercase text-center mb-2">{blog.tag}</p>
                <h3 className="text-[18px] font-bold text-black uppercase mb-3 leading-snug">{blog.title}</h3>
                <p className="text-[16px] text-[#090808] leading-normal mb-5">{blog.excerpt}</p>
                <a href={blog.href} className="inline-flex items-center gap-2 text-[#165ea6] text-[16px] font-normal hover:underline text-decoration-none">
                  Read More
                  <Image src="/images/blog-arrow.svg" alt="→" width={18} height={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
