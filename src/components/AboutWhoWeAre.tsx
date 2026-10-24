"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutWhoWeAre() {
  const bulletPoints = [
    "Digital Journeys Begin With Us",
    "Continuous Tech Improvement",
    "Smart Tools. Getting Start.",
    "Results That Communicate Well",
  ];

  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#0A3D78] via-[#093566] to-[#0A3E7B] text-white pt-8 sm:pt-12 pb-16 sm:pb-20 px-4">
      <div className="container max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Main Grid: Left Portrait + Right "Who We are" Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Developer Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              <Image
                src="/images/about-developer-portrait.jpg"
                alt="Trickle Solutions Lead Software Engineer"
                width={500}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content Details */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Who We are
              </h2>
            </div>

            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal">
              Trickle Solutions is the first natively iterative agency built for your true digital exploration. It&apos;s your partner space to earn and shape everything you envision — beautifully designed and digitally driven.
            </p>

            <p className="text-blue-100/90 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal">
              As a global creative agency, we know how vital it is to stay ahead of the curve. That&apos;s why we collaborate with top talent from around the world to bring bold ideas and fresh perspectives to life.
            </p>

            {/* 4 Bullet Points */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-white list-unstyled">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] shrink-0 font-bold">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Mission & Vision 2-Column Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-blue-400/20">
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Our Mission
                </h3>
                <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed">
                  Our mission is to provide the best alternatives in app development for every client such as small businesses, Entrepreneurs, etc.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Our Vision
                </h3>
                <p className="text-blue-100/80 text-xs sm:text-[13px] leading-relaxed">
                  Our vision as an app development company is to offer encouraging business solutions to entrepreneurs across the world.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom CTA Banner: "Let's Start The Development Of Your Dream Project" */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/30 bg-blue-900/30 backdrop-blur-md p-6 sm:p-10 text-center shadow-xl max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-5">
            Let&apos;s Start The Development Of Your Dream Project
          </h3>

          <Link
            href="/services/web-development"
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
          </Link>
        </div>

      </div>
    </section>
  );
}
