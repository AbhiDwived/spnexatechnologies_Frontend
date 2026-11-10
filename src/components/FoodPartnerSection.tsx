"use client";

import React from "react";

export default function FoodPartnerSection() {
  const benefits = [
    {
      title: "Increased Revenue",
      desc: "A food delivery app helps grow your customer base and boost repeat orders by providing 24/7 service. Special offers and discounts for delivery can also give your business a boost.",
    },
    {
      title: "Brand Visibility",
      desc: "A food delivery app has an impact on brand awareness by giving your company an increased presence and building customer loyalty through seamless user experiences.",
    },
    {
      title: "Contactless Operations",
      desc: "Food delivery apps ensure a contactless experience, providing a safe and streamlined interaction for both customers and delivery staff.",
    },
    {
      title: "Costs Saving",
      desc: "Food delivery apps help save costs by reducing overhead expenses and simplifying operations, thereby eliminating the need for third-party commission fees.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-white text-slate-900 relative">
      <div className="container max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mb-3">
            Why is Trickle Solutions Your Trusted Partner <br className="hidden sm:inline" />
            in Food Delivery App Development?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            A food delivery app is a must in today&apos;s fast-paced digital world. Our food delivery app development services can help you create a mouth-watering app for your users to order food.
          </p>
        </div>

        {/* 2-Column Grid: Delivery Rider Visual with Mobile Screens on Left, 4 Text Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Courier Rider Holding Box with Food App Mockups Behind */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md h-[360px] sm:h-[420px] flex items-center justify-center">
              
              {/* Back Phone 1 (Left): Orange Food Ordering Screen */}
              <div className="absolute left-0 sm:left-4 top-2 w-[165px] sm:w-[190px] bg-slate-900 rounded-[28px] p-2 shadow-xl border-2 border-slate-700 -rotate-6">
                <div className="bg-white rounded-[20px] p-2 h-[280px] sm:h-[315px] overflow-hidden text-left">
                  <div className="bg-orange-500 text-white text-[8px] font-bold p-1.5 rounded-lg mb-2 flex justify-between">
                    <span>FoodieExpress</span>
                    <span>★ 4.9</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="bg-orange-50 p-1.5 rounded-lg border border-orange-100 flex items-center gap-1.5">
                      <span className="text-sm">🍕</span>
                      <div>
                        <p className="font-bold text-[8.5px] text-slate-900 mb-0">Pepperoni Feast</p>
                        <span className="text-[7.5px] text-orange-600 font-bold">$15.99</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-1.5 rounded-lg border border-orange-100 flex items-center gap-1.5">
                      <span className="text-sm">🍔</span>
                      <div>
                        <p className="font-bold text-[8.5px] text-slate-900 mb-0">Crispy Chicken</p>
                        <span className="text-[7.5px] text-orange-600 font-bold">$11.50</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-1.5 rounded-lg border border-orange-100 flex items-center gap-1.5">
                      <span className="text-sm">🥗</span>
                      <div>
                        <p className="font-bold text-[8.5px] text-slate-900 mb-0">Caesar Bowl</p>
                        <span className="text-[7.5px] text-orange-600 font-bold">$9.80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Phone 2 (Right): Dark Restaurant Showcase */}
              <div className="absolute right-0 sm:right-4 top-2 w-[165px] sm:w-[190px] bg-slate-900 rounded-[28px] p-2 shadow-xl border-2 border-slate-700 rotate-6">
                <div className="bg-slate-900 rounded-[20px] p-2 h-[280px] sm:h-[315px] overflow-hidden text-left text-white">
                  <div className="text-[8px] font-extrabold text-orange-400 mb-1.5 border-b border-slate-800 pb-1">
                    Chef Special
                  </div>
                  <div className="rounded-xl overflow-hidden h-20 mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
                      alt="Grilled Food Platter"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[9px] text-white mb-0.5">BBQ Steak Platter</p>
                  <span className="text-[8px] text-slate-400 block mb-2">25-30 mins • Free delivery</span>
                  <div className="bg-orange-500 text-white text-center py-1 rounded-lg text-[8px] font-bold">
                    Order Now
                  </div>
                </div>
              </div>

              {/* Foreground Visual: Smiling Delivery Partner in Red Jacket */}
              <div className="relative z-10 w-44 sm:w-52 h-56 sm:h-68 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-14 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"
                  alt="Smiling food delivery partner on scooter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs rounded-xl p-1.5 text-center shadow">
                  <span className="text-[9px] font-extrabold text-orange-600 block">Fast Courier Partner</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Vertical Benefit Blocks matching screenshot */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {benefits.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2545] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
