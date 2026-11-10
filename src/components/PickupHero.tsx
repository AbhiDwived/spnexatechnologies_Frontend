"use client";

import React from "react";
import Link from "next/link";

export default function PickupHero() {
  const bulletPoints = [
    "End-to-End Support",
    "24/7 Assistance",
    "Customized Solutions",
    "On-Time Delivery",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Pickup and Delivery App <br />
                Development Company
              </h1>
              
              {/* Artistic Wavy Accent Underline */}
              <div className="mt-2 w-56 sm:w-80 h-2.5">
                <svg
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/70"
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

            {/* Paragraph Text matching reference */}
            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Frustrated with complicated delivery systems? We make life easier and stress-free with our custom pickup and delivery application development services. As a trusted pickup and delivery app development company, we provide solutions that help businesses guarantee smooth and punctual delivery!
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Contact Us Now CTA Button */}
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

          {/* Right Column: Mint-Green & White Courier App Screens + Delivery Van Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[420px] sm:h-[465px]">
              
              {/* Phone 1 (Left Back): Parcel Map Pickup Request */}
              <div className="absolute left-0 sm:left-2 top-3 w-[165px] sm:w-[185px] bg-slate-950 rounded-[28px] p-2 shadow-2xl border-2 border-slate-700 -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="bg-white rounded-[20px] overflow-hidden text-slate-800 p-2 h-[300px] sm:h-[330px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mb-1.5">
                      <span className="font-bold">9:41</span>
                      <span className="text-emerald-600 font-bold">Pickup</span>
                    </div>

                    {/* Map Pin Visual */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl h-28 flex flex-col items-center justify-center relative mb-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-xl">🚚</span>
                      </div>
                      <span className="text-[8px] font-bold text-emerald-700 mt-1">
                        Hub #12 Selected
                      </span>
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="bg-slate-50 p-1.5 rounded-lg border text-[8.5px]">
                        <span className="text-slate-400 block text-[7.5px]">From</span>
                        <span className="font-bold text-slate-800">Warehouse 4B, NY</span>
                      </div>
                      <div className="bg-slate-50 p-1.5 rounded-lg border text-[8.5px]">
                        <span className="text-slate-400 block text-[7.5px]">Weight</span>
                        <span className="font-bold text-slate-800">2.4 kg • Express</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white text-center py-1.5 rounded-xl font-bold text-[9px] shadow">
                    Book Pickup
                  </div>
                </div>
              </div>

              {/* Phone 2 (Center Front): Shipment Dashboard */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[175px] sm:w-[195px] bg-slate-950 rounded-[30px] p-2 shadow-2xl border-[3px] border-emerald-300/40 z-20 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-white rounded-[22px] overflow-hidden text-slate-800 p-2.5 h-[315px] sm:h-[345px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="bg-emerald-600 text-white rounded-xl p-2 mb-2 text-left">
                      <span className="text-[8px] text-emerald-100 uppercase tracking-wider block">
                        Active Dispatch
                      </span>
                      <p className="font-extrabold text-[11px] mb-0">Order #PK-804</p>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-emerald-50/70 border border-emerald-100">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-bold text-[8.5px] text-slate-900 mb-0">Picked Up</p>
                          <span className="text-[7.5px] text-slate-500">10:15 AM • Courier Mark</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px]">
                          📦
                        </span>
                        <div>
                          <p className="font-bold text-[8.5px] text-slate-900 mb-0">In Transit</p>
                          <span className="text-[7.5px] text-slate-500">1.2 miles from dropoff</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-2 rounded-lg border text-center">
                        <span className="text-[8px] text-slate-500 block">Estimated Arrival</span>
                        <span className="font-black text-emerald-600 text-xs">Today, 11:30 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B2545] text-white text-center py-1.5 rounded-xl font-bold text-[9.5px]">
                    Live Track Parcel
                  </div>
                </div>
              </div>

              {/* Phone 3 (Right Back): GPS Route Map & Dropoff */}
              <div className="absolute right-0 sm:right-2 top-5 w-[165px] sm:w-[185px] bg-slate-950 rounded-[28px] p-2 shadow-2xl border-2 border-slate-700 rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="bg-slate-50 rounded-[20px] overflow-hidden text-slate-800 p-2 h-[300px] sm:h-[330px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mb-1.5">
                      <span className="font-bold text-slate-700">Live Route</span>
                      <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-bold">
                        GPS On
                      </span>
                    </div>

                    {/* Stylized Route Map Canvas */}
                    <div className="bg-white border border-slate-200 rounded-xl h-32 p-2 relative overflow-hidden mb-2 flex items-center justify-center">
                      <svg viewBox="0 0 120 70" className="w-full h-full">
                        <path
                          d="M15 55 Q45 15, 75 40 T105 18"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray="4 4"
                          strokeLinecap="round"
                        />
                        <circle cx="15" cy="55" r="5" fill="#0B2545" />
                        <circle cx="105" cy="18" r="5" fill="#10B981" />
                      </svg>
                      <span className="absolute top-1.5 right-2 text-xs">📍</span>
                      <span className="absolute bottom-1.5 left-2 text-xs">📦</span>
                    </div>

                    <div className="bg-white p-1.5 rounded-lg border text-left">
                      <p className="font-bold text-[8.5px] text-slate-900 mb-0">Signature Verified</p>
                      <span className="text-[7.5px] text-slate-500">Contactless dropoff enabled</span>
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white text-center py-1.5 rounded-xl font-bold text-[9px] shadow">
                    Confirm Delivery
                  </div>
                </div>
              </div>

              {/* Bottom Floating Mint Truck & Parcels Graphic Badge */}
              <div className="absolute -bottom-2 left-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-emerald-200 flex items-center justify-between gap-2 z-30">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center text-xl shadow shrink-0">
                    🚚
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider block">
                      Express Logistics
                    </span>
                    <p className="font-black text-xs text-slate-900 mb-0">
                      Real-Time Parcel Dispatch
                    </p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg border border-amber-200 shrink-0">
                  📦
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
