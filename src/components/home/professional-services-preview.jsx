"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatAcaJuris } from "../aca-juris.jsx";

const professionalServices = [
  {
    slug: "legal-consultation-counsel-services",
    group: "advisory",
    title: "Legal Consultation & Counsel Services",
    desc: "From distinguishing a crime or civil wrong to determining the appropriate legal remedy, ACAJuris guides whether to act or abstain and, if to act, what legal remedy to pursue.",
    banner: "/images/Professional services/optimized/P1.webp",
  },
  {
    slug: "legal-opinion",
    group: "advisory",
    title: "Legal Opinion",
    desc: "Through meetings, document review, and assessment of facts and applicable laws, ACAJuris provides considered legal opinions on standing, litigation risks, and likely dispute outcomes.",
    banner: "/images/Professional services/optimized/P2.webp",
  },
  {
    slug: "legal-drafting-initiation",
    group: "advisory",
    title: "Legal Drafting & Initiation",
    desc: "Drafting and assistance for initiating legal processes, including preparing police complaints, court complaints, and representation before the Court.",
    banner: "/images/Professional services/optimized/P3.webp",
  },
  {
    slug: "legal-services-on-retainer",
    group: "advisory",
    title: "Legal Services on Retainer",
    desc: "A retainer structure ensuring immediate and continuous access to legal support — consultation, document review, legal opinions, and professional assistance in urgent matters.",
    banner: "/images/Professional services/optimized/P1.webp",
  },
  {
    slug: "police-station-assistance",
    group: "advisory",
    title: "Police Station - Assistance",
    desc: "Professional legal assistance before the police for representations, complaints, inquiry summons, allegations, charges, and related circumstances.",
    banner: "/images/Professional services/optimized/P10.webp",
  },
  {
    slug: "representative-services-before-trial-courts",
    group: "representation",
    title: "Representative Services before Trial Courts",
    desc: "Comprehensive handling from initial legal counsel and strategy, legal strategising, drafting all necessary pleadings, and representation in Trial Courts including conducting defence.",
    banner: "/images/Professional services/optimized/P4.webp",
  },
  {
    slug: "representation-before-high-court",
    group: "representation",
    title: "Representation Before High Court",
    desc: "Filing and pursuing Quashing Petitions, Writ Petitions, Appeals, Revisions, and Contempt Cases before the High Court of Karnataka, with arguments on interim and main matters.",
    banner: "/images/Professional services/optimized/P5.webp",
  },
  {
    slug: "senior-advocate-engagements",
    group: "representation",
    title: "Senior Advocate Engagements",
    desc: "Facilitating Senior Advocate engagements for interim relief, stay orders, and final disposal on merits in cases filed by or represented through ACAJuris.",
    banner: "/images/Professional services/optimized/P6.webp",
  },
  {
    slug: "supreme-court-matters",
    group: "representation",
    title: "Supreme Court Matters",
    desc: "ACAJuris refers matters to experienced Supreme Court practitioners, continues legal counsel support, monitors progress, and assists through all significant stages of proceedings.",
    banner: "/images/Professional services/optimized/P7.webp",
  },
  {
    slug: "criminal-trials",
    group: "representation",
    title: "Criminal Trials",
    desc: "Criminal trial work demands precision, resilience, and exceptional advocacy. ACAJuris has represented clients in numerous complex and demanding criminal trials.",
    banner: "/images/Professional services/optimized/P8.webp",
  },
  {
    slug: "criminal-appeals-revisions",
    group: "representation",
    title: "Criminal Appeals & Revisions",
    desc: "Representing clients in Criminal Appeals and Revisions before District Courts and the High Court, including trial record study, drafting, appearances, and arguments.",
    banner: "/images/Professional services/optimized/P9.webp",
  },
];

const professionalServicesBanner = "/Banner/optimized/PS1.webp";
const autoRotateMs = 8000;
const autoRotateStartDelayMs = 2400;

export default function ProfessionalServicesPreview() {
  const [activeTab, setActiveTab] = useState("advisory");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const startDelayRef = useRef(null);

  const items = professionalServices.filter((service) => service.group === activeTab);
  const current = items[index];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (startDelayRef.current) clearTimeout(startDelayRef.current);
    timerRef.current = setInterval(() => {
      setDirection("next");
      setIndex((i) => (i + 1) % items.length);
      setAnimKey((key) => key + 1);
    }, autoRotateMs);
  };

  const startDelayedTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (startDelayRef.current) clearTimeout(startDelayRef.current);
    startDelayRef.current = setTimeout(resetTimer, autoRotateStartDelayMs);
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = professionalServicesBanner;
    if (img.decode) img.decode().catch(() => {});

    return () => {
      img.src = "";
    };
  }, []);

  useEffect(() => {
    startDelayedTimer();
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(startDelayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, items.length]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setIndex(0);
    setDirection("next");
    setAnimKey((key) => key + 1);
  };

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + items.length) % items.length);
    setAnimKey((key) => key + 1);
    resetTimer();
  };

  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % items.length);
    setAnimKey((key) => key + 1);
    resetTimer();
  };

  return (
    <section className="expertise-preview professional-services-preview">
      <div className="expertise-inner container">
        <div className="expertise-left">
          <h3>Professional Services</h3>
          <p className="expertise-lead">
            "What Professional Legal Services We Offer"
          </p>
          <Link href="/professional-services" className="hero-btn primary expertise-view-more-btn">
            View All
          </Link>
        </div>

        <div className="expertise-content-card">
          <div
            key={animKey}
            className={`expertise-card-bg expertise-bg-anim-${direction}`}
          >
            <Image
              src={professionalServicesBanner}
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
                className={`expertise-tab${activeTab === "advisory" ? " exp-tab-active" : ""}`}
                onClick={() => switchTab("advisory")}
              >
                Professional Services
              </button>
            </div>
            <div className="expertise-tab-divider" />
            <div
              key={animKey}
              className={`expertise-slide expertise-slide-anim-${direction}`}
            >
              <h4 className="expertise-slide-title">{current.title}</h4>
              <p className="expertise-slide-desc">{formatAcaJuris(current.desc)}</p>
            </div>
            <div className="expertise-nav">
              <Link href={`/professional-services#${current.slug}`} className="expertise-card-read-more">
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
