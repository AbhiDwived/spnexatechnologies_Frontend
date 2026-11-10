"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SalonBenefitsForm() {
  const [submitted, setSubmitted] = useState(false);

  const bulletPoints = [
    "24/7 Booking Convenience",
    "Real-Time Updates",
    "Enhanced Customer Satisfaction",
    "Automated Reminders",
    "Increased Revenue",
    "Effortless Client Insights",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle Geometric Wireframe Polygon Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      ></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Why is Salon Scheduling App Development <br className="hidden sm:inline" />
            Beneficial for Your Business?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Paragraphs, 6 Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left pt-2">
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Launching a salon scheduling app is a smart move in today&apos;s competitive beauty and wellness market. Providing clients with intuitive mobile appointment scheduling enables your salon to maximize customer loyalty, minimize missed slots, and attract clients who prefer managing their bookings effortlessly online. It equips owners with streamlined stylist calendars, service catalogs, and real-time analytics in one centralized hub.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              With a customized salon app, customers can browse stylists, pick their preferred time slots, reserve treatments, make secure payments, and unlock personalized loyalty rewards right from their mobile devices—keeping them engaged and coming back for more.
            </p>

            {/* 6 Benefits Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D70B8] shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0B2545] text-white hover:bg-[#155A96] transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white/20 text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0B2545] transition-all"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: "Let's Get to know you!" Lead Form Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#1D70B8]/55 shadow-xl p-6 sm:p-8 text-left">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                  Let&apos;s Get to know you!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-0">
                  Leave us your info and we will reach out
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mx-auto">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Request Received!</h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Thanks for reaching out! Our salon app specialists will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#1D70B8] hover:underline bg-transparent border-0 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name*"
                      className="w-full border-0 border-b border-slate-300 focus:border-[#1D70B8] focus:outline-none py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full border-0 border-b border-slate-300 focus:border-[#1D70B8] focus:outline-none py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2 border-b border-slate-300 focus-within:border-[#1D70B8] transition-colors">
                    <span className="text-sm shrink-0">🇮🇳</span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone*"
                      className="w-full border-0 focus:outline-none py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Subject*"
                      className="w-full border-0 border-b border-slate-300 focus:border-[#1D70B8] focus:outline-none py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Share your business requirement"
                      className="w-full border-0 border-b border-slate-300 focus:border-[#1D70B8] focus:outline-none py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent resize-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-6 rounded-xl bg-[#0B5FA5] hover:bg-[#084980] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer border-0"
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
