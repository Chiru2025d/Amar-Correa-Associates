"use client";

import Link from "next/link";
import Image from "next/image";

const legalUpdates = [
  {
    href: "/legalupdates",
    image: "/images/legalupdate1_1.svg",
    alt: "Legal update 1",
    meta: "Blog/Legal Update 01",
    author: "Amar Correa",
    date: "August 28, 2025",
    title: "An Incorrect View on Trial Court's Powers U/S 173(8) Cr.P.C",
  },
  {
    href: "/legalupdates",
    image: "/images/legalupdate2_2.svg",
    alt: "Legal update 2",
    meta: "Blog/Legal Update 02",
    author: "Amar Correa",
    date: "August 28, 2025",
    title: "The Correct View on Trial Court's Powers U/S 173(8) Cr.P.C",
  },
  {
    href: "/legalupdates/counsel-accused-video-conference",
    image: "/images/legalupdate3_3.svg",
    alt: "Legal update 3",
    meta: "Blog/Legal Update 03",
    author: "Amar Correa",
    date: "August 28, 2025",
    title: "Counsel-accused Video Conference",
  },
];

export default function LegalUpdatesPreview() {
  return (
    <section className="legal-preview">
      <div className="container">
        <h2 className="legal-title">
          <Link href="/legalupdates">Legal Updates & Blog</Link>
        </h2>

        <div className="legal-grid">
          {legalUpdates.map((update) => (
            <Link key={update.meta} href={update.href} className="legal-card">
              <div className="legal-img-wrap">
                <Image
                  src={update.image}
                  alt={update.alt}
                  width={534}
                  height={309}
                />
              </div>
              <div className="legal-content">
                <div className="update-meta">
                  <span>{update.meta}</span>
                  <span className="update-meta-separator" aria-hidden="true">|</span>
                  <span>{update.author}</span>
                  <span className="update-meta-separator" aria-hidden="true">|</span>
                  <span className="update-meta-line" aria-hidden="true" />
                  <span>{update.date}</span>
                </div>
                <h4 className="update-title">{update.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
