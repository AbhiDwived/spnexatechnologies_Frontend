"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCtaBanner() {
  return (
    <section className="bg-white py-8 sm:py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#1D70B8] via-[#1B65A8] to-[#114980] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 sm:px-12 pt-8 sm:pt-10 lg:pt-0">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left py-4 sm:py-8 lg:py-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to take the first step <br />
                Your ideas deserve the right attention.
              </h2>

              <div className="pt-2">
                <Link
                  href="/services/web-development"
                  style={{ borderRadius: "9999px" }}
                  className="inline-flex items-center justify-between gap-4 px-6 py-3 bg-white text-[#114980] hover:bg-blue-50 transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
                >
                  <span>Start My Project</span>
                  <span
                    style={{ borderRadius: "9999px" }}
                    className="w-7 h-7 bg-[#114980] text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Photo Column: Man in red sweater pointing left */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
              <div className="relative w-64 sm:w-72 lg:w-80 h-72 sm:h-80 lg:h-96">
                <Image
                  src="/images/portfolio-cta-man.jpg"
                  alt="Ready to take the first step"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
