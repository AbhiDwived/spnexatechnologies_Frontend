"use client";

import React from "react";

export default function PortfolioTestimonial() {
  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-left mb-8">
          What Our Client Say About Us
        </h2>

        {/* Testimonial Card */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-7 sm:p-10 shadow-sm relative">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* Big Decorative Quotation Mark */}
            <div className="text-5xl sm:text-6xl text-slate-400 font-serif leading-none shrink-0 select-none">
              “
            </div>

            {/* Quote Body */}
            <div className="space-y-4 flex-1">
              <p className="text-slate-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal italic">
                Trickle Solutions delivered our MVP months ahead of schedule with top-tier polish. Their communication was seamless, and the finished product exceeded all of our team&apos;s expectations. We have experienced a notable spike in user engagement and conversions since launch.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  AL
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-slate-900">
                    Alexander De Leon
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Founder &amp; CEO, TechVenture
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
