import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero, ContactInfo } from "@/components/sections/contact";
import { SolutionCtaBanner } from "@/components/sections/solution";

export const metadata: Metadata = {
  title: "Contact Us - Trickle Solutions",
  description:
    "Get in touch with Trickle Solutions. Tell us about your project and our team will get back to you shortly.",
};

export default function ContactPage() {
  return (
    <>
      <Header showHero={false} />
      <ContactHero />
      <ContactInfo />
      <SolutionCtaBanner
        variant="dark"
        heading="Unlock Effortless and Exceptional Digital Transformation."
        ctaLabel="Talk to our expert"
        illustrationLabel="CONTACT"
        ctaHref="#contact-form"
      />
      <Footer />
    </>
  );
}
