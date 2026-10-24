"use client";

import React from "react";
import Image from "next/image";

export default function DatabaseAnalysisHero() {
  const bulletPoints = [
    "Data Accuracy & Integrity",
    "Performance Optimization",
    "Scalability & Flexibility",
    "Insightful Reporting",
    "Risk & Security Management",
    "Cost & Resource Efficiency",
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Database Analysis Description & Bullets */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Database Analysis
              </h1>
              
              {/* Artistic Wavy Underline */}
              <div className="mt-2 w-56 sm:w-72 h-2.5">
                <svg
                  viewBox="0 0 280 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white/70"
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

            {/* Paragraph Text */}
            <p className="text-blue-100 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl font-normal">
              Effective database analysis is key to making smarter, data-driven business decisions. At Trickle Solutions, we examine your data to ensure accuracy, consistency, and performance across all systems. Our experienced professionals identify inefficiencies, uncover insights, and optimize your database structure to enhance reliability, speed, and scalability.
            </p>

            {/* Bullet Points List */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-sm shadow-white/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-transparent border border-white/80 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0A3D78] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Database Analysis Hero Illustration */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#061E3B]/80 backdrop-blur-sm p-2 sm:p-3 group">
              <Image
                src="/images/database-hero-graphic.jpg"
                alt="3D Isometric Data Analysis Illustration"
                width={640}
                height={480}
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
