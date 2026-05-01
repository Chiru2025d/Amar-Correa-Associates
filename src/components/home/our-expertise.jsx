"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const aopItems = [
  {
    title: "Quashing Petitions – Inherent Powers",
    desc: "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent power under Section 482 of the CrPC, may quash criminal proceedings.",
    banner: "/Banner/Frame 1984078289.png",
  },
  {
    title: "Bail",
    desc: "Protection from being arrested is the first and foremost legal relief desired by an individual facing a criminal allegation. We handle bail at all levels.",
    banner: "/Banner/Frame 1984078290.png",
  },
  {
    title: "CBI Prosecutions – Defence Of",
    desc: "Major financial scams and frauds are very often investigated by the Central Bureau of Investigation – CBI. We provide structured defence in such prosecutions.",
    banner: "/Banner/Frame 1984078291.png",
  },
  {
    title: "Frauds – Financial, Business & Bank",
    desc: "ACAJuris' practice over the years has included representations and appearances in cases involving financial, business, and banking frauds at all stages.",
    banner: "/Banner/Frame 1984078292.png",
  },
  {
    title: "Look Out Circular | Passport Related Cases",
    desc: "Look Out Circular – LOC is a measure invoked by the investigation agency in an ongoing investigation to prevent an accused or suspect from leaving the country.",
    banner: "/Banner/Frame 1984078293.png",
  },
  {
    title: "Sexual Harassment At Workplace",
    desc: "ACAJuris' exposure to practice over the years includes a wide range of cases in this area, with representation for both complainants and respondents.",
    banner: "/Banner/Frame 1984078294.png",
  },
  {
    title: "Defamation Laws",
    desc: "Defamation – acts that harm a person's reputation. This covers written (libel) and spoken (slander) statements. We handle criminal and civil defamation cases.",
    banner: "/Banner/Frame 1984078295.png",
  },
  {
    title: "Narcotic Drugs",
    desc: "The Narcotics Drugs and Psychotropic Substances Act, 1985 is the primary legislation governing narcotic drug offences. We represent clients at all stages.",
    banner: "/Banner/Frame 1984078296.png",
  },
  {
    title: "Matrimonial & Family Laws",
    desc: "We take up the cause of both women and men – women who are victims of domestic abuse, and men who are victims of misuse of matrimonial laws.",
    banner: "/Banner/Frame 1984078298.png",
  },
  {
    title: "Cheque Dishonour Cases – NI ACT",
    desc: "Dishonour of cheques attracts a criminal offence in India under the Negotiable Instruments Act. We handle prosecution and defence in such matters.",
    banner: "/Banner/Frame 1984078299.png",
  },
  {
    title: "Violations Under Information Technology",
    desc: "Otherwise known as cyber crime, the Information Technology Act makes penal certain acts of computer-related violations and online frauds.",
    banner: "/Banner/Frame 1984078300.png",
  },
  {
    title: "Prevention Of Corruption",
    desc: "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act spans over several decades of dedicated practice.",
    banner: "/Banner/Frame 1984078301.png",
  },
  {
    title: "Prevention Of Money Laundering",
    desc: "PMLA – an act to prevent money-laundering by making penal all actions of indulging in any processes or activities connected with the proceeds of crime.",
    banner: "/Banner/Frame 1984078302.png",
  },
  {
    title: "Company Law Prosecutions – SFIO",
    desc: "Offences under the Companies Act 2013 are investigated and prosecuted by the Serious Fraud Investigation Office – SFIO.",
    banner: "/Banner/Frame 1984078303.png",
  },
  {
    title: "Copyright & Trademark Violation",
    desc: "Violations of trade marks and/or copyrights can lead to prosecutions under the Trade Marks Act 1999 and the Copyright Act 1957.",
    banner: "/Banner/Frame 1984078304.png",
  },
  {
    title: "Extradition Laws",
    desc: "Cases arising out of Extradition Laws are rare. As of 2023, India has extradition treaties in force with several countries. We advise on such matters.",
    banner: "/Banner/Frame 1984078305.png",
  },
  {
    title: "Motor Vehicle Offences",
    desc: "Cases arising from motor vehicle accidents include death by negligence, rash driving, and hit-and-run offences. We represent both prosecution and defence.",
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
          <Link href="/expertise" className="expertise-view-more-btn">
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
              style={{ objectFit: "cover", transform: "scaleY(-1)" }}
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
