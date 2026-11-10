"use client";

import React from "react";
import Link from "next/link";

export default function EcommerceHero() {
  const bulletPoints = [
    "End-to-End Support",
    "24/7 Assistance",
    "Customized Solutions",
    "On-Time Delivery",
    "ROI Focused",
  ];

  return (
    <section className="relative bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description, Bullet Checklist & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                E-commerce App
              </h1>
              
              {/* Artistic Wavy Accent Underline */}
              <div className="mt-2 w-48 sm:w-64 h-2.5">
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

            {/* Paragraph Text matching reference */}
            <p className="text-blue-100 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-xl font-normal">
              Do you also want to improve your business&apos;s online authority? Trickle Solutions is an experienced Ecommerce mobile app development company providing bespoke and end-to-end solutions to build a strong online presence. Our team of experienced developers develop mobile apps that grab your customers&apos; attention and work exceptionally appealing. We utilize the latest technologies to offer users an advanced shopping experience and browse-to-conversion. We are here to transform your app into a marketplace.
            </p>

            {/* Feature Bullets Checklist */}
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-blue-50/95 max-w-lg">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-xs shadow-white/50"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Contact Us Now CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                style={{ borderRadius: "9999px" }}
                className="inline-flex items-center justify-between gap-4 px-6 py-2.5 bg-transparent border border-white/80 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md text-xs sm:text-sm font-bold group text-decoration-none"
              >
                <span>Contact Us Now</span>
                <span
                  style={{ borderRadius: "9999px" }}
                  className="w-7 h-7 bg-white text-[#0A3D78] inline-flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek 3D Angled Ecommerce Phone Mockups */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[450px]">
              
              {/* Back Phone (Angled Right: Shopping Cart & Checkout) */}
              <div className="absolute right-0 top-4 w-[210px] sm:w-[240px] bg-slate-900 rounded-[34px] p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-[3px] border-slate-700/80 rotate-6 transform transition-transform hover:rotate-3 duration-300">
                <div className="bg-white rounded-[26px] overflow-hidden text-slate-800 p-3 h-[360px] sm:h-[390px] flex flex-col justify-between text-xs">
                  {/* Status Bar */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-14 h-3 bg-slate-900 rounded-full mx-auto"></div>
                      <div className="flex gap-1">
                        <i className="bi bi-wifi text-[9px]"></i>
                        <i className="bi bi-battery-full text-[9px]"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-bold text-slate-900 text-[13px] border-b pb-2 mb-2">
                      <span>My Cart (3)</span>
                      <span className="text-[#1D70B8] text-[11px]">Clear</span>
                    </div>

                    {/* Cart Items */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <div className="w-10 h-10 rounded-md bg-blue-100/60 flex items-center justify-center text-lg">
                          👟
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[11px] truncate mb-0">Air Zoom Pegasus</p>
                          <span className="text-[10px] text-slate-500">Size: 42 • Qty: 1</span>
                        </div>
                        <span className="font-bold text-[11px] text-[#0A3D78]">$120</span>
                      </div>

                      <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                        <div className="w-10 h-10 rounded-md bg-amber-100/60 flex items-center justify-center text-lg">
                          👕
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[11px] truncate mb-0">Classic Cotton Tee</p>
                          <span className="text-[10px] text-slate-500">Size: L • Qty: 2</span>
                        </div>
                        <span className="font-bold text-[11px] text-[#0A3D78]">$45</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Checkout Button */}
                  <div className="border-t pt-2 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-bold text-slate-900">$165.00</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Delivery</span>
                      <span className="font-bold text-emerald-600">FREE</span>
                    </div>
                    <div className="w-full py-2 bg-gradient-to-r from-[#0B2545] to-[#1D70B8] text-white text-center rounded-xl font-bold text-[11px] shadow">
                      Checkout ($165.00)
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Phone (Angled Left: Product Showcase & Search) */}
              <div className="absolute left-2 sm:left-4 top-8 w-[220px] sm:w-[250px] bg-slate-950 rounded-[34px] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-[3px] border-slate-600 -rotate-3 transform transition-transform hover:rotate-0 duration-300 z-10">
                <div className="bg-slate-50 rounded-[26px] overflow-hidden text-slate-800 p-3 h-[360px] sm:h-[390px] flex flex-col justify-between text-xs">
                  <div>
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 px-1">
                      <span className="font-bold">9:41</span>
                      <div className="w-14 h-3 bg-slate-900 rounded-full mx-auto"></div>
                      <div className="flex gap-1 text-[9px]">
                        <i className="bi bi-reception-4"></i>
                        <i className="bi bi-battery-half"></i>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 flex items-center gap-2 mb-2.5 shadow-2xs">
                      <i className="bi bi-search text-slate-400 text-[10px]"></i>
                      <span className="text-[10px] text-slate-400">Search products...</span>
                    </div>

                    {/* Promo Hero Card */}
                    <div className="bg-gradient-to-br from-[#1D70B8] to-[#0B2545] text-white rounded-xl p-2.5 mb-2.5 shadow-sm relative overflow-hidden">
                      <span className="bg-cyan-400 text-slate-950 font-black text-[8px] px-1.5 py-0.5 rounded-full uppercase">
                        Mega Sale
                      </span>
                      <h4 className="font-extrabold text-[12px] mt-1 leading-tight">
                        Up to 50% Off <br /> New Arrivals
                      </h4>
                      <span className="text-[9px] text-blue-200 block mt-0.5">Use Code: TRICKLE50</span>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex gap-1.5 overflow-x-auto pb-1 mb-2">
                      <span className="bg-[#1D70B8] text-white px-2 py-0.5 rounded-full text-[9px] font-bold">All</span>
                      <span className="bg-white border text-slate-600 px-2 py-0.5 rounded-full text-[9px]">Shoes</span>
                      <span className="bg-white border text-slate-600 px-2 py-0.5 rounded-full text-[9px]">Fashion</span>
                      <span className="bg-white border text-slate-600 px-2 py-0.5 rounded-full text-[9px]">Tech</span>
                    </div>

                    {/* Product Card */}
                    <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-2xs flex gap-2 items-center">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-xl shrink-0">
                        🛍️
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-bold text-blue-600 uppercase">Featured</span>
                        <p className="font-bold text-[11px] text-slate-900 truncate mb-0">Urban Sneaker Pro</p>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="font-black text-[11px] text-slate-900">$89.00</span>
                          <span className="w-5 h-5 bg-[#1D70B8] text-white rounded-full flex items-center justify-center text-[10px]">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 flex justify-between items-center text-slate-500 text-[12px]">
                    <i className="bi bi-house-door-fill text-[#1D70B8]"></i>
                    <i className="bi bi-grid"></i>
                    <i className="bi bi-bag"></i>
                    <i className="bi bi-person"></i>
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
