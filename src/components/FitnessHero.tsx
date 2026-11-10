"use client";

import React from "react";
import Link from "next/link";

export default function FitnessHero() {
  const bulletPoints = [
    "User-Friendly Solutions",
    "Customized Workout Plans",
    "Wearable Device Integration",
    "Fastest Turnaround",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Fitness App <br />
                Development Company
              </h1>
              
              {/* Artistic Wavy Accent Underline */}
              <div className="mt-2 w-56 sm:w-80 h-2.5">
                <svg
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/75"
                >
                  <path
                    d="M2 7C45 2 95 11 140 6C185 1 235 10 278 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Are you a gym franchise owner, coach, or health tech founder looking to empower users with digital workouts? As a leading fitness app development company, we craft customizable fitness, nutrition tracking, smart wearable-synced, and personal training applications engineered for high engagement and daily motivation.
            </p>

            {/* 4 Checklist Points */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 shadow-xs shadow-orange-400/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-transparent border border-white/80 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0A3D78] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Triple Dark Carbon & Energetic Orange Workout Screens */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[470px] h-[415px] sm:h-[455px]">
              
              {/* Phone 1 (Left): Athlete Splash */}
              <div className="absolute left-0 top-10 w-[160px] sm:w-[175px] bg-slate-950 rounded-[28px] p-2 shadow-2xl border-2 border-slate-700 hover:scale-[1.03] transition-transform duration-300 z-10">
                <div
                  className="rounded-[20px] overflow-hidden text-white p-2.5 h-[290px] sm:h-[315px] flex flex-col justify-between bg-cover bg-center text-left"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(9,9,11,0.95)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80')`,
                  }}
                >
                  <div className="flex justify-between items-center text-[8px] text-slate-300">
                    <span className="font-bold">FitPro</span>
                    <span className="text-orange-400">● Live</span>
                  </div>

                  <div className="mt-auto space-y-2">
                    <span className="bg-orange-500 text-white text-[7.5px] font-black uppercase px-1.5 py-0.5 rounded-full inline-block">
                      Workout Club
                    </span>
                    <p className="font-extrabold text-[11px] leading-tight mb-0">
                      Elevate Your <br /> Strength &amp; Focus
                    </p>
                    <div className="bg-orange-500 text-white text-center py-1.5 rounded-xl font-bold text-[9px] shadow">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Center Front Elevated): Dark Orange Activity Dashboard */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[170px] sm:w-[190px] bg-slate-950 rounded-[30px] p-2 shadow-2xl border-[3px] border-orange-500/40 hover:-translate-y-1 transition-transform duration-300 z-20">
                <div className="bg-[#121316] rounded-[22px] overflow-hidden text-white p-2.5 h-[310px] sm:h-[340px] flex flex-col justify-between text-xs text-left">
                  <div>
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mb-2">
                      <span className="font-bold text-white">Hello, Marcus</span>
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[9px]">
                        🔥
                      </span>
                    </div>

                    {/* Orange Highlight Card */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-2.5 text-slate-950 mb-2.5 shadow">
                      <span className="text-[7.5px] font-black uppercase tracking-wider block">
                        Today&apos;s Goal
                      </span>
                      <p className="font-black text-sm mb-0">680 kcal burned</p>
                      <div className="w-full h-1.5 bg-black/20 rounded-full mt-1 overflow-hidden">
                        <div className="w-3/4 h-full bg-slate-950 rounded-full"></div>
                      </div>
                    </div>

                    {/* Mini Metrics */}
                    <div className="grid grid-cols-2 gap-1.5 mb-2">
                      <div className="bg-slate-800/90 rounded-lg p-1.5 border border-slate-700">
                        <span className="text-[7px] text-slate-400 block">Steps</span>
                        <span className="font-black text-[10px] text-orange-400">8,420</span>
                      </div>
                      <div className="bg-slate-800/90 rounded-lg p-1.5 border border-slate-700">
                        <span className="text-[7px] text-slate-400 block">Heart Rate</span>
                        <span className="font-black text-[10px] text-rose-400">128 bpm</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/80 rounded-lg p-1.5 border border-slate-700">
                      <p className="font-bold text-[8.5px] mb-0">HIIT Cardio Circuit</p>
                      <span className="text-[7px] text-slate-400">35 mins • Intermediate</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-1.5 flex justify-around text-slate-400 text-[10px]">
                    <i className="bi bi-house-door-fill text-orange-500"></i>
                    <i className="bi bi-bar-chart"></i>
                    <i className="bi bi-stopwatch"></i>
                    <i className="bi bi-person"></i>
                  </div>
                </div>
              </div>

              {/* Phone 3 (Right): Dark Exercise Rep Tracker */}
              <div className="absolute right-0 top-12 w-[160px] sm:w-[175px] bg-slate-950 rounded-[28px] p-2 shadow-2xl border-2 border-slate-700 hover:scale-[1.03] transition-transform duration-300 z-10">
                <div className="bg-[#121316] rounded-[20px] overflow-hidden text-white p-2.5 h-[290px] sm:h-[315px] flex flex-col justify-between text-xs text-left">
                  <div>
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mb-2">
                      <span className="font-bold text-orange-400">Routine</span>
                      <span>Day 12</span>
                    </div>

                    <div className="rounded-xl overflow-hidden h-20 mb-2 relative">
                      <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80"
                        alt="Gym Workout Preview"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 bg-orange-500 text-slate-950 text-[7px] font-black px-1.5 py-0.5 rounded">
                        Strength
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700 flex justify-between text-[8px]">
                        <span>Dumbbell Press</span>
                        <span className="text-orange-400 font-bold">4x12</span>
                      </div>
                      <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700 flex justify-between text-[8px]">
                        <span>Plank Hold</span>
                        <span className="text-orange-400 font-bold">3x60s</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-500 text-slate-950 text-center py-1.5 rounded-xl font-black text-[9px]">
                    Start Session
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
