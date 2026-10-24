"use client";

import React from "react";

export default function AboutStats() {
  const statCards = [
    {
      value: "1500+",
      label: "Projects Conducted",
      icon: (
        // Rocket icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5" />
        </svg>
      ),
    },
    {
      value: "150+",
      label: "Startups Served",
      icon: (
        // Startup / Laptop icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      value: "800+",
      label: "Happy Clients",
      icon: (
        // Happy user icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: "450+",
      label: "Team Members",
      icon: (
        // Star / Team badge icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 2x2 Dashed Border Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-6 sm:p-7 bg-white hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
                  {card.value}
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                    {card.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Giant Circular Glowing Orb for 15+ Years Of Experience */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center p-4">
              
              {/* Outer soft blue atmospheric halo glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 via-blue-200/50 to-blue-300/40 blur-xl opacity-80"></div>
              
              {/* Concentric layered ring */}
              <div className="absolute inset-2 sm:inset-3 rounded-full border-[10px] sm:border-[14px] border-blue-200/60 shadow-inner"></div>

              {/* Inner Circle Box */}
              <div className="relative z-10 w-full h-full rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-300/70 p-6 text-center">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0A3D78] tracking-tighter leading-none mb-2">
                  15+
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                    Years Of Experience
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
