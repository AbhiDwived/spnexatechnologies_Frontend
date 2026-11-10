"use client";

import React from "react";
import Link from "next/link";

export default function FoodTapSuccess() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0B2545] via-[#0A3D78] to-[#0B2545] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Food Delivery Partner Handing Bag to Customer */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
              <div className="relative h-72 sm:h-84 lg:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
                  alt="Food delivery courier handing order bag to smiling customer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Order Handover Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/40 flex items-center justify-between text-slate-900">
                <div>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                    Seamless Food Dispatch
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-0">
                    Hot Meals Delivered Fast
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold shadow-xs">
                  <i className="bi bi-box-seam-fill"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Paragraphs, Start Your Project CTA */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tap Into Success with Your <br className="hidden sm:inline" />
              Own Food Delivery App
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              We are a reliable food delivery application developer specializing in developing highly-scalable on-demand food delivery development services. Our knowledgeable food delivery mobile app development company services are globally renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly customizable scalable solutions for business-oriented food delivery needs.
            </p>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              If you are willing to lead your business globally and connect with customers worldwide, rely on our dependable food delivery development services.
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
