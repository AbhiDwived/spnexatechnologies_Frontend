"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B2545] text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 py-12 px-4">
        <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Ready to Build Your Next Big Product?
            </h3>
            <p className="text-blue-300 text-sm mt-1">
              Talk to our technology experts and get a free architecture proposal within 24 hours.
            </p>
          </div>
          <a
            href="mailto:contact@shivamsoft.com"
            className="btn bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all border-0 text-sm flex items-center gap-2"
          >
            <i className="bi bi-envelope-fill me-1"></i>
            <span>Talk To Our Team</span>
          </a>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: About */}
            <div className="space-y-4">
              <Link className="flex items-center gap-2 text-decoration-none" href="/">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  S
                </div>
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  Shivam<span className="text-blue-400">Soft</span>
                </span>
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed">
                Empowering businesses worldwide with state-of-the-art Next.js web applications, mobile engineering, and cloud native enterprise solutions.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500 transition-colors">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white text-base font-bold mb-4 tracking-wide">Quick Links</h4>
              <ul className="list-unstyled space-y-2.5 text-xs text-slate-400">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-blue-400 transition-colors text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#blogs" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Latest Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-white text-base font-bold mb-4 tracking-wide">Services</h4>
              <ul className="list-unstyled space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Cloud Solutions & DevOps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors text-decoration-none">
                    Software Quality Testing
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div className="space-y-3">
              <h4 className="text-white text-base font-bold mb-4 tracking-wide">Contact Us</h4>
              <div className="flex items-start gap-3 text-xs text-slate-400">
                <i className="bi bi-geo-alt-fill text-blue-400 text-sm mt-0.5"></i>
                <span>Tech Park Tower, IT Corridor, India</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <i className="bi bi-telephone-fill text-blue-400 text-sm"></i>
                <span>+91 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <i className="bi bi-envelope-fill text-blue-400 text-sm"></i>
                <span>contact@shivamsoft.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6 px-4 border-t border-slate-800 text-slate-500 text-xs text-center">
        <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ShivamSoft. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
