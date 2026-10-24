"use client";

import React, { useState } from "react";

export default function BlogConsultation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FCE7F3]/70 via-[#F5E8FF]/60 to-[#EEF2FF] relative overflow-hidden"
    >
      {/* Decorative ambient mobile app silhouettes on edges */}
      <div className="absolute -left-12 top-1/4 w-36 h-72 rounded-[32px] border-4 border-slate-300/40 bg-white/40 transform -rotate-12 blur-[1px] pointer-events-none hidden lg:block"></div>
      <div className="absolute -right-12 top-1/3 w-36 h-72 rounded-[32px] border-4 border-slate-300/40 bg-white/40 transform rotate-12 blur-[1px] pointer-events-none hidden lg:block"></div>

      <div className="container max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Build It Right.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Book your free 30 min product consultation with us this week. <br className="hidden sm:inline" />
            We look forward to meeting you!
          </p>
        </div>

        {/* Consultation Form White Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/80">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Consultation Request Received!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                Thank you! Our senior product consultant will review your inquiry and connect with you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Left Column Fields */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <select
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select Industry</option>
                      <option value="ecommerce">E-Commerce &amp; Retail</option>
                      <option value="fintech">FinTech &amp; Banking</option>
                      <option value="healthcare">Health &amp; Wellness</option>
                      <option value="realestate">Real Estate &amp; PropTech</option>
                      <option value="education">EdTech &amp; Learning</option>
                      <option value="other">Other Industry</option>
                    </select>
                  </div>

                  {/* Trust Bullet Points */}
                  <div className="pt-2 space-y-1.5 text-[11px] sm:text-xs text-slate-500">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-700 font-bold">•</span>
                      <span>In-depth interview with PM&apos;s inception</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-700 font-bold">•</span>
                      <span>Your idea is 100% protected by our Non-Disclosure Agreement</span>
                    </div>
                  </div>
                </div>

                {/* Right Column Fields */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <select
                      defaultValue=""
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="" disabled>Budget</option>
                      <option value="10k">&lt; $10,000</option>
                      <option value="25k">$10,000 - $25,000</option>
                      <option value="50k">$25,000 - $50,000</option>
                      <option value="100k">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Enter Your Quick Enquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

              </div>

              {/* Centered Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  style={{ borderRadius: "8px" }}
                  className="px-10 py-3 bg-[#0F4C81] text-white font-bold text-xs sm:text-sm hover:bg-[#0B3D6A] transition-all shadow-md cursor-pointer border-0"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
