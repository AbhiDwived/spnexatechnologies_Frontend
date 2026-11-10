"use client";

import React from "react";

export default function SalonRoiGrid() {
  const services = [
    {
      title: "Salon Booking App Development",
      desc: "Deliver mobile booking capabilities with clean appointment calendars, stylist selection, automated reminders, and instant rescheduling for modern salon businesses.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      ),
    },
    {
      title: "Home Service Spa App Development",
      desc: "Empower clients to reserve spa therapists and grooming specialists at home with GPS tracking, doorstep check-in, and secure cashless payment options.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      ),
    },
    {
      title: "Multi-Branch Salon Management",
      desc: "Provide enterprise salon chains with centralized analytics, cross-location staff scheduling, inventory monitoring, and loyalty membership tiers.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
          <circle cx="17.5" cy="9.5" r="2.5" />
          <path d="M21 20v-.5a3.5 3.5 0 0 0-3-3.4" />
        </svg>
      ),
    },
    {
      title: "Hair Salon Application",
      desc: "Elevate your hair studio with interactive hairstyle portfolios, stylist portfolios, digital consultation notes, and effortless slot booking on iOS & Android.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Beauty Salon Application",
      desc: "Built for skincare, makeup, and cosmetic studios—letting clients explore treatment packages, add aftercare products to bag, and review verified ratings.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="9" width="6" height="12" rx="1" />
          <path d="M8.5 9V5l3-2v6" />
          <rect x="15" y="13" width="4" height="8" rx="1" />
          <path d="M16 13v-2h2v2" />
        </svg>
      ),
    },
    {
      title: "Nail Salon Application",
      desc: "Showcase manicure, pedicure, and nail art catalogs with photo galleries, add-on gel/acrylic pricing options, and quick rebooking for returning patrons.",
      icon: (
        <svg className="w-10 h-10 text-slate-800 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c-3.5 0-6-2.5-6-6 0-2.5 1.5-5.5 3-8.5.6-1.2 1.8-2.5 3-2.5s2.4 1.3 3 2.5c1.5 3 3 6 3 8.5 0 3.5-2.5 6-6 6z" />
          <path d="M9.5 12.5c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900">
      <div className="container max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Maximize Your Salon Business ROI with Our <br className="hidden sm:inline" />
            On-Demand Salon App Development Services
          </h2>
        </div>

        {/* 3x2 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-left">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start group"
            >
              {/* Centered Thin-Stroke Icon per card matching screenshot */}
              <div className="w-full flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545] mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
