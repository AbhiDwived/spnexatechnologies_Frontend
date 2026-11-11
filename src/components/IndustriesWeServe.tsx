"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const appCards = [
  {
    icon: "/images/industry-icon-education.png",
    title: "Education App Development",
    desc: "Devherds serves schools, colleges, and edtech companies by developing education apps that include features such as virtual classrooms,online assessment, tracking of student progress, and interactive content.",
    href: "#",
    photo: "/images/industry-photo-education.png",
    flipPhoto: false,
  },
  {
    icon: "/images/industry-icon-grocery.png",
    title: "Grocery Delivery App Development",
    desc: "We build effective grocery delivery applications that cater to the fast-growing demand of online shopping.Our solutions include inventory management, real-time tracking, secure payment gateways, and user-friendly interfaces.",
    href: "/grocery-delivery-app",
    photo: "/images/industry-photo-grocery.png",
    flipPhoto: true,
  },
  {
    icon: "/images/industry-icon-ecommerce.png",
    title: "E-commerce App Development",
    desc: "We develop dynamic e-commerce apps that sell and increase customer experiences. Our solutions include product catalogs, shopping carts, multiple payment gateways, and customer reviews.",
    href: "/ecommerce-app",
    photo: "/images/industry-photo-ecommerce.png",
    flipPhoto: false,
  },
  {
    icon: "/images/industry-icon-salon.png",
    title: "Salon App Development",
    desc: "Our salon application development services emphasize the ease of appointment booking and customer management for beauty and wellness businesses.",
    href: "/salon-app",
    photo: "/images/industry-photo-salon.png",
    flipPhoto: true,
  },
];

export default function IndustriesWeServe() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden"
      style={{ background: "#c0dce8" }}
    >
      {/* Section Heading — centered, top: 50px per Figma */}
      <div className="flex justify-center" style={{ paddingTop: 50, paddingBottom: 30 }}>
        <h2 className="text-[50px] font-extrabold text-white leading-normal whitespace-nowrap">
          Industries We Serve
        </h2>
      </div>

      {/* Industry Rows — 4 rows, each 353px tall */}
      {appCards.map((card, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden flex items-center"
          style={{
            height: 353,
            backgroundImage:
              "linear-gradient(223.44deg, rgba(0,0,0,0.3) 29.8%, rgba(0,173,218,0.3) 77.6%)",
          }}
        >
          {/* Left: Text Content */}
          <div
            className="relative z-10 flex flex-col justify-center"
            style={{ width: "57%", paddingLeft: 100, paddingRight: 40 }}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-[20px]">
              <div
                className="w-[50px] h-[50px] bg-white rounded-[12px] flex items-center justify-center shrink-0"
                style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
              >
                <div
                  className="w-10 h-10"
                  style={{
                    background: "#165ea6",
                    WebkitMaskImage: `url(${card.icon})`,
                    maskImage: `url(${card.icon})`,
                    WebkitMaskSize: "40px 40px",
                    maskSize: "40px 40px",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              </div>
              <h3 className="text-[26px] font-bold text-white leading-tight whitespace-nowrap">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[18px] text-white leading-[25px] mb-[25px]">
              {card.desc}
            </p>

            {/* Button — 42px tall, rounded-[22px], white glow */}
            <div>
              <Link
                href={card.href}
                className="inline-flex items-center justify-center text-white text-[18px] font-medium px-[20px] rounded-[22px] hover:opacity-90 transition-opacity text-decoration-none"
                style={{
                  height: 42,
                  backgroundImage:
                    "linear-gradient(225.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)",
                  boxShadow: "0px 0px 7px 0px white",
                }}
              >
                Explore More →
              </Link>
            </div>
          </div>

          {/* Right: Diamond-shaped industry photo (preserve PNG transparency) */}
          <div
            className="absolute top-0"
            style={{ right: 0, width: 526, height: 353 }}
          >
            <Image
              src={card.photo}
              alt={card.title}
              width={526}
              height={353}
              className="absolute top-0 left-0"
              style={{
                width: 526,
                height: 353,
                ...(card.flipPhoto ? { transform: "scaleX(-1)" } : {}),
              }}
            />
          </div>
        </div>
      ))}

      {/* Bottom centered button */}
      <div className="flex justify-center" style={{ paddingTop: 40, paddingBottom: 50 }}>
        <Link
          href="#"
          className="inline-flex items-center justify-center text-white text-[18px] font-medium px-[20px] rounded-[22px] hover:opacity-90 transition-opacity text-decoration-none"
          style={{
            height: 42,
            backgroundImage:
              "linear-gradient(225.9deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)",
            boxShadow: "0px 0px 7px 0px white",
          }}
        >
          Explore More →
        </Link>
      </div>
    </section>
  );
}
