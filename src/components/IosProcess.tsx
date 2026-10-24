"use client";

import React from "react";

export default function IosProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Requirement Gathering",
      desc: "Detailed evaluation of your Apple target devices, iOS system requirements, product scope, and technical roadmap.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "UI/UX Designing",
      desc: "Figma wireframing, Apple Human Interface Guidelines adherence, fluid transitions, dynamic typography, and dark mode styling.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "iOS Development",
      desc: "Developing native iOS apps using Swift, SwiftUI, Combine, Apple frameworks (CoreData, HealthKit), and modular architectures.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Testing & QA",
      desc: "TestFlight distribution, automated UI testing via XCTest, memory leak checks via Xcode Instruments, and security auditing.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "05",
      title: "Deployment",
      desc: "App Store Connect configuration, App Store guidelines review, privacy manifest verification, and official App Store launch.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Support & Maintenance",
      desc: "Annual iOS version updates (iOS 18+), bug patches, server uptime tracking, new feature releases, and 24/7 dedicated support.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-4">
            Process of Creating iOS Development
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Turn your visionary iOS app concept into a reality through our agile, end-to-end iOS application development workflow. Our team of experienced developers and engineers will guide you from initial requirement gathering to UI/UX design, Swift development, rigorous QA testing, App Store submission, and post-launch maintenance to ensure success.
          </p>
        </div>

        {/* Process Stepper Diagram matching reference */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Connecting Flow Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-blue-200 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                {/* Step Badge & Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <span className="group-hover:brightness-200 transition-all">
                      {item.icon}
                    </span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1D70B8] text-white text-[10px] font-black flex items-center justify-center shadow">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1D70B8] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
