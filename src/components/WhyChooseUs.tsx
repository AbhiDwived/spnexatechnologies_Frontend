"use client";

import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Why Choose Us
          </h2>
          <div
            className="inline-block px-6 py-2.5 rounded-[10px] text-white text-[23px] font-bold shadow-[0px_0px_9px_0px_rgba(0,0,0,0.25)]"
            style={{ background: "linear-gradient(229.6deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}
          >
            10+ Years Of Experience
          </div>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="row items-center g-6">
          {/* Left Column (3 Cards) */}
          <div className="col-lg-4">
            <div className="space-y-5">
              {/* Card 1: Black Card — exact from Figma */}
              <div className="bg-black text-white p-4 rounded-[10px] overflow-hidden" style={{ height: 177 }}>
                <h3 className="text-[20px] font-bold text-white mb-2">High Quality Designs</h3>
                <p className="text-sm leading-normal font-normal">Our experienced designers develop stunning and efficient user experiences that attract your target audience.</p>
              </div>

              {/* Card 2: Blue Gradient */}
              <div className="text-white p-4 rounded-[10px] overflow-hidden" style={{ background: "linear-gradient(243.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}>
                <h3 className="text-[20px] font-bold text-white mb-2">24/7 Live Support</h3>
                <p className="text-sm leading-normal font-normal">With our 24×7 live support, our experts are ready to help you anytime</p>
              </div>

              {/* Card 3: Blue Gradient */}
              <div className="text-white p-4 rounded-[10px] overflow-hidden" style={{ background: "linear-gradient(243.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}>
                <h3 className="text-[20px] font-bold text-white mb-2">Proven ROI Strategies</h3>
                <p className="text-sm leading-normal font-normal">With our extensive experience and expertise, we ensure that our practices are used to help you maximize your overall business revenue.</p>
              </div>
            </div>
          </div>

          {/* Center Column: Developer Photo — exact from Figma */}
          <div className="col-lg-4">
            <div className="relative mx-auto rounded-[15px] overflow-hidden shadow-2xl" style={{ width: 419, maxWidth: "100%", height: 466 }}>
              <Image
                src="/images/why-choose-developer.png"
                alt="Developer Coding"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-[15px]" />
            </div>
          </div>

          {/* Right Column (3 Cards) */}
          <div className="col-lg-4">
            <div className="space-y-5">
              {/* Card 4: Blue Gradient */}
              <div className="text-white p-4 rounded-[10px] overflow-hidden" style={{ background: "linear-gradient(243.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}>
                <h3 className="text-[20px] font-bold text-white mb-2">Results-Driven Approach</h3>
                <p className="text-sm leading-normal font-normal">As a results-oriented company, we assist you in achieving your specific business goals with maximum results.</p>
              </div>

              {/* Card 5: Blue Gradient */}
              <div className="text-white p-4 rounded-[10px] overflow-hidden" style={{ background: "linear-gradient(243.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}>
                <h3 className="text-[20px] font-bold text-white mb-2">Award-Winning Support Team</h3>
                <p className="text-sm leading-normal font-normal">Our leading team members of website development are committed to help clients in finding accurate solutions to any problems. We ensure that our client&apos;s needs are satisfied in a timely and effective manner.</p>
              </div>

              {/* Card 6: Blue Gradient */}
              <div className="text-white p-4 rounded-[10px] overflow-hidden" style={{ background: "linear-gradient(243.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}>
                <h3 className="text-[20px] font-bold text-white mb-2">Dedicated Development Resources (DDR)</h3>
                <p className="text-sm leading-normal font-normal">Our mobile app development company develops with a team of skilled professionals who understand how to transform your idea into reality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
