"use client";

import React from "react";
import Link from "next/link";

export default function RealEstateTapSuccess() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0B2545] via-[#0A3D78] to-[#0B2545] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Glassmorphic Frame with 3 Real Estate Screens */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl w-full max-w-2xl">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                
                {/* Screen 1: "Discover Your Dream Home" */}
                <div
                  className="rounded-2xl overflow-hidden shadow-lg p-2.5 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-white relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.2), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80')`,
                  }}
                >
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded-full inline-block mb-1">
                      New Villa
                    </span>
                    <h5 className="font-extrabold text-[11px] sm:text-[14px] leading-tight text-white mb-1">
                      Discover Your <br /> Dream Home
                    </h5>
                  </div>

                  <div className="space-y-1 mt-auto">
                    <span className="text-[9px] sm:text-[10px] text-amber-300 font-bold block">
                      Palm Residence
                    </span>
                    <div className="bg-white text-slate-900 font-extrabold text-[9px] sm:text-[11px] py-1.5 rounded-xl text-center shadow-xs">
                      Explore Listings →
                    </div>
                  </div>
                </div>

                {/* Screen 2: Property Search Card with Suburb Home */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-2.5 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-slate-800">
                  <div>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 mb-1 border-b pb-1">
                      <span className="font-bold text-slate-900">Featured Houses</span>
                      <i className="bi bi-funnel"></i>
                    </div>

                    {/* House Preview */}
                    <div className="rounded-xl overflow-hidden my-1 relative h-20 sm:h-24 bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80"
                        alt="Suburban Luxury Home"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 bg-slate-900/80 text-amber-300 text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                        $1,250,000
                      </span>
                    </div>

                    <p className="font-bold text-[9.5px] sm:text-[11px] text-slate-900 truncate mb-0.5">
                      Sunset Villa Estates
                    </p>
                    <span className="text-[8.5px] text-slate-500 block">Los Angeles, CA</span>

                    <div className="flex justify-between text-[8px] text-slate-600 mt-1.5 pt-1.5 border-t">
                      <span>🛏️ 4 Bed</span>
                      <span>🚿 3 Bath</span>
                      <span>🚗 2 Garage</span>
                    </div>
                  </div>

                  <div className="flex justify-around items-center border-t pt-1.5 text-slate-400 text-[10px] sm:text-xs">
                    <i className="bi bi-house text-blue-600 font-bold"></i>
                    <i className="bi bi-search"></i>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-person"></i>
                  </div>
                </div>

                {/* Screen 3: Luxury Modern House Architectural View */}
                <div
                  className="rounded-2xl overflow-hidden shadow-lg p-2.5 sm:p-3 flex flex-col justify-between h-[250px] sm:h-[320px] text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.25), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80')`,
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-bold text-white/90">
                      <span>Verified Agent</span>
                      <i className="bi bi-patch-check-fill text-amber-300"></i>
                    </div>
                    <h5 className="font-black text-[11px] sm:text-[14px] leading-tight text-white mt-1">
                      Contemporary <br /> Glass Mansion
                    </h5>
                  </div>

                  <div className="space-y-1 mt-auto">
                    <div className="flex justify-between text-[9px] text-amber-300 font-extrabold">
                      <span>$3,850,000</span>
                      <span>★ 4.98</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold py-1.5 rounded-xl text-center border border-white/20">
                      Contact Agent
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Title, Paragraphs, Start Your Project CTA */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tap Into Success with Your <br className="hidden sm:inline" />
              Own Real Estate App
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              We are a reliable real estate application developer specializing in developing highly-scalable on-demand real estate development services. Our knowledgeable real estate mobile app development company services are globally-renowned for providing avant-garde and reliable mobile app solutions. Our team of experts is capable of creating highly-customizable scalable solutions for business-orientated real estate needs.
            </p>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable real estate development services.
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
