"use client";

import React, { useState } from "react";
import Link from "next/link";

const servicesData = [
  {
    id: "uiux",
    title: "UI/UX Design",
    subtitle: "Focuses on crafting exceptional digital experiences.",
    description:
      "Our UX Development focuses on crafting exceptional digital experiences. By prioritizing your users' needs, we build intuitive interfaces and seamless journeys that boost satisfaction, engagement, and loyalty.",
    btnText: "Benefits With Our Service",
    href: "/services/ui-ux-design",
  },
  {
    id: "webdesign",
    title: "Web Design",
    subtitle: "Stunning responsive web designs and layouts.",
    description:
      "We design modern, responsive, and visually compelling websites that elevate your brand identity and engage visitors with seamless user journeys.",
    btnText: "Benefits With Our Service",
    href: "/services/web-design",
  },
  {
    id: "webdev",
    title: "Web Development",
    subtitle: "High-performance full-stack web applications.",
    description:
      "Ensuring your website is expertly developed not only creates a strong first impression but also keeps visitors engaged. Our web development services focus on building fast, responsive, and user-friendly websites.",
    btnText: "Benefits With Our Service",
    href: "/services/web-development",
  },
  {
    id: "appdev",
    title: "App Development",
    subtitle: "Native iOS & Android mobile applications.",
    description:
      "Ensuring your application is expertly developed creates a seamless user experience and scales your business. Our app development services focus on building secure, robust, and intuitive native and cross-platform mobile apps.",
    btnText: "Benefits With Our Service",
    href: "/services/app-development",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    subtitle: "Data-driven SEO, PPC, and brand strategy.",
    description:
      "We focus on transforming marketing investments into business drivers. Our work combines agile strategy and execution with smart, data-driven SEO, social media, email campaigns, and PPC insights.",
    btnText: "Benefits With Our Service",
    href: "/services/digital-marketing",
  },
  {
    id: "database",
    title: "Database Analysis",
    subtitle: "SQL, NoSQL & Big Data Architecture.",
    description:
      "Effective database analysis is key to making smarter, data-driven business decisions. We optimize your database structure to enhance reliability, speed, security, and scalability.",
    btnText: "Benefits With Our Service",
    href: "/services/database-analysis",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="bg-[#0A417A] text-white py-10 sm:py-14 px-4 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
            Our Services
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            We create bold and impactful brands <br className="hidden sm:inline" />
            that make a lasting impression on the world
          </p>
        </div>

        {/* Category Pills Bar (White border follows whichever button the cursor moves to) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 py-3 px-2 max-w-5xl mx-auto overflow-visible">
          {servicesData.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <Link
                key={tab.id}
                href={tab.href || "/services/web-design"}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                style={{ borderRadius: "9999px" }}
                className={`relative px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold cursor-pointer shrink-0 text-decoration-none select-none transition-all duration-200 ease-out transform ${
                  isActive
                    ? "bg-[#072444] text-white border-2 border-white shadow-[0_8px_22px_rgba(0,0,0,0.5)] -translate-y-0.5 scale-105"
                    : "bg-[#072444] text-white/80 border-2 border-transparent hover:text-white hover:-translate-y-0.5 shadow-md"
                }`}
              >
                {tab.title}
              </Link>
            );
          })}
        </div>

        {/* Active Service Card Container */}
        <div
          style={{ borderRadius: "24px" }}
          className="bg-[#083463]/90 border border-white/30 p-5 sm:p-8 lg:p-10 shadow-2xl relative max-w-6xl mx-auto"
        >
          <div className="row items-center g-6">
            {/* Left Content Column */}
            <div className="col-lg-6 col-12">
              <div className="space-y-3 sm:space-y-4 text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                  {currentService.description}
                </p>

                {/* Benefits Pill Button */}
                <div className="pt-2">
                  <Link
                    href={currentService.href || "/services/ui-ux-design"}
                    style={{ borderRadius: "9999px" }}
                    className="inline-flex items-center justify-between gap-3 px-5 sm:px-6 py-2 sm:py-2.5 bg-transparent border border-white/80 text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer shadow-md text-xs sm:text-sm font-semibold max-w-full text-decoration-none group"
                  >
                    <span className="truncate">{currentService.btnText}</span>
                    <span
                      style={{ borderRadius: "9999px" }}
                      className="w-6 sm:w-7 h-6 sm:h-7 bg-white text-[#0A417A] inline-flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 group-hover:translate-x-0.5 transition-transform"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Visual UX Smartphone */}
            <div className="col-lg-6 col-12 mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-xs sm:max-w-sm p-4 bg-[#06284C] rounded-2xl border border-white/20 shadow-xl flex items-center justify-center min-h-[240px] sm:min-h-[280px]">
                {/* Smartphone Wireframe Container */}
                <div className="relative w-36 sm:w-44 h-56 sm:h-64 rounded-[20px] bg-white text-slate-900 shadow-2xl p-3 flex flex-col justify-between border-4 border-slate-200">
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <i className="bi bi-power text-slate-500"></i>
                    <i className="bi bi-wifi text-slate-500"></i>
                  </div>

                  <div className="my-auto text-center">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter">
                      UX
                    </span>
                  </div>

                  <div className="bg-slate-100 rounded-full py-1 px-2.5 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                    <span>Slide</span>
                    <i className="bi bi-caret-right-fill text-pink-500"></i>
                  </div>
                </div>

                {/* Floating Node 1 - GPS */}
                <div className="absolute top-3 left-2 sm:left-3 bg-gradient-to-tr from-pink-500 to-rose-400 text-white p-1.5 sm:p-2 rounded-xl shadow-lg flex flex-col items-center gap-0.5 border border-white/30 text-xs">
                  <i className="bi bi-geo-alt-fill text-xs sm:text-base"></i>
                  <span className="text-[7px] sm:text-[8px] font-bold uppercase">GPS</span>
                </div>

                {/* Floating Node 2 - Music */}
                <div className="absolute bottom-10 left-3 sm:left-4 bg-gradient-to-tr from-purple-600 to-indigo-500 text-white p-1.5 sm:p-2 rounded-xl shadow-lg flex items-center justify-center border border-white/30 text-xs">
                  <i className="bi bi-music-note-beamed"></i>
                </div>

                {/* Floating Node 3 - Lock */}
                <div className="absolute top-4 right-4 sm:right-6 bg-gradient-to-tr from-cyan-500 to-blue-500 text-white p-1.5 sm:p-2 rounded-xl shadow-lg flex items-center justify-center border border-white/30 text-xs">
                  <i className="bi bi-lock-fill"></i>
                </div>

                {/* Floating Node 4 - Image Frame */}
                <div className="absolute bottom-6 right-3 sm:right-4 bg-slate-100 text-slate-500 p-2 sm:p-3 rounded-xl shadow-lg border border-white/40 flex items-center justify-center text-lg sm:text-xl">
                  <i className="bi bi-image text-slate-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
