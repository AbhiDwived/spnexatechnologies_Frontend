"use client";

import React from "react";
import Link from "next/link";

export default function RealEstateHero() {
  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Real Estate App <br />
                Development Company
              </h1>
              
              {/* Artistic Wavy Accent Underline */}
              <div className="mt-2 w-56 sm:w-80 h-2.5">
                <svg
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/70"
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
            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Whether you are an established real estate business or a budding real estate startup looking to build a strong online presence, we have got you covered with our top-notch real estate app development services. Our team of experienced developers develop custom real estate apps that cater to your business needs and deliver exceptional user experiences to your users.
            </p>

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
                  className="w-7 h-7 bg-white text-[#0A3D78] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dual Angled Real Estate Smartphones Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[390px] sm:max-w-[430px] h-[400px] sm:h-[450px]">
              
              {/* Phone 1 (Left): Modern Apartments Skyline Showcase */}
              <div className="absolute left-0 sm:left-2 top-2 w-[205px] sm:w-[235px] bg-slate-950 rounded-[34px] p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.6)] border-[3px] border-slate-700/80 -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                <div
                  className="rounded-[26px] overflow-hidden text-white h-[360px] sm:h-[390px] flex flex-col justify-between p-3 relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80')`,
                  }}
                >
                  {/* Status Bar */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-white/80 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-14 h-3 bg-black/60 backdrop-blur-xs rounded-full mx-auto"></div>
                      <i className="bi bi-battery-full text-xs"></i>
                    </div>

                    <span className="inline-block bg-amber-500/90 backdrop-blur-xs text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mt-2">
                      Featured Villa
                    </span>
                  </div>

                  {/* Property Hero Text */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-black tracking-tight leading-tight text-white mb-0.5">
                        Modern <br /> Apartments
                      </h4>
                      <p className="text-[10px] text-blue-200 flex items-center gap-1 mb-0">
                        <i className="bi bi-geo-alt-fill text-amber-400"></i>
                        <span>Dubai Marina, UAE</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between bg-white/15 backdrop-blur-md p-2 rounded-xl border border-white/20">
                      <div>
                        <span className="text-[8px] text-white/80 block">Starting from</span>
                        <span className="text-[12px] font-black text-amber-300">$1,450,000</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center text-xs font-bold shadow">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Right): Dark Luxury Real Estate Dashboard */}
              <div className="absolute right-0 sm:right-2 top-6 w-[205px] sm:w-[235px] bg-slate-950 rounded-[34px] p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.6)] border-[3px] border-slate-700/80 rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-[#131B2A] rounded-[26px] overflow-hidden text-white h-[360px] sm:h-[390px] flex flex-col justify-between p-3 text-xs">
                  <div>
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-14 h-3 bg-slate-900 rounded-full mx-auto"></div>
                      <i className="bi bi-wifi text-[9px]"></i>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                      <div>
                        <span className="text-[9px] text-slate-400">Select City</span>
                        <p className="font-bold text-[11px] text-white mb-0 flex items-center gap-1">
                          <span>New York, USA</span>
                          <i className="bi bi-chevron-down text-[8px]"></i>
                        </p>
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 text-xs">
                        <i className="bi bi-bell"></i>
                      </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-1 mb-2.5 bg-slate-900/90 p-1 rounded-xl">
                      <span className="flex-1 bg-amber-500 text-slate-950 font-bold text-center py-1 rounded-lg text-[9px]">
                        Apartment
                      </span>
                      <span className="flex-1 text-slate-400 text-center py-1 rounded-lg text-[9px]">
                        House
                      </span>
                      <span className="flex-1 text-slate-400 text-center py-1 rounded-lg text-[9px]">
                        Penthouse
                      </span>
                    </div>

                    {/* Property Card 1 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2 mb-2">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="font-bold text-[10.5px] text-white truncate mb-0">Grand Horizon Penthouse</p>
                          <span className="text-[8.5px] text-slate-400">Manhattan, NY</span>
                        </div>
                        <span className="text-amber-400 font-extrabold text-[10.5px]">$2.4M</span>
                      </div>
                      <div className="flex gap-2 text-[8px] text-slate-300 mt-1 pt-1 border-t border-slate-800">
                        <span>🛏️ 4 Beds</span>
                        <span>🚿 3 Baths</span>
                        <span>📐 3,200 sqft</span>
                      </div>
                    </div>

                    {/* Property Card 2 */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="font-bold text-[10.5px] text-white truncate mb-0">Skyline Eco Residence</p>
                          <span className="text-[8.5px] text-slate-400">Brooklyn, NY</span>
                        </div>
                        <span className="text-amber-400 font-extrabold text-[10.5px]">$890K</span>
                      </div>
                      <div className="flex gap-2 text-[8px] text-slate-300 mt-1 pt-1 border-t border-slate-800">
                        <span>🛏️ 2 Beds</span>
                        <span>🚿 2 Baths</span>
                        <span>📐 1,450 sqft</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-1.5 flex justify-between items-center text-slate-400 text-xs">
                    <i className="bi bi-house-door-fill text-amber-400"></i>
                    <i className="bi bi-compass"></i>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-person"></i>
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
