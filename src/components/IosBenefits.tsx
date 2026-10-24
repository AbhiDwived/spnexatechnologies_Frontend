"use client";

import React from "react";

export default function IosBenefits() {
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
          
          {/* Card 1: Custom iOS App Development (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: iPhone Outline with Shield & Gear */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Phone screen */}
                <rect x="18" y="10" width="28" height="46" rx="6" />
                <line x1="28" y1="16" x2="36" y2="16" />
                <circle cx="32" cy="50" r="2" fill="currentColor" />
                {/* Shield / Code badge overlay */}
                <path d="M12 28l10-4 10 4v8c0 6-10 10-10 10s-10-4-10-10v-8z" strokeWidth="2" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Custom iOS App Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We build high-performance, tailor-made iOS apps for iPhone and iPad with fluid UX and engaging interfaces. Our apps are built for speed, scalability, and seamless user experiences from onboarding to payment.
              </p>
            </div>
          </div>

          {/* Card 2: App Store Deployment (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                App Store Deployment
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We manage the entire Apple App Store submission process, ensuring your iOS app meets all guidelines and is approved quickly. From beta testing on TestFlight to store optimization and security checks, we handle the release smoothly from end to end.
              </p>
            </div>

            {/* Bottom Icon: App Store Download / Verification Hand */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors pt-2">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Cloud & Arrow for App Store */}
                <path d="M48 28a10 10 0 0 0-19-4 12 12 0 0 0-13 12c0 6.6 5.4 12 12 12h20a10 10 0 0 0 0-20z" />
                <path d="M32 34v16m-6-6l6 6 6-6" />
                {/* Small Apple leaf symbol */}
                <circle cx="32" cy="18" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Card 3: Analytics & Insights (Icon Top, Text Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Top Icon: Analytics Dashboard Screen */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Screen Outline */}
                <rect x="8" y="12" width="48" height="36" rx="4" />
                <line x1="8" y1="22" x2="56" y2="22" />
                {/* Line graph */}
                <path d="M16 40l10-12 8 6 14-16" strokeWidth="2.5" />
                <circle cx="48" cy="18" r="2" fill="currentColor" />
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
                Gain access to advanced real-time tools for analytics inside iOS apps to track user interactions, app performance, and engagement metrics on the fly. This includes tracking active sessions, screen duration, conversion funnels, and app interactions by analyzing clean insights.
              </p>
            </div>
          </div>

          {/* Card 4: Enterprise iOS Solutions (Text Top, Icon Bottom) */}
          <div className="flex flex-col justify-between space-y-5 text-left group">
            {/* Content Top */}
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Enterprise iOS Solutions
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                We develop reliable, customized iOS app suites for large-scale business operations. Our enterprise solutions are designed to handle high user volumes, secure cloud access, and robust data management.
              </p>
            </div>

            {/* Bottom Icon: Partnership Hands with Security Shield */}
            <div className="w-16 h-16 rounded-xl text-blue-200 group-hover:text-white transition-colors pt-2">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Enterprise Shield */}
                <path d="M32 10l16 6v14c0 12-16 20-16 20s-16-8-16-20V16l16-6z" />
                {/* Checkmark inside */}
                <path d="M26 30l4 4 8-8" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
