"use client";

import React from "react";
import Link from "next/link";

export default function HealthcareHero() {
  const bulletPoints = [
    "HIPAA & GDPR Compliant Solutions",
    "24/7 Support",
    "Seamless Integrations",
    "Customized Development",
  ];

  return (
    <section className="relative bg-slate-950 text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Full-Bleed Medical Consultation Background Photo with Moody Dark Left Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/healthcare-hero-bg.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/95 via-[#07213B]/85 to-[#082B4C]/45"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullets & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Healthcare App <br />
                Development Company
              </h1>
              
              {/* Artistic Wavy Accent Underline */}
              <div className="mt-2 w-56 sm:w-80 h-2.5">
                <svg
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/75"
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
            <p className="text-slate-200 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Are you looking for innovative healthcare app solutions to elevate patient care? Step into the future of digital health with our leading healthcare app development company! Our dedicated team of healthcare app developers excels in creating secure, HIPAA-compliant mobile apps that simplify appointment booking, enable real-time teleconsultations, manage electronic medical records, and empower clinics to deliver seamless healthcare experiences.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-100 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-xs shadow-cyan-400/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

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

          {/* Right Column: Dual White & Blue Telehealth iPhone Mockups */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[440px] sm:max-w-[470px] h-[410px] sm:h-[450px]">
              
              {/* Left Phone: Patient Home & Appointment Banner */}
              <div className="absolute left-0 sm:left-2 top-3 w-[195px] sm:w-[220px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 hover:scale-[1.02] transition-transform duration-300 z-10">
                <div className="bg-white rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[355px] sm:h-[385px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-10 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                      <i className="bi bi-battery-full"></i>
                    </div>

                    {/* Greeting Header */}
                    <div className="flex items-center justify-between mb-2 text-left">
                      <div>
                        <span className="text-[8px] text-slate-400 block">Welcome, Patient</span>
                        <p className="font-extrabold text-[11px] text-slate-900 mb-0">How are you feeling?</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                        👤
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-slate-100 rounded-lg px-2 py-1 text-[8.5px] text-slate-400 flex items-center gap-1.5 mb-2.5">
                      <i className="bi bi-search"></i>
                      <span>Search doctors, symptoms...</span>
                    </div>

                    {/* Featured Blue Appointment Banner */}
                    <div className="bg-gradient-to-r from-[#2196F3] to-[#1D70B8] rounded-xl p-2.5 text-white mb-2.5 text-left shadow-sm">
                      <span className="text-[7.5px] uppercase tracking-wider text-blue-100 font-bold block">
                        Upcoming Visit
                      </span>
                      <p className="font-extrabold text-[10px] mb-1">Dr. Rachel Jenkins</p>
                      <div className="flex items-center justify-between text-[8px] bg-white/20 rounded-lg px-2 py-1">
                        <span>Today, 10:30 AM</span>
                        <span className="font-bold">Join Call →</span>
                      </div>
                    </div>

                    {/* Specialties Icons */}
                    <div className="grid grid-cols-3 gap-1.5 text-center mb-2">
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">🩺</span>
                        <span className="text-[7.5px] font-bold text-slate-700">Cardiology</span>
                      </div>
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">🦷</span>
                        <span className="text-[7.5px] font-bold text-slate-700">Dental</span>
                      </div>
                      <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                        <span className="text-sm block">💊</span>
                        <span className="text-[7.5px] font-bold text-slate-700">Pharmacy</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Icons */}
                  <div className="border-t pt-1.5 flex justify-around text-slate-400 text-[11px]">
                    <i className="bi bi-house-door-fill text-[#1D70B8]"></i>
                    <i className="bi bi-calendar-heart"></i>
                    <i className="bi bi-chat-dots"></i>
                    <i className="bi bi-person"></i>
                  </div>
                </div>
              </div>

              {/* Right Phone: Doctor Profile & Slot Selection */}
              <div className="absolute right-0 sm:right-2 top-8 w-[195px] sm:w-[220px] bg-slate-950 rounded-[32px] p-2.5 shadow-2xl border-[3px] border-slate-700 hover:scale-[1.02] transition-transform duration-300 z-20">
                <div className="bg-slate-50 rounded-[24px] overflow-hidden text-slate-800 p-2.5 h-[355px] sm:h-[385px] flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-10 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                      <i className="bi bi-wifi"></i>
                    </div>

                    {/* Doctor Card Header */}
                    <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-2xs mb-2 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 border-2 border-[#1D70B8] flex items-center justify-center text-2xl mx-auto mb-1">
                        👨‍⚕️
                      </div>
                      <p className="font-extrabold text-[10.5px] text-slate-900 mb-0">Dr. Nathan Cooper</p>
                      <span className="text-[8px] text-[#1D70B8] font-bold block">Senior Cardiologist</span>
                      <div className="flex justify-center gap-2 mt-1 text-[8px] text-slate-500">
                        <span>★ 4.9</span>
                        <span>•</span>
                        <span>12 Yrs Exp</span>
                      </div>
                    </div>

                    {/* Appointment Day Slots */}
                    <p className="text-[9px] font-extrabold text-slate-900 text-left mb-1">Select Date</p>
                    <div className="grid grid-cols-4 gap-1 text-center mb-2">
                      {[
                        { d: "Mon", n: "12" },
                        { d: "Tue", n: "13", active: true },
                        { d: "Wed", n: "14" },
                        { d: "Thu", n: "15" },
                      ].map((slot) => (
                        <div
                          key={slot.d}
                          className={`rounded-lg py-1 border text-[8px] ${
                            slot.active
                              ? "bg-[#1D70B8] text-white border-[#1D70B8] font-bold"
                              : "bg-white text-slate-700 border-slate-200"
                          }`}
                        >
                          <span className="block text-[7px] opacity-80">{slot.d}</span>
                          <span>{slot.n}</span>
                        </div>
                      ))}
                    </div>

                    {/* Time Pills */}
                    <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                      <div className="bg-[#1D70B8]/10 text-[#1D70B8] border border-[#1D70B8]/30 py-1 rounded-lg text-center font-bold">
                        09:30 AM
                      </div>
                      <div className="bg-white text-slate-600 border border-slate-200 py-1 rounded-lg text-center font-semibold">
                        11:00 AM
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1D70B8] text-white text-center py-2 rounded-xl font-bold text-[10px] shadow">
                    Book Appointment
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
