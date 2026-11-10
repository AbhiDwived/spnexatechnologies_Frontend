"use client";

import React from "react";

export default function OnDemandProcessDiagram() {
  const nodes = [
    { label: "Requirement Gathering", icon: "bi-file-earmark-text" },
    { label: "UI/UX Designing", icon: "bi-window-sidebar" },
    { label: "App Development", icon: "bi-phone" },
    { label: "Testing", icon: "bi-bug" },
    { label: "Deployment", icon: "bi-rocket-takeoff" },
    { label: "Support & Maintenance", icon: "bi-headset" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 overflow-hidden">
      <div className="container max-w-6xl mx-auto text-center">
        
        {/* Heading + Descriptive Intro Paragraph matching screenshot */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Process of Crafting On Demand Application
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-0">
            At Trickle Solutions, we follow an agile, transparent, and milestone-driven methodology when engineering custom on-demand applications. Every project progresses smoothly from initial requirement workshops and clean wireframes into native mobile development, rigorous quality assurance, launch deployment, and continuous lifecycle maintenance to guarantee resilient performance.
          </p>
        </div>

        {/* Desktop Staggered Connected Engineering Flow Diagram matching screenshot */}
        <div className="hidden lg:block relative max-w-5xl mx-auto py-8">
          <div className="grid grid-cols-5 gap-4 items-center relative">
            
            {/* Col 1 (Middle Row): Requirement Gathering */}
            <div className="flex flex-col items-center justify-center pt-16">
              <div className="flex items-center gap-2.5 bg-blue-50/90 border border-blue-200 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="w-8 h-8 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-file-earmark-text"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  Requirement Gathering
                </span>
              </div>
            </div>

            {/* Col 2 (Middle Row): UI/UX Designing with dashed arrow in */}
            <div className="flex flex-col items-center justify-center pt-16 relative">
              <div className="hidden xl:block absolute -left-6 top-[78px] w-6 border-t-2 border-dashed border-blue-400"></div>
              <div className="flex items-center gap-2.5 bg-blue-50/90 border border-blue-200 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="w-8 h-8 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-window-sidebar"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  UI/UX Designing
                </span>
              </div>
            </div>

            {/* Col 3 (Top Row -> Stepped Up & Down Stack): App Development & Deployment */}
            <div className="flex flex-col items-center justify-between space-y-24 relative">
              {/* Top Node: App Development */}
              <div className="flex items-center gap-2.5 bg-cyan-50/90 border border-cyan-200 px-3.5 py-2.5 rounded-xl shadow-xs relative">
                <span className="w-8 h-8 rounded-lg bg-[#00BCD4] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-phone"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  App Development
                </span>
              </div>

              {/* Bottom Node: Deployment */}
              <div className="flex items-center gap-2.5 bg-blue-50/90 border border-blue-200 px-3.5 py-2.5 rounded-xl shadow-xs relative">
                <span className="w-8 h-8 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-rocket-takeoff"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  Deployment
                </span>
              </div>

              {/* Dashed Vertical Connectors in Background */}
              <div className="absolute -left-5 top-5 w-5 h-24 border-l-2 border-t-2 border-dashed border-slate-300 rounded-tl-xl pointer-events-none"></div>
              <div className="absolute -right-5 top-5 w-5 h-24 border-r-2 border-t-2 border-dashed border-slate-300 rounded-tr-xl pointer-events-none"></div>
            </div>

            {/* Col 4 (Middle Row): Testing */}
            <div className="flex flex-col items-center justify-center pt-16 relative">
              <div className="flex items-center gap-2.5 bg-blue-50/90 border border-blue-200 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="w-8 h-8 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-bug"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  Testing
                </span>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-8 border-r-2 border-b-2 border-dashed border-slate-300 rounded-br-xl pointer-events-none"></div>
            </div>

            {/* Col 5 (Bottom Row): Support & Maintenance */}
            <div className="flex flex-col items-center justify-end pt-36 relative">
              <div className="hidden xl:block absolute -left-8 bottom-[22px] w-8 border-t-2 border-dashed border-blue-400"></div>
              <div className="flex items-center gap-2.5 bg-cyan-50/90 border border-cyan-200 px-3.5 py-2.5 rounded-xl shadow-xs">
                <span className="w-8 h-8 rounded-lg bg-[#00BCD4] text-white flex items-center justify-center text-sm shrink-0">
                  <i className="bi bi-headset"></i>
                </span>
                <span className="text-[11px] font-bold text-[#0B2545] text-left leading-tight">
                  Support &amp; Maintenance
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Tablet/Mobile Responsive Sequence Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {nodes.map((n, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-blue-50/80 border border-blue-100 rounded-xl p-3.5 shadow-2xs"
            >
              <span className="w-9 h-9 rounded-lg bg-[#1D70B8] text-white flex items-center justify-center text-sm font-bold shrink-0">
                <i className={`bi ${n.icon}`}></i>
              </span>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  Step 0{i + 1}
                </span>
                <span className="text-xs font-extrabold text-[#0B2545]">{n.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
