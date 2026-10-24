import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactMap from "@/components/ContactMap";
import ContactTransformBanner from "@/components/ContactTransformBanner";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Contact Us | Trickle Solutions",
  description:
    "Unleash your business potential now! Contact Trickle Solutions for end-to-end mobile and web development, AI integration, and digital transformation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#072B54] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar with active tab set to Contact Us */}
      <Navbar defaultActive="Contact Us" />

      {/* Contact Hero & Floating Form Section */}
      <ContactHero />

      {/* Google Maps Location Section */}
      <ContactMap />

      {/* Digital Transformation Banner with Expert */}
      <ContactTransformBanner />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
