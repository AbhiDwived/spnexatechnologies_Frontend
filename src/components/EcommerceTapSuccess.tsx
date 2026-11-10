"use client";

import React from "react";
import Link from "next/link";

export default function EcommerceTapSuccess() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0B2545] via-[#0A3D78] to-[#0B2545] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Glassmorphic Frame with 3 Fashion Ecommerce Screens */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl w-full max-w-2xl">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                
                {/* Screen 1: "Shopping Made Easy" */}
                <div className="bg-gradient-to-b from-teal-400 to-emerald-600 rounded-2xl overflow-hidden shadow-lg p-2 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-white relative">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded-full inline-block mb-1">
                      New Experience
                    </span>
                    <h5 className="font-extrabold text-[11px] sm:text-[14px] leading-tight text-white mb-1">
                      Shopping <br /> Made <br /> Easy
                    </h5>
                  </div>

                  {/* Fashion shopper graphic */}
                  <div className="relative my-auto flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                      🛍️
                    </div>
                  </div>

                  <div className="bg-white text-emerald-800 font-extrabold text-[9px] sm:text-[11px] py-1.5 rounded-xl text-center shadow-xs">
                    Shop Now →
                  </div>
                </div>

                {/* Screen 2: Clean Product Catalog Grid */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-2 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-slate-800">
                  <div>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-1 border-b pb-1">
                      <span className="font-bold text-slate-900">Apparel</span>
                      <i className="bi bi-funnel"></i>
                    </div>

                    {/* Catalog Grid Cards */}
                    <div className="space-y-1.5 sm:space-y-2 mt-1.5">
                      <div className="bg-slate-50 rounded-xl p-1.5 border border-slate-100 flex items-center gap-1.5">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-200 flex items-center justify-center text-sm sm:text-base shrink-0">
                          👕
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[9px] sm:text-[10px] text-slate-900 truncate mb-0">Organic Linen Tee</p>
                          <span className="text-[9px] font-extrabold text-blue-600">$29.00</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-1.5 border border-slate-100 flex items-center gap-1.5">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center text-sm sm:text-base shrink-0">
                          🧥
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[9px] sm:text-[10px] text-slate-900 truncate mb-0">Tailored Blazer</p>
                          <span className="text-[9px] font-extrabold text-blue-600">$89.00</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-1.5 border border-slate-100 flex items-center gap-1.5">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 flex items-center justify-center text-sm sm:text-base shrink-0">
                          👗
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[9px] sm:text-[10px] text-slate-900 truncate mb-0">Silk Summer Dress</p>
                          <span className="text-[9px] font-extrabold text-blue-600">$64.00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around items-center border-t pt-1.5 text-slate-400 text-[10px] sm:text-xs">
                    <i className="bi bi-house text-blue-600 font-bold"></i>
                    <i className="bi bi-search"></i>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-person"></i>
                  </div>
                </div>

                {/* Screen 3: "Brand Name / Big Sale" */}
                <div className="bg-gradient-to-b from-amber-400 via-orange-500 to-rose-600 rounded-2xl overflow-hidden shadow-lg p-2 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-white">
                  <div>
                    <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-bold text-white/90">
                      <span>Brand Name</span>
                      <i className="bi bi-star-fill text-amber-200"></i>
                    </div>
                    <h5 className="font-black text-[12px] sm:text-[15px] leading-tight text-white mt-1">
                      Autumn <br /> Drops <br /> 40% OFF
                    </h5>
                  </div>

                  <div className="relative my-auto flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                      👢
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold py-1.5 rounded-xl text-center border border-white/20">
                    Explore Drop
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Title, Paragraphs, Start Your Project CTA */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tap Into Success with Your <br className="hidden sm:inline" />
              Own E-Commerce App
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development company services are globally-renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable scalable solutions for business-orientated Ecommerce needs.
            </p>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#1D70B8] hover:bg-[#155A96] text-white transition-all cursor-pointer shadow-xl text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Start Your Project</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#1D70B8] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
