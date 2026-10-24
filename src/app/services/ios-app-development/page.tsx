import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import IosHero from "@/components/IosHero";
import IosBenefits from "@/components/IosBenefits";
import UiUxStats from "@/components/UiUxStats";
import DatabaseAwards from "@/components/DatabaseAwards";
import IosFaq from "@/components/IosFaq";
import IosProcess from "@/components/IosProcess";
import UiUxContact from "@/components/UiUxContact";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Custom iOS Application Development | Trickle Solutions",
  description:
    "iOS app development services include full lifecycle design, custom creation, QA, and integration of applications for iPhones and iPads. Trickle Solutions has been providing iOS app development services for the past 10+ years.",
};

export default function IosAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0A3D78] text-slate-100 flex flex-col font-sans antialiased selection:bg-purple-500 selection:text-white">
      {/* Sticky Luxury Navigation Bar */}
      <Navbar defaultActive="Services" />

      {/* 1. Custom iOS Application Development Hero Section */}
      <IosHero />

      {/* 2. Benefits With Our Service (Custom iOS, App Store Deployment, Analytics, Enterprise) */}
      <IosBenefits />

      {/* 3. Stats Counter Strip (15+, 380+, 820+, 55+) */}
      <UiUxStats />

      {/* 4. Awards Section (GoodFirms, Top 1000 Global, Clutch) */}
      <DatabaseAwards />

      {/* 5. Frequently Asked Questions About iOS Development */}
      <IosFaq />

      {/* 6. Process of Creating iOS Development Flowchart */}
      <IosProcess />

      {/* 7. Contact Us Glass Architectural Card & Form */}
      <UiUxContact />

      {/* 8. Trickle Solutions Footer */}
      <TrickleFooter />
    </main>
  );
}
