"use client";

import React from "react";
import Link from "next/link";

export default function GroceryHero() {
  const bulletPoints = [
    "User-friendly Interface",
    "Secure Payment Gateways",
    "Customized Solutions",
    "24/7 Support",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Grocery Delivery App <br />
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
              Imagine a world where buying groceries is just a matter of a few clicks. With our bespoke grocery app development services, our grocery delivery app development company provides a seamless platform that bridges the gap between customer convenience and business profitability. As a prominent grocery app development company, we build custom grocery delivery applications that provide your users with hassle-free grocery shopping experiences to help your grocery business thrive in today&apos;s digital age.
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

          {/* Right Column: Grocery Mobile App Mockups & Delivery Courier Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] h-[410px] sm:h-[460px]">
              
              {/* Back Phone: Grocery Catalog & Cart */}
              <div className="absolute left-2 sm:left-4 top-2 w-[190px] sm:w-[220px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto"></div>
                      <i className="bi bi-battery-full"></i>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-2 mb-2 border border-emerald-100 flex items-center gap-2">
                      <span className="text-xl">🥑</span>
                      <div>
                        <span className="text-[8px] font-black uppercase text-emerald-700 bg-emerald-200/60 px-1 py-0.5 rounded">
                          Fast Delivery
                        </span>
                        <p className="font-bold text-[10px] text-emerald-950 mb-0">15-20 mins</p>
                      </div>
                    </div>

                    <p className="text-[10px] font-extrabold text-slate-900 mb-1">Categories</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-2">
                      <div className="bg-slate-50 p-1.5 rounded-lg border text-center">
                        <span className="text-base block">🍎</span>
                        <span className="text-[8.5px] font-bold text-slate-700">Fresh Fruits</span>
                      </div>
                      <div className="bg-slate-50 p-1.5 rounded-lg border text-center">
                        <span className="text-base block">🥦</span>
                        <span className="text-[8.5px] font-bold text-slate-700">Vegetables</span>
                      </div>
                    </div>

                    <p className="text-[10px] font-extrabold text-slate-900 mb-1">Popular Deals</p>
                    <div className="bg-slate-50 p-1.5 rounded-lg border flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">🥕</span>
                        <div>
                          <p className="font-bold text-[9px] text-slate-800 mb-0">Organic Carrots</p>
                          <span className="text-[8px] text-slate-500">1 kg</span>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-extrabold text-[10px]">$2.40</span>
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white text-center py-2 rounded-xl font-bold text-[10px] shadow">
                    View Cart (3 items)
                  </div>
                </div>
              </div>

              {/* Front Phone: Grocery Delivery Order Details */}
              <div className="absolute right-0 sm:right-2 top-8 w-[195px] sm:w-[225px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 rotate-4 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="bg-slate-50 rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto"></div>
                      <i className="bi bi-wifi"></i>
                    </div>

                    <div className="flex items-center justify-between border-b pb-1.5 mb-2">
                      <span className="font-extrabold text-[11px] text-slate-900">Track Order #842</span>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                        On the way
                      </span>
                    </div>

                    {/* Delivery Map Preview Card */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-2 mb-2 relative overflow-hidden">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm shadow">
                          🛵
                        </div>
                        <div>
                          <p className="font-extrabold text-[9.5px] text-slate-900 mb-0">Courier: Alex R.</p>
                          <span className="text-[8.5px] text-slate-500">Arriving in 8 mins</span>
                        </div>
                      </div>
                    </div>

                    {/* Items In Bag */}
                    <div className="space-y-1.5 mb-2">
                      <div className="flex items-center justify-between p-1 bg-white rounded-lg border text-[9px]">
                        <span>🍌 Bananas (6 pcs)</span>
                        <span className="font-bold text-slate-900">$1.80</span>
                      </div>
                      <div className="flex items-center justify-between p-1 bg-white rounded-lg border text-[9px]">
                        <span>🥛 Farm Fresh Milk</span>
                        <span className="font-bold text-slate-900">$3.20</span>
                      </div>
                      <div className="flex items-center justify-between p-1 bg-white rounded-lg border text-[9px]">
                        <span>🍞 Whole Wheat Bread</span>
                        <span className="font-bold text-slate-900">$2.50</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-1.5 space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-800">
                      <span>Total Paid</span>
                      <span className="text-emerald-600 font-extrabold">$7.50</span>
                    </div>
                    <div className="bg-[#0B2545] text-white text-center py-1.5 rounded-xl font-bold text-[10px]">
                      Call Delivery Partner
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Courier Floating Scooter Badge */}
              <div className="absolute -bottom-3 left-8 sm:left-14 bg-white text-slate-900 rounded-2xl p-2.5 shadow-2xl border border-slate-200 flex items-center gap-2.5 z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl shadow">
                  🛵
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider block">
                    Express Dispatch
                  </span>
                  <p className="font-black text-xs text-slate-900 mb-0">
                    Real-Time GPS Tracking
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
