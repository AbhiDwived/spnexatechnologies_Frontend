"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-10 sm:py-16 lg:py-20 px-4 min-h-[580px] lg:min-h-[620px] flex items-center">
      {/* 3 Diagonal Geometric Blue Bands */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden z-0">
        {/* Band 1 */}
        <div className="absolute top-[5%] lg:top-[10%] -right-[30%] lg:-right-[20%] w-[150%] lg:w-[130%] h-[120px] lg:h-[180px] bg-[#1E4D8C] transform -rotate-25 shadow-xl opacity-90 lg:opacity-100"></div>
        {/* Band 2 */}
        <div className="absolute top-[30%] lg:top-[35%] -right-[25%] lg:-right-[15%] w-[150%] lg:w-[130%] h-[90px] lg:h-[140px] bg-[#2B6CB0] transform -rotate-25 opacity-80 lg:opacity-100"></div>
        {/* Band 3 */}
        <div className="absolute top-[50%] lg:top-[55%] -right-[20%] lg:-right-[10%] w-[150%] lg:w-[130%] h-[80px] lg:h-[120px] bg-gradient-to-r from-[#90CDF4] to-[#3182CE] transform -rotate-25 opacity-60 lg:opacity-70"></div>
      </div>

      {/* Floating Circles/Dots */}
      <div className="hidden sm:block absolute top-12 right-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#1D70B8] z-10 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-28 right-5/12 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#1E4D8C] z-10 pointer-events-none"></div>
      <div className="hidden sm:block absolute bottom-44 right-1/2 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-slate-900 z-10 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="row items-center g-8">
          {/* Left Text Column */}
          <div className="col-lg-7 col-12">
            <div className="space-y-4 sm:space-y-6 text-left">
              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1D70B8] tracking-wider uppercase font-sans">
                CODE FIRE DEVELOPMENT
              </h2>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.18]">
                Transform your <span className="text-[#1D70B8]">Ideas</span> Into <br className="hidden sm:inline" />
                <span className="text-[#1D70B8]">High-Performance</span> Website <br className="hidden sm:inline" />
                and Mobile App
              </h1>

              {/* Paragraph */}
              <p className="text-slate-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
                Trickle Solutions is a leading mobile app and website development company dedicated to delivering exceptional client experiences. Our expert team brings innovation and skill to every project, staying ahead of the competition to create solutions that drive success for our clients and partners.
              </p>

              {/* Pill Contact Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                <div className="inline-flex items-center gap-2 bg-[#1D70B8] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
                  <span>🇮🇳</span>
                  <span>+91 98882-25514</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#1D70B8] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold shadow-sm break-all sm:break-normal">
                  <span>www.contact@codefireagency.com</span>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn bg-[#1D70B8] hover:bg-[#15538C] text-white font-semibold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-lg shadow-blue-600/20 hover:scale-105 transition-all text-xs sm:text-sm border-0 inline-flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Circular Photo Frame Column */}
          <div className="col-lg-5 col-12 flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative z-20">
              <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Woman Engineer Tech Interface"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Social Media Bar */}
        <div className="flex justify-center sm:justify-end items-center gap-3.5 sm:gap-4 mt-8 pt-4">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
