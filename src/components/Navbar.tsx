"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  defaultActive?: string;
}

export default function Navbar({ defaultActive = "Home" }: NavbarProps) {
  const [activeNav, setActiveNav] = useState(defaultActive);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveNav(defaultActive);
  }, [defaultActive]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services", hasDropdown: true },
    { name: "Solutions", href: "/#solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Exactly matching the 6 options from the user's reference screenshot
  const serviceOptions = [
    // Left Column
    {
      title: "Mobile Application Development Company",
      href: "/services/app-development",
      bg: "bg-[#E0F7FA]",
      color: "text-[#00BCD4]",
      iconType: "mobile-code",
    },
    {
      title: "Android Application Development Company",
      href: "/services/android-app-development",
      bg: "bg-[#F0F4C3]",
      color: "text-[#8BC34A]",
      iconType: "android",
    },
    {
      title: "Custom iOS Application Development",
      href: "/services/ios-app-development",
      bg: "bg-[#EDE7F6]",
      color: "text-[#7E57C2]",
      iconType: "apple",
    },
    // Right Column
    {
      title: "Database Analysis",
      href: "/services/database-analysis",
      bg: "bg-[#FFEBEE]",
      color: "text-[#EF5350]",
      iconType: "database",
    },
    {
      title: "Digital Marketing Services",
      href: "/services/digital-marketing",
      bg: "bg-[#FCE4EC]",
      color: "text-[#EC407A]",
      iconType: "megaphone",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/digital-marketing",
      bg: "bg-[#E0F2F1]",
      color: "text-[#00897B]",
      iconType: "seo",
    },
  ];

  const renderServiceIcon = (type: string) => {
    switch (type) {
      case "mobile-code":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" />
            <path d="m9 10-2 2 2 2" />
            <path d="m15 10 2 2-2 2" />
          </svg>
        );
      case "android":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3a.495.495 0 0 0 0-.7.495.495 0 0 0-.7 0l-1.46 1.46C13.8 2.24 12.93 2 12 2c-.93 0-1.8.24-2.67.62L7.87 1.16a.495.495 0 0 0-.7 0 .495.495 0 0 0 0 .7l1.3 1.3C6.73 4.14 5.56 5.8 5.25 7.75h13.5c-.31-1.95-1.48-3.61-3.22-4.59zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        );
      case "apple":
        return <i className="bi bi-apple text-xl"></i>;
      case "database":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case "megaphone":
        return <i className="bi bi-megaphone-fill text-lg"></i>;
      case "seo":
        return <span className="font-black text-xs tracking-tight">SEO</span>;
      default:
        return <i className="bi bi-gear"></i>;
    }
  };

  return (
    <>
      {/* Top 2.5px Royal Shimmer Accent Bar */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#0B2545] via-[#1D70B8] to-[#38BDF8] z-50 sticky top-0" />

      {/* Main Luxury Glassmorphic Header */}
      <header
        className={`sticky top-[2.5px] z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(11,37,69,0.08)] border-b border-slate-200/80 py-3"
            : "bg-white/90 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.03)] border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Luxury Brand Logo Lockup */}
          <Link
            className="flex items-center gap-3 text-decoration-none group shrink-0"
            href="/"
            onClick={() => setActiveNav("Home")}
          >
            {/* Prestigious Monogram Crest */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#143B68] to-[#1D70B8] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(11,37,69,0.25)] ring-1 ring-blue-500/20 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(29,112,184,0.4)] transition-all">
              <span className="bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent font-black tracking-tighter text-base sm:text-lg">
                TS
              </span>
              {/* Luxury Accent Micro-Dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-white shadow-xs"></span>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[19px] font-black tracking-[0.06em] text-[#0B2545] uppercase font-sans leading-none group-hover:text-[#1D70B8] transition-colors">
                TRICKLE SOLUTIONS
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.24em] text-[#1D70B8] uppercase mt-1 leading-none">
                DIGITAL INNOVATION LAB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActiveNav(link.name)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-semibold text-decoration-none transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50/90 text-[#1D70B8] font-bold shadow-xs ring-1 ring-blue-500/20"
                          : "text-slate-700 hover:text-[#1D70B8] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <i
                        className={`bi bi-chevron-down text-[10px] transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#1D70B8]" : "text-slate-400"
                        }`}
                      ></i>
                    </Link>

                    {/* Exact 2-Column Luxury Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[580px] xl:w-[630px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(11,37,69,0.16)] border border-slate-100 p-4 ring-1 ring-black/5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {serviceOptions.map((opt) => (
                              <Link
                                key={opt.title}
                                href={opt.href}
                                onClick={() => {
                                  setActiveNav("Services");
                                  setServicesDropdownOpen(false);
                                }}
                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-decoration-none transition-all group/item"
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg ${opt.bg} ${opt.color} flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform shadow-xs`}
                                >
                                  {renderServiceIcon(opt.iconType)}
                                </div>
                                <div className="text-[12.5px] sm:text-[13px] font-medium text-slate-800 group-hover/item:text-[#1D70B8] transition-colors leading-snug">
                                  {opt.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`relative px-3.5 py-2 rounded-full text-[13.5px] font-semibold text-decoration-none transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50/90 text-[#1D70B8] font-bold shadow-xs ring-1 ring-blue-500/20"
                      : "text-slate-700 hover:text-[#1D70B8] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Luxury Right Action - Let's Talk CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              onClick={() => setActiveNav("Contact Us")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0B2545] via-[#123864] to-[#1D70B8] hover:from-[#07192e] hover:to-[#155A96] text-white font-bold text-xs shadow-[0_4px_16px_rgba(11,37,69,0.25)] hover:shadow-[0_6px_22px_rgba(29,112,184,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-decoration-none group"
            >
              <span>Let&apos;s Talk</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#0B2545] transition-all">
                <i className="bi bi-arrow-right"></i>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center text-xl border-0 transition-colors cursor-pointer"
            >
              <i className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveNav(link.name);
                        if (!link.hasDropdown) {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-decoration-none transition-all ${
                        isActive
                          ? "bg-blue-50 text-[#1D70B8] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#1D70B8]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <i className="bi bi-chevron-right text-xs opacity-50"></i>
                    </Link>

                    {/* Sub-items for Services on Mobile */}
                    {link.hasDropdown && (
                      <div className="pl-4 pr-1 py-1 space-y-1">
                        {serviceOptions.map((opt) => (
                          <Link
                            key={opt.title}
                            href={opt.href}
                            onClick={() => {
                              setActiveNav("Services");
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-decoration-none transition-all"
                          >
                            <div className={`w-7 h-7 rounded-md ${opt.bg} ${opt.color} flex items-center justify-center shrink-0`}>
                              {renderServiceIcon(opt.iconType)}
                            </div>
                            <span className="text-xs font-medium text-slate-700 truncate">
                              {opt.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Let's Talk CTA */}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => {
                  setActiveNav("Contact Us");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#1D70B8] text-white font-bold text-sm text-decoration-none shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
