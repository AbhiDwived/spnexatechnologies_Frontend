"use client";

import React from "react";

export default function UiUxHero() {
  const bulletPoints = [
    "Wireframing & Prototyping",
    "Visual Design & Aesthetics",
    "Interaction Design (IxD)",
    "Information Architecture (IA)",
    "UX Strategy & Optimization",
    "Usability Testing",
    "Accessibility Design",
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: UI/UX Design Description & Bullets */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                UI/UX Design
              </h1>
              
              {/* Artistic Wavy Underline */}
              <div className="mt-2 w-48 sm:w-60 h-2.5">
                <svg
                  viewBox="0 0 240 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/70"
                >
                  <path
                    d="M2 7C40 2 80 11 120 6C160 1 200 10 238 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Paragraph Text */}
            <p className="text-blue-100 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl font-normal">
              Our UX Development focuses on crafting exceptional digital experiences. By prioritizing your users' needs, we build intuitive interfaces and seamless journeys that boost satisfaction, engagement, and loyalty.
            </p>

            {/* Bullet Points List */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-sm shadow-white/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-transparent border border-white/80 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0A3D78] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: High Fidelity UI/UX Wireframe & Flow Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] h-[340px] sm:h-[390px] flex items-center justify-center">

              {/* Connecting circuit-style lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 460 380"
                fill="none"
              >
                {/* Line: Lightbulb to Smartphone top */}
                <path
                  d="M 125 105 C 160 105, 175 140, 205 140"
                  stroke="#E879F9"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity="0.8"
                />
                {/* Line: Mid-left card to Phone middle */}
                <path
                  d="M 115 210 C 145 210, 165 240, 205 240"
                  stroke="#C084FC"
                  strokeWidth="1.5"
                  opacity="0.75"
                />
                {/* Line: Top-right card to Phone right */}
                <path
                  d="M 285 85 C 310 85, 340 100, 345 130 C 350 170, 310 185, 290 190"
                  stroke="#F472B6"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                {/* Line: Large photo card to bottom node */}
                <path
                  d="M 330 295 L 330 325 C 330 335, 300 335, 275 335"
                  stroke="#818CF8"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  opacity="0.75"
                />
              </svg>

              {/* Floating Node 1: Top-Left Lightbulb Card with "UX" Tag */}
              <div className="absolute top-10 sm:top-12 left-4 sm:left-6 z-20">
                <div className="relative">
                  {/* Mini attached tag */}
                  <div className="absolute -top-3 -left-2 bg-white text-slate-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-md border border-slate-200">
                    UX
                  </div>
                  {/* Card with pink gradient */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#FF4E98] to-[#9933FF] p-0.5 shadow-xl shadow-purple-900/40">
                    <div className="w-full h-full bg-gradient-to-br from-[#FF5C8A] to-[#8022E0] rounded-[14px] flex items-center justify-center text-white">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Node 2: Mid-Left Magenta Card */}
              <div className="absolute top-[180px] left-8 sm:left-10 z-20">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FF4081] to-[#7C4DFF] p-2.5 shadow-lg flex items-center justify-center text-white border border-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 6h16M4 12h10M4 18h14" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Floating Node 3: Bottom-Left White Card */}
              <div className="absolute bottom-6 left-12 sm:left-14 z-20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white text-slate-700 shadow-2xl p-2.5 flex items-center justify-center border border-slate-100">
                  <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-1">
                    <div className="w-6 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative mini grey square */}
              <div className="absolute bottom-20 left-1 w-5 h-5 rounded-md bg-white/20 backdrop-blur-sm border border-white/30"></div>

              {/* Central Smartphone Container */}
              <div className="relative z-10 w-44 sm:w-52 h-72 sm:h-84 rounded-[26px] bg-white text-slate-800 shadow-2xl shadow-blue-950/60 p-3 sm:p-3.5 flex flex-col justify-between border-[5px] border-slate-100/95">
                
                {/* Top Notch / Camera Bar */}
                <div className="flex items-center justify-between px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm"></div>
                  <div className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  </div>
                </div>

                {/* Right edge mini tabs */}
                <div className="absolute -right-3.5 top-12 bg-white text-slate-600 rounded-lg p-1.5 shadow-md border border-slate-100">
                  <svg className="w-3.5 h-3.5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="absolute -right-3.5 top-22 bg-white text-slate-600 rounded-lg p-1.5 shadow-md border border-slate-100">
                  <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>

                {/* Left edge mini tab */}
                <div className="absolute -left-3.5 bottom-16 bg-white text-slate-700 rounded-lg p-1.5 shadow-md border border-slate-100">
                  <div className="w-3.5 h-3.5 rounded bg-pink-100 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                  </div>
                </div>

                {/* Center Content: Big "UX" Gradient Typography */}
                <div className="my-auto text-center py-6">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#F472B6] via-[#C084FC] to-[#818CF8] bg-clip-text text-transparent tracking-tighter">
                    UX
                  </span>
                </div>

                {/* Bottom App Slider Action Button */}
                <div className="bg-slate-50 rounded-full py-1.5 px-3 flex items-center justify-between border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500">Slide</span>
                  <div className="w-4 h-4 rounded-full bg-pink-500 text-white flex items-center justify-center text-[9px] shadow-sm">
                    ▶
                  </div>
                </div>
              </div>

              {/* Floating Node 4: Top-Right Card with Icon */}
              <div className="absolute top-8 sm:top-10 right-14 sm:right-18 z-20">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xl p-2.5 flex items-center justify-center border border-slate-100 text-pink-500">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>

              {/* Floating Node 5: Middle-Right Image/Gallery Card */}
              <div className="absolute top-[165px] right-2 sm:right-4 z-20">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white text-slate-400 shadow-2xl p-3 flex flex-col items-center justify-center border border-slate-100">
                  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
              </div>

              {/* Floating Node 6: Bottom-Right Mini Accent Tag */}
              <div className="absolute bottom-5 right-18 sm:right-22 z-20">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5C8A] to-[#7B2CBF] shadow-lg flex items-center justify-center text-white p-1.5 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>
              </div>

              {/* Micro floating cubes */}
              <div className="absolute bottom-16 right-0 w-4 h-4 rounded-md bg-white/25 border border-white/30 backdrop-blur-sm"></div>
              <div className="absolute top-16 right-2 w-3.5 h-3.5 rounded-sm bg-white/20 border border-white/30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
