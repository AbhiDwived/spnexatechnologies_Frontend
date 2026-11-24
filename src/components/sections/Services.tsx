"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceTabs } from "@/data/services";
import { SERVICE_ILLUSTRATIONS } from "@/components/sections/service";
import { UxIllustration } from "@/components/sections/service/UxIllustration";

export function Services() {
  const [activeTabId, setActiveTabId] = useState(serviceTabs[0].id);
  const activeTab = serviceTabs.find((tab) => tab.id === activeTabId) ?? serviceTabs[0];
  const Illustration = SERVICE_ILLUSTRATIONS[activeTab.slug] ?? UxIllustration;

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title section-title--white">Our Services</h2>
        <p className="section-sub section-sub--white">
          We create bold and impactful brands that make a lasting impression on the world
        </p>

        <div className="services__tabs">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab${tab.id === activeTabId ? " tab--active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services__panel">
          <div className="services__panel-text">
            <h3>{activeTab.heading}</h3>
            <p>{activeTab.description}</p>
            <Link href={`/services/${activeTab.slug}`} className="btn btn--outline-pill">
              {activeTab.ctaLabel} <span className="btn__arrow-circle">&rarr;</span>
            </Link>
          </div>
          <div className="services__panel-img" aria-hidden="true">
            <Illustration />
          </div>
        </div>
      </div>
      <div className="services__shape" aria-hidden="true" />
    </section>
  );
}
