"use client";

import Image from "next/image";
import Link from "next/link";
import ContactFloating from "../ContactFloating/ContactFloating.jsx";

export default function Hero() {
  return (
    <section id="hero-section" className="hero-wrapper">
      <div className="hero-bg-art" aria-hidden="true">
        <Image
          src="/images/hero-bg-optimized.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hero-bg-image"
          priority
          quality={85}
        />
      </div>
      <div className="hero-desktop-logo" aria-hidden="true">
        <Image
          src="/images/New logo.png"
          alt=""
          width={180}
          height={180}
          className="hero-desktop-logo-image"
          priority
        />
      </div>
      <div className="hero-mobile-logo" aria-hidden="true">
        <Image
          src="/images/New logo.png"
          alt=""
          width={180}
          height={180}
          className="hero-mobile-logo-image"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="hero-content container">
        <div className="hero-heading-desktop" aria-hidden="true">
          <Image
            src="/images/Hero text.png"
            alt=""
            width={2048}
            height={615}
            className="hero-heading-desktop-image"
            priority
          />
        </div>
        <div className="hero-heading-mobile" aria-hidden="true">
          <Image
            src="/images/Criminal Law Specialised Multi-disciplinary Law Chambers.svg"
            alt=""
            width={466}
            height={167}
            className="hero-heading-mobile-image"
            priority
          />
        </div>

        <div className="hero-cta-group">
          <Link href="/expertise" className="hero-btn primary">
            Practice Areas →
          </Link>
        </div>


      </div>

      <ContactFloating />

    </section>
  );
}
