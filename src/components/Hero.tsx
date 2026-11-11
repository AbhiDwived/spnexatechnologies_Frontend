"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[561px] flex items-center">
      {/* Diagonal Gradient Bands — exact from Figma */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Band 1: white → #165ea6 → #1f364c */}
        <div
          className="absolute w-[140%] h-[61px] sm:h-[90px] lg:h-[120px]"
          style={{
            top: "10%",
            left: "30%",
            transform: "rotate(-36.43deg)",
            background: "linear-gradient(90deg, #fff 0%, #165ea6 46%, #1f364c 100%)",
          }}
        />
        {/* Band 2: #1f3c58 → #165ea6 → white */}
        <div
          className="absolute w-[140%] h-[61px] sm:h-[90px] lg:h-[120px]"
          style={{
            top: "35%",
            left: "30%",
            transform: "rotate(-36.43deg)",
            background: "linear-gradient(90deg, #1f3c58 4%, #165ea6 64%, #fff 100%)",
          }}
        />
      </div>

      {/* Decorative ellipses */}
      <div className="hidden lg:block absolute z-10 pointer-events-none">
        <Image src="/images/ellipse-small-blue.svg" alt="" width={20} height={20} className="absolute" style={{ left: 948, top: 92 }} />
        <Image src="/images/ellipse-medium-blue.svg" alt="" width={24} height={24} className="absolute" style={{ left: 802, top: 120 }} />
        <Image src="/images/ellipse-large-dark.svg" alt="" width={35} height={35} className="absolute" style={{ left: 918, top: -63 }} />
        <Image src="/images/ellipse-outline.svg" alt="" width={24} height={24} className="absolute" style={{ left: 1239, top: -8 }} />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-[100px] relative z-10 py-10 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

          {/* Left Text Column */}
          <div className="flex-1 space-y-4 sm:space-y-5 text-left">
            {/* Subheading */}
            <p className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#165ea6] tracking-wide uppercase leading-normal">
              CODE FIRE DEVELOPMENT
            </p>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[35px] font-bold text-black leading-snug max-w-[425px]">
              Transform your <span className="text-[#165ea6]">Ideas</span> Into<br />
              <span className="text-[#165ea6]">High-Performance</span> Website<br />
              and Mobile App
            </h1>

            {/* Paragraph */}
            <p className="text-[rgba(0,0,0,0.75)] text-sm lg:text-[18px] leading-[25px] max-w-[521px]">
              Trickle Solutions is a leading mobile app and website development
              company dedicated to delivering exceptional client experiences.
              Our expert team brings innovation and skill to every
              project,staying ahead of the competition to create solutions
              that drive success for our clients and partners.
            </p>

            {/* Pill Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 bg-[#165ea6] text-white px-4 py-1.5 rounded-[7px] text-sm font-medium shadow-sm">
                <Image src="/images/flag-india.png" alt="India flag" width={22} height={15} className="object-cover" />
                <span>+91 925 218-4451</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#165ea6] text-white px-4 py-1.5 rounded-[7px] text-sm font-medium shadow-sm">
                <span>info@tricklesolutions.com</span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-1">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#165ea6] text-white font-medium px-7 py-3 rounded-full shadow-[0_0_7px_0_white] hover:bg-[#1251a3] hover:scale-105 transition-all text-[18px]"
                style={{ boxShadow: "0px 0px 7px 0px white" }}
              >
                Get In Touch →
              </a>
            </div>
          </div>

          {/* Right Circular Photo Frame */}
          <div className="relative flex items-center justify-center lg:w-[400px] shrink-0">
            <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-woman-circle.png"
                alt="Tech professional"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Right Social Media Icons (exact from Figma) */}
        <div className="flex justify-end items-center gap-10 mt-6 pt-2">
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
            <Image src="/images/social-instagram.png" alt="Instagram" width={20} height={20} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
            <Image src="/images/social-facebook.png" alt="Facebook" width={20} height={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <Image src="/images/social-linkedin.png" alt="LinkedIn" width={20} height={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform">
            <Image src="/images/social-youtube.png" alt="YouTube" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
