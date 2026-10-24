"use client";

import React from "react";

const processStages = [
  {
    title: "Planning",
    bullets: ["Initial Conversation", "Requirement Analysis", "Define Scope"],
  },
  {
    title: "Design",
    bullets: ["User Flows", "Wireframes", "Brand Integration", "Mockups", "Prototypes"],
  },
  {
    title: "Development",
    bullets: ["Architecture", "Coding", "DB Design", "API's", "Weekly Sprints"],
  },
  {
    title: "Testing",
    bullets: ["Regression Testing", "Load Testing", "Device Testing", "Usability Testing", "Reporting"],
  },
  {
    title: "Deployment",
    bullets: ["Deployment Plan", "Release to Production"],
  },
  {
    title: "Maintenance",
    bullets: ["Feedbacks", "Revisions & Debugging"],
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="bg-[#0A417A] text-white py-16 lg:py-20 px-4 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Process of Creating Web and Mobile Application
          </h2>
          <p className="text-blue-100 text-xs md:text-sm leading-relaxed font-normal">
            Turn your concepts into reality with our simple roadmap for mobile app and website development services. Our process is straightforward, starting with a clear plan followed by visual mockups to display the layout and user flow of your app or website. Improve your app&apos;s performance effortlessly. As the best app development company, we offer comprehensive website and app development services. To understand our website design and development services, we have outlined the entire process into six simple stages, illustrating the transition from idea to completion.
          </p>
        </div>

        {/* 6 Stage Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-start">
          {processStages.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Concentric Circle Badge Container */}
              <div className="relative mb-3 flex items-center justify-center">
                {/* Outer Dashed Connector Ring */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[136px] lg:h-[136px] rounded-full border-2 border-dashed border-white/70 flex items-center justify-center p-1 sm:p-1.5 shadow-lg relative bg-blue-900/30">
                  {/* Inner Gradient Concentric Ring (Forms the 8-10px blue gradient border) */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#061F3B] via-[#0D4B8E] to-[#2B6CB0] flex items-center justify-center p-2 sm:p-2.5 shadow-inner">
                    {/* Center Black Circle with Title (Fills the inner space) */}
                    <div className="w-full h-full rounded-full bg-slate-950 text-white flex items-center justify-center text-center px-1.5 shadow-md border border-slate-800/80 overflow-hidden">
                      <span
                        className={`font-bold text-center select-none leading-none whitespace-nowrap block ${
                          stage.title.length >= 10
                            ? "text-[9.5px] sm:text-[10.5px] lg:text-[11.5px] tracking-tight"
                            : "text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] tracking-normal"
                        }`}
                      >
                        {stage.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Yellow Dot at Bottom Center of Circle */}
                <div className="w-4 h-4 rounded-full bg-[#EAB308] border-2 border-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-md z-10"></div>
              </div>

              {/* Vertical Connector Line */}
              <div className="w-0.5 h-6 bg-white/70 mb-2"></div>

              {/* White Bulleted Card */}
              <div className="bg-white text-slate-900 rounded-lg p-3 lg:p-4 shadow-xl border border-slate-100 w-full text-left">
                <ul className="list-disc list-inside space-y-1 text-[11px] lg:text-xs font-semibold text-slate-800 p-0 m-0">
                  {stage.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-tight">
                      <span className="text-slate-900 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
