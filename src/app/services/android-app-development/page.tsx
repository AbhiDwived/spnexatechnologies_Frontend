import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AndroidHero from "@/components/AndroidHero";
import AndroidBenefits from "@/components/AndroidBenefits";
import UiUxStats from "@/components/UiUxStats";
import DatabaseAwards from "@/components/DatabaseAwards";
import AndroidFaq from "@/components/AndroidFaq";
import AndroidProcess from "@/components/AndroidProcess";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Android Development Company | Trickle Solutions",
  description:
    "Our developers design and build native Android apps with cutting-edge Android features including innovative UI design, user-friendly management, high-performance speed, advanced security and scalable hosting.",
};

export default function AndroidAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Luxury Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* 1. Android Development Company Hero Section with Dual Phones */}
      <AndroidHero />

      {/* 2. Benefits With Our Service (Custom Android, Payments, Analytics, Multi-language) */}
      <AndroidBenefits />

      {/* 3. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 4. Awards Section (GoodFirms, Top 1000 Global, Clutch) */}
      <DatabaseAwards />

      {/* 5. Frequently Asked Questions About Android Development */}
      <AndroidFaq />

      {/* 6. Process of Creating Android Development Flowchart */}
      <AndroidProcess />

      {/* 7. Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* 8. Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
