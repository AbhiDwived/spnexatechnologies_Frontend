"use client";

import React from "react";
import Link from "next/link";

export default function FoodNecessary() {
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
              Food Delivery App Development <br className="hidden sm:inline" />
              Necessary for Food App Company
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Managing operations in the food supply industry requires innovative modern technologies. With our expert team of app developers, we build agile apps that effectively display your offerings and expand client outreach. We build intuitive food apps that serve unique restaurant and food business requirements.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              As a food delivery app development company, our custom apps help reduce manual tasks, streamline kitchen operations, and optimize customer satisfaction. From seamless food search to instant delivery tracking, our solutions save both time and money while boosting the profitability of your food business.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
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

          {/* Right Column: 3 Orange-Themed Food Delivery Mobile Screens Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center">
            <div className="bg-orange-50/70 rounded-3xl p-3 sm:p-5 border border-orange-200/70 shadow-xl w-full max-w-lg relative overflow-hidden">
              {/* Warm orange accent strip */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10">
                
                {/* Screen 1: Food App Welcome / Dish Splash */}
                <div
                  className="rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-white relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.15), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80')`,
                  }}
                >
                  <span className="bg-orange-500 text-white text-[7.5px] sm:text-[8.5px] font-black uppercase px-1.5 py-0.5 rounded-full self-start">
                    Hot Pizza
                  </span>

                  <div className="mt-auto space-y-1">
                    <p className="font-extrabold text-[10px] sm:text-[12px] leading-tight text-white mb-0">
                      Artisan Wood-Fired
                    </p>
                    <div className="bg-orange-600 text-white text-[8px] sm:text-[9.5px] font-bold py-1 rounded-lg text-center">
                      Order Now
                    </div>
                  </div>
                </div>

                {/* Screen 2: Warm Orange Food Feed */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="bg-orange-500 text-white rounded-lg px-2 py-1 text-[8px] font-bold mb-1.5 flex justify-between items-center">
                      <span>Menus</span>
                      <i className="bi bi-sliders"></i>
                    </div>

                    <div className="space-y-1.5">
                      <div className="bg-orange-50/70 p-1 rounded-lg border border-orange-100 flex items-center gap-1">
                        <span className="text-sm">🍔</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Cheese Burger</p>
                          <span className="text-[7.5px] text-orange-600 font-bold">$9.99</span>
                        </div>
                      </div>

                      <div className="bg-orange-50/70 p-1 rounded-lg border border-orange-100 flex items-center gap-1">
                        <span className="text-sm">🍝</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Truffle Pasta</p>
                          <span className="text-[7.5px] text-orange-600 font-bold">$14.50</span>
                        </div>
                      </div>

                      <div className="bg-orange-50/70 p-1 rounded-lg border border-orange-100 flex items-center gap-1">
                        <span className="text-sm">🌮</span>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[8.5px] text-slate-900 truncate mb-0">Crispy Tacos</p>
                          <span className="text-[7.5px] text-orange-600 font-bold">$8.25</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around items-center border-t pt-1 text-slate-400 text-[10px]">
                    <i className="bi bi-house-door-fill text-orange-500"></i>
                    <i className="bi bi-search"></i>
                    <i className="bi bi-bag"></i>
                  </div>
                </div>

                {/* Screen 3: Checkout / Order Placed Summary */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col justify-between h-[240px] sm:h-[300px] text-slate-800 border border-slate-100">
                  <div>
                    <div className="text-[8.5px] font-bold text-slate-900 border-b pb-1 mb-2 flex justify-between">
                      <span>Order Summary</span>
                      <i className="bi bi-check-circle-fill text-emerald-500"></i>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100 mb-2">
                      <span className="text-2xl block mb-0.5">🛵</span>
                      <p className="font-extrabold text-[9.5px] text-slate-900 mb-0">Confirmed!</p>
                      <span className="text-[7.5px] text-slate-500">Chef is preparing your meal</span>
                    </div>

                    <div className="space-y-1 text-[8px] text-slate-600">
                      <div className="flex justify-between">
                        <span>Items (2)</span>
                        <span className="font-bold text-slate-900">$24.49</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="font-bold text-emerald-600">Free</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B2545] text-white text-[8px] sm:text-[9px] font-bold py-1.5 rounded-lg text-center shadow-xs">
                    Track Order →
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
