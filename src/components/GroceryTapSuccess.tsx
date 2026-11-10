"use client";

import React from "react";
import Link from "next/link";

export default function GroceryTapSuccess() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0B2545] via-[#0A3D78] to-[#0B2545] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Delivery Guy Handing Grocery Crate to Customer Photo */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
              <div className="relative h-72 sm:h-84 lg:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80"
                  alt="Delivery partner delivering fresh groceries to customer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Delivery Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/40 flex items-center justify-between text-slate-900">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                    Zero-Contact Dropoff
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-0">
                    Fresh Grocery At Doorstep
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold shadow-xs">
                  <i className="bi bi-bag-check-fill"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Paragraphs, Start Your Project CTA */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tap Into Success with Your <br className="hidden sm:inline" />
              Own Grocery App
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              We are a reliable grocery app development company specializing in developing feature-rich and scalable on-demand grocery delivery services. Our knowledgeable grocery app development services are globally renowned for providing advanced and dependable grocery solutions. Our team of experts is capable of crafting highly customizable scalable solutions for business-oriented grocery delivery needs.
            </p>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              If you are willing to expand your grocery store or marketplace and connect with online customers seamlessly, rely on our experienced grocery app development services.
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
