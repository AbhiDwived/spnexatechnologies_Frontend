import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Services,
  SectionTransition,
  Stats,
  Process,
  WhyChooseUs,
  Industries,
  IndustriesAlt,
  Testimonials,
  Blogs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <SectionTransition />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <IndustriesAlt />
      <Blogs />
      <Footer />
    </>
  );
}
