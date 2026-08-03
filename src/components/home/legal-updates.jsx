"use client";

import Link from "next/link";
import Image from "next/image";

const legalUpdates = [
  {
    href: "/legalupdates",
    image: "/images/Legal%20Updates%20%26%20Blog/Legal%20Updates%20Card%20A.png",
    alt: "Legal update 1",
    meta: "Blog/Legal Update 01",
    label: "Blog - 001",
    author: "Amar Correa",
    date: "May 08, 2019",
    headingPrimary: "Code of Criminal Procedure",
    headingSecondary: "Section 173(8) - Further Investigation",
    title: "An Incorrect View on Trial Court's Powers U/S 173(8) Cr.P.C",
  },
  {
    href: "/legalupdates",
    image: "/images/Legal%20Updates%20%26%20Blog/Legal%20Updates%20Card%20B.png",
    alt: "Legal update 2",
    meta: "Blog/Legal Update 02",
    label: "Blog - 002",
    author: "Amar Correa",
    date: "May 08, 2019",
    headingPrimary: "Code of Criminal Procedure",
    headingSecondary: "Section 173(8) - Further Investigation",
    title: "The Correct View on Trial Court's Powers U/S 173(8) Cr.P.C",
  },
  {
    href: "/legalupdates",
    image: "/images/Legal%20Updates%20%26%20Blog/Legal%20Updates%20Card%20C.png",
    alt: "Legal update 3",
    meta: "Blog/Legal Update 03",
    label: "Legal Update - 001",
    author: "",
    date: "",
    headingPrimary: "Counsel-accused Video Conference",
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
                <span className="update-label">{update.label}</span>
                <h3 className="update-heading">
                  <span>{update.headingPrimary}</span>
                  {update.headingSecondary ? (
                    <span className="update-heading-secondary">{update.headingSecondary}</span>
                  ) : null}
                </h3>
                <div className="update-bottom">
                  <h4 className="update-title">{update.title}</h4>
                  <span className="update-divider" aria-hidden="true" />
                  <div className="update-footer">
                    {update.author ? <span>{`Author : ${update.author}`}</span> : null}
                    {update.date ? <span>{update.date}</span> : null}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
