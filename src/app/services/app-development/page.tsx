import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AppDevHero from "@/components/AppDevHero";
import AppDevBenefits from "@/components/AppDevBenefits";
import UiUxStats from "@/components/UiUxStats";
import DatabaseAwards from "@/components/DatabaseAwards";
import AppDevFaq from "@/components/AppDevFaq";
import AppDevProcess from "@/components/AppDevProcess";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Mobile App Development Company | Trickle Solutions",
  description:
    "Ensuring your application is expertly developed creates a seamless user experience and scales your business. Our mobile app development services build secure, robust, and intuitive native and cross-platform mobile apps.",
};

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* 1. Mobile App Development Company Hero Section */}
      <AppDevHero />

      {/* 2. Benefits With Our Service (4 Cards: Backend, Cloud, E-commerce, Analytics) */}
      <AppDevBenefits />

      {/* 3. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 4. Awards Section (GoodFirms, Top 1000 Global, Clutch) */}
      <DatabaseAwards />

      {/* 5. Frequently Asked Questions About Mobile App Development */}
      <AppDevFaq />

      {/* 6. Process of Creating Mobile Application Flowchart */}
      <AppDevProcess />

      {/* 7. Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* 8. Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
