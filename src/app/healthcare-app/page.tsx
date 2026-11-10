import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HealthcareHero from "@/components/HealthcareHero";
import SalonStats from "@/components/SalonStats";
import HealthcareBenefitsForm from "@/components/HealthcareBenefitsForm";
import DatabaseAwards from "@/components/DatabaseAwards";
import HealthcareEmpowering from "@/components/HealthcareEmpowering";
import HealthcareTransformBanner from "@/components/HealthcareTransformBanner";
import HealthcareStrategies from "@/components/HealthcareStrategies";
import HealthcarePartnerSection from "@/components/HealthcarePartnerSection";
import HealthcareProcess from "@/components/HealthcareProcess";
import HealthcareLatestBlogs from "@/components/HealthcareLatestBlogs";
import TrickleFooter from "@/components/TrickleFooter";

export const metadata: Metadata = {
  title: "Healthcare App Development Company | Trickle Solutions",
  description:
    "HIPAA-compliant healthcare app development company creating custom telemedicine apps, patient portals, EHR integrations, and clinical management software.",
};

export default function HealthcareAppPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
      {/* Top Navbar */}
      <Navbar defaultActive="Solutions" />

      {/* 1. Healthcare App Development Company Hero Section */}
      <HealthcareHero />

      {/* 2. Stats Counter Strip (Warm Orange -> Teal Gradient matching reference) */}
      <SalonStats />

      {/* 3. Why Does Every Healthcare Provider Need a Custom Solution? + Lead Form */}
      <HealthcareBenefitsForm />

      {/* 4. Awards Section */}
      <DatabaseAwards />

      {/* 5. Empowering Healthcare with Healthcare App (8 Features Grid) */}
      <HealthcareEmpowering />

      {/* 6. Transform Your Healthcare with Our Expert Software Solutions */}
      <HealthcareTransformBanner />

      {/* 7. Winning Strategies for Success in the On-Demand Healthcare Market */}
      <HealthcareStrategies />

      {/* 8. Why is Trickle Your Trusted Partner for Healthcare Mobile App Development? */}
      <HealthcarePartnerSection />

      {/* 9. How Our Healthcare App Development Company Works */}
      <HealthcareProcess />

      {/* 10. Our Latest Blog & News */}
      <HealthcareLatestBlogs />

      {/* 11. Footer */}
      <TrickleFooter />
    </main>
  );
}
