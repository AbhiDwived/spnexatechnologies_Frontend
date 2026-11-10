"use client";

import React from "react";

export default function GroceryPartnerStats() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative">
      <div className="container max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-3">
            Why is Trickle Solutions Your Trusted Partner <br className="hidden sm:inline" />
            in Grocery Delivery App Development?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            We have the experience, expertise and technical skill-set to build high-performance, robust, feature-rich and scalable grocery apps that help you succeed.
          </p>
        </div>

        {/* 2-Column Grid: Customer Visual with Phone on Left, 4 Stat Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Happy Customer Holding Smartphone with App Mockups Behind */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[340px] sm:h-[390px] flex items-center justify-center">
              
              {/* Back Mockup 1 (Left) */}
              <div className="absolute left-0 sm:left-4 top-2 w-[160px] sm:w-[185px] bg-slate-900 rounded-[28px] p-2 shadow-xl border-2 border-slate-700 -rotate-6">
                <div className="bg-white rounded-[20px] p-2 h-[260px] sm:h-[300px] overflow-hidden text-left">
                  <div className="text-[8px] font-extrabold text-emerald-800 mb-1">Grocery Express</div>
                  <div className="space-y-1">
                    <div className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 flex items-center gap-1">
                      <span className="text-sm">🥗</span>
                      <span className="text-[8px] font-bold text-slate-800">Organic Greens</span>
                    </div>
                    <div className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 flex items-center gap-1">
                      <span className="text-sm">🍓</span>
                      <span className="text-[8px] font-bold text-slate-800">Fresh Berries</span>
                    </div>
                    <div className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-100 flex items-center gap-1">
                      <span className="text-sm">🧀</span>
                      <span className="text-[8px] font-bold text-slate-800">Dairy & Cheese</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Mockup 2 (Right) */}
              <div className="absolute right-0 sm:right-4 top-2 w-[160px] sm:w-[185px] bg-slate-900 rounded-[28px] p-2 shadow-xl border-2 border-slate-700 rotate-6">
                <div className="bg-slate-50 rounded-[20px] p-2 h-[260px] sm:h-[300px] overflow-hidden text-left">
                  <div className="text-[8px] font-extrabold text-slate-900 mb-1 border-b pb-1">Order Status</div>
                  <div className="bg-white p-2 rounded-xl shadow-xs border text-center my-2">
                    <span className="text-2xl block mb-0.5">🛵</span>
                    <p className="font-extrabold text-[9px] text-emerald-700 mb-0">Dispatched</p>
                    <span className="text-[7.5px] text-slate-500">ETA: 12 mins</span>
                  </div>
                </div>
              </div>

              {/* Front Foreground: Person Photo with Phone */}
              <div className="relative z-10 w-44 sm:w-52 h-52 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-12 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
                  alt="Customer using mobile grocery app"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Emerald Stat Cards matching screenshot */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-lg mx-auto">
              
              {/* Card 1: Filled Emerald Green */}
              <div className="bg-[#00C853] bg-gradient-to-br from-[#00C853] to-[#059669] text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col items-center justify-center text-center min-h-[160px] hover:scale-105 transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-black tracking-tight mb-1">
                  10+
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-white/95 leading-snug mb-0 max-w-[150px]">
                  Years of Experience in On-Demand Industry
                </p>
              </div>

              {/* Card 2: White Card with Emerald Border */}
              <div className="bg-white border-2 border-[#00C853] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-md flex flex-col items-center justify-center text-center min-h-[160px] hover:scale-105 transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  40+
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug mb-0 max-w-[150px]">
                  App Developers and Designers
                </p>
              </div>

              {/* Card 3: White Card with Emerald Border */}
              <div className="bg-white border-2 border-[#00C853] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-md flex flex-col items-center justify-center text-center min-h-[160px] hover:scale-105 transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  120+
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug mb-0 max-w-[150px]">
                  Satisfied Clients
                </p>
              </div>

              {/* Card 4: Filled Emerald Green */}
              <div className="bg-[#00C853] bg-gradient-to-br from-[#00C853] to-[#059669] text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col items-center justify-center text-center min-h-[160px] hover:scale-105 transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-black tracking-tight mb-1">
                  600+
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-white/95 leading-snug mb-0 max-w-[150px]">
                  Hours of Work
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
