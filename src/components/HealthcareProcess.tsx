"use client";

import React from "react";

export default function HealthcareProcess() {
  const steps = [
    {
      title: "Submitting Your Order",
      desc: "Selecting and submitting is the foremost thing that a user needs to do.",
      icon: (
        <svg
          className="w-10 h-10 text-[#00BCD4] stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="14" x2="11" y2="14" />
          <line x1="7" y1="18" x2="14" y2="18" />
        </svg>
      ),
    },
    {
      title: "Defining True Reliance",
      desc: "You are setting up a meeting with the developer to clarify what you need in your product.",
      icon: (
        <svg
          className="w-10 h-10 text-[#00BCD4] stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "UI design & Frontend Coding",
      desc: "Implement and structure highly professional design along with front-end programming codes.",
      icon: (
        <svg
          className="w-10 h-10 text-[#00BCD4] stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 8l-2 2 2 2" />
          <path d="M17 8l2 2-2 2" />
          <line x1="13" y1="7" x2="11" y2="13" />
        </svg>
      ),
    },
    {
      title: "Fast Preview",
      desc: "Get the fastest and earliest preview scheduled along with the project. Have a check to make your desired changes if needed.",
      icon: (
        <svg
          className="w-10 h-10 text-[#00BCD4] stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative">
      <div className="container max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-2">
            How Our Healthcare App <br className="hidden sm:inline" />
            Development Company Works
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Top most priority to Transparency
          </p>
        </div>

        {/* 4 Process Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 group hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-xs mb-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
