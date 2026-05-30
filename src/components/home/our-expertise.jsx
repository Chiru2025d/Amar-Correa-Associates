"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const aopItems = [
  {
    slug: "quashing-petitions-inherent-powers",
    title: "QUASHING PETITIONS - INHERENT POWERS",
    desc: "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent powers flowing from Section 482 of Cr.P.C - now Section 528 of Bharatiya Nyaya Sakshya Sanhita - may make such orders, to prevent abuse of process of Court or to secure ends of justice.",
    banner: "/Banner/optimized/Frame 1984078289.webp",
  },
  {
    slug: "bail",
    title: "BAIL",
    desc: "Bail is the primary legal relief desired by someone accused of a crime, offering protection from arrest. It is usually advised by lawyers at the stage of FIR registration—the start of a criminal case—or even earlier.",
    banner: "/Banner/optimized/Frame 1984078290.webp",
  },
  {
    slug: "cbi-prosecutions-defence-of",
    title: "CBI PROSECUTIONS - DEFENCE OF",
    desc: "The Central Bureau of Investigation (CBI) is often tasked with probing major financial crimes and scams. The scale of such cases can create systemic biases within the criminal justice process. Effective defence, therefore, requires a meticulous and comprehensive review of the extensive documentation contained in CBI charge sheets.",
    banner: "/Banner/optimized/Frame 1984078291.webp",
  },
  {
    slug: "frauds-financial-business-bank",
    title: "FRAUDS - FINANCIAL, BUSINESS & BANK",
    desc: "ACAJuris has extensive experience in financial, corporate, business, and banking fraud cases, representing both complainants and accused individuals, as well as multinational and Indian companies.",
    banner: "/Banner/optimized/Frame 1984078292.webp",
  },
  {
    slug: "look-out-circular-passport-related",
    title: "LOOK OUT CIRCULAR - PASSPORT RELATED",
    desc: "A Look Out Circular (LOC) is a legal measure issued by investigating agencies or courts during ongoing criminal proceedings to restrict an individual’s travel—either preventing departure from the country or detaining them upon arrival. Passport complications often arise in such cases, as issuance or renewal may be withheld while the matter is pending.",
    banner: "/Banner/optimized/Frame 1984078293.webp",
  },
  {
    slug: "sexual-harassment-at-workplace",
    title: "SEXUAL HARASSMENT AT WORKPLACE",
    desc: "Over the years, ACAJuris has represented both victims and accused, delivering comprehensive professional services",
    banner: "/Banner/optimized/Frame 1984078294.webp",
  },
  {
    slug: "defamation-laws",
    title: "DEFAMATION LAWS",
    desc: "Defamation refers to acts that damage a person’s reputation, whether through written statements (libel) or spoken words (slander).",
    banner: "/Banner/optimized/Frame 1984078295.webp",
  },
  {
    slug: "narcotic-drugs",
    title: "NARCOTIC DRUGS",
    desc: "The NDPS Act, 1985, is India’s primary law governing narcotics and psychotropic offences. Violations are treated as among the most serious crimes, with stringent provisions on remand, custody, bail, and trial procedures.",
    banner: "/Banner/optimized/Frame 1984078296.webp",
  },
  {
    slug: "matrimonial-family-laws",
    title: "MATRIMONIAL AND FAMILY LAWS",
    desc: "ACAJuris advises and represents clients in divorce, alimony, child custody, guardianship, dowry harassment, and domestic violence matters. We also handle recognition and enforcement of foreign court orders in Indian litigation.",
    banner: "/Banner/optimized/Frame 1984078298.webp",
  },
  {
    slug: "cheque-dishonour-cases-ni",
    title: "CHEQUE DISHONOUR CASES - NI ACT",
    desc: "Dishonour of cheques is a criminal offence under India’s Negotiable Instruments Act.",
    banner: "/Banner/optimized/Frame 1984078299.webp",
  },
  {
    slug: "violations-under-information-technology",
    title: "VIOLATIONS UNDER INFORMATION TECHNOLOGY ACT",
    desc: "Commonly termed cybercrime, the Information Technology Act penalizes violations involving computers and the internet.",
    banner: "/Banner/optimized/Frame 1984078300.webp",
  },
  {
    slug: "prevention-of-corruption",
    title: "PREVENTION OF CORRUPTION ACT",
    desc: "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act (P.C.Act) is significant.",
    banner: "/Banner/optimized/Frame 1984078301.webp",
  },
  {
    slug: "prevention-of-money-laundering",
    title: "PREVENTION OF MONEY LAUNDERING ACT (PMLA)",
    desc: "PMLA, an act to prevent money-laundering - which means, actions of indulging in any processes or activities connected with proceeds of crime.",
    banner: "/Banner/optimized/Frame 1984078302.webp",
  },
  {
    slug: "company-law-prosecutions-sfio",
    title: "COMPANY LAW PROSECUTIONS - SFIO",
    desc: "Under the Companies Act 2013, offences involving fraud—such as concealment of facts, abuse of position, deceit, or false statements and accounts—are investigated and prosecuted by the Serious Fraud Investigation Office.",
    banner: "/Banner/optimized/Frame 1984078303.webp",
  },
  {
    slug: "copyright-trademark-violation",
    title: "COPYRIGHT AND TRADEMARK VIOLATION",
    desc: "Trademark and copyright violations may result in prosecution under the Trade Marks Act, 1999 and the Copyright Act, 1957.",
    banner: "/Banner/optimized/Frame 1984078304.webp",
  },
  {
    slug: "extradition-laws",
    title: "EXTRADITION LAWS",
    desc: "Extradition cases are uncommon. As of 2023, India had agreements with 12 countries and treaties with 48 others, though fugitives from non‑treaty nations may still be extradited through established procedures. Once extradition is initiated or completed, the provisions of Extradition Laws apply in accordance with the governing agreement, even without a formal treaty.",
    banner: "/Banner/optimized/Frame 1984078305.webp",
  },
  {
    slug: "motor-vehicle-offences",
    title: "MOTOR VEHICLE OFFENCES",
    desc: "Motor vehicle accident cases are common, but death by negligence under Section 304‑A IPC carries serious consequences. Though legally considered less grave, conviction can still result in a minimum of six months’ imprisonment, as mandated by the Supreme Court.",
    banner: "/Banner/optimized/Frame 1984078306.webp",
  },
  {
    slug: "other-areas",
    title: "OTHER AREAS -",
    desc: "Over 25 years of criminal practice, ACA Juris has also dealt with offences under various statutes, including the Wild Life Protection Act, Juvenile Justice Act, POCSO Act, Drugs and Cosmetics Act, and other labour and employment statutes.",
    banner: "/Banner/optimized/Frame 1984078306.webp",
  },
];

