"use client";

import React from "react";
import Link from "next/link";

export default function HealthcareStrategies() {
  const rowOne = [
    {
      title: "Exceptional User Experience",
      desc: "Craft clean, frictionless patient workflows with intuitive onboarding, easy accessibility, and calm visual clarity.",
      icon: "bi-ui-checks-grid",
    },
    {
      title: "Secure Data Transfer",
      desc: "Protect medical records and sensitive conversations with end-to-end encryption, HIPAA compliance, and audit logs.",
      icon: "bi-shield-lock-fill",
    },
    {
      title: "Comprehensive Support",
      desc: "Receive dedicated engineering monitoring, proactive bug fixes, security patches, and multi-platform upgrades.",
      icon: "bi-headset",
    },
    {
      title: "Advanced Technologies",
      desc: "Integrate AI symptom triage, wearable vital sync, cloud analytics, and interoperability standards seamlessly.",
      icon: "bi-lightbulb-fill",
    },
  ];

  const rowTwoLeft = [
    {
      title: "Offer Valuable Features",
      desc: "Stand out with remote care kits, family profiles, automated pill scheduling, and one-tap e-prescriptions.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Build Strong Partnerships",
      desc: "Connect diagnostic laboratories, insurance networks, pharmacies, and clinics inside one connected ecosystem.",
      icon: "bi-people-fill",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-[#FAFCFF] text-slate-900 relative overflow-hidden">
      {/* Subtle Medical Dots Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Winning Strategies for Success in the <br className="hidden sm:inline" />
            On-Demand Healthcare Market
          </h2>
        </div>

        {/* 4-Column Asymmetric Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Row 1 (Items 1-4) */}
          {rowOne.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start group">
              <div className="w-full flex justify-center sm:justify-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl shadow group-hover:bg-[#1D70B8] transition-colors">
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>
              <h3 className="text-base font-extrabold text-[#0B2545] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Row 2 Left (Items 5-6) */}
          {rowTwoLeft.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start group">
              <div className="w-full flex justify-center sm:justify-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl shadow group-hover:bg-[#1D70B8] transition-colors">
                  <i className={`bi ${item.icon}`}></i>
                </div>
              </div>
              <h3 className="text-base font-extrabold text-[#0B2545] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Row 2 Right: Wide Dark Royal Blue CTA Highlight Box matching screenshot */}
          <div className="sm:col-span-2 bg-[#0B4F96] bg-gradient-to-br from-[#0A4D94] to-[#083A70] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#0B4F96] flex items-center justify-center font-black text-sm shrink-0 shadow">
                TS
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug mb-1.5">
                  Get Started Today &mdash; Build a Custom &amp; Secure Healthcare Solution
                </h3>
                <p className="text-blue-100 text-xs sm:text-[13px] leading-relaxed mb-0">
                  Empower clinicians and delight patients with scalable, compliant health apps built for faster consultations, remote vitals tracking, and smart hospital operations. Let&apos;s bring your healthcare app idea to life with expert engineering.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0B4F96] hover:bg-blue-50 text-xs font-extrabold shadow transition-all text-decoration-none"
              >
                <span>Start Building Now</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
