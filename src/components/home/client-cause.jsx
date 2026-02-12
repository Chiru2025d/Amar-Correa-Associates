"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Culture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Detect mobile viewport
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
        "… designed and embraced, that drives the Firm's Associates to focus on the Client's cause with unwavering commitment.",
    },
    {
      title: <>Our Core<br />Services</>,
      icon: "/icons/services.svg",
      desc:
        "… comprises all levels and all platforms of a criminal litigation. Beginning with prelitigation counsel and guidance and progressing through the litigation towards its closure.",
    },
    {
      title: <>Our Core<br />Expertise</>,
      icon: "/icons/expertise.svg",
      desc:
        (<>… being Criminal Law, <span style={{ color: '#4B4F58' }}><span style={{ fontFamily: "'Be Vietnam', sans-serif", fontWeight: 593 }}>ACA</span><span style={{ fontWeight: 400 }}>Juris</span></span> is noted as having familiarity with arduous criminal litigations and recognised as Criminal Law Attorneys.</>),
    },
    {
      title: <>Across the<br />Board</>,
      icon: "/icons/board.svg",
      desc:
        "… areas of Criminal Law is our specialisation. Yet we are multidisciplinary, providing services in Family and Matrimonial Laws and other allied areas.",
    },
  ];

  /* 👀 Viewport detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* Auto rotate cards when visible */
  useEffect(() => {
    if (!isVisible || isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [isVisible, isMobile, cards.length]);


  return (
    <section className="culture-section" ref={sectionRef}>
      <h2 className="culture-heading">
        Driven by a culture committed to our client’s cause
      </h2>

      {/* Mobile: Show static card images */}
      {isMobile ? (
        <div className="culture-mobile-images">
          <Image src="/images/A Core Culture.png" alt="A Core Culture" width={720} height={840} className="culture-mobile-card" />
          <Image src="/images/A Core Services.png" alt="A Core Services" width={720} height={840} className="culture-mobile-card" />
          <Image src="/images/Across the Board.png" alt="Across the Board" width={720} height={840} className="culture-mobile-card" />
          <Image src="/images/Our Core Expertise.png" alt="Our Core Expertise" width={720} height={840} className="culture-mobile-card" />
        </div>
      ) : (
        /* Desktop: Show interactive cards - Original */
        <div className="culture-outer">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`culture-card ${activeIndex === index ? "active" : ""}`}
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

              <div className="active-right">
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
