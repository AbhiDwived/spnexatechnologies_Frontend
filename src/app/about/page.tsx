import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stats } from "@/components/sections";
import { ServiceAwards } from "@/components/sections/service";
import { AboutHero, AboutWhoWeAre } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About - Trickle Solutions",
  description:
    "Trickle Solutions is a leading mobile app and website development company — learn who we are, our mission and vision, and the awards that inspire our standards.",
};

export default function AboutPage() {
  return (
    <>
      <Header showHero={false} />
      <AboutHero />
      <AboutWhoWeAre />
      <Stats />
      <ServiceAwards />
      <Footer />
    </>
  );
}
