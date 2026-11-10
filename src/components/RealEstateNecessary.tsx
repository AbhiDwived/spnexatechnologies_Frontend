"use client";

import React from "react";
import Link from "next/link";

export default function RealEstateNecessary() {
  const bulletPoints = [
    "High Efficiency",
    "Help Business Reach",
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
              Real Estate App Development <br className="hidden sm:inline" />
              Necessary for Every Real Estate Company
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Whether you want to build an innovative real estate app from scratch or revamp your existing one, our team of experienced real estate app developers is here to assist you. We develop real estate apps that streamline operations, improve client engagement, and drive business growth.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              As a real estate app development company, we have a deep understanding of the real estate industry, and we know what it takes to build a successful real estate app. We use latest technologies and follow best industry practices to ensure your real estate application delivers the best results for your business.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D70B8] shrink-0"></span>
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

          {/* Right Column: Architectural Scale Model Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <div className="relative h-72 sm:h-84 lg:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Real Estate Architectural Model & High-Rise"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1D70B8] uppercase tracking-wider block">
                    Enterprise Engineering
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-0">
                    Smart Real Estate Solutions
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1D70B8] flex items-center justify-center text-sm font-bold shadow-xs">
                  <i className="bi bi-building"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
