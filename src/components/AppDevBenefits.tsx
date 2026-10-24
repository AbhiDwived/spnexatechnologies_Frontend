"use client";

import React from "react";

export default function AppDevBenefits() {
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
          
          {/* Card 1: Backend & API Development (Icon Top, Text Bottom) */}
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
                {/* Browser window */}
                <rect x="6" y="8" width="52" height="48" rx="6" />
                <line x1="6" y1="20" x2="58" y2="20" />
                <circle cx="16" cy="14" r="2" fill="currentColor" />
                <circle cx="24" cy="14" r="2" fill="currentColor" />
                <circle cx="32" cy="14" r="2" fill="currentColor" />
                {/* Gear and code lines */}
                <circle cx="38" cy="38" r="6" />
                <path d="M38 28v3M38 45v3M28 38h3M45 38h3" />
                <path d="M14 30h10M14 38h8M14 46h16" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Backend & API Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We develop robust, secure, and scalable backends for your applications. Our APIs ensure seamless integration with third-party services, databases, and other systems, providing smooth and reliable app functionality.
              </p>
            </div>
          </div>

          {/* Card 2: Cloud & Enterprise Solutions (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Cloud & Enterprise Solutions
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Our cloud-based and enterprise applications help your business scale efficiently. We focus on performance, security, and seamless integration with existing systems for maximum flexibility and productivity.
              </p>
            </div>

            {/* Bottom Icon: Cloud with Database Servers */}
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
                {/* Cloud Outline */}
                <path d="M48 26a10 10 0 0 0-19-4 12 12 0 0 0-13 12c0 6.6 5.4 12 12 12h20a10 10 0 0 0 0-20z" />
                {/* Database server rack beneath */}
                <rect x="22" y="44" width="20" height="6" rx="2" />
                <rect x="22" y="52" width="20" height="6" rx="2" />
                <circle cx="26" cy="47" r="1" fill="currentColor" />
                <circle cx="26" cy="55" r="1" fill="currentColor" />
                <line x1="32" y1="36" x2="32" y2="44" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          {/* Card 3: E-commerce & Payment Integration (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Screen with Shopping Cart */}
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
                {/* Screen Outline */}
                <rect x="8" y="10" width="48" height="34" rx="4" />
                <line x1="8" y1="20" x2="56" y2="20" />
                <line x1="26" y1="44" x2="26" y2="52" />
                <line x1="38" y1="44" x2="38" y2="52" />
                <line x1="20" y1="52" x2="44" y2="52" />
                {/* Shopping Cart inside */}
                <path d="M22 26h4l3 10h12l3-7H28" />
                <circle cx="30" cy="38" r="1.5" fill="currentColor" />
                <circle cx="40" cy="38" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                E-commerce & Payment Integration
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We design applications with secure payment gateways, shopping carts, and e-commerce functionalities. Our solutions ensure smooth transactions and an effortless user experience for your customers.
              </p>
            </div>
          </div>

          {/* Card 4: Analytics & Performance Optimization (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Analytics & Performance Optimization
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Our applications include analytics tools to track user behavior and performance metrics. Continuous optimization improves speed, usability, and engagement, helping you make data-driven business decisions.
              </p>
            </div>

            {/* Bottom Icon: Ascending Bar Chart with Arrow */}
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
