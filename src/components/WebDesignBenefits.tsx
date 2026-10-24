"use client";

import React from "react";

export default function WebDesignBenefits() {
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
          
          {/* Card 1: User Interface (UI) Design (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon */}
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
                {/* Browser window */}
                <rect x="6" y="8" width="52" height="48" rx="6" />
                <line x1="6" y1="20" x2="58" y2="20" />
                {/* Window control dots */}
                <circle cx="16" cy="14" r="2" fill="currentColor" />
                <circle cx="24" cy="14" r="2" fill="currentColor" />
                <circle cx="32" cy="14" r="2" fill="currentColor" />
                {/* Left sidebar card */}
                <rect x="12" y="26" width="16" height="24" rx="3" />
                <line x1="16" y1="32" x2="24" y2="32" />
                <line x1="16" y1="38" x2="22" y2="38" />
                {/* Right dashboard cards */}
                <rect x="33" y="26" width="19" height="11" rx="2" />
                <rect x="33" y="41" width="19" height="9" rx="2" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                User Interface (UI) Design
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                A well-crafted User Interface (UI) is the key to a strong first impression. We create interfaces that are visually appealing, intuitive, and user-friendly, ensuring an enjoyable digital experience.
              </p>
            </div>
          </div>

          {/* Card 2: Responsive & Adaptive Design (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Responsive & Adaptive Design
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We build designs that adapt flawlessly across devices and screen sizes. Your website or app will look and perform beautifully on desktops, tablets, and mobile devices.
              </p>
            </div>

            {/* Bottom Icon: Desktop & Mobile Devices */}
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
                {/* Inner gear icon on desktop */}
                <circle cx="26" cy="19" r="3" />
                {/* Mobile device overlapping */}
                <rect x="36" y="24" width="20" height="32" rx="4" fill="#0A3D78" />
                <line x1="42" y1="28" x2="50" y2="28" />
                <circle cx="46" cy="51" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Card 3: Prototyping & Wireframing (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon */}
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
                {/* Left wireframe screen */}
                <rect x="8" y="10" width="20" height="30" rx="3" />
                <line x1="8" y1="18" x2="28" y2="18" />
                <circle cx="18" cy="26" r="3" />
                <line x1="12" y1="34" x2="24" y2="34" />
                {/* Right wireframe screen */}
                <rect x="36" y="10" width="20" height="30" rx="3" />
                <line x1="36" y1="18" x2="56" y2="18" />
                <rect x="41" y="24" width="10" height="6" rx="1" />
                <line x1="40" y1="34" x2="52" y2="34" />
                {/* Flow connector connecting the two screens */}
                <path d="M28 25 H 36" />
                <path d="M18 40 V 50 H 46 V 40" strokeDasharray="3 3" />
                <polyline points="43,44 46,40 49,44" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Prototyping & Wireframing
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Bring your app or website concepts to life before development. Our detailed wireframes map out structure, layout, and user flow for a smooth development process.
              </p>
            </div>
          </div>

          {/* Card 4: SEO & Performance Optimized Design (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                SEO & Performance Optimized Design
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Our web designs aren't just attractive; they are optimized for speed, SEO, and usability, helping your site rank higher and provide a smooth experience for all visitors.
              </p>
            </div>

            {/* Bottom Icon: SEO Screen with Magnifying Glass */}
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
                {/* Screen Outline */}
                <rect x="10" y="10" width="44" height="34" rx="4" />
                <line x1="10" y1="20" x2="54" y2="20" />
                <line x1="24" y1="44" x2="24" y2="52" />
                <line x1="40" y1="44" x2="40" y2="52" />
                <line x1="18" y1="52" x2="46" y2="52" />
                {/* "SEO" Text Inside */}
                <text
                  x="20"
                  y="35"
                  fill="currentColor"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  stroke="none"
                >
                  SEO
                </text>
                {/* Magnifier */}
                <circle cx="42" cy="30" r="5" strokeWidth="2" />
                <line x1="46" y1="34" x2="50" y2="38" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
