"use client";

import React, { useState } from "react";

export default function UiUxContact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    budget: "",
    enquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 lg:py-20 px-4 bg-slate-800 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 35, 45, 0.45) 0%, rgba(15, 20, 30, 0.15) 35%, rgba(15, 20, 30, 0.3) 100%), url('/images/contact-facade-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section Heading - Exact match to Image 2 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight drop-shadow-sm">
            Contact Us
          </h2>
        </div>

        {/* White Center Card Container */}
        <div
          style={{ borderRadius: "28px" }}
          className="bg-white text-slate-900 p-6 sm:p-10 lg:p-14 shadow-2xl relative max-w-[940px] mx-auto"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-[#1B5F9E] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Thank You, {formData.name}!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your enquiry has been received. Our team will review your project details and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", mobile: "", email: "", budget: "", enquiry: "" });
                }}
                className="mt-4 px-7 py-2 bg-[#1B5F9E] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#154E83] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Enter Your Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#D4E4E9] text-slate-800 text-xs sm:text-[13px] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#1B5F9E] placeholder:text-[#6D7578] font-normal"
                    />
                  </div>

                  {/* Enter Your Mobile */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter Your Mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 bg-[#D4E4E9] text-slate-800 text-xs sm:text-[13px] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#1B5F9E] placeholder:text-[#6D7578] font-normal"
                    />
                  </div>

                  {/* Enter Your Email */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#D4E4E9] text-slate-800 text-xs sm:text-[13px] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#1B5F9E] placeholder:text-[#6D7578] font-normal"
                    />
                  </div>

                  {/* Budget Dropdown with custom chevron */}
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#D4E4E9] text-slate-800 text-xs sm:text-[13px] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#1B5F9E] font-normal appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-[#6D7578]">
                        Budget
                      </option>
                      <option value="under-5k">Less than $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                    </select>
                    {/* Custom Down Chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5F7179]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Enter Your Quick Enquiry */}
                  <div>
                    <textarea
                      rows={2}
                      placeholder="Enter Your Quick Enquiry"
                      value={formData.enquiry}
                      onChange={(e) => setFormData({ ...formData, enquiry: e.target.value })}
                      className="w-full px-4 py-3 bg-[#D4E4E9] text-slate-800 text-xs sm:text-[13px] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#1B5F9E] placeholder:text-[#6D7578] font-normal resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button Centered Under Inputs */}
                  <div className="flex justify-center pt-3">
                    <button
                      type="submit"
                      className="px-9 py-2 bg-[#1B5F9E] hover:bg-[#154E83] text-white font-medium text-xs sm:text-[13px] rounded-lg transition-colors shadow-sm cursor-pointer border-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Contact Details (No Divider Line, Clean Black Minimalist Icons) */}
              <div className="lg:col-span-5 space-y-9 sm:space-y-11 text-left lg:pl-4">
                
                {/* EMAIL */}
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Clean outline envelope */}
                  <div className="shrink-0 text-slate-900 flex items-center justify-center">
                    <svg
                      className="w-7 h-5"
                      viewBox="0 0 28 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="1" width="26" height="18" rx="4" />
                      <path d="M2 3L14 11L26 3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-wider uppercase mb-0.5">
                      EMAIL
                    </h4>
                    <a
                      href="mailto:contact@tricklesolutions.com"
                      className="text-xs sm:text-[13px] text-slate-800 hover:text-blue-600 transition-colors text-decoration-none block"
                    >
                      www.contact@tricklesolutions.com
                    </a>
                  </div>
                </div>

                {/* CALL US */}
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Clean outline vertical smartphone */}
                  <div className="shrink-0 text-slate-900 flex items-center justify-center">
                    <svg
                      className="w-5 h-7"
                      viewBox="0 0 20 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1.5" y="1.5" width="17" height="25" rx="4" />
                      <circle cx="10" cy="22.5" r="0.75" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-wider uppercase mb-0.5">
                      CALL US
                    </h4>
                    <a
                      href="tel:+91265915642434"
                      className="text-xs sm:text-[13px] text-slate-800 hover:text-blue-600 transition-colors text-decoration-none font-medium block"
                    >
                      +91 2659 1564 2434
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Clean outline location pin with pedestal base */}
                  <div className="shrink-0 text-slate-900 flex items-center justify-center pt-0.5">
                    <svg
                      className="w-6 h-7"
                      viewBox="0 0 24 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2C8 2 5 5 5 9C5 14.5 12 20 12 20C12 20 19 14.5 19 9C19 5 16 2 12 2Z" />
                      <circle cx="12" cy="9" r="2.5" />
                      <path d="M4 25C4 23.5 7.5 22 12 22C16.5 22 20 23.5 20 25" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-wider uppercase mb-1">
                      ADDRESS
                    </h4>
                    <p className="text-xs sm:text-[12px] text-slate-800 leading-relaxed font-normal m-0">
                      Trickle solutions India Pvt. Ltd.
                      <br />
                      D-185 First Floor,Pathankot
                      <br />
                      ,Pathankot-160055, India
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
