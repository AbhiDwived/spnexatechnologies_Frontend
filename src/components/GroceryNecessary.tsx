"use client";

import React from "react";
import Link from "next/link";

export default function GroceryNecessary() {
  const bulletPoints = [
    "Cost Efficiency",
    "Wider Customer Reach",
    "24/7 Accessibility",
    "Centralized Data",
    "Better Client Experience",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Paragraphs, Bullets & CTA */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Grocery Delivery App Development <br className="hidden sm:inline" />
              Necessary for Grocery App Company
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Navigating a grocery delivery app development project can be daunting without expert guidance. With our team of expert developers, we help you launch feature-packed applications that streamline operations and enhance customer satisfaction. We leverage modern technologies to build agile and scalable on-demand grocery delivery applications.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              As a prominent grocery app development company, we craft bespoke grocery apps that cater to your business goals. We enhance your operational efficiency, expand client outreach, and optimize customer satisfaction. Choose our expertise to make your grocery business thrive with seamless grocery mobile app solutions that guarantee reliable performance.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-[#0B2545] text-white hover:bg-[#155A96] transition-all cursor-pointer shadow-lg text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white/20 text-white inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0B2545] transition-all"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Mobile Screens Showcase (Customer with Veggies, Green Catalog, Oranges Detail) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
            <div className="bg-slate-50 rounded-3xl p-3 sm:p-5 border border-slate-200 shadow-xl w-full max-w-lg">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                
                {/* Screen 1: Customer Holding Fresh Grocery Vegetables */}
                <div
                  className="rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-white relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.1), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80')`,
                  }}
                >
                  <span className="bg-emerald-500 text-white text-[7.5px] sm:text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded-full self-start">
                    Farm Fresh
                  </span>

                  <div className="mt-auto space-y-1">
                    <p className="font-extrabold text-[10px] sm:text-[12px] leading-tight text-white mb-0">
                      100% Organic & Fresh
                    </p>
                    <div className="bg-emerald-600 text-white text-[8px] sm:text-[9.5px] font-bold py-1 rounded-lg text-center">
                      Order Now
                    </div>
                  </div>
                </div>

                {/* Screen 2: Clean Green Grocery Catalog */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="flex justify-between items-center text-[8.5px] text-slate-400 mb-1 border-b pb-1">
                      <span className="font-bold text-emerald-800">Shop</span>
                      <i className="bi bi-search text-emerald-600"></i>
                    </div>

                    <div className="space-y-1 mt-1">
                      <div className="bg-emerald-50/60 p-1 rounded-lg border border-emerald-100 flex items-center gap-1">
                        <span className="text-sm">🥦</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Broccoli</p>
                          <span className="text-[7.5px] text-emerald-700 font-bold">$1.99</span>
                        </div>
                      </div>

                      <div className="bg-emerald-50/60 p-1 rounded-lg border border-emerald-100 flex items-center gap-1">
                        <span className="text-sm">🍅</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Tomatoes</p>
                          <span className="text-[7.5px] text-emerald-700 font-bold">$2.49</span>
                        </div>
                      </div>

                      <div className="bg-emerald-50/60 p-1 rounded-lg border border-emerald-100 flex items-center gap-1">
                        <span className="text-sm">🥑</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Avocado</p>
                          <span className="text-[7.5px] text-emerald-700 font-bold">$3.20</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around items-center border-t pt-1 text-slate-400 text-[10px]">
                    <i className="bi bi-house-door-fill text-emerald-600"></i>
                    <i className="bi bi-grid"></i>
                    <i className="bi bi-cart"></i>
                  </div>
                </div>

                {/* Screen 3: Fresh Oranges Product Details */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="h-16 sm:h-20 bg-amber-50 rounded-xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner mb-1.5 border border-amber-100">
                      🍊
                    </div>

                    <span className="text-[8px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
                      Citrus
                    </span>
                    <p className="font-extrabold text-[10px] sm:text-[11px] text-slate-900 mt-1 mb-0">
                      Valencia Oranges
                    </p>
                    <span className="text-[8px] text-slate-500">1 Dozen (approx 1.5kg)</span>

                    <div className="flex items-center justify-between mt-1 text-[8px] text-amber-500">
                      <span>★★★★★</span>
                      <span className="text-slate-800 font-bold text-[9px]">$4.50</span>
                    </div>
                  </div>

                  <div className="bg-[#0B2545] text-white text-[8px] sm:text-[9.5px] font-bold py-1.5 rounded-lg text-center shadow-xs">
                    + Add to Cart
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
