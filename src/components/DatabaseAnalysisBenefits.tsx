"use client";

import React from "react";

export default function DatabaseAnalysisBenefits() {
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
          
          {/* Card 1: Database Performance Optimization (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Analytics whiteboard / dashboard with dial gauge & graph */}
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
                {/* Board on stand */}
                <rect x="8" y="10" width="48" height="34" rx="4" />
                <line x1="8" y1="18" x2="56" y2="18" />
                {/* Dial speed gauge inside */}
                <circle cx="24" cy="30" r="7" />
                <path d="M24 30l3-4" />
                {/* Rising graph inside */}
                <path d="M38 34l5-5 5 3 4-6" />
                {/* Stand */}
                <line x1="32" y1="44" x2="32" y2="54" />
                <line x1="22" y1="54" x2="42" y2="54" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Database Performance Optimization
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Enhance your database speed, efficiency, and reliability with targeted optimization strategies that ensure seamless operations and quick data access.
              </p>
            </div>
          </div>

          {/* Card 2: Data Security & Compliance (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Data Security & Compliance
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Protect sensitive information with robust security measures, including encryption, access controls, and ongoing monitoring to meet industry standards.
              </p>
            </div>

            {/* Bottom Icon: Circuit security chip lock */}
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
                {/* Hexagon / central badge with padlock */}
                <circle cx="32" cy="32" r="14" />
                <rect x="26" y="30" width="12" height="10" rx="2" />
                <path d="M28 30v-4a4 4 0 0 1 8 0v4" />
                {/* Circuit connector pins */}
                <line x1="32" y1="10" x2="32" y2="18" />
                <line x1="32" y1="46" x2="32" y2="54" />
                <line x1="10" y1="32" x2="18" y2="32" />
                <line x1="46" y1="32" x2="54" y2="32" />
                <circle cx="32" cy="10" r="2" fill="currentColor" />
                <circle cx="32" cy="54" r="2" fill="currentColor" />
                <circle cx="10" cy="32" r="2" fill="currentColor" />
                <circle cx="54" cy="32" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Card 3: Analytics & Reporting (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Desktop monitor with multi-dimensional analytics */}
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
                {/* Screen */}
                <rect x="8" y="12" width="48" height="34" rx="4" />
                {/* Monitor Stand */}
                <line x1="26" y1="46" x2="26" y2="52" />
                <line x1="38" y1="46" x2="38" y2="52" />
                <line x1="20" y1="52" x2="44" y2="52" />
                {/* Bar charts inside */}
                <line x1="18" y1="36" x2="18" y2="24" />
                <line x1="24" y1="36" x2="24" y2="20" />
                <line x1="30" y1="36" x2="30" y2="28" />
                {/* Area line graph inside */}
                <path d="M36 34l5-7 6 3 5-8" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Analytics & Reporting
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Transform raw data into actionable insights with detailed reports, dashboards, and analysis to drive informed business decisions.
              </p>
            </div>
          </div>

          {/* Card 4: Scalability & Maintenance (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Scalability & Maintenance
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Ensure your database can grow with your business while staying optimized, secure, and easy to manage over time.
              </p>
            </div>

            {/* Bottom Icon: Stacked Database Cylinders with growth arrow */}
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
                {/* Top cylinder */}
                <ellipse cx="28" cy="18" rx="16" ry="6" />
                <path d="M12 18v10c0 3.3 7.2 6 16 6s16-2.7 16-6v-10" />
                {/* Bottom cylinder */}
                <path d="M12 28v10c0 3.3 7.2 6 16 6s16-2.7 16-6v-10" />
                {/* Upward Scalability arrow on right */}
                <path d="M46 44l8-8m0 0v6m0-6h-6" strokeWidth="2.8" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
