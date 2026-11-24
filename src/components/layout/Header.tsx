"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, heroSocialLinks } from "@/data/navigation";
import { SocialIcon } from "@/components/icons/SocialIcons";

interface HeaderProps {
  /** Homepage-only hero banner ("Transform your Ideas..."). Other pages
   * (e.g. /services/[slug]) render just the logo/nav bar and supply their
   * own hero section instead. Defaults to true for the homepage. */
  showHero?: boolean;
}

export function Header({ showHero = true }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`header${showHero ? "" : " header--compact"}`} id="home">
      <div className="container header__inner">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo.png"
            alt="SP Nexa Technologies"
            width={260}
            height={64}
            className="logo__mark"
            priority
          />
        </Link>

        <nav className={`nav${isNavOpen ? " nav--open" : ""}`} id="siteNav">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/#home"
                ? pathname === "/"
                : link.children
                  ? link.children.some((child) => pathname.startsWith(child.href.split("/").slice(0, 2).join("/")))
                  : !link.href.startsWith("/#") && !link.href.startsWith("#")
                    ? pathname === link.href
                    : Boolean(link.active);

            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav__link${isActive ? " nav__link--active" : ""}`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div className="nav__item" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link${isActive ? " nav__link--active" : ""}`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </Link>
                <div className="nav__dropdown">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`nav__dropdown-link${pathname === child.href ? " nav__dropdown-link--active" : ""}`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className={`nav__toggle${isNavOpen ? " nav__toggle--active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {showHero && (
        <div className="hero container">
          <div className="hero__content">
            <p className="hero__eyebrow">SYSTEMS | NETWORKS | SOLUTIONS</p>
            <h1 className="hero__title">
              Transform your <span className="text-blue">Ideas</span> Into{" "}
              <span className="text-blue">High-Performance</span> Website and
              Mobile App
            </h1>
            <p className="hero__desc">
              SP Nexa Technologies is a leading mobile app and website
              development company dedicated to delivering exceptional client
              experiences. Our expert team brings innovation and skill to
              every project, staying ahead of the competition to create
              solutions that drive success for our clients and partners.
            </p>

            <div className="hero__badges">
              <a href="tel:+918433208146" className="badge-pill">
                <Image
                  src="/assets/images/flag-india.png"
                  alt="India"
                  width={22}
                  height={15}
                  className="badge-pill__flag"
                />
                +91 8433208146
              </a>
              <a
                href="mailto:info@spnexatechnologies.com"
                className="badge-pill badge-pill--wide"
              >
                info@spnexatechnologies.com
              </a>
            </div>

            <Link href="/#contact" className="btn btn--primary hero__cta">
              Get In Touch &rarr;
            </Link>

            <div className="hero__social">
              {heroSocialLinks.map((social) => (
                <a key={social.icon} href={social.href} aria-label={social.label} className="social-dot">
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__stripe hero__stripe--1" />
            <div className="hero__stripe hero__stripe--2" />
            <div className="hero__photo">
              <Image
                src="/assets/images/hero-woman.png"
                alt=""
                width={300}
                height={300}
                priority
              />
            </div>
            <span className="dot dot--blue dot--1" />
            <span className="dot dot--blue dot--2" />
            <span className="dot dot--blue dot--3" />
            <span className="dot dot--black dot--1" />
          </div>
        </div>
      )}
    </header>
  );
}
