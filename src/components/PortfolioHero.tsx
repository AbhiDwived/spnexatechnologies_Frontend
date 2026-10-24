"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section className="bg-white text-slate-900 pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Badges, & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Blue Eyebrow Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1D70B8] tracking-tight leading-snug mb-3">
                From dream to reality, we take pride in our involvement with these apps.
              </h1>

              {/* Bold Dark Subheading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Passionately crafted and <br className="hidden sm:inline" />
                <span className="text-[#1D70B8]">built</span> with love
              </h2>
            </div>

            {/* Paragraph Description */}
            <p className="text-slate-600 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              A showcase of technology and customer solutions. Decades of experience we continue to deliver state and federal level applications.
            </p>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs sm:text-[13px] font-bold border border-blue-200 shadow-sm">
                ⭐ 4.9/5 Clutch Rating
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-[13px] font-semibold shadow-sm">
                🚀 Featured on Product Hunt
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/services/web-development"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0F4C81] text-white hover:bg-[#0B3D6A] transition-all cursor-pointer shadow-md text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Get In Touch</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0F4C81] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Creative Photo Collage (Arch + 2 Circles) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative flex items-center gap-4 sm:gap-6">
              
              {/* Arch Shaped Photo: Couple embracing */}
              <div className="relative w-44 sm:w-56 lg:w-60 h-64 sm:h-80 rounded-t-[100px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/portfolio-hero-couple.jpg"
                  alt="Couple embracing outdoors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Two Circular Photos on right stacked vertically */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Circle 1: Toy taxi in hands */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white group">
                  <Image
                    src="/images/portfolio-circle-taxi.jpg"
                    alt="Hands holding toy car"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Circle 2: Portrait */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white group">
                  <Image
                    src="/images/about-developer-portrait.jpg"
                    alt="Developer portrait"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
