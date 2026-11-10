"use client";

import React from "react";
import Link from "next/link";

export default function PickupNecessary() {
  const bulletPoints = [
    "Cost Efficiency",
    "Wider Customer Reach",
    "24/7 Accessibility",
    "Centralized Data",
    "Better Client Experience",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Paragraphs, Bullets & CTA */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Pickup and Delivery App Development <br className="hidden sm:inline" />
              Necessary for Pickup and Delivery App Company
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Managing operations in the logistics &amp; courier industry requires modern-day technologies. With the right team of app developers, we build an app that efficiently displays your delivery services and streamlines client interactions. We ensure that the mobile application fits your unique business requirements.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              As a pickup and delivery app development company, our solutions reduce dispatch errors, simplify fleet operations, and elevate customer satisfaction. Our customized apps save time, optimize fuel routes, and deliver seamless tracking tools for every stage of your delivery workflow.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0B2545] text-white hover:bg-[#155A96] transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white/20 text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0B2545] transition-all"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Mint-Green Pickup & Delivery Mobile Screens */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
            <div className="bg-emerald-50/75 rounded-3xl p-3 sm:p-5 border border-emerald-200/70 shadow-xl w-full max-w-lg relative overflow-hidden">
              {/* Subtle emerald glow */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10">
                
                {/* Screen 1: Schedule Pickup Welcome Screen */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="bg-emerald-50 rounded-xl p-2 mb-2 text-center border border-emerald-100">
                      <span className="text-2xl sm:text-3xl block mb-1">🚐</span>
                      <span className="text-[7.5px] font-black text-emerald-700 uppercase tracking-wider">
                        Same-Day Courier
                      </span>
                    </div>
                    <p className="font-extrabold text-[9.5px] sm:text-[11px] text-slate-900 leading-tight mb-1 text-left">
                      Doorstep Parcel Pickup
                    </p>
                    <p className="text-[7.5px] text-slate-500 text-left leading-snug mb-0">
                      Instant pickup slots &amp; transparent shipping rates.
                    </p>
                  </div>

                  <div className="bg-emerald-600 text-white text-[8px] sm:text-[9px] font-bold py-1.5 rounded-lg text-center shadow-xs">
                    Schedule Now
                  </div>
                </div>

                {/* Screen 2: Active Shipments & Address Input */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="bg-emerald-600 text-white rounded-lg px-2 py-1 text-[8px] font-bold mb-1.5 flex justify-between items-center">
                      <span>Shipments</span>
                      <i className="bi bi-box-seam"></i>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <div className="bg-emerald-50/70 p-1.5 rounded-lg border border-emerald-100">
                        <p className="font-bold text-[8px] text-slate-900 mb-0">Box #PK-204</p>
                        <span className="text-[7px] text-emerald-700 font-bold block">Picked Up • 2.5 kg</span>
                      </div>

                      <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <p className="font-bold text-[8px] text-slate-900 mb-0">Box #PK-209</p>
                        <span className="text-[7px] text-amber-600 font-bold block">Pending Driver</span>
                      </div>

                      <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <p className="font-bold text-[8px] text-slate-900 mb-0">Envelope #118</p>
                        <span className="text-[7px] text-slate-500 font-bold block">Delivered • 10:05 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around items-center border-t pt-1 text-slate-400 text-[10px]">
                    <i className="bi bi-house-door-fill text-emerald-600"></i>
                    <i className="bi bi-geo-alt"></i>
                    <i className="bi bi-clock-history"></i>
                  </div>
                </div>

                {/* Screen 3: Live Map Tracking Screen */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="text-[8px] font-bold text-slate-900 border-b pb-1 mb-1.5 flex justify-between items-center">
                      <span>Track Route</span>
                      <span className="text-emerald-600 text-[7px]">Live</span>
                    </div>

                    <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl h-20 flex items-center justify-center relative mb-1.5">
                      <svg viewBox="0 0 100 50" className="w-full h-full px-1">
                        <path
                          d="M10 40 C35 10, 65 40, 90 12"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="2.5"
                          strokeDasharray="3 3"
                        />
                        <circle cx="10" cy="40" r="4" fill="#0B2545" />
                        <circle cx="90" cy="12" r="4" fill="#10B981" />
                      </svg>
                    </div>

                    <div className="text-left space-y-0.5 text-[7.5px] text-slate-600">
                      <div className="flex justify-between">
                        <span>Courier ETA</span>
                        <span className="font-bold text-emerald-600">12 mins</span>
                      </div>
                      <div className="flex justify-between">
                        <span>OTP Code</span>
                        <span className="font-bold text-slate-900">4829</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B2545] text-white text-[8px] sm:text-[9px] font-bold py-1.5 rounded-lg text-center shadow-xs">
                    Track Live →
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
