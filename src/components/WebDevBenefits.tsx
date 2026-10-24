"use client";

import React from "react";

export default function WebDevBenefits() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#083567] via-[#0A3F7F] to-[#0A417E] text-white py-12 sm:py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Benefits With Our Service
          </h2>
        </div>

        {/* 4 Staggered Columns: Card 1 (Icon Top), Card 2 (Icon Bottom), Card 3 (Icon Top), Card 4 (Icon Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Card 1: Custom Web Development (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Browser Window with Gears */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Browser Window */}
                <rect x="6" y="8" width="52" height="48" rx="6" />
                <line x1="6" y1="20" x2="58" y2="20" />
                <circle cx="16" cy="14" r="2" fill="currentColor" />
                <circle cx="24" cy="14" r="2" fill="currentColor" />
                <circle cx="32" cy="14" r="2" fill="currentColor" />
                {/* Gear Inside */}
                <circle cx="32" cy="38" r="6" />
                <path d="M32 26v4M32 46v4M20 38h4M40 38h4M23 29l3 3M38 44l3 3M23 47l3-3M38 32l3-3" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Custom Web Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We build websites and applications tailored to your business needs. Our development ensures functionality, scalability and a seamless user experience across all platforms.
              </p>
            </div>
          </div>

          {/* Card 2: Responsive & Cross-Platform Development (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Responsive & Cross-Platform Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Your website or app will perform flawlessly on desktops, tablets, and mobile devices. We ensure consistent performance and accessibility across all screen sizes.
              </p>
            </div>

            {/* Bottom Icon: Desktop & Mobile */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors pt-2">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Desktop Monitor */}
                <rect x="8" y="10" width="36" height="26" rx="4" />
                <line x1="8" y1="28" x2="44" y2="28" />
                <line x1="26" y1="36" x2="26" y2="44" />
                <line x1="18" y1="44" x2="34" y2="44" />
                {/* Mobile device overlapping */}
                <rect x="36" y="22" width="20" height="34" rx="4" fill="#0A3D78" />
                <line x1="42" y1="26" x2="50" y2="26" />
                <circle cx="46" cy="51" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Card 3: API Integration & Backend Development (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Cloud with API and Nodes */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Cloud Outline */}
                <path d="M48 30a10 10 0 0 0-19-4 12 12 0 0 0-13 12c0 6.6 5.4 12 12 12h20a10 10 0 0 0 0-20z" />
                {/* "API" Text inside Cloud */}
                <text
                  x="32"
                  y="39"
                  fill="currentColor"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  stroke="none"
                  fontFamily="sans-serif"
                >
                  API
                </text>
                {/* Node Branches below */}
                <path d="M32 50 v6" />
                <path d="M22 56 h20" />
                <circle cx="22" cy="56" r="2" fill="currentColor" />
                <circle cx="32" cy="56" r="2" fill="currentColor" />
                <circle cx="42" cy="56" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                API Integration & Backend Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                From databases to third-party APIs, we create robust backend systems that power your website or application efficiently and securely.
              </p>
            </div>
          </div>

          {/* Card 4: Performance & Security Optimization (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Performance & Security Optimization
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Our web development focuses on speed, security, and scalability. Optimized code and secure infrastructure ensure your site runs smoothly and safely.
              </p>
            </div>

            {/* Bottom Icon: Performance Bar Chart with Arrow */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors pt-2">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Chart Baseline */}
                <line x1="8" y1="52" x2="56" y2="52" />
                {/* Bars */}
                <rect x="14" y="38" width="6" height="14" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="24" y="30" width="6" height="22" rx="1" fill="currentColor" opacity="0.5" />
                <rect x="34" y="22" width="6" height="30" rx="1" fill="currentColor" opacity="0.7" />
                <rect x="44" y="14" width="6" height="38" rx="1" fill="currentColor" />
                {/* Upward Growth Arrow */}
                <path d="M12 36 L24 24 L34 26 L48 10" strokeWidth="2.5" />
                <polyline points="40,10 48,10 48,18" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
