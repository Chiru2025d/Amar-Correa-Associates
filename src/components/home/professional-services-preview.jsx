"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const professionalServices = [
  {
    slug: "legal-consultation-counsel-services",
    group: "advisory",
    title: "Legal Consultation & Counsel Services",
    desc: "From identifying the existence of a fraud or civil wrong to assessing remedies and the right stage for action, ACAJuris provides practical counsel through meetings, document review, and strategic advice.",
    banner: "/images/Professional services/optimized/P1.webp",
  },
  {
    slug: "legal-opinion",
    group: "advisory",
    title: "Legal Opinion",
    desc: "Upon review of agreements, deeds, records, communications, facts, and surrounding circumstances, ACAJuris renders legal opinions by applying prevailing laws to the matter.",
    banner: "/images/Professional services/optimized/P2.webp",
  },
  {
    slug: "legal-drafting-initiation",
    group: "advisory",
    title: "Legal Drafting & Initiation",
    desc: "Drafting and assistance for complaints before police, complaint presentation before court, and initiation of legal processes with representation at the relevant stage.",
    banner: "/images/Professional services/optimized/P3.webp",
  },
  {
    slug: "police-station-assistance",
    group: "advisory",
    title: "Police Station - Assistance",
    desc: "Representative assistance before police for representations, complaint initiation, inquiry summons, show-cause responses, and related circumstances.",
    banner: "/images/Professional services/optimized/P10.webp",
  },
  {
    slug: "representative-services-before-trial-courts",
    group: "representation",
    title: "Representative Services before Trial Courts",
    desc: "Comprehensive handling of matters from initial legal counsel and strategy to drafting necessary pleadings and representing clients before court.",
    banner: "/images/Professional services/optimized/P4.webp",
  },
  {
    slug: "representation-before-high-court",
    group: "representation",
    title: "Representation Before High Court",
    desc: "Filing and arguing quashing petitions, writ petitions, appeals, revisions, contempt cases, and related proceedings before the High Court of Karnataka.",
    banner: "/images/Professional services/optimized/P5.webp",
  },
  {
    slug: "senior-advocate-engagements",
    group: "representation",
    title: "Senior Advocate Engagements",
    desc: "Engaging Senior Advocates where desirable, primarily at stages involving interim relief, stay, or final disposal on merits in matters handled by ACAJuris.",
    banner: "/images/Professional services/optimized/P6.webp",
  },
  {
    slug: "supreme-court-matters",
    group: "representation",
    title: "Supreme Court Matters",
    desc: "ACAJuris refers matters to Supreme Court lawyers, continues counsel services in referred matters, and assists during important stages and arguments.",
    banner: "/images/Professional services/optimized/P7.webp",
  },
  {
    slug: "criminal-trials",
    group: "representation",
    title: "Criminal Trials",
    desc: "Criminal trial work demands exacting preparation and advocacy. ACAJuris has significant exposure in conducting challenging criminal trials.",
    banner: "/images/Professional services/optimized/P8.webp",
  },
  {
    slug: "criminal-appeals-revisions",
    group: "representation",
    title: "Criminal Appeals & Revisions",
    desc: "Representation in criminal appeals and revisions before District Courts and the High Court, from studying trial records to drafting and arguments.",
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
            Strategic legal services for every stage of criminal litigation.
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
                Advisory Services
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
