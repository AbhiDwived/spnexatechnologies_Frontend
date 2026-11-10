"use client";

import React from "react";

export default function OnDemandPartnerSection() {
  const leftPillars = [
    "Customized Solutions",
    "Reliable Experts",
    "Future-Ready Tech Stack",
    "Bespoke Architecture",
    "On-Time Delivery",
  ];

  const rightPillars = [
    "Cost-Effective Solutions",
    "User-Centric Design",
    "Agile Innovation",
    "Unified Integration",
    "Ongoing Maintenance",
  ];

  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Why is Trickle Your Trusted Partner for On-Demand Mobile App Development?
          </h2>
          <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Our on-demand app development methodology creates agile, intuitive, and scalable mobile products crafted for high retention and smooth business performance.
          </p>
        </div>

        {/* 3-Column Symmetric Hub: 5 Left Pills | On-Demand Center Phone | 5 Right Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column Pills */}
          <div className="lg:col-span-4 space-y-3.5">
            {leftPillars.map((label, idx) => (
              <div
                key={idx}
                className="bg-white text-[#0B2545] rounded-xl px-4 py-3 shadow-lg font-bold text-xs sm:text-[13px] flex items-center justify-between hover:-translate-x-1 transition-transform"
              >
                <span>{label}</span>
                <i className="bi bi-check-circle-fill text-[#1D70B8]"></i>
              </div>
            ))}
          </div>

          {/* Center Column: On-Demand Multi-Service Mobile App Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[205px] sm:w-[225px] bg-slate-950 rounded-[34px] p-2.5 shadow-2xl border-[3px] border-slate-700 text-slate-800">
              <div className="bg-white rounded-[26px] overflow-hidden p-2.5 h-[360px] flex flex-col justify-between text-xs">
                <div>
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                    <span className="font-bold">9:41</span>
                    <div className="w-10 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                    <i className="bi bi-wifi"></i>
                  </div>

                  {/* Top Featured Header Banner */}
                  <div className="bg-gradient-to-r from-[#2196F3] to-[#1D70B8] rounded-xl p-2.5 text-white text-left mb-2.5 shadow-sm">
                    <span className="text-[7.5px] text-blue-100 uppercase tracking-wider font-bold block">
                      All-In-One Hub
                    </span>
                    <p className="font-extrabold text-[11px] mb-0">Instant Booking Ready</p>
                    <span className="text-[8px] text-blue-50">Live Order &amp; GPS Tracking</span>
                  </div>

                  {/* Quick Vertical Chips */}
                  <div className="grid grid-cols-2 gap-1.5 mb-2.5 text-left">
                    <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
                      <span className="text-[7.5px] text-slate-500 block">Deliveries</span>
                      <span className="font-black text-xs text-[#1D70B8]">148 Active</span>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
                      <span className="text-[7.5px] text-slate-500 block">Satisfaction</span>
                      <span className="font-black text-xs text-emerald-600">99.2%</span>
                    </div>
                  </div>

                  {/* Status Card */}
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-left space-y-1">
                    <span className="text-[8px] font-bold text-slate-800 block">Courier Dispatched</span>
                    <span className="text-[7.5px] text-emerald-600 font-bold block">✓ Arriving in 12 mins</span>
                  </div>
                </div>

                <div className="bg-[#0B2545] text-white text-center py-2 rounded-xl font-bold text-[9.5px]">
                  Explore Dashboard
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Pills */}
          <div className="lg:col-span-4 space-y-3.5">
            {rightPillars.map((label, idx) => (
              <div
                key={idx}
                className="bg-white text-[#0B2545] rounded-xl px-4 py-3 shadow-lg font-bold text-xs sm:text-[13px] flex items-center justify-between hover:translate-x-1 transition-transform"
              >
                <span>{label}</span>
                <i className="bi bi-check-circle-fill text-[#1D70B8]"></i>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
