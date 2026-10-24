"use client";

import React from "react";
import Link from "next/link";

interface AppProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  btnText: string;
  btnBg: string;
  btnTextCol: string;
  bgGradient: string;
  isReversed?: boolean;
  phoneContent: {
    accentColor: string;
    screen1: React.ReactNode;
    screen2: React.ReactNode;
  };
  iconSvg: React.ReactNode;
}

export default function PortfolioShowcase() {
  const projects: AppProject[] = [
    // 1. Nike Shopping App
    {
      id: "nike",
      title: "Nike Shopping App",
      category: "E-Commerce Footwear",
      tagline: "Custom Sneaker Commerce & Interactive 3D Previews",
      description:
        "An app created for shoes commerce business owners. Our mobile and web application development company offered end-to-end services to build a responsive, intuitive interface for browsing footwear, custom sneaker selection, fast and secure checkout, and interactive 3D shoe previews.",
      btnText: "Case Study →",
      btnBg: "bg-slate-900 hover:bg-black",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#1E2229] via-[#2A303A] to-[#181C23]",
      isReversed: false,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-800">
          <path d="M21.71 6.29a1 1 0 0 0-.84-.28C16.92 6.55 12 9.5 8 13.5l-2.71-2.7a1 1 0 0 0-1.42 1.41l3.5 3.5a1 1 0 0 0 1.48-.07c4.32-4.7 9.87-7.9 14.28-8.48a1 1 0 0 0 .58-.87z" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#F97316",
        screen1: (
          <div className="p-3 bg-slate-50 text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-extrabold text-[11px] tracking-tight">NIKE AIR MAX</span>
              <span className="text-orange-600 font-bold">$189.00</span>
            </div>
            <div className="my-auto py-2 flex flex-col items-center">
              <div className="w-24 h-14 bg-gradient-to-tr from-orange-400 via-amber-300 to-rose-400 rounded-xl shadow-md transform -rotate-12 flex items-center justify-center text-white font-black text-xs">
                👟 AIR
              </div>
              <span className="text-[9px] text-slate-500 mt-2 font-medium">Color: Solar Orange / Grey</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[9px] font-bold">
                <span>Select Size:</span>
                <span className="text-blue-600">US 10.5</span>
              </div>
              <button className="w-full py-1.5 bg-slate-900 text-white rounded-lg font-bold text-[9px]">
                Add to Cart
              </button>
            </div>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-bold text-[11px]">Discover Sneakers</span>
              <span className="text-xs">🔍</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 my-auto">
              <div className="bg-slate-100 p-1.5 rounded-lg text-center">
                <div className="text-base">👟</div>
                <div className="font-bold text-[8.5px] truncate">Jordan Retro</div>
                <div className="text-slate-600 text-[8px]">$210</div>
              </div>
              <div className="bg-slate-100 p-1.5 rounded-lg text-center">
                <div className="text-base">🏃</div>
                <div className="font-bold text-[8.5px] truncate">Pegasus 40</div>
                <div className="text-slate-600 text-[8px]">$140</div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded p-1 text-[8px] text-orange-800 font-semibold text-center">
              Free Express Delivery on all orders
            </div>
          </div>
        ),
      },
    },

    // 2. VeePus App (Social Media & Video Calls)
    {
      id: "veepus",
      title: "VeePus App",
      category: "Social & Community",
      tagline: "Live HD Video Calls, Interactive Stories & Real-Time Messaging",
      description:
        "Designed to connect communities seamlessly. Our team engineered high-performance real-time video streaming, interactive group voice chats, dynamic activity feeds, and instant encrypted direct messaging for millions of concurrent active users.",
      btnText: "View Case Study →",
      btnBg: "bg-[#2563EB] hover:bg-[#1D4ED8]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#60A5FA] via-[#7BB6F5] to-[#4B94E6]",
      isReversed: true,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-600">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#3B82F6",
        screen1: (
          <div className="p-3 bg-gradient-to-b from-blue-900 to-slate-900 text-white flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[9px] bg-red-600 px-1.5 py-0.5 rounded-full">● LIVE</span>
              <span className="text-[9px] text-slate-300">1.2k Viewers</span>
            </div>
            <div className="my-auto text-center">
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-blue-400 bg-blue-600/50 flex items-center justify-center text-xl shadow-lg">
                👤
              </div>
              <div className="font-bold text-[11px] mt-1.5">You are with Sarah</div>
              <div className="text-[8px] text-blue-200">HD Audio Connected</div>
            </div>
            <div className="flex justify-center gap-3 py-1">
              <button className="w-7 h-7 rounded-full bg-slate-700/80 flex items-center justify-center text-xs">🎙️</button>
              <button className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-xs">📞</button>
              <button className="w-7 h-7 rounded-full bg-slate-700/80 flex items-center justify-center text-xs">📹</button>
            </div>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b">
              <span className="font-bold text-[11px]">Messages</span>
              <span className="text-blue-600 text-[10px] font-bold">New Chat</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="flex items-center gap-2 p-1 rounded bg-blue-50">
                <span className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-[9px]">👩</span>
                <div className="flex-1 truncate">
                  <div className="font-bold text-[9px]">Elena Woods</div>
                  <div className="text-[7.5px] text-slate-500">Hey, are we still on?</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 rounded">
                <span className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-[9px]">👨</span>
                <div className="flex-1 truncate">
                  <div className="font-bold text-[9px]">David Kim</div>
                  <div className="text-[7.5px] text-slate-500">Sent an image attachment</div>
                </div>
              </div>
            </div>
            <div className="text-center text-[8px] text-slate-400 font-semibold">End-to-End Encrypted</div>
          </div>
        ),
      },
    },

    // 3. Target App (Fresh Grocery & Food)
    {
      id: "target",
      title: "Target App",
      category: "Grocery & Delivery",
      tagline: "Fresh Organic Produce & Fast 15-Minute Local Delivery",
      description:
        "A comprehensive on-demand grocery and local market delivery platform. Features include lightning-fast catalog search, dynamic inventory tracking, express checkout with digital wallets, and automated route tracking for courier drivers.",
      btnText: "View Case Study →",
      btnBg: "bg-[#16A34A] hover:bg-[#15803D]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#4ADE80] via-[#65D491] to-[#34B36A]",
      isReversed: false,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-green-700">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#22C55E",
        screen1: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-black text-[11px] text-green-800">Fresh Produce</span>
              <span className="text-[8px] bg-green-100 text-green-800 px-1 py-0.5 rounded font-bold">15 MIN</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 my-auto">
              <div className="border border-slate-200 p-1.5 rounded-lg text-center">
                <span className="text-base">🥑</span>
                <div className="font-bold text-[8.5px]">Avocado</div>
                <div className="text-green-700 font-bold text-[8px]">$2.49 / ea</div>
              </div>
              <div className="border border-slate-200 p-1.5 rounded-lg text-center">
                <span className="text-base">🍎</span>
                <div className="font-bold text-[8.5px]">Gala Apples</div>
                <div className="text-green-700 font-bold text-[8px]">$3.99 / lb</div>
              </div>
            </div>
            <button className="w-full py-1.5 bg-green-600 text-white rounded-lg font-bold text-[9px]">
              Browse 4,000+ Items
            </button>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-slate-50 text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b">
              <span className="font-bold text-[10px]">Cart Summary</span>
              <span className="font-bold text-green-700">$24.80</span>
            </div>
            <div className="space-y-1 my-auto text-[8.5px]">
              <div className="flex justify-between">
                <span>Organic Bananas</span>
                <span className="font-semibold">$1.99</span>
              </div>
              <div className="flex justify-between">
                <span>Almond Milk</span>
                <span className="font-semibold">$4.29</span>
              </div>
              <div className="flex justify-between border-t pt-1 font-bold">
                <span>Delivery Fee</span>
                <span className="text-green-600">FREE</span>
              </div>
            </div>
            <button className="w-full py-1.5 bg-slate-900 text-white rounded-lg font-bold text-[9px]">
              Proceed to Pay
            </button>
          </div>
        ),
      },
    },

    // 4. Platinum App (Salon & Luxury Spa)
    {
      id: "platinum",
      title: "Platinum App",
      category: "Wellness & Beauty",
      tagline: "Salon Stylist Booking & Interactive Treatment Menus",
      description:
        "Premium beauty salon and luxury wellness appointment booking platform. Customers easily discover verified stylists, view interactive service menus with transparent pricing, and reserve instant appointments with automated calendar reminders.",
      btnText: "View Case Study →",
      btnBg: "bg-[#DC2626] hover:bg-[#B91C1C]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#F87171] via-[#FA8E87] to-[#EF4444]",
      isReversed: true,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-red-600">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#EF4444",
        screen1: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-black text-[11px] text-red-700">Platinum Salon</span>
              <span className="text-[8px] bg-red-100 text-red-700 px-1 py-0.5 rounded font-bold">★ 4.9</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="border border-slate-200 p-1.5 rounded flex items-center justify-between">
                <div>
                  <div className="font-bold text-[9px]">Hair Styling & Cut</div>
                  <div className="text-[7.5px] text-slate-500">45 Mins · Master Stylist</div>
                </div>
                <span className="text-red-600 font-bold text-[9px]">$55</span>
              </div>
              <div className="border border-slate-200 p-1.5 rounded flex items-center justify-between">
                <div>
                  <div className="font-bold text-[9px]">Spa Facial Glow</div>
                  <div className="text-[7.5px] text-slate-500">60 Mins · Organic</div>
                </div>
                <span className="text-red-600 font-bold text-[9px]">$85</span>
              </div>
            </div>
            <button className="w-full py-1.5 bg-red-600 text-white rounded-lg font-bold text-[9px]">
              Select Specialist
            </button>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-slate-900 text-white flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b border-slate-700">
              <span className="font-bold text-[10px]">Choose Date</span>
              <span className="text-red-400 font-bold text-[8px]">October 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-1 my-auto text-center">
              <div className="p-1 rounded bg-slate-800 text-[8px]">Fri 16<br/><span className="text-slate-400">10:00 AM</span></div>
              <div className="p-1 rounded bg-red-600 font-bold text-[8px]">Sat 17<br/><span>02:30 PM</span></div>
              <div className="p-1 rounded bg-slate-800 text-[8px]">Sun 18<br/><span className="text-slate-400">04:00 PM</span></div>
            </div>
            <button className="w-full py-1.5 bg-white text-slate-900 rounded-lg font-black text-[9px]">
              Confirm Booking
            </button>
          </div>
        ),
      },
    },

    // 5. Qrm App (Coworking & Real Estate)
    {
      id: "qrm",
      title: "Qrm App",
      category: "PropTech & Coworking",
      tagline: "Smart Workspace Reservation & 360° Virtual Tours",
      description:
        "Intelligent workspace and commercial real estate leasing mobile application. Offers 360-degree virtual office tours, IoT keyless door entry, real-time conference room scheduling, and seamless monthly subscription invoicing.",
      btnText: "View Case Study →",
      btnBg: "bg-[#059669] hover:bg-[#047857]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#34D399] via-[#4EE1A8] to-[#10B981]",
      isReversed: false,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-emerald-700">
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <line x1="9" y1="9" x2="9" y2="9.01" />
          <line x1="15" y1="9" x2="15" y2="9.01" />
          <line x1="9" y1="13" x2="9" y2="13.01" />
          <line x1="15" y1="13" x2="15" y2="13.01" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#10B981",
        screen1: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-extrabold text-[11px] text-emerald-800">Qrm Spaces</span>
              <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded font-bold">Downtown</span>
            </div>
            <div className="my-auto space-y-1.5">
              <div className="w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-[9px] shadow-sm">
                🏢 Private Desk A-12
              </div>
              <div className="flex justify-between text-[8px] text-slate-600">
                <span>High-Speed Fiber Wifi</span>
                <span className="text-emerald-700 font-bold">Available Now</span>
              </div>
            </div>
            <button className="w-full py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-[9px]">
              Reserve for $18/hr
            </button>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-slate-50 text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b">
              <span className="font-bold text-[10px]">Smart Pass Access</span>
              <span className="text-emerald-600 text-[10px]">🔑</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-lg">
                📲
              </div>
              <div className="font-bold text-[9px]">Tap to Unlock Door</div>
              <div className="text-[7.5px] text-slate-400">Bluetooth LE Enabled</div>
            </div>
            <div className="bg-white border rounded p-1 text-[8px] text-center font-bold text-slate-700">
              Valid until 08:00 PM
            </div>
          </div>
        ),
      },
    },

    // 6. Fooddie App (Gourmet Burgers)
    {
      id: "fooddie",
      title: "Fooddie App",
      category: "Food Delivery & Culinary",
      tagline: "Custom Burger Crafting & Contactless Fast Ordering",
      description:
        "Gourmet restaurant ordering and rapid food delivery application. Features customizable burger ingredients, mouthwatering visual dish menus, contactless digital ordering, live driver GPS tracking, and a loyalty rewards program.",
      btnText: "View Case Study →",
      btnBg: "bg-[#991B1B] hover:bg-[#7F1D1D]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#991B1B] via-[#B91C1C] to-[#7F1D1D]",
      isReversed: true,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-red-700">
          <path d="M18 8a6 6 0 0 0-12 0c0 1 1 2 2 2h8c1 0 2-1 2-2z" />
          <rect x="4" y="14" width="16" height="4" rx="2" />
          <line x1="4" y1="11" x2="20" y2="11" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#DC2626",
        screen1: (
          <div className="p-3 bg-white text-slate-800 flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-black text-[11px] text-red-900">Fooddie Gourmet</span>
              <span className="text-[8px] bg-red-100 text-red-800 px-1 py-0.5 rounded font-bold">Popular</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="text-3xl">🍔</div>
              <div className="font-extrabold text-[10px] text-slate-900">Double Truffle Burger</div>
              <div className="text-red-700 font-bold text-[9px]">$13.99</div>
            </div>
            <button className="w-full py-1.5 bg-red-800 text-white rounded-lg font-bold text-[9px]">
              Customize Bun & Cheese
            </button>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-slate-900 text-white flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b border-slate-800">
              <span className="font-bold text-[10px]">Live Order Tracker</span>
              <span className="text-green-400 font-bold text-[8px]">● On Way</span>
            </div>
            <div className="my-auto text-center space-y-1">
              <div className="text-2xl">🛵</div>
              <div className="font-bold text-[9px]">Courier is 4 mins away</div>
              <div className="text-[7.5px] text-slate-400">Driver: Michael R.</div>
            </div>
            <button className="w-full py-1.5 bg-red-600 text-white rounded-lg font-bold text-[9px]">
              Call Courier
            </button>
          </div>
        ),
      },
    },

    // 7. OliveFit App (Fitness & Workout Tracker)
    {
      id: "olivefit",
      title: "OliveFit App",
      category: "Health & Fitness",
      tagline: "Wearable Sync, Calorie Burn Rings & Personal Workout Regimens",
      description:
        "Modern fitness tracking and personalized workout companion app. Syncs directly with smart wearables, visualizes daily calorie burn with interactive concentric activity rings, tracks interval workouts, and logs nutrition goals.",
      btnText: "View Case Study →",
      btnBg: "bg-[#CA8A04] hover:bg-[#A16207]",
      btnTextCol: "text-white",
      bgGradient: "bg-gradient-to-r from-[#FACC15] via-[#FBBF24] to-[#EAB308]",
      isReversed: false,
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-amber-700">
          <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
        </svg>
      ),
      phoneContent: {
        accentColor: "#EAB308",
        screen1: (
          <div className="p-3 bg-slate-950 text-white flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1">
              <span className="font-black text-[11px] text-amber-400">OliveFit Pro</span>
              <span className="text-[8px] text-slate-400">Today</span>
            </div>
            <div className="my-auto text-center space-y-1">
              {/* Circular gauge */}
              <div className="w-16 h-16 mx-auto rounded-full border-4 border-amber-400 border-t-rose-500 border-r-cyan-400 flex flex-col items-center justify-center">
                <span className="font-black text-[11px]">82%</span>
                <span className="text-[7px] text-slate-400">CALORIES</span>
              </div>
              <div className="font-bold text-[9px] text-amber-300">640 / 780 kcal</div>
            </div>
            <div className="flex justify-between text-[8px] bg-slate-900 p-1 rounded font-semibold">
              <span>Steps: 9,240</span>
              <span className="text-cyan-400">Target: 10k</span>
            </div>
          </div>
        ),
        screen2: (
          <div className="p-3 bg-slate-900 text-white flex flex-col justify-between h-full text-[10px]">
            <div className="flex justify-between items-center pb-1 border-b border-slate-800">
              <span className="font-bold text-[10px]">Daily Regimen</span>
              <span className="text-amber-400 font-bold text-[8px]">HIIT</span>
            </div>
            <div className="space-y-1.5 my-auto text-[8.5px]">
              <div className="p-1 bg-slate-800 rounded flex justify-between">
                <span>🏃 Treadmill Sprint</span>
                <span className="text-slate-400">15 min</span>
              </div>
              <div className="p-1 bg-slate-800 rounded flex justify-between">
                <span>🏋️ Kettlebell Squats</span>
                <span className="text-slate-400">4 sets</span>
              </div>
            </div>
            <button className="w-full py-1.5 bg-amber-500 text-slate-950 rounded-lg font-black text-[9px]">
              Start Workout
            </button>
          </div>
        ),
      },
    },
  ];

  return (
    <section className="space-y-0">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className={`${project.bgGradient} py-14 sm:py-20 px-4 transition-all overflow-hidden border-b border-black/10`}
          >
            <div className="container max-w-6xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  project.isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* Phones Mockup Column (Left or Right depending on isReversed) */}
                <div
                  className={`lg:col-span-6 flex items-center justify-center ${
                    project.isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative flex items-center justify-center gap-3 sm:gap-5 w-full max-w-[400px]">
                    
                    {/* Phone 1 (Tilted slightly) */}
                    <div className="w-[160px] sm:w-[185px] h-[310px] sm:h-[350px] bg-slate-900 rounded-[36px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      {/* Notch / Speaker */}
                      <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                      </div>
                      {/* Screen Container */}
                      <div className="w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-white shadow-inner">
                        {project.phoneContent.screen1}
                      </div>
                    </div>

                    {/* Phone 2 (Tilted slightly opposite) */}
                    <div className="w-[160px] sm:w-[185px] h-[310px] sm:h-[350px] bg-slate-900 rounded-[36px] p-2 sm:p-2.5 shadow-2xl border-4 border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      {/* Notch / Speaker */}
                      <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto mb-1 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                      </div>
                      {/* Screen Container */}
                      <div className="w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-white shadow-inner">
                        {project.phoneContent.screen2}
                      </div>
                    </div>

                  </div>
                </div>

                {/* White Card Info Column */}
                <div
                  className={`lg:col-span-6 ${
                    project.isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-2xl space-y-4 border border-white/50 text-left max-w-lg mx-auto lg:mx-0">
                    
                    {/* Header with App Logo Badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center shadow-sm">
                        {project.iconSvg}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {project.tagline}
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href="/services/app-development"
                        style={{ borderRadius: "9999px" }}
                        className={`inline-block px-6 py-2.5 ${project.btnBg} ${project.btnTextCol} text-xs sm:text-sm font-bold shadow-md transition-all text-decoration-none`}
                      >
                        {project.btnText}
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
