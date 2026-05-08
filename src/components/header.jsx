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
            <button
              className={`mobile-parent-link navItem ${openParent === "expertise" ? "active" : ""}`}
              onClick={() =>
                setOpenParent(openParent === "expertise" ? null : "expertise")
              }
            >
              Expertise
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

            {/* Mobile Accordion */}
            <div className={`mobile-accordion ${openParent === "expertise" ? "open" : ""}`}>

              {/* Corporate Law */}
              <div className="mobile-submenu">
                <div className="mobile-submenu-items open">
                  <Link href="/expertise/quashing-petitions-inherent-powers">Quashing Petitions – Inherent Powers</Link>
                  <Link href="/expertise/bail">Bail</Link>
                  <Link href="/expertise/cbi-prosecutions-defence-of">CBI Prosecutions – Defence Of</Link>
                  <Link href="/expertise/frauds-financial-business-bank">Frauds – Financial, Business & Bank</Link>
                  <Link href="/expertise/look-out-circular-passport-related">Look Out Circular | Passport Related</Link>
                  <Link href="/expertise/sexual-harassment-at-workplace">Sexual Harassment at Workplace</Link>
                  <Link href="/expertise/defamation-laws">Defamation Laws</Link>
                  <Link href="/expertise/narcotic-drugs">Narcotic Drugs</Link>
                  <Link href="/expertise/matrimonial-family-laws">Matrimonial & Family Laws</Link>
                  <Link href="/expertise/cheque-dishonour-cases-ni">Cheque Dishonour Cases – NI</Link>
                  <Link href="/expertise/violations-under-information-technology">Violations Under Information Technology</Link>
                  <Link href="/expertise/prevention-of-corruption">Prevention of Corruption</Link>
                  <Link href="/expertise/prevention-of-money-laundering">Prevention of Money Laundering</Link>
                  <Link href="/expertise/company-law-prosecutions-sfio">Company Law Prosecutions – SFIO</Link>
                  <Link href="/expertise/copyright-trademark-violation">Copyright & Trademark Violation</Link>
                  <Link href="/expertise/extradition-laws">Extradition Laws</Link>
                  <Link href="/expertise/motor-vehicle-offences">Motor Vehicle Offences</Link>
                </div>
              </div>

            </div>
            <Link
              href="/expertise"
              // className={pathname.startsWith("/expertise") ? "nav-link-active" : ""}
              className={`desktop-only navItem ${pathname.startsWith("/expertise") ? "nav-link-active" : ""}`}
            >
              Expertise
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
                <Link href="/expertise/quashing-petitions-inherent-powers">Quashing Petitions – Inherent Powers</Link>
                <Link href="/expertise/bail">Bail</Link>
                <Link href="/expertise/cbi-prosecutions-defence-of">CBI Prosecutions – Defence Of</Link>
                <Link href="/expertise/frauds-financial-business-bank">Frauds – Financial, Business & Bank</Link>
                <Link href="/expertise/look-out-circular-passport-related">Look Out Circular | Passport Related</Link>
                <Link href="/expertise/sexual-harassment-at-workplace">Sexual Harassment at Workplace</Link>
                <Link href="/expertise/defamation-laws">Defamation Laws</Link>
                <Link href="/expertise/narcotic-drugs">Narcotic Drugs</Link>
                <Link href="/expertise/matrimonial-family-laws">Matrimonial & Family Laws</Link>
              </div>

              <div className="mega-column">
                <Link href="/expertise/cheque-dishonour-cases-ni">Cheque Dishonour Cases – NI</Link>
                <Link href="/expertise/violations-under-information-technology">Violations Under Information Technology</Link>
                <Link href="/expertise/prevention-of-corruption">Prevention of Corruption</Link>
                <Link href="/expertise/prevention-of-money-laundering">Prevention of Money Laundering</Link>
                <Link href="/expertise/company-law-prosecutions-sfio">Company Law Prosecutions – SFIO</Link>
                <Link href="/expertise/copyright-trademark-violation">Copyright & Trademark Violation</Link>
                <Link href="/expertise/extradition-laws">Extradition Laws</Link>
                <Link href="/expertise/motor-vehicle-offences">Motor Vehicle Offences</Link>
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
            Legal Updates
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
