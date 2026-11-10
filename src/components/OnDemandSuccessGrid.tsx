"use client";

import React from "react";
import Link from "next/link";

export default function OnDemandSuccessGrid() {
  const services = [
    {
      title: "On-Demand Delivery App Solutions",
      desc: "Custom-built real-time courier and multi-drop dispatch solutions with route tracking and digital proof of delivery.",
      date: "Mobile Platform",
    },
    {
      title: "On-Demand Taxi & Mobility Apps",
      desc: "Seamless ride-hailing apps featuring dynamic fare estimation, driver dispatch panels, and in-app SOS safety tools.",
      date: "GPS & Fleet",
    },
    {
      title: "On-Demand Healthcare Booking Apps",
      desc: "Telehealth appointment booking with instant video consultations, patient medical charts, and HIPAA data security.",
      date: "Telemedicine",
    },
    {
      title: "On-Demand Grocery & Quick Commerce",
      desc: "10-minute delivery storefronts featuring live inventory sync, smart search, and contactless doorstep fulfillment.",
      date: "Quick Commerce",
    },
    {
      title: "On-Demand Salon & Home Service Apps",
      desc: "Appointment scheduling apps for beauty professionals, cleaners, technicians, and fitness trainers at doorstep.",
      date: "Home Services",
    },
    {
      title: "On-Demand Laundry & Rental Apps",
      desc: "Scheduled pickup-to-dropoff apps with automated billing, live machine tracking, and recurring plan subscriptions.",
      date: "SaaS & Bookings",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900">
      <div className="container max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Delivering Success with Top-Tier On-Demand App <br className="hidden sm:inline" />
            Development Services
          </h2>
        </div>

        {/* 3x2 Showcase Cards matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden bg-slate-950">
                  <img
                    src="/images/blog-app-dev-card.png"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#1D70B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-semibold">{item.date}</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#1D70B8] hover:text-[#0B2545] transition-colors text-decoration-none"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
