"use client";

import React from "react";
import Image from "next/image";

export default function ContactMap() {
  return (
    <section className="relative w-full bg-slate-100 overflow-hidden border-b border-slate-200">
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px]">
        {/* Authentic Google Map View */}
        <Image
          src="/images/contact-map.png"
          alt="Trickle Solutions Google Map Location in Vaishali Ghaziabad"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Clickable Overlay Link to Google Maps */}
        <a
          href="https://maps.google.com/?q=Trickle+Solutions+Vaishali+Ghaziabad"
          target="_blank"
          rel="noopener noreferrer"
          title="Open in Google Maps"
          className="absolute inset-0 z-10 cursor-pointer"
        >
          <span className="sr-only">Open in Google Maps</span>
        </a>
      </div>
    </section>
  );
}
