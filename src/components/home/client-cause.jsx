"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Culture() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect tablet/mobile viewport for simplified image-card layout
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      title: <>A Core<br />Culture</>,
      icon: "/icons/culture.svg",
      desc:
        "crafted and embraced - that drives the Chambers' Associates to pursue each client's cause with unwavering commitment.",
    },
    {
      title: <>Our Core<br />Expertise</>,
      icon: "/icons/expertise.svg",
      desc:
        "being Criminal Law, ACAJuris is noted as having familiarity with arduous criminal litigations and recognised as Criminal Law Attorneys.",
    },
    {
      title: <>Our Core<br />Services</>,
      icon: "/icons/services.svg",
      desc:
        "cover every stage and platform of criminal litigation - from pre-litigation counsel to case closure up to the stage of the High Court.",
    },
  ];

  return (
    <section className="culture-section">
      <h2 className="culture-heading">
        Driven by a culture committed to our client’s cause
      </h2>

      {/* Mobile: Show static card images */}
      {isMobile ? (
        <div className="culture-mobile-images">
          <Image src="/images/A Core Culture.png" alt="A Core Culture" width={720} height={840} className="culture-mobile-card" />
          <Image src="/images/Our Core Expertise.png" alt="Our Core Expertise" width={720} height={840} className="culture-mobile-card" />
          <Image src="/images/A Core Services.png" alt="A Core Services" width={720} height={840} className="culture-mobile-card" />
        </div>
      ) : (
        /* Desktop: Show interactive cards - Original */
        <div className="culture-outer">
        {cards.map((card, index) => (
          <div
            key={index}
            className="culture-card active"
          >
            {/* NORMAL STATE */}
            <div className="card-normal">
              <div className="normal-inner">
                <p>{card.desc}</p>
              </div>
            </div>

            {/* ACTIVE STATE */}
            <div className="card-active">
              <div className="active-left">
                <h3 className="culture-title">{card.title}</h3>
                <div className="culture-icon-wrap">
                     <img src={card.icon} alt={card.title} />
                </div>
              </div>

              <div className="active-right culture-hover-box">
                <p>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      )}
    </section>
  );
}
