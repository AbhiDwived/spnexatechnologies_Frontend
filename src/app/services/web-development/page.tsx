import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WebDevHero from "@/components/WebDevHero";
import WebDevBenefits from "@/components/WebDevBenefits";
import UiUxStats from "@/components/UiUxStats";
import WebDevFaq from "@/components/WebDevFaq";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Web Development Services | Trickle Solutions",
  description:
    "Ensuring your website is expertly developed not only creates a strong first impression but also keeps visitors engaged. Our web development services focus on building fast, responsive, and user-friendly websites.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* Web Development Hero Section */}
      <WebDevHero />

      {/* Benefits With Our Service (4 Staggered Cards) */}
      <WebDevBenefits />

      {/* Stats Counter Blue Strip */}
      <UiUxStats />

      {/* Frequently Asked Questions About Web Development */}
      <WebDevFaq />

      {/* Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
