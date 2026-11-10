"use client";

import React from "react";
import Link from "next/link";

export default function FoodHero() {
  const bulletPoints = [
    "End-to-End Support",
    "24/7 Assistance",
    "Customized Solutions",
    "On-Time Delivery",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Food Delivery App <br />
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
              Do you want to know the easiest way to grow your restaurant business? You need a top-notch food delivery app developed by experts from a well-reputed company! Trickle Solutions is an experienced Food Delivery App Development Company focused on creating mobile applications that allow your business to stand out. We help you create tailored food delivery apps that deliver instant food orders, real-time tracking, secure payments, and seamless restaurant management to keep you at the top of this competitive Food Delivery industry.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 shadow-xs shadow-orange-400/50"></span>
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

          {/* Right Column: Food Delivery Mobile App Mockups & Courier Rider Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] h-[410px] sm:h-[460px]">
              
              {/* Back Phone (Left): Orange Theme Restaurant Feed */}
              <div className="absolute left-2 sm:left-4 top-2 w-[190px] sm:w-[220px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="bg-white rounded-[24px] overflow-hidden text-slate-800 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Orange Top App Bar */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2.5 pb-3 rounded-b-2xl">
                      <div className="flex justify-between items-center text-[9px] text-white/80 mb-1.5">
                        <span className="font-bold">9:41</span>
                        <div className="w-10 h-2 bg-black/30 rounded-full mx-auto"></div>
                        <i className="bi bi-battery-full"></i>
                      </div>
                      <p className="text-[9px] text-orange-100 mb-0">Deliver to</p>
                      <p className="font-extrabold text-[11px] flex items-center gap-1 mb-1">
                        <span>📍 Downtown Plaza, NY</span>
                      </p>
                      <div className="bg-white/20 backdrop-blur-xs rounded-lg px-2 py-1 text-[9px] text-white flex items-center gap-1">
                        <i className="bi bi-search"></i>
                        <span>Search pizza, burger, sushi...</span>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="p-2.5 space-y-2">
                      <div className="flex justify-between gap-1 text-center">
                        <div className="bg-orange-50 p-1.5 rounded-lg flex-1 border border-orange-100">
                          <span className="text-base block">🍔</span>
                          <span className="text-[8px] font-bold text-slate-700">Burgers</span>
                        </div>
                        <div className="bg-orange-50 p-1.5 rounded-lg flex-1 border border-orange-100">
                          <span className="text-base block">🍕</span>
                          <span className="text-[8px] font-bold text-slate-700">Pizza</span>
                        </div>
                        <div className="bg-orange-50 p-1.5 rounded-lg flex-1 border border-orange-100">
                          <span className="text-base block">🍣</span>
                          <span className="text-[8px] font-bold text-slate-700">Sushi</span>
                        </div>
                      </div>

                      <p className="text-[10px] font-extrabold text-slate-900 mb-0.5">Popular Nearby</p>

                      {/* Dish Card */}
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-orange-100 flex items-center justify-center text-xl shrink-0">
                          🍔
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[10px] text-slate-900 truncate mb-0">Double Smash Burger</p>
                          <span className="text-[8.5px] text-slate-500 block">★ 4.9 • 20 mins</span>
                          <span className="text-[10px] font-black text-orange-600">$12.99</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="p-2.5 pt-0">
                    <div className="bg-orange-600 text-white text-center py-2 rounded-xl font-bold text-[10px] shadow">
                      View Order ($12.99)
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Phone (Right): Food Photo & Live Tracking */}
              <div className="absolute right-0 sm:right-2 top-8 w-[195px] sm:w-[225px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 rotate-4 hover:rotate-0 transition-transform duration-300">
                <div className="bg-slate-50 rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[350px] sm:h-[380px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto"></div>
                      <i className="bi bi-wifi"></i>
                    </div>

                    {/* Dish Photo Banner */}
                    <div className="rounded-xl overflow-hidden h-28 relative mb-2 shadow-xs">
                      <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
                        alt="Gourmet Food Meal"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-1.5 right-1.5 bg-orange-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">
                        Hot & Fresh
                      </span>
                    </div>

                    {/* Courier Live Status */}
                    <div className="bg-white border border-slate-200 rounded-xl p-2 mb-2 shadow-2xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-[10px] text-slate-900">Order #FD-294</span>
                        <span className="text-[8.5px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded-full">
                          Arriving
                        </span>
                      </div>
                      <p className="text-[9px] text-slate-500 mb-0">Driver is 0.4 miles away</p>
                    </div>

                    {/* Food Items Summary */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-slate-700 bg-white px-2 py-1 rounded border">
                        <span>🍕 Margherita Pizza</span>
                        <span className="font-bold">$14.50</span>
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-700 bg-white px-2 py-1 rounded border">
                        <span>🥤 Craft Cola</span>
                        <span className="font-bold">$2.50</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-1.5">
                    <div className="bg-[#0B2545] text-white text-center py-1.5 rounded-xl font-bold text-[10px]">
                      Live Map Tracking
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Courier Floating Scooter Badge */}
              <div className="absolute -bottom-3 left-8 sm:left-14 bg-white text-slate-900 rounded-2xl p-2.5 shadow-2xl border border-slate-200 flex items-center gap-2.5 z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-500 to-orange-500 text-white flex items-center justify-center text-xl shadow">
                  🛵
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-orange-600 uppercase tracking-wider block">
                    Hot Delivery
                  </span>
                  <p className="font-black text-xs text-slate-900 mb-0">
                    Under 30 Mins Guaranteed
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
