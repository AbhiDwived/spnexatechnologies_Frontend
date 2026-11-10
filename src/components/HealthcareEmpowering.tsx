"use client";

import React from "react";

export default function HealthcareEmpowering() {
  const features = [
    {
      title: "Appointment Scheduling",
      desc: "Book appointments seamlessly with automated calendar sync, slot confirmations, and reminders.",
      icon: "bi-calendar2-check-fill",
    },
    {
      title: "Online Consultation",
      desc: "Connect doctors and patients remotely via HD video consultations, encrypted chat, and digital notes.",
      icon: "bi-camera-video-fill",
    },
    {
      title: "Download Medical Reports",
      desc: "Enable patients to securely download lab reports, imaging summaries, and e-prescriptions anytime.",
      icon: "bi-file-earmark-arrow-down-fill",
    },
    {
      title: "Personal Medical Records",
      desc: "Centralized digital patient history tracking vitals, allergies, and prior treatments safely.",
      icon: "bi-clipboard2-pulse-fill",
    },
    {
      title: "Care and Pill Reminder",
      desc: "Automated medication alerts and dosage tracking schedules boost patient adherence effortlessly.",
      icon: "bi-capsule-pill",
    },
    {
      title: "Hospital Wayfinding Map",
      desc: "Interactive campus navigation guiding visitors smoothly to clinics, labs, and pharmacy counters.",
      icon: "bi-hospital-fill",
    },
    {
      title: "Symptoms Checking",
      desc: "Smart pre-visit triage questionnaires gather symptoms ahead of time for faster physician review.",
      icon: "bi-heart-pulse-fill",
    },
    {
      title: "Multiple Payment Gateways",
      desc: "Supports flexible payments including cards, wallets, UPI, and insurance billing claims.",
      icon: "bi-credit-card-2-back-fill",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900">
      <div className="container max-w-7xl mx-auto">
        
        {/* Centered Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Empowering Healthcare with <br className="hidden sm:inline" />
            Healthcare App
          </h2>
        </div>

        {/* 4x2 Feature Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group px-2">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl mb-4 shadow-md group-hover:bg-[#1D70B8] group-hover:scale-110 transition-all duration-200">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0B2545] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[12.5px] leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
