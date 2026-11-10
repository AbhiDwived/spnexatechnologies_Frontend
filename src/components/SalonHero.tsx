"use client";

import React from "react";
import Link from "next/link";

export default function SalonHero() {
  const bulletPoints = [
    "End-to-End Support",
    "24/7 Assistance",
    "Customized Solutions",
    "On-Time Delivery",
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Full-Bleed Salon Background Photo with Moody Dark Left Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/salon-hero-bg.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Salon App <br />
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

            {/* Paragraph Text matching reference */}
            <p className="text-slate-200 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Do you want to take your salon business into the digital era with a custom salon app? Our salon app development company crafts engaging and user-friendly salon booking apps tailored to your brand. Our solutions allow users to book appointments seamlessly, browse available stylists, select services, make cashless payments, and receive automated reminders—helping you maximize bookings and retention effortlessly.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-100 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 shadow-xs shadow-rose-400/50"></span>
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
                  className="w-7 h-7 bg-white text-slate-900 inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Salon Mobile Booking App iPhone Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div className="w-[235px] sm:w-[255px] bg-slate-950 rounded-[36px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-[3px] border-slate-700 hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-[28px] overflow-hidden text-slate-800 h-[430px] sm:h-[455px] flex flex-col justify-between text-xs p-3">
                <div>
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[9px] text-slate-500 mb-2 px-1">
                    <span className="font-bold">9:41</span>
                    <div className="w-14 h-3 bg-slate-950 rounded-full mx-auto"></div>
                    <i className="bi bi-wifi text-slate-700"></i>
                  </div>

                  {/* Location & Notification Row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-left">
                      <span className="text-[8px] text-slate-400 block">Your Location</span>
                      <span className="text-[10px] font-extrabold text-slate-900 flex items-center gap-1">
                        <i className="bi bi-geo-alt-fill text-rose-500"></i>
                        Manhattan, NY
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs">
                      <i className="bi bi-bell-fill"></i>
                    </div>
                  </div>

                  {/* Search Field */}
                  <div className="bg-slate-100 rounded-xl px-2.5 py-1.5 text-[9.5px] text-slate-400 flex items-center gap-1.5 mb-2.5">
                    <i className="bi bi-search text-slate-500"></i>
                    <span>Find salons, stylists...</span>
                  </div>

                  {/* Featured Promo Banner inside Phone */}
                  <div
                    className="rounded-2xl overflow-hidden p-3 text-white relative mb-3 bg-cover bg-center shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(120deg, rgba(15,23,42,0.88), rgba(15,23,42,0.45)), url('/images/salon-hero-bg.jpg')`,
                    }}
                  >
                    <span className="bg-rose-500 text-white text-[7.5px] font-black px-1.5 py-0.5 rounded-full uppercase">
                      Special Offer
                    </span>
                    <p className="font-extrabold text-[11px] leading-tight mt-1.5 mb-0.5 text-left">
                      Get 30% Off Signature Styling
                    </p>
                    <span className="text-[8.5px] text-slate-200 block text-left">
                      Valid on first salon booking →
                    </span>
                  </div>

                  {/* Service Categories Strip */}
                  <div className="mb-2.5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-extrabold text-slate-900">Categories</span>
                      <span className="text-[8.5px] font-bold text-rose-500">View All</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      {[
                        { icon: "✂️", label: "Haircut" },
                        { icon: "🧔", label: "Beard" },
                        { icon: "💆", label: "Facial" },
                        { icon: "💅", label: "Nails" },
                      ].map((cat) => (
                        <div
                          key={cat.label}
                          className="bg-rose-50/80 border border-rose-100 rounded-xl py-1.5 px-1"
                        >
                          <span className="text-sm block">{cat.icon}</span>
                          <span className="text-[7.5px] font-bold text-slate-700">{cat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Salon Nearby Card */}
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-900 block text-left mb-1">
                      Top Rated Salons
                    </span>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-left">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-300 flex items-center justify-center text-sm shrink-0">
                          💇
                        </div>
                        <div>
                          <p className="font-bold text-[9.5px] text-slate-900 mb-0">Luxe Hair Studio</p>
                          <span className="text-[8px] text-slate-500">0.6 mi • ★ 4.9</span>
                        </div>
                      </div>
                      <span className="bg-[#0B2545] text-white text-[8px] font-bold px-2 py-1 rounded-lg shrink-0">
                        Book
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Phone Navigation */}
                <div className="border-t pt-2 flex justify-around text-slate-400 text-xs">
                  <i className="bi bi-house-door-fill text-rose-500"></i>
                  <i className="bi bi-calendar2-check"></i>
                  <i className="bi bi-compass"></i>
                  <i className="bi bi-person"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
