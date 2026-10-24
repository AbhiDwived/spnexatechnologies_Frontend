import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DigitalMarketingHero from "@/components/DigitalMarketingHero";
import DigitalMarketingBenefits from "@/components/DigitalMarketingBenefits";
import UiUxStats from "@/components/UiUxStats";
import DigitalMarketingFaq from "@/components/DigitalMarketingFaq";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Trickle Solutions",
  description:
    "We focus on transforming marketing investments into business drivers. Our digital marketing services include SEO optimization, social media marketing, email marketing, and PPC advertising.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* Digital Marketing Hero Section */}
      <DigitalMarketingHero />

      {/* Benefits With Our Service (4 Staggered Cards) */}
      <DigitalMarketingBenefits />

      {/* Stats Counter Blue Strip */}
      <UiUxStats />

      {/* Frequently Asked Questions About Digital Marketing */}
      <DigitalMarketingFaq />

      {/* Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
