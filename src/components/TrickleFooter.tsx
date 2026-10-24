"use client";

import React from "react";
import Link from "next/link";

export default function TrickleFooter() {
  const companyLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "Career", href: "#" },
    { name: "Contact Us", href: "/contact" },
    { name: "Case Study", href: "/portfolio" },
    { name: "Blog", href: "/blogs" },
    { name: "Tech Stack", href: "/#services" },
  ];

  const devServices = [
    { name: "App Development", href: "/services/app-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Database Analysis", href: "/services/database-analysis" },
  ];

  const modernTechnologies = [
    { name: "Blockchain", href: "#" },
    { name: "AR/VR", href: "#" },
    { name: "Artificial Intelligence & Machine Learning", href: "#" },
    { name: "Internet of Things", href: "#" },
    { name: "Big Data Analytics", href: "#" },
    { name: "Cloud & DevOps Solutions", href: "#" },
  ];

  return (
    <footer className="bg-[#093563] bg-gradient-to-b from-[#083363] via-[#072B54] to-[#052142] text-slate-200 pt-14 pb-8 px-4 border-t border-blue-900/60">
      <div className="container max-w-7xl mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-800/40">
          
          {/* Column 1: Company */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-blue-100/80 list-unstyled">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-decoration-none text-inherit block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Development Service */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
              Development Service
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-blue-100/80 list-unstyled">
              {devServices.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-decoration-none text-inherit block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Modern Technologies */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
              Modern Technologies
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-blue-100/80 list-unstyled">
              {modernTechnologies.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-decoration-none text-inherit block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
              Contact Us
            </h4>

            {/* Email */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-blue-100/90">
              <span className="w-5 h-5 flex items-center justify-center text-blue-300">
                <i className="bi bi-envelope"></i>
              </span>
              <a
                href="mailto:connect@tricklesolutions.com"
                className="hover:text-white transition-colors text-decoration-none text-inherit"
              >
                connect@tricklesolutions.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-blue-100/90">
              <span className="text-sm">🇮🇳</span>
              <a
                href="tel:+919311234567"
                className="hover:text-white transition-colors text-decoration-none text-inherit font-medium"
              >
                +91 931 123 4567
              </a>
            </div>

            {/* Follow Us On */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider mb-2.5">
                Follow Us on:
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all text-xs"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Logo Badge, Copyright, ISO badge, and Terms */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Pill Container */}
          <Link
            href="/"
            style={{ borderRadius: "9999px" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white text-[#1E3A8A] shadow-md text-decoration-none hover:shadow-lg transition-all"
          >
            <div className="w-7 h-7 rounded-full border-2 border-blue-600 flex items-center justify-center font-black text-blue-700 text-xs">
              TS
            </div>
            <span className="font-extrabold text-xs tracking-wider uppercase">
              TRICKLE SOLUTIONS
            </span>
          </Link>

          {/* Copyright & ISO Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-200/80">
            <span>© 2024 Trickle Solutions. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 bg-blue-900/40 px-2.5 py-1 rounded border border-blue-700/50 text-[11px]">
              <i className="bi bi-shield-check text-cyan-300"></i>
              <span>ISO 9001:2015 Certified</span>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs text-blue-200/80">
            <a href="#" className="hover:text-white transition-colors text-decoration-none text-inherit">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors text-decoration-none text-inherit">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
