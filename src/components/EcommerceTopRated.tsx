"use client";

import React from "react";
import Link from "next/link";

export default function EcommerceTopRated() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Paragraphs & CTA */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Our Top-Rated Ecommerce <br className="hidden sm:inline" />
              Development Solutions
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              We create a mobile-friendly app with an ecommerce foundation to provide fantastic, on-the-go access to any consumers.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Our developers team top-class Ecommerce application development services to help you meet each intense business need and stand out in the competition with outstanding scalable Ecommerce mobile app development services.
            </p>

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

          {/* Right Column: Dynamic Overlapping Sneakers Mobile Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] h-[400px] sm:h-[440px]">
              
              {/* Back Phone: Shopping Cart Details */}
              <div className="absolute right-2 sm:right-6 top-6 w-[200px] sm:w-[230px] bg-slate-900 rounded-[34px] p-2.5 shadow-2xl border-[3px] border-slate-700 rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="bg-white rounded-[26px] p-3 text-slate-800 h-[340px] sm:h-[370px] flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
                      <span className="font-bold">10:24</span>
                      <div className="w-12 h-2.5 bg-slate-900 rounded-full"></div>
                      <i className="bi bi-battery-full text-slate-600"></i>
                    </div>
                    <div className="text-[12px] font-bold text-slate-900 border-b pb-1.5 mb-2 flex items-center justify-between">
                      <span>Shopping Bag</span>
                      <span className="text-xs text-blue-600">2 items</span>
                    </div>

                    {/* Cart Items List */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 rounded-md bg-orange-100 flex items-center justify-center text-lg">
                          👟
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[10px] text-slate-800 truncate mb-0">Air Stride Retro</p>
                          <span className="text-[9px] text-slate-500">Color: Orange / Grey</span>
                        </div>
                        <span className="font-bold text-[11px] text-slate-900">$139</span>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-lg">
                          🧢
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[10px] text-slate-800 truncate mb-0">Aero Cap Sport</p>
                          <span className="text-[9px] text-slate-500">One Size</span>
                        </div>
                        <span className="font-bold text-[11px] text-slate-900">$29</span>
                      </div>
                    </div>
                  </div>

                  {/* Total & Checkout */}
                  <div className="border-t pt-2 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Total Amount</span>
                      <span className="font-extrabold text-slate-900 text-xs">$168.00</span>
                    </div>
                    <div className="w-full py-2 bg-[#0B2545] text-white text-center rounded-xl font-bold text-[11px]">
                      Proceed to Payment
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Phone: 3D Sneaker Showcase */}
              <div className="absolute left-2 sm:left-4 top-0 w-[210px] sm:w-[240px] bg-slate-950 rounded-[34px] p-2.5 shadow-2xl border-[3px] border-slate-600 -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="bg-slate-50 rounded-[26px] p-3 text-slate-800 h-[340px] sm:h-[370px] flex flex-col justify-between relative overflow-hidden">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
                      <span className="font-bold">10:24</span>
                      <div className="w-12 h-2.5 bg-slate-900 rounded-full"></div>
                      <i className="bi bi-wifi text-slate-600"></i>
                    </div>

                    {/* Nav Back & Heart */}
                    <div className="flex justify-between items-center text-slate-700 text-xs mb-2">
                      <i className="bi bi-chevron-left"></i>
                      <span className="text-[11px] font-bold text-slate-900">Sneaker Details</span>
                      <i className="bi bi-heart-fill text-rose-500"></i>
                    </div>

                    {/* Sneaker Graphic Card with 3D Pop Out */}
                    <div className="bg-gradient-to-tr from-amber-50 to-orange-100 rounded-2xl p-3 relative flex items-center justify-center my-1.5 border border-amber-200/50 shadow-inner">
                      <div className="text-5xl sm:text-6xl filter drop-shadow-[0_12px_14px_rgba(234,88,12,0.35)] transform -rotate-12 scale-110 hover:scale-125 transition-transform duration-300">
                        👟
                      </div>
                      <span className="absolute top-2 left-2 bg-[#0B2545] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
                        Trending
                      </span>
                    </div>

                    {/* Product Information */}
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-extrabold text-slate-900">Velocity Pro Runner</span>
                        <span className="text-[12px] font-black text-[#1D70B8]">$129.99</span>
                      </div>
                      <p className="text-[9px] text-slate-500 leading-tight">
                        Breathable knit upper with responsive cushioning for all-day comfort.
                      </p>

                      {/* Size Selector */}
                      <div className="pt-1">
                        <span className="text-[9px] font-bold text-slate-700 block mb-1">Select Size (US)</span>
                        <div className="flex gap-1.5">
                          {["7", "8", "9", "10"].map((s, i) => (
                            <span
                              key={s}
                              className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${
                                i === 1
                                  ? "bg-[#0B2545] text-white shadow-xs"
                                  : "bg-white border border-slate-200 text-slate-700"
                              }`}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add To Cart Button */}
                  <div className="w-full py-2 bg-gradient-to-r from-[#1D70B8] to-[#0B2545] text-white text-center rounded-xl font-bold text-[11px] shadow-md flex items-center justify-center gap-1.5">
                    <i className="bi bi-cart2 text-xs"></i>
                    <span>Add to Bag</span>
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
