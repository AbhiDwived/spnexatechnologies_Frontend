"use client";

import React from "react";
import Link from "next/link";

export default function FitnessBanner() {
  return (
    <section className="bg-[#4D7FA9] bg-gradient-to-r from-[#5B8CB5] via-[#4D7FA9] to-[#3A678E] text-white py-10 sm:py-14 px-4 overflow-hidden relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Level-Up Your Fitness Brand with Us!
            </h2>

            <p className="text-blue-50/90 text-xs sm:text-sm leading-relaxed max-w-xl">
              Launch a custom mobile workout, nutrition, and coaching application designed to inspire consistency and retain every member.
            </p>

            <div>
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-block px-7 py-2.5 bg-[#072B54] text-white hover:bg-[#051F3D] font-bold text-xs sm:text-sm shadow-xl transition-all cursor-pointer border border-white/20 text-decoration-none"
              >
                Talk to our expert
              </Link>
            </div>
          </div>

          {/* Right Column: Athletic Yoga Stretching Pose */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-56 sm:w-64 lg:w-72 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#4D7FA9]">
              <img
                src="/images/fitness-athlete.jpg"
                alt="Athletic woman practicing fitness yoga stretch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
