"use client";

import React from "react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Healthcare & MedTech",
      desc: "HIPAA compliant telehealth portals, patient management systems, and IoT medical devices.",
      icon: "bi-heart-pulse",
    },
    {
      title: "Fintech & Banking",
      desc: "Secure payment gateways, cryptocurrency platforms, and automated fraud detection systems.",
      icon: "bi-bank",
    },
    {
      title: "E-Commerce & Retail",
      desc: "High conversion online storefronts, inventory management, and multi-vendor marketplaces.",
      icon: "bi-cart-check",
    },
    {
      title: "Education & E-Learning",
      desc: "Interactive LMS portals, virtual classrooms, and gamified student progress tracking.",
      icon: "bi-mortarboard",
    },
  ];

  const verticalFeatures = [
    {
      id: "01",
      title: "Healthcare & Medical Software",
      desc: "Building secure, scalable electronic health record systems and AI-powered diagnostic platforms.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "Fintech & Smart Payments",
      desc: "Instant money transfers, micro-lending portals, and bank-grade encryption infrastructure.",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "03",
      title: "Logistics & Supply Chain",
      desc: "Real-time GPS fleet tracking, automated warehouse operations, and route optimization algorithms.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "E-Commerce & Digital Outlets",
      desc: "Omnichannel shopping platforms, AI recommendation engines, and high-load checkout funnels.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="solutions" className="relative">
      {/* Top Half: Light Background Grid */}
      <div className="py-14 sm:py-16 px-4 bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2 block">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
              Industries We Serve
            </h2>
            <div className="w-14 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 px-6 py-4 sm:py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border border-slate-100 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold mb-2.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Half: Dark Navy Section with Zig-Zag Chevron Image Pattern */}
      <div className="bg-[#0B2545] text-white py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Specialized Industry Solutions
            </h2>
            <p className="text-blue-300 text-sm">Tailored engineering for complex domain requirements</p>
          </div>

          <div className="space-y-12">
            {verticalFeatures.map((item, idx) => (
              <div
                key={idx}
                className="row items-center g-8 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-8"
              >
                <div className={`col-lg-6 ${idx % 2 === 1 ? "order-lg-2" : ""}`}>
                  <div className="space-y-4">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                      Domain Feature {item.id}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs tracking-wider uppercase hover:text-blue-300 transition-colors text-decoration-none pt-2"
                    >
                      <span>READ MORE CASE STUDY</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className={`col-lg-6 ${idx % 2 === 1 ? "order-lg-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl group">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
