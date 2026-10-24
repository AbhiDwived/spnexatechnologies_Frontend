"use client";

import React from "react";

export default function StatsCounter() {
  const stats = [
    {
      count: "1500+",
      label: "Projects Delivered",
      icon: "bi-rocket-takeoff-fill",
    },
    {
      count: "150+",
      label: "Startups Served",
      icon: "bi-building-fill",
    },
    {
      count: "800+",
      label: "Happy Clients",
      icon: "bi-people-fill",
    },
    {
      count: "450+",
      label: "Team Members",
      icon: "bi-person-badge-fill",
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden pb-16 lg:pb-24 pt-0">
      {/* Top Section Transition Divider (Exact match to top dark band with light blue fold in Figma image) */}
      <div className="relative w-full h-20 sm:h-24 bg-[#0A417A] mb-12">
        <svg
          className="absolute bottom-0 left-0 w-full h-full text-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,80 L1440,100 L0,100 Z" />
        </svg>
        {/* Light Blue folded corner accent */}
        <div className="absolute top-0 left-0 w-24 sm:w-36 h-full bg-[#90CDF4] clip-path-fold opacity-90 transform -skew-x-12"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="row items-center g-8 lg:g-12">
          {/* Left 2x2 Grid with Dashed Border Cards */}
          <div className="col-lg-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border-2 border-dashed border-slate-300 shadow-sm hover:border-slate-400 transition-colors flex flex-col justify-between"
                >
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                    {item.count}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Circular Experience Badge (Exact match to top Figma image) */}
          <div className="col-lg-6 flex justify-center">
            {/* Glowing Blue Outer Sphere Ring */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-b from-[#60A5FA]/40 via-blue-50 to-[#2563EB]/40 p-6 flex items-center justify-center shadow-[0_0_70px_rgba(37,99,235,0.25)] border-4 border-white">
              {/* Inner Dashed Circular Line Container */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-slate-400 bg-white flex flex-col items-center justify-center text-center p-6 shadow-inner">
                <div className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight">
                  15+
                </div>
                <div className="flex items-center gap-2 justify-center mt-2">
                  <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs shrink-0">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
                    Years of Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
