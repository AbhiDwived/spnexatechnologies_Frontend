"use client";

import React, { useState } from "react";

export default function ContactHero() {
  const [tab, setTab] = useState<"business" | "career">("business");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#072B54] bg-gradient-to-b from-[#062447] via-[#072B54] to-[#093566] text-white pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Toggle Pills */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Contact Us
              </h1>

              {/* Artistic Wavy Underline */}
              <div className="mt-2 w-48 sm:w-60 h-2.5">
                <svg
                  viewBox="0 0 240 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/80"
                >
                  <path
                    d="M2 7C45 2 95 11 140 6C185 1 215 10 238 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Unleash Your Business Potential Now!
            </h2>

            {/* Toggle Pills: For Business / For Career */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setTab("business")}
                style={{ borderRadius: "9999px" }}
                className={`px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  tab === "business"
                    ? "bg-[#1D70B8] text-white border-white/60 shadow-lg"
                    : "bg-white/10 text-white/80 border-white/30 hover:bg-white/20"
                }`}
              >
                For Business
              </button>
              <button
                type="button"
                onClick={() => setTab("career")}
                style={{ borderRadius: "9999px" }}
                className={`px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  tab === "career"
                    ? "bg-[#1D70B8] text-white border-white/60 shadow-lg"
                    : "bg-white/10 text-white/80 border-white/30 hover:bg-white/20"
                }`}
              >
                For Career
              </button>
            </div>
          </div>

          {/* Right Column: Floating White Form Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-7 sm:p-9 text-slate-800">
              
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6 text-left">
                We Are Here For You! <br />
                Let&apos;s Get Started.
              </h3>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 text-[#1D70B8] flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Thank you for reaching out. A specialist from our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {/* Name field */}
                  <div className="border-b border-slate-400/80 focus-within:border-[#1D70B8] focus-within:border-b-2 transition-all pb-1">
                    <input
                      type="text"
                      required
                      placeholder="Name*"
                      className="w-full py-1.5 px-0 bg-transparent border-0 text-slate-900 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-0 shadow-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="border-b border-slate-400/80 focus-within:border-[#1D70B8] focus-within:border-b-2 transition-all pb-1">
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full py-1.5 px-0 bg-transparent border-0 text-slate-900 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-0 shadow-none"
                    />
                  </div>

                  {/* Phone field with Indian flag icon */}
                  <div className="flex items-center gap-2.5 border-b border-slate-400/80 focus-within:border-[#1D70B8] focus-within:border-b-2 transition-all pb-1">
                    <div className="flex items-center gap-1.5 shrink-0 select-none">
                      <svg
                        className="w-5 h-3.5 rounded-xs shadow-xs shrink-0 overflow-hidden"
                        viewBox="0 0 640 480"
                        aria-label="India Flag"
                      >
                        <path fill="#FF9933" d="M0 0h640v160H0z" />
                        <path fill="#FFFFFF" d="M0 160h640v160H0z" />
                        <path fill="#128807" d="M0 320h640v160H0z" />
                        <g transform="translate(320 240)">
                          <circle r="40" fill="none" stroke="#000080" strokeWidth="4" />
                          <circle r="8" fill="#000080" />
                          {Array.from({ length: 24 }).map((_, i) => (
                            <line
                              key={i}
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="-38"
                              stroke="#000080"
                              strokeWidth="2"
                              transform={`rotate(${i * 15})`}
                            />
                          ))}
                        </g>
                      </svg>
                      <span className="text-slate-400 text-xs">▾</span>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone*"
                      className="w-full py-1.5 px-0 bg-transparent border-0 text-slate-900 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-0 shadow-none"
                    />
                  </div>

                  {/* Project description field */}
                  <div className="border-b border-slate-400/80 focus-within:border-[#1D70B8] focus-within:border-b-2 transition-all pb-1">
                    <input
                      type="text"
                      required
                      placeholder={
                        tab === "business"
                          ? "What's your project about?"
                          : "Position or role interested in?"
                      }
                      className="w-full py-1.5 px-0 bg-transparent border-0 text-slate-900 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:ring-0 shadow-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      style={{ borderRadius: "9999px" }}
                      className="w-full py-3 bg-[#1D70B8] text-white hover:bg-[#165A96] transition-all font-bold text-xs sm:text-sm shadow-md cursor-pointer border-0"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
