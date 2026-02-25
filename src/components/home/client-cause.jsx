"use client";

import { useEffect, useRef, useState } from "react";

export default function Culture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const cards = [
    {
      title: <>A Core<br />Culture</>,
      icon: "/icons/culture.svg",
      desc:
        "… crafted and embraced- that drives the Firm’s Associates to pursue each client's cause with unwavering commitment.",
    },
    {
      title: <>Our Core<br />Expertise</>,
      icon: "/icons/expertise.svg",
      desc:
        "… being Criminal Law, ACAJuris is noted as having familiarity with arduous criminal litigations and recognised as Criminal Law Attorneys.",
    },
    {
      title: <>Our Core<br />Services</>,
      icon: "/icons/services.svg",
      desc:
        "… cover every stage and platform of criminal litigation—from prelitigation counsel to case closure.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % cards.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isVisible]);


  return (
    <section className="culture-section" ref={sectionRef}>
      <h2 className="culture-heading">
        Driven by a culture committed to our client’s cause
      </h2>

      <div className="culture-outer">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`culture-card ${activeIndex === index ? "active" : ""}`}
          >
            <h3 className="culture-title">{card.title}</h3>

            <div className="culture-hover-box">
              <p>{card.desc}</p>
            </div>

            <div className="culture-icon-wrap">
              <img src={card.icon} alt={card.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="culture-mobile-images">
        <img src="/images/A Core Culture.png" alt="A Core Culture" />
        <img src="/images/Our Core Expertise.png" alt="Our Core Expertise" />
        <img src="/images/A Core Services.png" alt="A Core Services" />
      </div>
    </section>
  );
}
