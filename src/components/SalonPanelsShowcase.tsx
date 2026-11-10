"use client";

import React from "react";

export default function SalonPanelsShowcase() {
  return (
    <section className="bg-[#0A3D78] bg-gradient-to-b from-[#093A74] via-[#0A417E] to-[#083567] text-white py-16 sm:py-24 px-4 overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto relative z-10 space-y-16 sm:space-y-24">
        
        {/* Main Centered Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Launch a Top-notch Salon Booking Ordering System
          </h2>
        </div>

        {/* Sub-Row 1: Admin Panel (Text Left, SaaS Analytics Dashboard Mockup Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Admin Panel</h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              With the help of the Salon Mobile App, you are also provided with a centralized and robust admin panel through which the admin can manage and track the entire flow of your salon operations.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-blue-50/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Dashboard Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Staff &amp; Branch Control</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Revenue &amp; Payout Reports</span>
              </li>
            </ul>
          </div>

          {/* Admin SaaS Dashboard Tablet/Browser Screen */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl bg-slate-200/95 rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/20">
              <div className="bg-white rounded-xl overflow-hidden shadow-inner flex min-h-[230px] sm:min-h-[260px] text-slate-800">
                {/* Dark Slate Sidebar */}
                <div className="w-14 sm:w-20 bg-[#0B2545] text-blue-200 p-2.5 flex flex-col justify-between shrink-0">
                  <div className="space-y-3">
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white text-xs mx-auto">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="space-y-2 text-center text-xs">
                      <div className="bg-[#1D70B8] text-white py-1 rounded-md"><i className="bi bi-grid-fill"></i></div>
                      <div className="py-1 opacity-70"><i className="bi bi-calendar-week"></i></div>
                      <div className="py-1 opacity-70"><i className="bi bi-scissors"></i></div>
                      <div className="py-1 opacity-70"><i className="bi bi-bar-chart"></i></div>
                    </div>
                  </div>
                  <div className="text-[9px] text-center opacity-50">v2.4</div>
                </div>

                {/* Dashboard Content Canvas */}
                <div className="flex-1 p-3 sm:p-4 bg-slate-50 space-y-3 text-left">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="font-extrabold text-[11px] sm:text-xs text-slate-900">
                      Salon Overview Dashboard
                    </span>
                    <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      +18.4% Bookings
                    </span>
                  </div>

                  {/* Charts Row matching screenshot */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Donut Chart Card */}
                    <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs flex flex-col items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[6px] border-[#00BCD4] border-t-[#1D70B8] border-r-[#0B2545] flex items-center justify-center text-[10px] font-black text-slate-900">
                        76%
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 mt-1.5">Slot Occupancy</span>
                    </div>

                    {/* Horizontal Bars Card */}
                    <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-1.5">
                      <span className="text-[8px] font-bold text-slate-500 block">Top Services</span>
                      <div className="space-y-1">
                        <div className="h-2 bg-rose-500 rounded-full w-full"></div>
                        <div className="h-2 bg-[#1D70B8] rounded-full w-4/5"></div>
                        <div className="h-2 bg-amber-400 rounded-full w-3/5"></div>
                        <div className="h-2 bg-cyan-400 rounded-full w-2/3"></div>
                      </div>
                    </div>

                    {/* Vertical Bar Graph Card */}
                    <div className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs flex flex-col justify-between">
                      <span className="text-[8px] font-bold text-slate-500">Monthly Rev</span>
                      <div className="flex items-end justify-between gap-1 h-12 pt-1">
                        <div className="w-2 bg-blue-300 h-5 rounded-t"></div>
                        <div className="w-2 bg-rose-400 h-9 rounded-t"></div>
                        <div className="w-2 bg-[#1D70B8] h-11 rounded-t"></div>
                        <div className="w-2 bg-amber-400 h-7 rounded-t"></div>
                        <div className="w-2 bg-cyan-500 h-10 rounded-t"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mini KPI Footer Strip */}
                  <div className="grid grid-cols-3 gap-2 text-[9px]">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="text-slate-400 block text-[8px]">Total Appointments</span>
                      <span className="font-black text-slate-900">1,482</span>
                    </div>
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="text-slate-400 block text-[8px]">Active Stylists</span>
                      <span className="font-black text-slate-900">24</span>
                    </div>
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="text-slate-400 block text-[8px]">Total Revenue</span>
                      <span className="font-black text-[#1D70B8]">$42,680</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Row 2: Customer App (White iPhone Mockup Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[195px] sm:w-[215px] bg-white rounded-[34px] p-2.5 shadow-2xl border-4 border-slate-200 text-slate-800">
              {/* Top Speaker & Front Camera */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-2"></div>

              <div className="bg-slate-50 rounded-[22px] overflow-hidden border border-slate-200 p-2.5 h-[310px] sm:h-[330px] flex flex-col justify-between">
                <div>
                  {/* Blue Welcome Banner matching screenshot */}
                  <div className="bg-gradient-to-r from-[#2196F3] to-[#1D70B8] rounded-xl p-2.5 text-white mb-3 flex items-center gap-2 text-left shadow-xs">
                    <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center text-base shrink-0">
                      👩
                    </div>
                    <div>
                      <span className="text-[8px] text-blue-100 block">Welcome Back</span>
                      <p className="font-extrabold text-[10px] text-white mb-0">Find Your Stylist</p>
                    </div>
                  </div>

                  {/* 2x2 Colorful Quick Tiles matching screenshot */}
                  <div className="grid grid-cols-2 gap-2 text-white text-center">
                    <div className="bg-[#00BCD4] rounded-xl p-2.5 shadow-xs">
                      <span className="text-lg block mb-0.5">✂️</span>
                      <span className="text-[8.5px] font-bold block">Hair Salon</span>
                    </div>
                    <div className="bg-[#FF5252] rounded-xl p-2.5 shadow-xs">
                      <span className="text-lg block mb-0.5">💆</span>
                      <span className="text-[8.5px] font-bold block">Spa Care</span>
                    </div>
                    <div className="bg-[#FF9800] rounded-xl p-2.5 shadow-xs">
                      <span className="text-lg block mb-0.5">💄</span>
                      <span className="text-[8.5px] font-bold block">Makeup</span>
                    </div>
                    <div className="bg-[#0B2545] rounded-xl p-2.5 shadow-xs">
                      <span className="text-lg block mb-0.5">🎁</span>
                      <span className="text-[8.5px] font-bold block">Packages</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tab Strip */}
                <div className="border-t pt-1.5 flex justify-around text-slate-400 text-[11px]">
                  <i className="bi bi-house-fill text-[#1D70B8]"></i>
                  <i className="bi bi-calendar2"></i>
                  <i className="bi bi-bell"></i>
                  <i className="bi bi-person"></i>
                </div>
              </div>

              {/* Classic Home Button */}
              <div className="w-7 h-7 rounded-full border-2 border-slate-300 mx-auto mt-2"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Customer App</h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-xl">
              Leverage our salon app solutions to successfully serve varying customer preferences. Our salon mobile app development helps your users discover trending looks, choose trusted stylists, view transparent menus, and book instant appointments from anywhere.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-blue-50/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Browse &amp; Filter Local Salons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Digital Wallet &amp; Cashless Checkout</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Appointment Alerts &amp; Reviews</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Row 3: Salon Staff / Vendor App (Text Left, Gold-Dark Screen iPhone Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Salon Staff / Vendor App</h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-xl">
              Providing a dedicated salon partner application brings full control to stylists and salon owners—making it easy to confirm bookings, manage shift schedules, monitor earnings, and coordinate personalized client experiences on the move.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-blue-50/90 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Instant Booking Approval</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Daily Schedule &amp; Availability</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0"></span>
                <span>Track Tips &amp; Earnings</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="w-[195px] sm:w-[215px] bg-white rounded-[34px] p-2.5 shadow-2xl border-4 border-slate-200 text-white">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-2"></div>

              <div className="bg-slate-900 rounded-[22px] overflow-hidden p-2.5 h-[310px] sm:h-[330px] flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-center text-[9px] text-amber-300 font-extrabold border-b border-slate-800 pb-1.5 mb-2">
                    <span>Vendor Schedule</span>
                    <span>Today</span>
                  </div>

                  {/* Appointment Gold Cards matching screenshot */}
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-[#D4A76A] to-[#C28E4C] text-slate-950 rounded-xl p-2 shadow">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-black text-[9.5px]">Sarah Williams</span>
                        <span className="text-[7.5px] font-bold bg-slate-950/15 px-1.5 py-0.5 rounded-full">
                          10:30 AM
                        </span>
                      </div>
                      <span className="text-[8px] font-semibold block">Balayage &amp; Trim • $120</span>
                    </div>

                    <div className="bg-gradient-to-r from-[#E5C185] to-[#D4A76A] text-slate-950 rounded-xl p-2 shadow">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-black text-[9.5px]">Emma Davis</span>
                        <span className="text-[7.5px] font-bold bg-slate-950/15 px-1.5 py-0.5 rounded-full">
                          01:00 PM
                        </span>
                      </div>
                      <span className="text-[8px] font-semibold block">Gel Manicure • $45</span>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-2">
                      <span className="text-[8px] text-slate-400 block">Today&apos;s Payout</span>
                      <span className="font-black text-xs text-amber-300">$385.00</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-400 text-slate-950 text-center py-1.5 rounded-xl font-extrabold text-[9.5px]">
                  Accept New Slot
                </div>
              </div>

              <div className="w-7 h-7 rounded-full border-2 border-slate-300 mx-auto mt-2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
