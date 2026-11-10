"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HealthcareBenefitsForm() {
  const [submitted, setSubmitted] = useState(false);

  const bulletPoints = [
    "Effective Patient Management",
    "Cost Saving",
    "Easy Access",
    "Secure Health Record",
    "Better Services",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 px-4 bg-[#FAFCFF] text-slate-900 relative overflow-hidden">
      {/* Subtle Hexagonal Molecular Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `radial-gradient(#bae6fd 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      ></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Heading matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Why Does Every Healthcare Provider Need a <br className="hidden sm:inline" />
            Custom Healthcare App Development Solution?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Explanatory Paragraphs, 5 Bullets & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left pt-2">
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Today, mobile technology empowers hospitals and clinics to revolutionize care delivery seamlessly. With a tailored healthcare application, practitioners and medical institutions can digitize appointment scheduling, simplify electronic health record access, and establish fast clinical communication channels. Custom healthcare mobile solutions improve care outcomes, remove manual paperwork bottlenecks, and enhance doctor-patient accessibility across every touchpoint.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Furthermore, investing in a custom app streamlines daily clinic operations, supports encrypted telemedicine video consultations, safeguards patient vitals with compliant security architectures, and positions your medical practice for long-term digital efficiency.
            </p>

            {/* 5 Benefits Checklist */}
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
                  <h4 className="text-base font-bold text-slate-900">Inquiry Submitted!</h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Thank you! Our healthcare app team will reach out to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#1D70B8] hover:underline bg-transparent border-0 cursor-pointer"
                  >
                    Submit Another Request
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
