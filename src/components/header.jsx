"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LatestUpdates from "./latestupdate";
import "../app/globals.css"

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openParent, setOpenParent] = useState(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    document.body.classList.remove("header-visible-padding");

    if (pathname !== "/") {
      setShowHeader(true);
      document.body.classList.add("header-visible-padding");
      return () => {
        document.body.classList.remove("header-visible-padding");
      };
    }
    // // Only for DESKTOP
    // if (window.innerWidth < 1024) {
    //   setShowHeader(true);
    //   document.body.classList.add("header-visible-padding");
    //   return;
    // }
    const heroSection = document.getElementById("hero-section");

    if (!heroSection) {
      setShowHeader(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      },
      { threshold: 0.1}
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
      document.body.classList.remove("header-visible-padding");
    };
  }, [pathname]);

  return (
    // <header className="header">
    <header className={`header ${showHeader ? "header-visible" : "header-hidden"}`}>
      {/* <LatestUpdates /> */}
      <div className="header-inner container">

        <div className="header-left">
          <Link href="/">
            <Image
              src="/images/aca-headerlogo.png"
              alt="ACA Juris Logo"
              width={222}
              height={71}
              className="logo-img"
              // unoptimized
              priority
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 6H21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className="nav-item-with-dropdown expertise-dropdown">
            {/* Parent */}
            <div className={`mobile-parent-row ${openParent === "expertise" ? "active" : ""}`}>
              <Link
                href="/expertise"
                className="mobile-parent-link navItem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Areas of Practice
              </Link>
              <button
                type="button"
                className="mobile-dropdown-toggle"
                onClick={() =>
                  setOpenParent(openParent === "expertise" ? null : "expertise")
                }
                aria-expanded={openParent === "expertise"}
                aria-label="Toggle Areas of Practice dropdown"
              >
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 12 8"
                  className="desktop-arrow"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Accordion */}
            <div className={`mobile-accordion ${openParent === "expertise" ? "open" : ""}`}>

              {/* Corporate Law */}
              <div className="mobile-submenu">
                <div className="mobile-submenu-items open">
                  <Link href="/expertise/quashing-petitions-inherent-powers">QUASHING PETITIONS - INHERENT POWERS</Link>
                  <Link href="/expertise/bail">BAIL</Link>
                  <Link href="/expertise/cbi-prosecutions-defence-of">CBI PROSECUTIONS - DEFENCE OF</Link>
                  <Link href="/expertise/frauds-financial-business-bank">FRAUDS - FINANCIAL, BUSINESS & BANK</Link>
                  <Link href="/expertise/look-out-circular-passport-related">LOOK OUT CIRCULAR - PASSPORT RELATED</Link>
                  <Link href="/expertise/sexual-harassment-at-workplace">SEXUAL HARASSMENT AT WORKPLACE</Link>
                  <Link href="/expertise/defamation-laws">DEFAMATION LAWS</Link>
                  <Link href="/expertise/narcotic-drugs">NARCOTIC DRUGS</Link>
                  <Link href="/expertise/matrimonial-family-laws">MATRIMONIAL AND FAMILY LAWS</Link>
                  <Link href="/expertise/cheque-dishonour-cases-ni">CHEQUE DISHONOUR CASES - NI ACT</Link>
                  <Link href="/expertise/violations-under-information-technology">VIOLATIONS UNDER INFORMATION TECHNOLOGY ACT</Link>
                  <Link href="/expertise/prevention-of-corruption">PREVENTION OF CORRUPTION ACT</Link>
                  <Link href="/expertise/prevention-of-money-laundering">PREVENTION OF MONEY LAUNDERING ACT (PMLA)</Link>
                  <Link href="/expertise/company-law-prosecutions-sfio">COMPANY LAW PROSECUTIONS - SFIO</Link>
                  <Link href="/expertise/copyright-trademark-violation">COPYRIGHT AND TRADEMARK VIOLATION</Link>
                  <Link href="/expertise/extradition-laws">EXTRADITION LAWS</Link>
                  <Link href="/expertise/motor-vehicle-offences">MOTOR VEHICLE OFFENCES</Link>
                  <Link href="/expertise/other-areas">OTHER AREAS -</Link>
                </div>
              </div>

            </div>
            <Link
              href="/expertise"
              // className={pathname.startsWith("/expertise") ? "nav-link-active" : ""}
              className={`desktop-only navItem ${pathname.startsWith("/expertise") ? "nav-link-active" : ""}`}
            >
              Areas of Practice
              <svg
                width="10"
                height="6"
                viewBox="0 0 12 8"
                className="desktop-arrow"
                aria-hidden="true"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

            </Link>
            {/* Mega Menu */}
            <div className="mega-menu desktop-only">
              <div className="mega-column">
                <Link href="/expertise/quashing-petitions-inherent-powers">QUASHING PETITIONS - INHERENT POWERS</Link>
                <Link href="/expertise/bail">BAIL</Link>
                <Link href="/expertise/cbi-prosecutions-defence-of">CBI PROSECUTIONS - DEFENCE OF</Link>
                <Link href="/expertise/frauds-financial-business-bank">FRAUDS - FINANCIAL, BUSINESS & BANK</Link>
                <Link href="/expertise/look-out-circular-passport-related">LOOK OUT CIRCULAR - PASSPORT RELATED</Link>
                <Link href="/expertise/sexual-harassment-at-workplace">SEXUAL HARASSMENT AT WORKPLACE</Link>
                <Link href="/expertise/defamation-laws">DEFAMATION LAWS</Link>
                <Link href="/expertise/narcotic-drugs">NARCOTIC DRUGS</Link>
                <Link href="/expertise/matrimonial-family-laws">MATRIMONIAL AND FAMILY LAWS</Link>
              </div>

              <div className="mega-column">
                <Link href="/expertise/cheque-dishonour-cases-ni">CHEQUE DISHONOUR CASES - NI ACT</Link>
                <Link href="/expertise/violations-under-information-technology">VIOLATIONS UNDER INFORMATION TECHNOLOGY ACT</Link>
                <Link href="/expertise/prevention-of-corruption">PREVENTION OF CORRUPTION ACT</Link>
                <Link href="/expertise/prevention-of-money-laundering">PREVENTION OF MONEY LAUNDERING ACT (PMLA)</Link>
                <Link href="/expertise/company-law-prosecutions-sfio">COMPANY LAW PROSECUTIONS - SFIO</Link>
                <Link href="/expertise/copyright-trademark-violation">COPYRIGHT AND TRADEMARK VIOLATION</Link>
                <Link href="/expertise/extradition-laws">EXTRADITION LAWS</Link>
                <Link href="/expertise/motor-vehicle-offences">MOTOR VEHICLE OFFENCES</Link>
                <Link href="/expertise/other-areas">OTHER AREAS -</Link>
              </div>
            </div>
          </div>

          <Link
            href="/professional-services"
            className={pathname.startsWith("/professional-services") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Professional Services
          </Link>

          <Link
            href="/legalupdates"
            className={pathname.startsWith("/legalupdates") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Legal Updates & Blog
          </Link>

          {/* ✅ REAL CONTACT PAGE */}
          <Link
            href="/contact"
            className={pathname.startsWith("/contact") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
