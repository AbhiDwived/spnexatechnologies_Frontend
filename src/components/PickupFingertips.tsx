"use client";

import React from "react";
import Link from "next/link";

export default function PickupFingertips() {
  const highlights = [
    "Real-Time Delivery Updates",
    "Boosts Efficiency & Productivity",
    "Improves Customer Satisfaction",
    "Offers Live Tracking & Alerts",
    "Supports Cashless & Digital Payments",
    "Streamlined Fleet & Order Dispatch",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        
        {/* Top Centered Section Heading matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Seamless Pickup and Delivery <br className="hidden sm:inline" />
            App at Your Fingertips
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy, 6 Checklist Items & Schedule a Demo CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Our custom pickup and delivery app development services simplify and streamline your operations. With user-friendly applications, handling everything from scheduling pickups to real-time tracking becomes hassle-free, giving your customers a smooth and satisfying experience. Whether your business specializes in courier parcels, retail logistics, or multi-stop routes, our apps are designed to grow with your business and keep pace with your delivery needs.
            </p>

            {/* 6 Key Benefits Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0B2545] text-white hover:bg-[#155A96] transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Schedule a Demo</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white/20 text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0B2545] transition-all"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Couriers in Blue Uniforms Handing Over Parcel + Digital Tablet Signature */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <div className="relative h-72 sm:h-88 lg:h-[410px] w-full">
                <img
                  src="/images/pickup-team-handover.jpg"
                  alt="Courier delivery team handing over parcel with digital tablet verification"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
              </div>

              {/* Subtle Proof-of-Delivery Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-white/40 flex items-center gap-3 text-slate-900">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                    Digital E-Signature
                  </span>
                  <h4 className="text-xs font-extrabold text-slate-900 mb-0">
                    Instant Proof of Delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
