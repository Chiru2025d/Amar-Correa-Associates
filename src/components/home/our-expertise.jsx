"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const aopItems = [
  {
    title: "Quashing Petitions – Inherent Powers",
    desc: "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent powers flowing from Section 482 of Cr.P.C - now Section 528 of Bharatiya Nyaya Sakshya Sanhita - may make such orders, to prevent abuse of process of Court or to secure ends of justice.",
    banner: "/Banner/Frame 1984078289.png",
  },
  {
    title: "Bail",
    desc: "Bail is the primary legal relief desired by someone accused of a crime, offering protection from arrest. It is usually advised by lawyers at the stage of FIR registration—the start of a criminal case—or even earlier.",
    banner: "/Banner/Frame 1984078290.png",
  },
  {
    title: "CBI Prosecutions – Defence Of",
    desc: "The Central Bureau of Investigation (CBI) is often tasked with probing major financial crimes and scams. The scale of such cases can create systemic biases within the criminal justice process. Effective defence, therefore, requires a meticulous and comprehensive review of the extensive documentation contained in CBI charge sheets.",
    banner: "/Banner/Frame 1984078291.png",
  },
  {
    title: "Frauds – Financial, Business & Bank",
    desc: "ACAJuris has extensive experience in financial, corporate, business, and banking fraud cases, representing both complainants and accused individuals, as well as multinational and Indian companies.",
    banner: "/Banner/Frame 1984078292.png",
  },
  {
    title: "Look Out Circular | Passport Related Cases",
    desc: "A Look Out Circular (LOC) is a legal measure issued by investigating agencies or courts during ongoing criminal proceedings to restrict an individual’s travel—either preventing departure from the country or detaining them upon arrival. Passport complications often arise in such cases, as issuance or renewal may be withheld while the matter is pending.",
    banner: "/Banner/Frame 1984078293.png",
  },
  {
    title: "Sexual Harassment At Workplace",
    desc: "Over the years, ACAJuris has represented both victims and accused, delivering comprehensive professional services",
    banner: "/Banner/Frame 1984078294.png",
  },
  {
    title: "Defamation Laws",
    desc: "Defamation refers to acts that damage a person’s reputation, whether through written statements (libel) or spoken words (slander).",
    banner: "/Banner/Frame 1984078295.png",
  },
  {
    title: "Narcotic Drugs",
    desc: "The NDPS Act, 1985, is India’s primary law governing narcotics and psychotropic offences. Violations are treated as among the most serious crimes, with stringent provisions on remand, custody, bail, and trial procedures.",
    banner: "/Banner/Frame 1984078296.png",
  },
  {
    title: "Matrimonial & Family Laws",
    desc: "ACAJuris advises and represents clients in divorce, alimony, child custody, guardianship, dowry harassment, and domestic violence matters. We also handle recognition and enforcement of foreign court orders in Indian litigation.",
    banner: "/Banner/Frame 1984078298.png",
  },
  {
    title: "Cheque Dishonour Cases – NI ACT",
    desc: "Dishonour of cheques is a criminal offence under India’s Negotiable Instruments Act.",
    banner: "/Banner/Frame 1984078299.png",
  },
  {
    title: "Violations Under Information Technology",
    desc: "Commonly termed cybercrime, the Information Technology Act penalizes violations involving computers and the intenet.",
    banner: "/Banner/Frame 1984078300.png",
  },
  {
    title: "Prevention Of Corruption",
    desc: "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act (P.C.Act) is significant.",
    banner: "/Banner/Frame 1984078301.png",
  },
  {
    title: "Prevention Of Money Laundering ACT (PMLA)",
    desc: "PMLA, an act to prevent money-laundering - which means, actions of indulging in any processes or activities connected with proceeds of crime.",
    banner: "/Banner/Frame 1984078302.png",
  },
  {
    title: "Company Law Prosecutions – SFIO",
    desc: "Under the Companies Act 2013, offences involving fraud—such as concealment of facts, abuse of position, deceit, or false statements and accounts—are investigated and prosecuted by the Serious Fraud Investigation Office.",
    banner: "/Banner/Frame 1984078303.png",
  },
  {
    title: "Copyright & Trademark Violation",
    desc: "Trademark and copyright violations may result in prosecution under the Trade Marks Act, 1999 and the Copyright Act, 1957.",
    banner: "/Banner/Frame 1984078304.png",
  },
  {
    title: "Extradition Laws",
    desc: "Extradition cases are uncommon. As of 2023, India had agreements with 12 countries and treaties with 48 others, though fugitives from non‑treaty nations may still be extradited through established procedures. Once extradition is initiated or completed, the provisions of Extradition Laws apply in accordance with the governing agreement, even without a formal treaty.",
    banner: "/Banner/Frame 1984078305.png",
  },
  {
    title: "Motor Vehicle Offences",
    desc: "Motor vehicle accident cases are common, but death by negligence under Section 304‑A IPC carries serious consequences. Though legally considered less grave, conviction can still result in a minimum of six months’ imprisonment, as mandated by the Supreme Court.",
    banner: "/Banner/Frame 1984078306.png",
  },
];

