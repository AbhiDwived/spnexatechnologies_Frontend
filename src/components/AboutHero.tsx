"use client";

import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0A3D78] text-white overflow-hidden">
      {/* Top Office Team Panoramic Banner */}
      <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[420px] overflow-hidden">
        <Image
          src="/images/about-office-banner.jpg"
          alt="Trickle Solutions Software Engineering Team Collaborating"
          fill
          className="object-cover object-center brightness-95"
          priority
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D78] via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-blue-900/15"></div>

        {/* Overlapping "About" Title Card at bottom-left */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-end relative z-10">
          <div className="mb-4 sm:mb-6 bg-[#093566]/95 backdrop-blur-md px-7 sm:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/25 inline-block">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
              About
            </h1>
            {/* Artistic Wavy Underline */}
            <div className="mt-1.5 w-28 sm:w-36 h-2">
              <svg
                viewBox="0 0 150 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white/80"
              >
                <path
                  d="M2 5C30 1 50 9 75 5C100 1 125 9 148 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
