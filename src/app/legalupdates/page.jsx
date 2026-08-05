"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/header.jsx";
import styles from "./legalupdates.module.css";

const articles = [
  {
    type: "blog",
    updateNumber: "Blog 001",
    author: "Amar Correa",
    title: "\u201c An Incorrect View on Trial Court\u2019s Powers Under Section 173(8) Cr.P.C \u201d",
    subheading: "Understanding the Misconception",
    paragraphs: [
      "A prevalent but incorrect interpretation suggests that, once cognizance is taken, the trial court has no authority to direct further investigation under Section 173(8) of the Criminal Procedure Code. According to this view, the court is barred from acting suo motu or from initiating further investigation at the request of the complainant.",
      "This perspective significantly restricts the court\u2019s ability to ensure a fair and complete investigation, often leading to gaps in evidence and possible miscarriage of justice. In this section, we examine why this interpretation is flawed and how it contradicts the broader principles of criminal jurisprudence.",
    ],
    bullets: [],
  },
  {
    type: "blog",
    updateNumber: "Blog 002",
    author: "Amar Correa",
    title: "\u201c The Correct View on Trial Court\u2019s Powers Under Section 173(8) Cr.P.C \u201d",
    subheading: "A Clarified and Legally Supported Interpretation",
    paragraphs: [
      "The more accurate and legally sound position is that the trial court does possess the authority, even after taking cognizance, to order further investigation under Section 173(8) Cr.P.C. This authority may be exercised suo motu or at the instance of the complainant when the facts of the case reveal gaps in investigation or the need for additional material.",
      "This interpretation aligns with judicial precedents that emphasize the court\u2019s duty to discover the truth and ensure a fair trial. Empowering the trial court to order further investigation strengthens the justice system by correcting investigative lapses, promoting transparency, and supporting the larger goals of justice and effective advocacy.",
    ],
    bullets: [],
  },
  {
    type: "legal",
    updateNumber: "Legal Updates 002",
    author: "Amar Correa",
    title: "Complainant's Right to Appeal u/s 372 Cr.P.C in a Private Complaint",
    subheading:
      "New precedent on whether an appeal under Section 372 CrPC lies against acquittal in a private complaint under Section 138 NI Act, treating the complainant as a victim under Section 2(wa) CrPC.",
    paragraphs: [
      "Case in reference: M/s. Celestium Financial v/s A. Gnanasekaran Etc. (April 2025).",
      "Case proceedings: The Magistrate acquitted the accused under Section 138 NI Act after holding that the complainant failed to prove a legally enforceable debt and the statutory presumption under Section 139 stood rebutted.",
      "As per the then-prevailing procedural position, the complainant approached the High Court under Section 378(4) CrPC by seeking special leave to appeal against the acquittal.",
      "The High Court refused leave, observing that leave under Section 378(4) CrPC is a substantive safeguard for acquitted persons and requires a prima facie case warranting interference.",
      "Supreme Court approach: The Court examined Mallikarjun Kodagali (2019) 2 SCC 752, including the majority and dissenting views, and considered divergent Full Bench and Division Bench views from multiple High Courts on the proviso to Section 372 CrPC.",
      "The Court acknowledged the need for victim-centric access to justice while balancing the rights of the accused and the statutory procedure.",
    ],
    bullets: [
      "The expression victim under Section 2(wa) CrPC includes a person who has suffered loss or injury due to the act or omission for which the accused is charged, and also includes guardian or legal heir.",
      "In offences under Section 138 NI Act, the complainant is the aggrieved party suffering economic loss due to cheque dishonour.",
      "Therefore, a complainant under Section 138 NI Act also qualifies as a victim under Section 2(wa) CrPC and can claim the benefit of the proviso to Section 372 CrPC.",
      "Such a complainant-victim can maintain an appeal against acquittal in his own right under the proviso to Section 372 without seeking special leave under Section 378(4) CrPC.",
      "The proviso to Section 372 does not distinguish between offences under penal law and deemed offences under Section 138 NI Act.",
      "A victim of a deemed offence under Section 138 NI Act also has the right to appeal against acquittal, conviction for a lesser offence, or inadequate compensation.",
      "The complainant under Section 138 is also the victim; filing a complaint under Section 200 CrPC does not take away victim status.",
      "If the complainant is only an informant and not a victim in a complaint case, Section 378(4) applies and special leave is necessary.",
      "If the complainant is also a victim and proceeds under the proviso to Section 372, the rigour of Section 378(4) requiring special leave does not apply.",
    ],
    afterBullets: [
      "Conclusion of the Court: In cases under Section 138 NI Act, a victim can proceed against acquittal under the proviso to Section 372 CrPC as a matter of right, even when such victim is also the complainant.",
      "In the absence of the proviso to Section 372, such a complainant would otherwise depend on special leave under Section 378(4). The proviso, inserted with effect from 31.12.2009, must be given full effect.",
      "Accordingly, the Court held that the victim of an offence has a right to prefer an appeal under the proviso to Section 372 CrPC irrespective of whether the victim is also a complainant.",
      "Note: For proper understanding and interpretation, please read the full judgment. This brief update reflects only my reading and personal understanding.",
    ],
    readLink: "https://api.sci.gov.in/supremecourt/2024/49668/49668_2024_6_10_60765_Judgement_08-Apr-2025.pdf",
  },
  {
    type: "legal",
    updateNumber: "Legal Updates 003",
    author: "Amar Correa",
    title: "No Power of Arrest in Complaint Cases - Except when Warrant Issued",
    subheading: "An important reaffirmation of law in protecting liberty.",
    paragraphs: [
      "The Supreme Court, recently (April 2026), in Om Prakash Chhawnika v. State of Jharkhand and Another, held that in a complaint case, the police have no power to arrest an individual unless an arrest warrant has been issued by the court.",
      "While discussing procedure in a private complaint after cognizance and issuance of process, the Court noted that summons, as the initial mode of process under Section 87 Cr.P.C., only require appearance before the Court. Bail would essentially be granted (refer Satender Kumar Antil v/s CBI, 2022 and Inder Mohan Goswami v. State of Uttaranchal, 2007).",
      "The Court, by way of illustration, observed that if a Magistrate orders police inquiry under Section 202 and seeks a report, then even during such inquiry the police cannot arrest the accused. The answer was an emphatic NO: police has no power to arrest even during inquiry under Section 202 Cr.P.C.",
      "The Court identified Bihar and Jharkhand as States where such violations occur regularly, and directed that the judgment be placed before the Chief Justices of the said High Courts.",
    ],
    bullets: [
      "A private complaint filed under Section 200 CrPC cannot always be termed a complaint case.",
      "A distinction must be made between a private complaint referred for investigation under Section 156(3) Cr.P.C. / Section 175 BNSS resulting in a charge sheet, and a case proceeding under Chapter XIX-B Cr.P.C. / Chapter XX-B BNSS, i.e., cases instituted otherwise than on police report.",
    ],
    afterBullets: [
      "Note: For proper understanding and interpretation, please read the full judgment. This brief update reflects only my reading and personal understanding.",
    ],
  },
  {
    type: "legal",
    updateNumber: "Legal Updates 001",
    author: "Amar Correa",
    title: "Counsel-accused Video Conference",
    subheading: "Amenities Counsel-accused Video Conference",
    paragraphs: [
      "The Supreme Court has made mandatory and issued directions to Legal Services Committees / Authorities of every State, to extend the facility for video conferencing between the counsel and the accused lodged in jail, in matters entrusted by the Legal Services Committee.",
      "Considering and commending earlier direction of the Supreme Court Legal Services Committee, and noting that very often the Court sees that the Advocates who appear in matters entrusted by the Supreme Court Legal Services Committee, do not have the advantage of having had a dialogue with either the accused or those who are in the know of the details about the case, which at times seriously hampers the efforts on part of the Advocates, the Supreme Court reiterating that, all such attempts to facilitate dialogue between the counsel and his client would further the cause of justice and make legal aid meaningful, has directed all Legal Services Authorities/Committees in every State to extend similar such facility in every criminal case wherever the accused is lodged in jail and shall extend the facility of video conferencing between the counsel on one hand and the accused or anybody in the know of the matter on the other, so that the cause of justice is well served.",
    ],
    bullets: [],
    readLink: "https://www.supremecourtofindia.nic.in/supremecourt/2018/20446/20446_2018_Judgement_14-Aug-2018.pdf",
  },
];

