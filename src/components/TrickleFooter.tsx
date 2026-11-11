"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TrickleFooter() {
  const companyLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "Career", href: "#" },
    { name: "Contact Us", href: "/contact" },
    { name: "Case Study", href: "/portfolio" },
    { name: "Blog", href: "/blogs" },
    { name: "Free Quote", href: "/contact" },
  ];

  const devServices = [
    { name: "App Development", href: "/app-development" },
    { name: "AI Development", href: "#" },
    { name: "Chatbot Development", href: "#" },
    { name: "Software Development", href: "#" },
    { name: "Digital Product Engineering", href: "#" },
    { name: "Blockchain Testing Services", href: "#" },
  ];

  const advanceTech = [
    { name: "Blockchain", href: "#" },
    { name: "Web3", href: "#" },
    { name: "Artificial Intelligence Integration", href: "#" },
    { name: "Internet of Things", href: "#" },
    { name: "Machine Learning", href: "#" },
    { name: "DevOps Services Company", href: "#" },
  ];

  const columnHeading = (title: string) => (
    <div className="mb-[37px]">
      <p className="text-white text-[16px] font-normal mb-[9px]">{title}</p>
      <Image src="/images/footer-line.svg" alt="" width={60} height={1} />
    </div>
  );

  const linkItem = (name: string, href: string, idx: number) => (
    <li key={idx} className="mb-[9px]">
      <Link href={href} className="text-white text-[16px] font-normal hover:text-blue-200 transition-colors text-decoration-none">
        {name}
      </Link>
    </li>
  );

  return (
    <footer>
      {/* Main Footer Body */}
      <div
        className="px-[100px] py-[50px]"
        style={{ background: "linear-gradient(231.3deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Company */}
          <div>
            {columnHeading("Company")}
            <ul className="list-unstyled p-0 m-0">
              {companyLinks.map((item, idx) => linkItem(item.name, item.href, idx))}
            </ul>
          </div>

          {/* Column 2: Development Services */}
          <div>
            {columnHeading("Development Services")}
            <ul className="list-unstyled p-0 m-0">
              {devServices.map((item, idx) => linkItem(item.name, item.href, idx))}
            </ul>
          </div>

          {/* Column 3: Advance Technologies */}
          <div>
            {columnHeading("Advance Technologies")}
            <ul className="list-unstyled p-0 m-0">
              {advanceTech.map((item, idx) => linkItem(item.name, item.href, idx))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            {columnHeading("Contact Us")}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-2 text-white text-[16px]">
                <i className="bi bi-envelope text-sm" />
                <a href="mailto:info@tricklesolutions.com" className="text-white hover:text-blue-200 text-decoration-none">
                  info@tricklesolutions.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Image src="/images/flag-india.png" alt="India" width={28} height={20} className="object-cover" />
                <a href="tel:+919252184451" className="text-white text-[16px] font-semibold hover:text-blue-200 text-decoration-none">
                  +91 925 218-4451
                </a>
              </div>

              {/* Follow Us */}
              <div>
                <Image src="/images/footer-line.svg" alt="" width={60} height={1} className="mb-3" />
                <p className="text-white text-[16px] mb-3">Follow Us on</p>
                <Image src="/images/footer-line.svg" alt="" width={60} height={1} className="mb-4" />
                <div className="flex items-center gap-4">
                  <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
                    <Image src="/images/footer-facebook.svg" alt="Facebook" width={28} height={28} />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
                    <Image src="/images/footer-instagram.svg" alt="Instagram" width={28} height={28} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                    <Image src="/images/footer-linkedin.svg" alt="LinkedIn" width={28} height={28} />
                  </a>
                  <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform">
                    <Image src="/images/footer-youtube.svg" alt="YouTube" width={28} height={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo at bottom — exact from Figma: white rounded box */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-[20px] text-decoration-none hover:shadow-lg transition-all"
          >
            <Image src="/images/trickle-logo.png" alt="Trickle Solutions" width={52} height={49} className="object-contain" />
            <span className="text-[#165ea6] text-[16px] font-semibold uppercase">TRICKLE SOLUTIONS</span>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-[100px] py-0 border-t border-white h-[100px] flex items-center justify-between"
        style={{ background: "linear-gradient(195deg, rgb(29,51,74) 29.8%, rgb(22,94,166) 77.6%)" }}
      >
        <p className="text-white text-[15px] font-normal m-0">© 2026 | All rights reserved</p>
        <div className="flex items-center gap-2">
          <i className="bi bi-exclamation-triangle text-white text-sm" />
          <span className="text-white text-[15px] uppercase">SCAM ALERT :-</span>
        </div>
        <a href="#" className="text-white text-[15px] hover:text-blue-200 text-decoration-none">
          Term &amp; Condition.Privacy Policy
        </a>
      </div>
    </footer>
  );
}