const slsItems = [
  {
    slug: "frauds-financial-business-bank",
    title: "White Collar Crime Defence",
    desc: "Representing clients facing complex financial fraud, corporate misconduct and economic offence investigations by the CBI, ED, or SFIO.",
    banner: "/Banner/optimized/Frame 1984078292.webp",
  },
  {
    slug: "violations-under-information-technology",
    title: "Cyber Crime Defence",
    desc: "Strategic defence in matters involving digital fraud, data theft, hacking and offences under the Information Technology Act, 2000.",
    banner: "/Banner/optimized/Frame 1984078293.webp",
  },
  {
    slug: "narcotic-drugs",
    title: "NDPS & Narcotics Defence",
    desc: "Expert representation in cases under the Narcotic Drugs and Psychotropic Substances Act, 1985, from bail applications to trial and appeals.",
    banner: "/Banner/optimized/Frame 1984078294.webp",
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
          <h3>Practice Areas</h3>
          <p className="expertise-lead">
            Criminal Law Specialised Multi-Disciplinary Law Firm.
          </p>
          <Link href="/expertise" className="hero-btn primary expertise-view-more-btn">
            View All
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
              <Link href={`/expertise/${current.slug}`} className="expertise-card-read-more">
                Read More
              </Link>
              <div className="expertise-arrow-group">
                <button className="expertise-nav-btn" onClick={prev} aria-label="Previous">
                <span aria-hidden="true">←</span>
              </button>
                <button className="expertise-nav-btn" onClick={next} aria-label="Next">
                <span aria-hidden="true">→</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
