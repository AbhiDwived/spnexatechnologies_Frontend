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
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    { name: "Services", href: "/#services", dropdownType: "services" },
    { name: "Solutions", href: "/#solutions", dropdownType: "solutions" },
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

  // Exactly matching the 17 options across 3 columns from the Solutions reference screenshot
  const solutionColumns = [
    // Column 1 (7 items)
    [
      { title: "Ecommerce App", icon: "ecommerce", color: "text-[#00BCD4]", href: "/ecommerce-app" },
      { title: "Real Estate App", icon: "real-estate", color: "text-[#9E9D24]", href: "/real-estate-app" },
      { title: "Grocery Delivery App", icon: "grocery", color: "text-[#5C6BC0]", href: "/grocery-delivery-app" },
      { title: "Food Delivery App", icon: "food", color: "text-[#00BCD4]", href: "/food-delivery-app" },
      { title: "Pickup and Delivery App", icon: "delivery", color: "text-[#00E676]", href: "/pickup-and-delivery-app" },
      { title: "Salon App", icon: "salon", color: "text-[#5C6BC0]", href: "/salon-app" },
      { title: "Healthcare App", icon: "healthcare", color: "text-[#FF4081]", href: "/healthcare-app" },
    ],
    // Column 2 (7 items)
    [
      { title: "On Demand App", icon: "on-demand", color: "text-[#FF5252]", href: "/on-demand-app" },
      { title: "Fitness App", icon: "fitness", color: "text-[#00E676]", href: "/fitness-app" },
      { title: "Laundry App", icon: "laundry", color: "text-[#00BCD4]", href: "/#solutions" },
      { title: "Financial Software", icon: "finance", color: "text-[#AB47BC]", href: "/#solutions" },
      { title: "Taxi Booking App", icon: "taxi", color: "text-[#FF9800]", href: "/#solutions" },
      { title: "Travel App", icon: "travel", color: "text-[#FF5252]", href: "/#solutions" },
      { title: "Dating App", icon: "dating", color: "text-[#FF5252]", href: "/#solutions" },
    ],
    // Column 3 (3 items)
    [
      { title: "Social Media App", icon: "social", color: "text-[#546E7A]", href: "/#solutions" },
      { title: "Education App", icon: "education", color: "text-[#E040FB]", href: "/#solutions" },
      { title: "Car Wash App", icon: "car-wash", color: "text-[#FBC02D]", href: "/#solutions" },
    ],
  ];

  const allSolutions = solutionColumns.flat();

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

  const renderSolutionIcon = (icon: string) => {
    switch (icon) {
      case "ecommerce":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1.5" />
            <circle cx="19" cy="21" r="1.5" />
            <path d="M2.5 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22.5 7H6.5" />
            <path d="M8 10h12" />
          </svg>
        );
      case "real-estate":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M4 21V10l6-4v15" />
            <path d="M10 6l5-3v18" />
            <path d="M15 9h5v12" />
            <path d="M7 13h1" />
            <path d="M7 17h1" />
            <path d="M12 9h1" />
            <path d="M12 13h1" />
            <path d="M12 17h1" />
          </svg>
        );
      case "grocery":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8h12l-1.5 13H7.5L6 8z" />
            <path d="M5 8h14" />
            <path d="M11 4v4" />
            <path d="M11 4l3-2" />
            <path d="M8 12h8" />
            <path d="M8.5 16h7" />
          </svg>
        );
      case "food":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4v2H5z" />
            <path d="M6 6v2c-1.5 1-2 2-2 4v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7c0-2-0.5-3-2-4V6" />
            <circle cx="16.5" cy="15.5" r="4.5" />
            <path d="M16.5 11c0-1.5 1-2 2-2" />
          </svg>
        );
      case "delivery":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 10h3" />
            <path d="M1 13h2" />
            <path d="M5 17h1.5" />
            <circle cx="8" cy="17" r="1.5" />
            <path d="M9.5 17h6" />
            <circle cx="17" cy="17" r="1.5" />
            <path d="M18.5 17H21v-4l-2.5-3.5H15V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10h1" />
            <path d="M15 11h4" />
          </svg>
        );
      case "salon":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3h8" />
            <path d="M7 6h10a2 2 0 0 1 2 2v4H5V8a2 2 0 0 1 2-2z" />
            <path d="M4 12h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
            <path d="M3 10h2" />
            <path d="M19 10h2" />
          </svg>
        );
      case "healthcare":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5.5c-1.5-2-4-2-5.5-.5-1.5 1.5-1 3.8 1.5 5.8l4 3.7 4-3.7c2.5-2 3-4.3 1.5-5.8-1.5-1.5-4-1.5-5.5.5z" />
            <path d="M3 17c1.5-2 4-1.5 6 0l3 2" />
            <path d="M21 17c-1.5-2-4-1.5-6 0l-3 2" />
            <path d="M4 21h16" />
          </svg>
        );
      case "on-demand":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 8 15 12 10 16" />
            <line x1="3" y1="12" x2="15" y2="12" />
          </svg>
        );
      case "fitness":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="9" width="2" height="6" rx="1" />
            <rect x="5" y="7" width="2" height="10" rx="1" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <rect x="17" y="7" width="2" height="10" rx="1" />
            <rect x="20" y="9" width="2" height="6" rx="1" />
            <path d="M10 12v4M14 12v4" />
          </svg>
        );
      case "laundry":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 4a3 3 0 0 1 6 0v2H9V4z" />
            <rect x="5" y="6" width="14" height="15" rx="3" />
            <circle cx="12" cy="14" r="3.5" />
            <path d="M12 12a2 2 0 0 1 2 2" />
          </svg>
        );
      case "finance":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
            <path d="M15 11h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
            <circle cx="17.5" cy="14" r="1" fill="currentColor" />
          </svg>
        );
      case "taxi":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="2" rx="1" />
            <path d="M6 10l2-4h8l2 4" />
            <rect x="4" y="10" width="16" height="8" rx="2" />
            <circle cx="7.5" cy="14" r="1.5" />
            <circle cx="16.5" cy="14" r="1.5" />
            <path d="M5 18v2M19 18v2" />
          </svg>
        );
      case "travel":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.8 19.2L16 11l3.5-3.5a2.5 2.5 0 0 0-3.5-3.5L12.5 7.5 4.3 5.7a1 1 0 0 0-1.1 1.5l5.5 4.8-2.5 2.5-2.2-.5a1 1 0 0 0-1 1.4l1.3 2.6 2.6 1.3a1 1 0 0 0 1.4-1l-.5-2.2 2.5-2.5 4.8 5.5a1 1 0 0 0 1.5-1.1z" />
          </svg>
        );
      case "dating":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case "social":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2" width="10" height="20" rx="3" />
            <path d="M5 8.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2" />
            <path d="M19 8.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2" />
            <circle cx="12" cy="18" r="0.75" fill="currentColor" />
          </svg>
        );
      case "education":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case "car-wash":
        return (
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15" />
            <path d="M3 9h18" />
            <path d="M7 6v3" />
            <path d="M12 6v3" />
            <path d="M17 6v3" />
            <path d="M7 16l1-3h8l1 3" />
            <rect x="6" y="16" width="12" height="4" rx="1" />
            <circle cx="9" cy="18" r="0.75" />
            <circle cx="15" cy="18" r="0.75" />
          </svg>
        );
      default:
        return <i className="bi bi-app"></i>;
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

              // Services Dropdown Menu
              if (link.dropdownType === "services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setSolutionsDropdownOpen(false);
                    }}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActiveNav(link.name)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-semibold text-decoration-none transition-all duration-200 ${
                        isActive || servicesDropdownOpen
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

              // Solutions Dropdown Mega Menu (Matching Reference Screenshot)
              if (link.dropdownType === "solutions") {
                const isSolutionsActive = isActive || solutionsDropdownOpen;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setSolutionsDropdownOpen(true);
                      setServicesDropdownOpen(false);
                    }}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setActiveNav(link.name)}
                      className={`relative flex items-center px-3.5 py-2 text-[14px] font-semibold text-decoration-none transition-all duration-200 ${
                        isSolutionsActive
                          ? "text-[#1D70B8] font-bold after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2.5px] after:bg-[#1D70B8] after:rounded-full"
                          : "text-slate-700 hover:text-[#1D70B8]"
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>

                    {/* Exact 3-Column Solutions Mega Menu Dropdown */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-[42%] xl:-translate-x-1/2 pt-2.5 w-[720px] xl:w-[780px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(11,37,69,0.16)] border border-slate-100 p-5 xl:p-6 ring-1 ring-black/5">
                          <div className="grid grid-cols-3 gap-x-6 xl:gap-x-8">
                            {solutionColumns.map((col, colIdx) => (
                              <div key={colIdx} className="flex flex-col space-y-1">
                                {col.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href || "/#solutions"}
                                    onClick={() => {
                                      setActiveNav("Solutions");
                                      setSolutionsDropdownOpen(false);
                                    }}
                                    className="flex items-center gap-3.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-all text-decoration-none group/sol"
                                  >
                                    <div
                                      className={`w-6 h-6 flex items-center justify-center shrink-0 ${item.color} group-hover/sol:scale-110 transition-transform`}
                                    >
                                      {renderSolutionIcon(item.icon)}
                                    </div>
                                    <span className="text-[13.5px] xl:text-[14px] font-medium text-slate-800 group-hover/sol:text-[#1D70B8] transition-colors whitespace-nowrap">
                                      {item.title}
                                    </span>
                                  </Link>
                                ))}
                              </div>
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
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                const isServices = link.dropdownType === "services";
                const isSolutions = link.dropdownType === "solutions";

                return (
                  <div key={link.name} className="border-b border-slate-50 last:border-b-0 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveNav(link.name);
                          if (!isServices && !isSolutions) {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`flex-1 flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-decoration-none transition-all ${
                          isActive
                            ? "bg-blue-50 text-[#1D70B8] font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-[#1D70B8]"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>

                      {isServices && (
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="px-3 py-2 text-slate-500 hover:text-[#1D70B8] border-0 bg-transparent cursor-pointer"
                          aria-label="Toggle Services submenu"
                        >
                          <i className={`bi bi-chevron-down transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}></i>
                        </button>
                      )}

                      {isSolutions && (
                        <button
                          type="button"
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className="px-3 py-2 text-slate-500 hover:text-[#1D70B8] border-0 bg-transparent cursor-pointer"
                          aria-label="Toggle Solutions submenu"
                        >
                          <i className={`bi bi-chevron-down transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}></i>
                        </button>
                      )}
                    </div>

                    {/* Sub-items for Services on Mobile */}
                    {isServices && mobileServicesOpen && (
                      <div className="pl-4 pr-1 py-1 space-y-1 bg-slate-50/60 rounded-xl my-1">
                        {serviceOptions.map((opt) => (
                          <Link
                            key={opt.title}
                            href={opt.href}
                            onClick={() => {
                              setActiveNav("Services");
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-decoration-none transition-all"
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

                    {/* Sub-items for Solutions on Mobile */}
                    {isSolutions && mobileSolutionsOpen && (
                      <div className="pl-2 pr-1 py-2 bg-slate-50/60 rounded-xl my-1 max-h-60 overflow-y-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {allSolutions.map((opt) => (
                            <Link
                              key={opt.title}
                              href={opt.href || "/#solutions"}
                              onClick={() => {
                                setActiveNav("Solutions");
                                setMobileMenuOpen(false);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white text-decoration-none transition-all"
                            >
                              <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${opt.color}`}>
                                {renderSolutionIcon(opt.icon)}
                              </div>
                              <span className="text-xs font-medium text-slate-700 truncate">
                                {opt.title}
                              </span>
                            </Link>
                          ))}
                        </div>
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
