"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const appCards = [
  {
    icon: "/images/industry-icon-education.png",
    title: "Education App Development",
    desc: "Devherds serves schools, colleges, and edtech companies by developing education apps that include features such as virtual classrooms, online assessment, tracking of student progress, and interactive content.",
    href: "#",
  },
  {
    icon: "/images/industry-icon-grocery.png",
    title: "Grocery Delivery App Development",
    desc: "We build effective grocery delivery applications that cater to the fast-growing demand of online shopping. Our solutions include inventory management, real-time tracking, secure payment gateways, and user-friendly interfaces.",
    href: "/grocery-delivery-app",
  },
  {
    icon: "/images/industry-icon-ecommerce.png",
    title: "E-commerce App Development",
    desc: "We develop dynamic e-commerce apps that sell and increase customer experiences. Our solutions include product catalogs, shopping carts, multiple payment gateways, and customer reviews.",
    href: "/ecommerce-app",
  },
  {
    icon: "/images/industry-icon-salon.png",
    title: "Salon App Development",
    desc: "Our salon application development services emphasize the ease of appointment booking and customer management for beauty and wellness businesses.",
    href: "/salon-app",
  },
];

function CardIcon({ icon }: { icon: string }) {
  return (
    <div
      className="w-[50px] h-[50px] rounded-[12px] bg-white flex items-center justify-center shrink-0"
      style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
    >
      <div
        className="w-10 h-10"
        style={{
          background: "#165ea6",
          WebkitMaskImage: `url(${icon})`,
          maskImage: `url(${icon})`,
          WebkitMaskSize: "40px 40px",
          maskSize: "40px 40px",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
}

function ExploreBtn({ href, label = "Explore more" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="self-start inline-flex items-center justify-center text-white text-[16px] font-bold px-6 py-2 rounded-[22px] hover:opacity-90 transition-opacity"
      style={{
        background: "linear-gradient(225.4deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)",
        boxShadow: "0px 0px 7px 0px white",
      }}
    >
      {label}
    </Link>
  );
}

function AppCard({ card, padding = "p-8", titleSize = "text-[22px]", descSize = "text-[18px]" }: {
  card: (typeof appCards)[0];
  padding?: string;
  titleSize?: string;
  descSize?: string;
}) {
  return (
    <div
      className={`bg-white ${padding} flex flex-col h-full`}
      style={{ borderRadius: "0 40px 0 40px", boxShadow: "0 0 8px rgba(0,0,0,0.25)" }}
    >
      <div className="flex items-start gap-4 mb-3">
        <CardIcon icon={card.icon} />
        <h3 className={`${titleSize} font-bold text-black mt-2 leading-tight`}>{card.title}</h3>
      </div>
      <p className={`${descSize} text-black/75 leading-[1.6] mb-6 flex-1`}>{card.desc}</p>
      <ExploreBtn href={card.href} />
    </div>
  );
}

export default function AppSolutionCards() {
  return (
    <section
      className="relative py-12 overflow-hidden"
      style={{ background: "linear-gradient(252deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}
    >
      {/* 3-column grid: Education spans cols 1-2, heading in col 3; bottom row = 3 equal cols */}
      <div
        className="w-full px-[100px]"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}
      >
        {/* Row 1, Cols 1–2: Education Card (wider) */}
        <div style={{ gridColumn: "1 / 3" }} className="h-full">
          <AppCard card={appCards[0]} />
        </div>

        {/* Row 1, Col 3: Section Heading */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[50px] font-extrabold text-white leading-tight mb-4">
            Industries We Serve
          </h2>
          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, white 0%, #00adda 100%)" }}
          />
        </div>

        {/* Row 2, Col 1: Grocery Card */}
        <AppCard card={appCards[1]} padding="p-6" titleSize="text-[20px]" descSize="text-[16px]" />

        {/* Row 2, Col 2: Center Background Photo with button */}
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "0 40px 0 40px", minHeight: 335 }}
        >
          <Image
            src="/images/industry-bg-photo.png"
            alt="Industry"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-8 left-8">
            <ExploreBtn href="#" label="More Serve" />
          </div>
        </div>

        {/* Row 2, Col 3: E-commerce + Salon stacked */}
        <div className="flex flex-col gap-8">
          <div
            className="bg-white p-6 flex flex-col"
            style={{ borderRadius: "0 40px 0 40px", boxShadow: "0 0 8px rgba(0,0,0,0.25)", flex: 1 }}
          >
            <div className="flex items-start gap-4 mb-3">
              <CardIcon icon={appCards[2].icon} />
              <h3 className="text-[20px] font-bold text-black mt-2 leading-tight">{appCards[2].title}</h3>
            </div>
            <p className="text-[16px] text-black/75 leading-[1.6] mb-4 flex-1">{appCards[2].desc}</p>
            <ExploreBtn href={appCards[2].href} />
          </div>

          <div
            className="bg-white p-6 flex flex-col"
            style={{ borderRadius: "0 40px 0 40px", boxShadow: "0 0 8px rgba(0,0,0,0.25)", flex: 1 }}
          >
            <div className="flex items-start gap-4 mb-3">
              <CardIcon icon={appCards[3].icon} />
              <h3 className="text-[20px] font-bold text-black mt-2 leading-tight">{appCards[3].title}</h3>
            </div>
            <p className="text-[16px] text-black/75 leading-[1.6] mb-4 flex-1">{appCards[3].desc}</p>
            <ExploreBtn href={appCards[3].href} />
          </div>
        </div>
      </div>
    </section>
  );
}