const slsItems = [
  {
    title: "White Collar Crime Defence",
    desc: "Representing clients facing complex financial fraud, corporate misconduct and economic offence investigations by the CBI, ED, or SFIO.",
    banner: "/Banner/Frame 1984078292.png",
  },
  {
    title: "Cyber Crime Defence",
    desc: "Strategic defence in matters involving digital fraud, data theft, hacking and offences under the Information Technology Act, 2000.",
    banner: "/Banner/Frame 1984078293.png",
  },
  {
    title: "NDPS & Narcotics Defence",
    desc: "Expert representation in cases under the Narcotic Drugs and Psychotropic Substances Act, 1985, from bail applications to trial and appeals.",
    banner: "/Banner/Frame 1984078294.png",
  },
];

export default function ExpertisePreview() {
  const [activeTab, setActiveTab] = useState("aop");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const items = activeTab === "aop" ? aopItems : slsItems;
  const current = items[index];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("next");
      setIndex((i) => (i + 1) % items.length);
      setAnimKey((k) => k + 1);
    }, 8000);
  };

  // Preload all banner images on mount so carousel transitions are instant
  useEffect(() => {
    const allBanners = [...new Set([...aopItems, ...slsItems].map((i) => i.banner))];
    allBanners.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, items.length]);

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + items.length) % items.length);
    setAnimKey((k) => k + 1);
    resetTimer();
  };
  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % items.length);
    setAnimKey((k) => k + 1);
    resetTimer();
  };
  const switchTab = (tab) => { setActiveTab(tab); setIndex(0); setDirection("next"); setAnimKey((k) => k + 1); };

  return (
    <section className="expertise-preview">
      <div className="expertise-inner container">
        <div className="expertise-left">
          <h3>Our Expertise</h3>
          <p className="expertise-lead">
            Criminal Law Specialised Multi-Disciplinary Law Firm.
          </p>
          <Link href="/expertise" className="hero-btn primary expertise-view-more-btn">
            View More Practice Areas
          </Link>
        </div>

        <div className="expertise-content-card">
          <div
            key={animKey}
            className={`expertise-card-bg expertise-bg-anim-${direction}`}
          >
            <Image
              src={current.banner}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
          <div className="expertise-card-content">
            <div className="expertise-tabs">
              <button
                className={`expertise-tab${activeTab === "aop" ? " exp-tab-active" : ""}`}
                onClick={() => switchTab("aop")}
              >
                Areas of Practice
              </button>
              <button
                className={`expertise-tab expertise-tab-sls${activeTab === "sls" ? " exp-tab-active" : ""}`}
                onClick={() => switchTab("sls")}
              >
                Specialized Legal Services
              </button>
            </div>
            <div className="expertise-tab-divider" />
            <div
              key={animKey}
              className={`expertise-slide expertise-slide-anim-${direction}`}
            >
              <h4 className="expertise-slide-title">{current.title}</h4>
              <p className="expertise-slide-desc">{current.desc}</p>
            </div>
            <div className="expertise-nav">
              <button className="expertise-nav-btn" onClick={prev} aria-label="Previous">←</button>
              <button className="expertise-nav-btn" onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
