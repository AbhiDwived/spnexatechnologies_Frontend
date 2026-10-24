import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DatabaseAnalysisHero from "@/components/DatabaseAnalysisHero";
import DatabaseAnalysisBenefits from "@/components/DatabaseAnalysisBenefits";
import UiUxStats from "@/components/UiUxStats";
import DatabaseAwards from "@/components/DatabaseAwards";
import DatabaseAnalysisFaq from "@/components/DatabaseAnalysisFaq";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Database Analysis Services | Trickle Solutions",
  description:
    "Effective database analysis is key to making smarter, data-driven business decisions. We optimize your database structure to enhance reliability, speed, security, and scalability.",
};

export default function DatabaseAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* Database Analysis Hero Section */}
      <DatabaseAnalysisHero />

      {/* Benefits With Our Service (4 Staggered Cards) */}
      <DatabaseAnalysisBenefits />

      {/* Stats Counter Blue Strip */}
      <UiUxStats />

      {/* Awards Showcase Section */}
      <DatabaseAwards />

      {/* Frequently Asked Questions About Database Analysis */}
      <DatabaseAnalysisFaq />

      {/* Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