export default function LegalUpdatesPage() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("legal");

  const getOrderNumber = (label) => {
    const match = label.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const getArticleAnchorId = (article) => {
    const orderNumber = getOrderNumber(article.updateNumber);
    const paddedOrder = String(orderNumber).padStart(3, "0");

    if (article.type === "blog") {
      return `blog-${paddedOrder}`;
    }

    return `legal-updates-${paddedOrder}`;
  };

  useEffect(() => {
    const queryType = searchParams.get("type");
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    if (queryType === "legal" || queryType === "blog") {
      setActiveFilter(queryType);
      return;
    }

    if (hash.startsWith("#blog-")) {
      setActiveFilter("blog");
    } else if (hash.startsWith("#legal-updates-")) {
      setActiveFilter("legal");
    }
  }, [searchParams]);

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => article.type === activeFilter)
      .sort((a, b) => getOrderNumber(a.updateNumber) - getOrderNumber(b.updateNumber));
  }, [activeFilter]);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>LEGAL UPDATES & BLOG</h1>
        <p className={styles.heroLabel}>Legal Landscape: Recent Developments</p>
      </section>

      <div className={styles.filterWrap}>
        <div className={styles.filterButtons}>
          <button
            type="button"
            onClick={() => setActiveFilter("legal")}
            className={`${styles.filterButton} ${activeFilter === "legal" ? styles.activeFilter : ""}`}
          >
            Legal Updates
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("blog")}
            className={`${styles.filterButton} ${activeFilter === "blog" ? styles.activeFilter : ""}`}
          >
            Blogs
          </button>
        </div>
      </div>

      {/* Articles */}
      <div className={styles.articlesSection}>
        {filteredArticles.map((article, idx) => (
          <article id={getArticleAnchorId(article)} key={getArticleAnchorId(article)} className={styles.article}>
            <div className={styles.articleInner}>
              {/* Meta row */}
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>
                  {article.updateNumber}
                  {article.type === "blog" ? "," : ""}
                </span>
                {article.type === "blog" && <span className={styles.articleDateLabel}>{article.author}</span>}
              </div>

              <div className={styles.articleContent}>
                {/* Title */}
                <h2 className={styles.articleTitle}>{article.title}</h2>

                {/* Subheading */}
                <p className={styles.articleSubheading}>{article.subheading}</p>

                {/* Paragraphs */}
                {article.paragraphs.map((p, i) => (
                  <p key={i} className={styles.articleBody}>{p}</p>
                ))}

                {/* Optional bullet list */}
                {article.bullets && article.bullets.length > 0 && (
                  <div>
                    {article.bullets.map((b, i) => (
                      <div key={i} className={styles.articleBullet}>
                        <span className={styles.bulletDot} />
                        <span className={styles.bulletText}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* After-bullets paragraphs */}
                {article.afterBullets && article.afterBullets.map((p, i) => (
                  <p key={i} className={styles.articleBody}>{p}</p>
                ))}

                {article.readLink && (
                  <div>
                    <p className={styles.articleBody}>Read here :</p>
                    <a href={article.readLink} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                      {article.readLink}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
