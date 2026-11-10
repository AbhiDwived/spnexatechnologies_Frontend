"use client";

import React from "react";
import Link from "next/link";

export default function OnDemandHero() {
  const bulletPoints = [
    "User-Centered Solutions",
    "Quick Turnaround Times",
    "Affordable Solutions",
    "24/7 Ongoing Support",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                On Demand App <br />
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
              Unlock the full potential of your digital vision with the industry&apos;s leading On Demand App Development Company. Our team of skilled designers and developers builds scalable, real-time, and intuitive on-demand mobile applications across logistics, booking, healthcare, food, and home services—crafted to accelerate convenience and profitability.
            </p>

            {/* 4 Checklist Points */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0 shadow-xs shadow-cyan-300/50"></span>
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

          {/* Right Column: Dual Crisp White & Blue On-Demand Mobile Screens + Playful Annotation */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[460px] h-[410px] sm:h-[450px]">
              
              {/* Phone 1 (Left): On-Demand Booking Feed */}
              <div className="absolute left-0 sm:left-2 top-4 w-[195px] sm:w-[215px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 hover:scale-[1.02] transition-transform duration-300 z-10">
                <div className="bg-white rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-10 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                      <i className="bi bi-battery-full"></i>
                    </div>

                    <div className="flex items-center justify-between mb-2 text-left">
                      <div>
                        <span className="text-[8px] text-slate-400 block">On-Demand Hub</span>
                        <p className="font-extrabold text-[10.5px] text-slate-900 mb-0">Explore Services</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1D70B8] flex items-center justify-center text-xs font-bold">
                        ⚡
                      </div>
                    </div>

                    {/* Featured Blue Card */}
                    <div className="bg-gradient-to-r from-[#2196F3] to-[#1D70B8] rounded-xl p-2.5 text-white mb-2.5 text-left shadow-sm">
                      <span className="text-[7.5px] uppercase tracking-wider text-blue-100 font-bold block">
                        Instant Booking
                      </span>
                      <p className="font-extrabold text-[10px] mb-1">Pro Service Near You</p>
                      <div className="flex items-center justify-between text-[8px] bg-white/20 rounded-lg px-2 py-1">
                        <span>ETA: 15 mins</span>
                        <span className="font-bold">Book →</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center mb-2">
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">🩺</span>
                        <span className="text-[7px] font-bold text-slate-700">Health</span>
                      </div>
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">🚕</span>
                        <span className="text-[7px] font-bold text-slate-700">Ride</span>
                      </div>
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">📦</span>
                        <span className="text-[7px] font-bold text-slate-700">Parcel</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-1.5 flex justify-around text-slate-400 text-[11px]">
                    <i className="bi bi-house-door-fill text-[#1D70B8]"></i>
                    <i className="bi bi-grid"></i>
                    <i className="bi bi-geo-alt"></i>
                    <i className="bi bi-person"></i>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Right): Provider Detail & Live Scheduling */}
              <div className="absolute right-4 sm:right-6 top-7 w-[195px] sm:w-[215px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 hover:scale-[1.02] transition-transform duration-300 z-20">
                <div className="bg-slate-50 rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-10 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                      <i className="bi bi-wifi"></i>
                    </div>

                    <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-2xs mb-2 text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-[#1D70B8] flex items-center justify-center text-2xl mx-auto mb-1">
                        👨‍⚕️
                      </div>
                      <p className="font-extrabold text-[10.5px] text-slate-900 mb-0">Dr. Alex Mercer</p>
                      <span className="text-[8px] text-[#1D70B8] font-bold block">Verified Specialist</span>
                      <span className="text-[7.5px] text-slate-500 block mt-0.5">★ 4.9 • Available Now</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1 text-center mb-2">
                      {[
                        { d: "Mon", n: "14" },
                        { d: "Tue", n: "15", active: true },
                        { d: "Wed", n: "16" },
                        { d: "Thu", n: "17" },
                      ].map((slot) => (
                        <div
                          key={slot.d}
                          className={`rounded-lg py-1 border text-[8px] ${
                            slot.active
                              ? "bg-[#1D70B8] text-white border-[#1D70B8] font-bold"
                              : "bg-white text-slate-700 border-slate-200"
                          }`}
                        >
                          <span className="block text-[7px] opacity-80">{slot.d}</span>
                          <span>{slot.n}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-1.5 rounded-lg border text-center text-[8px] font-bold text-[#1D70B8]">
                      10:00 AM Slot Open
                    </div>
                  </div>

                  <div className="bg-[#1D70B8] text-white text-center py-2 rounded-xl font-bold text-[10px] shadow">
                    Confirm Request
                  </div>
                </div>
              </div>

              {/* Dotted Annotation Callout on Top-Right matching screenshot */}
              <div className="hidden sm:flex flex-col items-start absolute -right-2 top-14 z-30 pointer-events-none">
                <span className="text-[10px] font-bold text-cyan-300 bg-[#082F5E]/90 px-2.5 py-1 rounded-full border border-cyan-400/30 shadow">
                  Interactive UI
                </span>
                <svg className="w-10 h-10 text-cyan-300/80 -mt-1 ml-2" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M32 4C28 18 18 28 4 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <path d="M9 26L4 30L9 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
