"use client";

import React from "react";
import Link from "next/link";

export default function HealthcareLatestBlogs() {
  const blogs = [
    {
      title: "How Mobile Healthcare Apps Transform Telemedicine in 2025",
      excerpt:
        "Discover how real-time video clinics, digital vitals sync, and secure messaging reshape clinical access.",
      date: "Oct 12, 2025",
    },
    {
      title: "HIPAA Compliance Checklist for Custom Health App Startups",
      excerpt:
        "Learn essential encryption standards, role-based access rules, and audit trails for safe medical apps.",
      date: "Oct 04, 2025",
    },
    {
      title: "Benefits of AI Symptom Triage Inside Patient Portals",
      excerpt:
        "Understand how guided intake forms reduce clinic wait times and assist physicians before appointments.",
      date: "Sep 26, 2025",
    },
  ];

  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white py-16 sm:py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Latest Blog &amp; News
          </h2>
        </div>

        {/* 3 White Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                {/* Top App Dev Thumbnail matching screenshot */}
                <div className="h-44 overflow-hidden bg-slate-950">
                  <img
                    src="/images/blog-app-dev-card.png"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-left space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#1D70B8] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-0">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer Meta & Link */}
              <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">{post.date}</span>
                <Link
                  href="/blogs"
                  className="font-bold text-[#1D70B8] hover:text-[#0B2545] transition-colors text-decoration-none"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Subtle Pagination Dots below cards matching screenshot */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
          <span className="w-2 h-2 rounded-full bg-white/40"></span>
        </div>

      </div>
    </section>
  );
}
