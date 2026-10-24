"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactTransformBanner() {
  return (
    <section className="bg-gradient-to-r from-[#1D70B8] via-[#1A62A2] to-[#14528C] text-white py-12 sm:py-16 px-4 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTA Button */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Unlock Effortless and Exceptional <br className="hidden sm:inline" />
              Digital Transformation.
            </h2>

            <div>
              <Link
                href="/services/web-development"
                style={{ borderRadius: "9999px" }}
                className="inline-block px-7 py-3 bg-[#072B54] text-white hover:bg-[#051F3D] font-bold text-xs sm:text-sm shadow-xl transition-all cursor-pointer border border-white/20 text-decoration-none"
              >
                Talk to our expert
              </Link>
            </div>
          </div>

          {/* Right Column: Businessman with tablet */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80">
              <Image
                src="/images/contact-suit-man.png"
                alt="Expert consulting with tablet"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
