"use client";

import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 bg-white relative">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Why Choose Us
          </h2>
          <div className="inline-block px-6 py-2.5 rounded-xl bg-[#1D518C] text-white text-sm font-bold shadow-md">
            10+ Years Of Experience
          </div>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="row items-center g-6">
          {/* Left Column (3 Cards) */}
          <div className="col-lg-4">
            <div className="space-y-5">
              {/* Card 1: Black Card */}
              <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-lg border border-slate-900">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  High Quality Designs
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-normal">
                  Our experienced designers develop stunning and efficient user experiences that attract your target audience.
                </p>
              </div>

              {/* Card 2: Navy Blue Card */}
              <div className="bg-[#1D518C] text-white p-6 rounded-2xl shadow-lg border border-blue-700/50">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  24/7 Live Support
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  With our 24×7 live support, our experts are ready to help you anytime.
                </p>
              </div>

              {/* Card 3: Navy Blue Card */}
              <div className="bg-[#1D518C] text-white p-6 rounded-2xl shadow-lg border border-blue-700/50">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Proven ROI Strategies
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  With our extensive experience and expertise, we ensure that our practices are used to help you maximize your overall business revenue.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Developer Photo */}
          <div className="col-lg-4">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Developer Coding"
                className="w-full h-[480px] object-cover opacity-90"
              />
              {/* Code Overlay Graphics matching reference */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-cyan-300 font-mono text-[11px] space-y-1">
                  <div>&gt; &quot;scripts&quot;: &#123;</div>
                  <div className="ps-3 text-blue-300">&quot;start&quot;: &quot;react-scripts start&quot;,</div>
                  <div className="ps-3 text-emerald-300">&quot;build&quot;: &quot;react-scripts build&quot;,</div>
                  <div className="ps-3 text-purple-300">&quot;test&quot;: &quot;react-scripts test&quot;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 Cards) */}
          <div className="col-lg-4">
            <div className="space-y-5">
              {/* Card 4: Navy Blue Card */}
              <div className="bg-[#1D518C] text-white p-6 rounded-2xl shadow-lg border border-blue-700/50">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Results-Driven Approach
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  As a results-oriented company, we assist you in achieving your specific business goals with maximum results.
                </p>
              </div>

              {/* Card 5: Navy Blue Card */}
              <div className="bg-[#1D518C] text-white p-6 rounded-2xl shadow-lg border border-blue-700/50">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Award-Winning Support Team
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our leading team members of website development are committed to help clients in finding accurate solutions to any problems. We ensure that our client&apos;s needs are satisfied in a timely and effective manner.
                </p>
              </div>

              {/* Card 6: Navy Blue Card */}
              <div className="bg-[#1D518C] text-white p-6 rounded-2xl shadow-lg border border-blue-700/50">
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Dedicated Development Resources (DDR)
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our mobile app development company develops with a team of skilled professionals who understand how to transform your idea into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
