"use client";

import React from "react";

export default function AndroidBenefits() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#083567] via-[#0A3F7F] to-[#0A417E] text-white py-12 sm:py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Benefits With Our Service
          </h2>
        </div>

        {/* 4 Staggered Columns matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Card 1: Custom Android App Development (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Android Robot */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-emerald-300 transition-colors">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Android robot body */}
                <path d="M16 32v16a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V32H16z" />
                {/* Antennas */}
                <line x1="22" y1="12" x2="26" y2="20" />
                <line x1="42" y1="12" x2="38" y2="20" />
                {/* Head */}
                <path d="M18 26a14 14 0 0 1 28 0H18z" />
                <circle cx="26" cy="22" r="1.5" fill="currentColor" />
                <circle cx="38" cy="22" r="1.5" fill="currentColor" />
                {/* Arms */}
                <line x1="10" y1="34" x2="10" y2="46" strokeWidth="3" />
                <line x1="54" y1="34" x2="54" y2="46" strokeWidth="3" />
                {/* Legs */}
                <line x1="26" y1="54" x2="26" y2="60" strokeWidth="3" />
                <line x1="38" y1="54" x2="38" y2="60" strokeWidth="3" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Custom Android App Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                Building high-performance, tailored Android applications with modern architecture, Kotlin/Java excellence, and smooth intuitive user interfaces.
              </p>
            </div>
          </div>

          {/* Card 2: Secure Payment Integration (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Secure Payment Integration
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We integrate robust and encrypted payment gateways into your Android apps. From Google Pay to Stripe and UPI, our solutions ensure bulletproof transactions and user trust.
              </p>
            </div>

            {/* Bottom Icon: POS Terminal & Shield */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-emerald-300 transition-colors pt-2">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* POS Machine */}
                <rect x="18" y="10" width="28" height="44" rx="4" />
                <rect x="24" y="16" width="16" height="12" rx="1" />
                <circle cx="26" cy="36" r="1.5" fill="currentColor" />
                <circle cx="32" cy="36" r="1.5" fill="currentColor" />
                <circle cx="38" cy="36" r="1.5" fill="currentColor" />
                <circle cx="26" cy="42" r="1.5" fill="currentColor" />
                <circle cx="32" cy="42" r="1.5" fill="currentColor" />
                <circle cx="38" cy="42" r="1.5" fill="currentColor" />
                {/* Receipt slip */}
                <path d="M22 10V6l4 2 4-2 4 2 4-2v4" />
              </svg>
            </div>
          </div>

          {/* Card 3: Analytics & Insights (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Analytics Dashboard Screen */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-emerald-300 transition-colors">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Screen Outline */}
                <rect x="8" y="12" width="48" height="36" rx="4" />
                <line x1="8" y1="22" x2="56" y2="22" />
                {/* Bar chart inside */}
                <line x1="16" y1="40" x2="16" y2="34" />
                <line x1="24" y1="40" x2="24" y2="28" />
                <line x1="32" y1="40" x2="32" y2="30" />
                {/* Line graph overlay */}
                <path d="M38 38l4-6 6 2 4-8" />
                {/* Stand */}
                <line x1="32" y1="48" x2="32" y2="54" />
                <line x1="24" y1="54" x2="40" y2="54" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Analytics &amp; Insights
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We design apps with advanced analytics tools to track user behavior, crash logs, and app performance. Continuous optimization helps you make informed data-driven business decisions.
              </p>
            </div>
          </div>

          {/* Card 4: Multi-Language & Multi-Currency Support (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Multi-Language &amp; Multi-Currency Support
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We integrate localization frameworks and multi-currency support so your Android application can scale internationally across languages, timezones, and regional payment expectations.
              </p>
            </div>

            {/* Bottom Icon: Globe with Chat / Currency network */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-emerald-300 transition-colors pt-2">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Globe */}
                <circle cx="32" cy="32" r="22" />
                <ellipse cx="32" cy="32" rx="10" ry="22" />
                <line x1="10" y1="32" x2="54" y2="32" />
                <line x1="14" y1="22" x2="50" y2="22" />
                <line x1="14" y1="42" x2="50" y2="42" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
