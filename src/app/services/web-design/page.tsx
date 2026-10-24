import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WebDesignHero from "@/components/WebDesignHero";
import WebDesignBenefits from "@/components/WebDesignBenefits";
import UiUxStats from "@/components/UiUxStats";
import WebDesignFaq from "@/components/WebDesignFaq";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Web Design Services | Trickle Solutions",
  description:
    "When designing your website, the workflows must be such that it brings additional footfalls to the website. We optimize your site for maximum engagement and conversions.",
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* Web Design Hero Section */}
      <WebDesignHero />

      {/* Benefits With Our Service (4 Staggered Cards) */}
      <WebDesignBenefits />

      {/* Stats Counter Blue Strip */}
      <UiUxStats />

      {/* Frequently Asked Questions About Web Design */}
      <WebDesignFaq />

      {/* Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
