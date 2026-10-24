import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import UiUxHero from "@/components/UiUxHero";
import UiUxBenefits from "@/components/UiUxBenefits";
import UiUxStats from "@/components/UiUxStats";
import UiUxFaq from "@/components/UiUxFaq";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Trickle Solutions",
  description:
    "Our UX Development focuses on crafting exceptional digital experiences. By prioritizing your users' needs, we build intuitive interfaces and seamless journeys that boost satisfaction, engagement, and loyalty.",
};

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* Hero Section with Artistic Brush Underline, Bullets, & Futuristic Phone Mockup */}
      <UiUxHero />

      {/* Benefits With Our Service (4 Staggered Alternating Cards) */}
      <UiUxBenefits />

      {/* Stats Counter Blue Strip */}
      <UiUxStats />

      {/* Frequently Asked Questions About UI/UX Accordion */}
      <UiUxFaq />

      {/* Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* Dedicated Multi-Column Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
