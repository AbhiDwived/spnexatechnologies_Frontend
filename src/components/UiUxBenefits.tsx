"use client";

import React from "react";

export default function UiUxBenefits() {
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
                A well-crafted User Interface (UI) design is the key to making a strong first impression and keeping users engaged. We focus on creating interfaces that are not only visually attractive but also intuitive.
              </p>
            </div>
          </div>

          {/* Card 2: Mobile App UI/UX (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Mobile App UI/UX
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We specialize in crafting mobile app experiences that are visually stunning, easy to navigate, and optimized for performance. From wireframing and prototyping to final design, every step is focused on elevating your app delivery.
              </p>
            </div>

            {/* Bottom Icon */}
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
                {/* Mobile Phone Body */}
                <rect x="18" y="6" width="28" height="52" rx="6" />
                {/* Speaker slit & home indicator */}
                <line x1="28" y1="12" x2="36" y2="12" />
                <line x1="28" y1="52" x2="36" y2="52" />
                {/* UI card inside */}
                <rect x="23" y="18" width="18" height="14" rx="2" />
                {/* "UI" text inside screen */}
                <path d="M26 38v4a3 3 0 0 0 6 0v-4" />
                <path d="M36 38v7" />
                {/* Click / Touch Ripple on right side */}
                <path d="M49 40c4 0 7 3 7 7" strokeWidth="2" strokeDasharray="2 2" />
                <circle cx="48" cy="48" r="2.5" fill="currentColor" />
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
                Our prototyping and wireframing services help bring your app or website concepts to life before development begins. We create detailed wireframes that represent the structure and flow of your product.
              </p>
            </div>
          </div>

          {/* Card 4: Interaction & Experience Design (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Interaction & Experience Design
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Great digital products go beyond visuals: they feel effortless and engaging to use. Our interaction and experience design services focus on creating intuitive, responsive, and fluid interactions.
              </p>
            </div>

            {/* Bottom Icon */}
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
                {/* Floating screen cards */}
                <rect x="10" y="8" width="18" height="14" rx="2" />
                <rect x="36" y="10" width="18" height="14" rx="2" />
                {/* Connected lines */}
                <path d="M19 22 V 32 H 45 V 24" strokeWidth="2" strokeDasharray="2 2" />
                {/* Hand pointing / touching */}
                <path d="M32 30 V 44" strokeWidth="3" />
                <path d="M28 40 v-6 a2 2 0 0 1 4 0 v14 a4 4 0 0 1 -4 4 h-2 a6 6 0 0 1 -6 -6 v-4 a2 2 0 0 1 4 0 v2" />
                <circle cx="32" cy="28" r="4" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
