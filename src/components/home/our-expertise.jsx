"use client";

import Link from "next/link";
import { useState } from "react";

const aopItems = [
  {
    title: "Quashing Petitions – Inherent Powers",
    desc: "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent powers under Section 482 CrPC, may quash criminal proceedings.",
  },
  {
    title: "Bail & Anticipatory Bail",
    desc: "Securing pre-arrest protection or post-arrest release through strategic applications before the Sessions Court, High Court, or Supreme Court.",
  },
  {
    title: "Criminal Appeals & Revisions",
    desc: "Challenging convictions, sentences, or acquittals before the High Court and Supreme Court of India to safeguard the client's constitutional rights.",
  },
];

const slsItems = [
  {
    title: "White Collar Crime Defence",
    desc: "Representing clients facing complex financial fraud, corporate misconduct and economic offence investigations by the CBI, ED, or SFIO.",
  },
  {
    title: "Cyber Crime Defence",
    desc: "Strategic defence in matters involving digital fraud, data theft, hacking and offences under the Information Technology Act, 2000.",
  },
  {
    title: "NDPS & Narcotics Defence",
    desc: "Expert representation in cases under the Narcotic Drugs and Psychotropic Substances Act, 1985, from bail applications to trial and appeals.",
  },
];

export default function ExpertisePreview() {
  const [activeTab, setActiveTab] = useState("aop");
  const [index, setIndex] = useState(0);

  const items = activeTab === "aop" ? aopItems : slsItems;
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const switchTab = (tab) => { setActiveTab(tab); setIndex(0); };

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
          <div className="expertise-slide">
            <h4 className="expertise-slide-title">{current.title}</h4>
            <p className="expertise-slide-desc">{current.desc}</p>
          </div>
          <div className="expertise-nav">
            <button className="expertise-nav-btn" onClick={prev} aria-label="Previous">←</button>
            <button className="expertise-nav-btn" onClick={next} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
