"use client";

import React from "react";

export default function FitnessPartnerSection() {
  const leftPillars = [
    "Customized Solutions",
    "Skilled Experts",
    "Wearable Device Sync",
    "Full-Cycle Support",
    "On-Time Delivery",
  ];

  const rightPillars = [
    "Cost-Effective Plans",
    "User-Centric Design",
    "Scalable Architecture",
    "Dedicated Maintenance",
    "Seamless Integrations",
  ];

  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Why is Trickle Your Trusted Partner for Fitness Mobile App Development?
          </h2>
          <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Our mobile application development process combines motivational UI, wearable connectivity, and reliable backend scale for standout workout apps.
          </p>
        </div>

        {/* 3-Column Symmetric Hub: 5 Left Pills | Dark & Orange Fitness Phone | 5 Right Pills */}
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

          {/* Center Column: Dark & Orange Fitness Mobile App Mockup matching screenshot */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[205px] sm:w-[225px] bg-slate-950 rounded-[34px] p-2.5 shadow-2xl border-[3px] border-orange-500/40 text-white">
              <div className="bg-[#121316] rounded-[26px] overflow-hidden p-2.5 h-[360px] flex flex-col justify-between text-xs text-left">
                <div>
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                    <span className="font-bold text-white">9:41</span>
                    <div className="w-10 h-2.5 bg-black rounded-full mx-auto"></div>
                    <i className="bi bi-wifi"></i>
                  </div>

                  {/* Energetic Orange Workout Card */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-2.5 text-slate-950 mb-2.5 shadow">
                    <span className="text-[7.5px] font-black uppercase tracking-wider block">
                      Daily Challenge
                    </span>
                    <p className="font-black text-[11px] mb-0">Upper Body Burn</p>
                    <span className="text-[8px] font-bold">45 mins • 520 kcal</span>
                  </div>

                  {/* Stats Chips */}
                  <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                    <div className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                      <span className="text-[7.5px] text-slate-400 block">Active Days</span>
                      <span className="font-black text-xs text-orange-400">18 Streak</span>
                    </div>
                    <div className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                      <span className="text-[7.5px] text-slate-400 block">Heart Rate</span>
                      <span className="font-black text-xs text-rose-400">132 bpm</span>
                    </div>
                  </div>

                  {/* Scheduled Session */}
                  <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700 space-y-1">
                    <span className="text-[8px] font-bold text-white block">Trainer Feedback</span>
                    <span className="text-[7.5px] text-emerald-400 font-bold block">✓ Goal Achieved Today</span>
                  </div>
                </div>

                <div className="bg-orange-500 text-slate-950 text-center py-2 rounded-xl font-black text-[9.5px]">
                  Resume Workout
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
