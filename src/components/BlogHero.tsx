"use client";

import React from "react";
import Image from "next/image";

export default function BlogHero() {
  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("consultation");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#10141C] text-white overflow-hidden">
      {/* Banner Container with Typing Hands Background */}
      <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] flex items-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-hero-banner.jpg"
            alt="Trickle Solutions IT Comprehensive Information Hub"
            fill
            className="object-cover object-right brightness-90"
            priority
          />
          {/* Subtle Dark Gradient Overlay for optimal text readability on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1017] via-[#0C1017]/80 to-transparent"></div>
        </div>

        {/* Hero Content on Left */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16">
          <div className="max-w-xl space-y-5 text-left">
            <div>
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none">
                BLOGS
              </h1>
              {/* White Artistic Wavy Underline */}
              <div className="mt-2 w-40 sm:w-52 h-2.5">
                <svg
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/80"
                >
                  <path
                    d="M2 7C45 2 95 11 140 6C170 3 185 8 198 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Subheading */}
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
              Trickle Solutions IT Comprehensive <br className="hidden sm:inline" />
              Information Hub
            </h2>

            {/* Paragraph Text */}
            <p className="text-slate-300 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal">
              Welcome to the Trickle Solutions IT Comprehensive Information Hub, your go-to destination for the latest in technology and innovation. Dive into a wealth of resources, expert insights, and up-to-date information to stay ahead in the ever-evolving IT landscape.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#consultation"
                onClick={scrollToConsultation}
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0F4C81] border border-blue-400/40 text-white hover:bg-[#0B3D6A] transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0F4C81] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
