"use client";

import React from "react";

export default function DatabaseAwards() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0A417E] via-[#093972] to-[#083567] text-white py-14 sm:py-16 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
          Awards
        </h2>
        <p className="text-blue-100/90 text-xs sm:text-sm font-normal max-w-xl mx-auto mb-10 sm:mb-12">
          The awards that inspire us to keep upgrading the standards in our web and mobile development services.
        </p>

        {/* 3 Award Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 items-start">
          
          {/* Award 1: GoodFirms */}
          <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-40 sm:w-44 h-40 sm:h-44 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 border border-blue-100/30 group-hover:scale-105 transition-transform duration-300">
              {/* Gold Laurel Wreath with Award Winner & goodfirms */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#E5A93C]"
                >
                  {/* Left laurel branch */}
                  <path
                    d="M32 82C22 75 14 62 14 48C14 34 22 22 34 16"
                    stroke="#D97706"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Left leaves */}
                  <path d="M30 78c-4-2-8-8-8-12 5 2 10 7 8 12z" fill="#F59E0B" />
                  <path d="M22 66c-5-2-9-7-8-12 5 2 9 7 8 12z" fill="#F59E0B" />
                  <path d="M17 52c-5-2-7-8-6-13 5 2 8 8 6 13z" fill="#F59E0B" />
                  <path d="M19 38c-4-4-5-10-3-14 5 3 6 9 3 14z" fill="#F59E0B" />
                  <path d="M26 26c-3-4-3-11 0-14 4 4 4 10 0 14z" fill="#F59E0B" />

                  {/* Right laurel branch */}
                  <path
                    d="M68 82C78 75 86 62 86 48C86 34 78 22 66 16"
                    stroke="#D97706"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Right leaves */}
                  <path d="M70 78c4-2 8-8 8-12-5 2-10 7-8 12z" fill="#F59E0B" />
                  <path d="M78 66c5-2 9-7 8-12-5 2-9 7-8 12z" fill="#F59E0B" />
                  <path d="M83 52c5-2 7-8 6-13-5 2-8 8-6 13z" fill="#F59E0B" />
                  <path d="M81 38c4-4 5-10 3-14-5 3-6 9-3 14z" fill="#F59E0B" />
                  <path d="M74 26c3-4 3-11 0-14-4 4-4 10 0 14z" fill="#F59E0B" />

                  {/* Bottom tie ribbon */}
                  <path d="M42 84l8 6 8-6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                </svg>

                {/* Inner Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <span className="text-[10px] font-black tracking-wider text-[#B45309] uppercase leading-none">
                    AWARD
                  </span>
                  <span className="text-[11px] font-black tracking-wider text-[#B45309] uppercase leading-tight mb-0.5">
                    WINNER
                  </span>
                  <div className="w-8 h-[1px] bg-[#D97706]/40 my-0.5"></div>
                  <span className="text-[9px] font-bold tracking-tight text-[#0A3D78] lowercase">
                    goodfirms
                  </span>
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-xs sm:text-[13px] font-medium max-w-[170px] leading-snug">
              Certified as a Mobile App Developers
            </p>
          </div>

          {/* Award 2: Top 1000 Companies Global */}
          <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-40 sm:w-44 h-40 sm:h-44 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 border border-blue-100/30 group-hover:scale-105 transition-transform duration-300">
              {/* Blue Circular Crest Emblem */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#1E3A8A]"
                >
                  {/* Outer notched gear/star ring */}
                  <circle cx="50" cy="50" r="46" stroke="#1E3A8A" strokeWidth="2.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="41" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="50" cy="50" r="32" fill="#1E3A8A" fillOpacity="0.08" stroke="#1E3A8A" strokeWidth="1.5" />
                  {/* Inner ship/globe crest */}
                  <circle cx="50" cy="50" r="22" fill="#1E3A8A" />
                  {/* Globe meridian lines */}
                  <ellipse cx="50" cy="50" rx="10" ry="20" stroke="#93C5FD" strokeWidth="1" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#93C5FD" strokeWidth="1" />
                  <line x1="33" y1="40" x2="67" y2="40" stroke="#93C5FD" strokeWidth="0.8" />
                  <line x1="33" y1="60" x2="67" y2="60" stroke="#93C5FD" strokeWidth="0.8" />
                  {/* Small gold stars around */}
                  <polygon points="50,14 51,17 54,17 52,19 53,22 50,20 47,22 48,19 46,17 49,17" fill="#F59E0B" />
                  <polygon points="50,86 51,89 54,89 52,91 53,94 50,92 47,94 48,91 46,89 49,89" fill="#F59E0B" />
                </svg>

                {/* Sub-label inside crest */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[8px] font-black tracking-tighter text-white uppercase drop-shadow-sm">
                    TOP 1000
                  </span>
                  <span className="text-[6.5px] font-bold tracking-tight text-blue-200 uppercase">
                    GLOBAL
                  </span>
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-xs sm:text-[13px] font-medium max-w-[170px] leading-snug">
              Certified Top 1000 Companies Global 2021
            </p>
          </div>

          {/* Award 3: Clutch Global 2021 */}
          <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-40 sm:w-44 h-40 sm:h-44 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 border border-blue-100/30 group-hover:scale-105 transition-transform duration-300">
              {/* Clutch Global Badge with Gold Ring */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Elegant Golden outer ring */}
                  <circle cx="50" cy="50" r="44" stroke="#D97706" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="40" stroke="#FDE68A" strokeWidth="1" />
                  
                  {/* Black header banner bar */}
                  <rect x="18" y="44" width="64" height="2" fill="#1E293B" />
                </svg>

                {/* Inner Badge Typography */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                  <span className="text-[7.5px] font-black tracking-wider text-slate-800 uppercase leading-none mb-0.5">
                    TOP
                  </span>
                  <span className="text-[7.5px] font-extrabold tracking-tight text-slate-700 uppercase leading-none mb-1">
                    1000 COMPANIES
                  </span>
                  
                  {/* Clutch Logo font */}
                  <span className="text-[15px] font-black tracking-tight text-[#1E293B] lowercase font-serif leading-none my-0.5">
                    Clutch
                  </span>

                  <div className="w-10 h-[1.5px] bg-[#D97706] my-1"></div>

                  <span className="text-[8px] font-black tracking-wider text-[#92400E] uppercase leading-none">
                    GLOBAL
                  </span>
                  <span className="text-[7px] font-bold tracking-tight text-slate-500 leading-none mt-0.5">
                    2021
                  </span>
                </div>
              </div>
            </div>
            <p className="text-blue-100 text-xs sm:text-[13px] font-medium max-w-[170px] leading-snug">
              Best outsourcing company in SG/GCC
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
