"use client";

import React from "react";

export default function DigitalMarketingBenefits() {
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
          
          {/* Card 1: SEO Optimization (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Gear with SEO text & search glass */}
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
                {/* Gear cog */}
                <circle cx="32" cy="32" r="16" />
                <path d="M32 8v6M32 50v6M8 32h6M50 32h6M15 15l4.5 4.5M44.5 44.5l4.5 4.5M15 49l4.5-4.5M44.5 19.5l4.5-4.5" />
                {/* Centered SEO representation */}
                <path d="M23 28h3a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h3" />
                <path d="M30 28h4v8h-4M30 32h3" />
                <circle cx="41" cy="32" r="4" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                SEO Optimization
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Enhance your website&apos;s visibility on search engines, attract more organic traffic, and improve rankings with targeted strategies.
              </p>
            </div>
          </div>

          {/* Card 2: Social Media Marketing (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Social Media Marketing
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Build your brand and engage with your audience across platforms like Facebook, Instagram, LinkedIn, and Twitter.
              </p>
            </div>

            {/* Bottom Icon: Network nodes / social sharing */}
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
                {/* Central hub and satellite social nodes */}
                <circle cx="32" cy="32" r="7" />
                <circle cx="16" cy="20" r="5" />
                <circle cx="48" cy="20" r="5" />
                <circle cx="20" cy="48" r="5" />
                <circle cx="44" cy="48" r="5" />
                <line x1="26" y1="28" x2="20" y2="24" />
                <line x1="38" y1="28" x2="44" y2="24" />
                <line x1="28" y1="37" x2="23" y2="44" />
                <line x1="36" y1="37" x2="41" y2="44" />
              </svg>
            </div>
          </div>

          {/* Card 3: Email Marketing (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Email envelope with paper plane / communication */}
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
                {/* Envelope */}
                <rect x="8" y="16" width="36" height="26" rx="4" />
                <path d="M8 20l18 13 18-13" />
                {/* Paper plane / broadcast above */}
                <path d="M38 12l18 4-8 12-4-8-6-8z" />
                <path d="M44 20l6 8" />
                {/* Sparks / notifications */}
                <circle cx="50" cy="42" r="3" />
                <circle cx="56" cy="34" r="2" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Email Marketing
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Craft personalized and automated email campaigns that nurture leads and drive conversions.
              </p>
            </div>
          </div>

          {/* Card 4: PPC Advertising (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                PPC Advertising
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Run effective paid campaigns across Google Ads, social media, and display networks to generate high-quality leads.
              </p>
            </div>

            {/* Bottom Icon: Browser window with ad click / cursor / analytics */}
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
                {/* Browser window */}
                <rect x="8" y="10" width="48" height="38" rx="5" />
                <line x1="8" y1="20" x2="56" y2="20" />
                <circle cx="16" cy="15" r="2" fill="currentColor" />
                <circle cx="23" cy="15" r="2" fill="currentColor" />
                <circle cx="30" cy="15" r="2" fill="currentColor" />
                {/* Sponsored AD badge inside */}
                <rect x="14" y="26" width="16" height="8" rx="2" strokeDasharray="2 2" />
                <path d="M18 30h8" />
                {/* Pointer click */}
                <path d="M40 34l8 16-4 1-3 7-5-2 3-7-6-1 7-14z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
