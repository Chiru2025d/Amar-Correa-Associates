"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/header.jsx";
import styles from "./legalupdates.module.css";

const articles = [
  {
    type: "blog",
    slug: "incorrect-view-on-trial-courts-powers-under-section-173-8-crpc",
    updateNumber: "Blog 001",
    author: "Amar Correa",
    title: "\u201c Part - I : An Incorrect View on S. 173(8) Cr.P.C \u201d",
    subheading: "Understanding the Misconception",
    paragraphs: [
      "Before a two Judge Bench of the Hon\u2019ble Supreme Court, presided by J.Dipak Misra and J.Amitava Roy, in the case of Amrutbhai Shambhubhai Patel v/s Sumanbhai Kantibhai Patel and Others, reported in (2017) 4 SCC 177, was an issue whether, after cognizance had been taken and the accused had appeared pursuant to the process issued, the Magistrate/Trial Court could, either suo motu or at the instance of the informant, direct further investigation under Section 173(8) Cr.P.C., in the absence of any request by the investigating agency.",
    ],
    bullets: [],
  },
  {
    type: "blog",
    slug: "correct-view-on-trial-courts-powers-under-section-173-8-crpc",
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
    title: "Complainant’s Right to Appeal u/s 372 Cr.P.C in a Private Complaint",
    subheading:
      "New Precedent : Whether an appeal under Section 372 CrPC lies against acquittal in a private complaint under Section 138 NI Act, treating the complainant as a “victim” under Section 2(wa) CrPC. ?",
    paragraphs: [
      "Case in reference : M/s. Celestium Financial v/s A. Gnanasekaran Etc. (April 2025)",
      "Case Proceedings :",
      "Magistrate’s Acquittal: The Accused were acquitted under Section 138 NI Act as the Complainant failed to prove a legally enforceable debt, and the statutory presumption under Section 139 was rebutted.",
      "Appeals to High Court: As the procedural law that prevailed until the ruling in this judgment, the Complainant filed an Appeal under Section 378(4) CrPC seeking Special Leave to appeal against the acquittal judgments.",
      "High Court’s Dismissal: The High Court refused leave, holding that the grant of leave under Section 378(4) of the CrPC is not a mere formality, but a substantive safeguard designed to protect the rights of persons who, having been acquitted of criminal charges, ought not to be subjected to further protracted litigation. It was further held that the grant of leave is contingent upon the petitioner before the Appellate Court, establishing a prima facie case that warrants interference.",
      "Supreme Court’s approach :",
      "The Supreme Court first discusses its own judgment in In Mallikarjun Kodagali (dead) represented through Legal representative vs. State of Karnataka, (2019) 2 SCC 752 (“Mallikarjun Kodagali”), which dealt with the rights of victims of crime and the remedies available to them.",
      "Please Note - Mallikarjun Kodagali was a judgment on reference to a larger bench [3JB] and it returned with a divergent views, with J.Deepak Gupta disagreeing with the majority view, authored by J.Madan B Lokur.",
      "It then refers to decisions of the Full Benches of the High Courts in the matter of interpretation of the proviso to Section 372 of the CrPC as highlighted in the case of Mallikarjun Kodagaliandalso Division Bench decisions of various High Courts taking different views.",
      "The Court discusses views and reasons, both of the majority - by J. Madan B Lokur and also the disagreement of J. Deepak Gupta, in detail. It observes that, while Deepak Gupta, J. was in complete agreement with Lokur, J. on the fact that victims must be permitted to access justice because it is sometimes found that the investigating and prosecuting agency do not follow up cases with zeal which is required and therefore proviso to Section 372 of the CrPC must be given a meaning which is realistic, liberal, progressive and beneficial to the victim of the offences, however, Deepak Gupta, J. was of the opinion that one cannot ignore the rights of the accused and the procedure prescribed by law. Hence, he disagreed with Lokur J.’s view that a victim can file an appeal in the High Court without seeking leave to appeal in terms of Section 378(3) of the CrPC.",
      "The Court after analysing several relevant provisions of CrPC, has observed :",
      "The expression ‘victim’ as defined under Section 2(wa) Cr.P.C. includes not only the person who has suffered any loss or injury caused by the reason of the act or omission for which the accused person has been charged but the said expression also includes his or her guardian or legal heir.",
      "In the context of offences under the Act, particularly under Section 138 of the said Act, the complainant is clearly the aggrieved party who has suffered economic loss and injury due to the default in payment by the accused owing to the dishonour of the cheque which is deemed to be an offence under that provision.",
      "In such circumstances, it would be just, reasonable and in consonance with the spirit of the CrPC to hold that the complainant under the Act also qualifies as a victim within the meaning of Section 2(wa) of the CrPC. Consequently, such a complainant ought to be extended the benefit of the proviso to Section 372, thereby enabling him to maintain an appeal against an order of acquittal in his own right without having to seek special leave under Section 378(4) of the CrPC.",
      "In the circumstances, the complainant can proceed as per the proviso to Section 372 of the CrPC and he may exercise such an option and he need not then elect to proceed under Section 378 of the CrPC.",
      "In this context, we wish to state that the proviso to Section 372 does not make a distinction between an accused who is charged of an offence under the penal law or a person who is deemed to have committed an offence under Section 138 of the Act. Symmetrical to a victim of an offence, a victim of a deemed offenceunder Section 138 of the Act also has the right to prefer an appeal against any order passed by the court acquitting the accused or convicting for a lesser offence or imposing an inadequate compensation.",
      "The complainant under Section 138 is the victim who must also have the right to prefer an appeal under the said provision.",
      "Merely because the proceeding under Section 138 of the Act commences with the filing of a complaint under Section 200 of the CrPC by a complainant, he does not cease to be a victim inasmuch as it is only a victim of a dishonour of cheque who can file a complaint. Thus, under Section 138 of the Act both the complainant as well as the victim are one and the same person.",
      "A reading of section 378 would clearly indicate that in case the complainant intends to file an appeal against the order of acquittal, his right is circumscribed by certain conditions precedent. When an appeal is to be preferred by a complainant, the first question is, whether, the complainant is also the victim or only an informant. If the complainant is not a victim and the case is instituted upon a complaint, then sub-section (4) requires that the complainant must seek special leave to appeal from an order of acquittal from the High Court.",
      "As noted under sub-section (6), if the application under sub-section (4) for grant of special leave to appeal from the order of acquittal is refused, no appeal from that order of acquittal would lie, inter alia, under sub-section (1) of Section 378. However, if the complainant is also a victim, he could proceed under the proviso to Section 372, in which case the rigour of sub-section (4) of Section 378, which mandates obtaining special leave to appeal, would not arise at all, as he can prefer an appeal as a victim and as a matter of right. Thus, if a victim who is a complainant, proceeds under Section 378, the necessity of seeking special leave to appeal would arise but if a victim whether he is a complainant or not, files an appeal in terms of proviso to Section 372, then the mandate of seeking special leave to appeal would not arise.",
      "IN CONCLUSION, COURT HOLDS - In the circumstances, we find that Section 138 of the Act being in the nature of a penal provision by a deeming fiction against an accused who is said to have committed an offence under the said provision, if acquitted,can be proceeded against by a victim of the said offence, namely, the person who is entitled to the proceeds of a cheque which has been dishonoured, in terms of the proviso to Section 372 of the CrPC, as a victim. As already noted, a victim of an offence could also be a complainant. In such a case, an appeal can be preferred either under the proviso to Section 372 or under Section 378 by such a victim.",
      "In the absence of the proviso to Section 372, a victim of an offence could not have filed an appeal as such, unless he was also a complainant, in which event he could maintain an appeal if special leave to appeal had been granted by the High Court and if no such special leave was granted then his appeal would not be maintainable at all. On the other hand, if the victim of an offence, who may or may not be the complainant, proceeds under the proviso to Section 372 of the CrPC, then in our view, such a victim need not seek special leave to appeal from the High Court. In other words, the victim of an offence would have the right to prefer an appeal, inter alia, against an order of acquittal in terms of the proviso to Section 372 without seeking any special leave to appeal from the High Court only on the grounds mentioned therein. A person who is a complainant under Section 200 of the CrPC who complains about the offence committed by a person who is charged as an accused under Section 138 of the Act, thus has the right to prefer an appeal as a victim under the proviso to Section 372 of the CrPC.",
      "As already noted, the proviso to Section 372 of the CrPC was inserted in the statute book only with effect from 31.12.2009. The object and reason for such insertion must be realised and must be given its full effect to by a court.",
      "In view of the aforesaid discussion, we hold that the victim of an offence has the right to prefer an appeal under the proviso to Section 372 of the CrPC, irrespective of whether he is a complainant or not. Even if the victim of an offence is a complainant, he can still proceed under the proviso to Section 372 and need not advert to sub-section (4) of Section 378 of the CrPC.",
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
    subheading: "An Important Reaffirmation of Law in Protecting Liberty :",
    paragraphs: [
      "The Supreme Court, recently (2026 April), in a significant ruling in Om Prakash Chhawnika v. State of Jharkhand and Another, has held that in a Complaint case, the police have no power to arrest an individual unless there has been an arrest warrant issued by the court.",
      "While discussing the procedure relating to a private complaint upon taking cognizance and issuing process, the Court noted that summons, being the initial mode of process under Section 87 Cr.P.C., require only that the accused comply by appearing before the Court. Bail would essentially be granted (refer Satender Kumar Antil v/s CBI, 2022&Inder Mohan Goswami v. State of Uttaranchal, 2007).",
      "The Court, by way of an illustration, observed “If a magistrate orders a Police inquiry under Section 202 and asks the police to give a report, then whether in the course of such inquiry, the police canarrest the accused. The answer is an emphatic “NO”, Police hasno powers to arrest even during the course of the inquiry underSection 202 of the Cr.PC.”",
      "The Court identified two States in India (Bihar & Jharkhand) where the violations take place on a regular basis, and directed that the Judgment in this case be placed before the Chief Justices of the said High Courts.",
    ],
    bullets: [
      "A Closing Note : Every private complaint filed under section 200 CrPC cannot be termed as a ‘Complaint Case’. One needs to distinguish between a private complaint referred for investigation under Section 156(3) Cr.P.C. / Section 175 BNSS resulting in a charge sheet, and a case that proceeds under Chapter XIX‑B Cr.P.C. / Chapter XX‑B BNSS, i.e., ‘cases instituted otherwise than on police report’.",
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
    subheading: "Counsel-accused Video Conference",
    paragraphs: [
      "The Supreme Court has made mandatory and issued directions to Legal Services Committees / Authorities of every State, to extend the facility for video conferencing between the counsel and the accused lodged in jail, in matters entrusted by the Legal Services Committee.",
      "Considering and commending earlier direction of the Supreme Court Legal Services Committee, and noting that very often the Court sees that the Advocates who appear in matters entrusted by the Supreme Court Legal Services Committee, do not have the advantage of having had a dialogue with either the accused or those who are in the know of the details about the case, which at times seriously hampers the efforts on part of the Advocates, the Supreme Court reiterating that, all such attempts to facilitate dialogue between the counsel and his client would further the cause of justice and make legal aid meaningful, has directed all Legal Services Authorities/Committees in every State to extend similar such facility in every criminal case wherever the accused is lodged in jail and shall extend the facility of video conferencing between the counsel on one hand and the accused or anybody in the know of the matter on the other, so that the cause of justice is well served.",
    ],
    bullets: [],
    readLink: "https://api.sci.gov.in/supremecourt/2018/20446/20446_2018_Judgement_14-Aug-2018.pdf",
  },
];

export default function LegalUpdatesPage() {
  const [activeSection, setActiveSection] = useState("legal");
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const url = new URL(window.location.href);
    const requestedType = url.searchParams.get("type");
    const requestedHash = url.hash.replace("#", "");

    if (requestedHash && (requestedHash.startsWith("blog-") || requestedHash.startsWith("legal-updates-"))) {
      setExpandedItemId(requestedHash);
      setActiveSection(requestedHash.startsWith("blog-") ? "blog" : "legal");
      return;
    }

    if (requestedType === "blog" || requestedType === "legal") {
      setActiveSection(requestedType);
      return;
    }

    if (window.location.hash === "#blog-section") {
      setActiveSection("blog");
      return;
    }

    setActiveSection("legal");
  }, []);

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

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => getOrderNumber(b.updateNumber) - getOrderNumber(a.updateNumber));
  }, []);

  const legalArticles = useMemo(() => sortedArticles.filter((article) => article.type === "legal"), [sortedArticles]);
  const blogArticles = useMemo(() => sortedArticles.filter((article) => article.type === "blog"), [sortedArticles]);

  const toggleItem = (itemId) => {
    setExpandedItemId((prev) => (prev === itemId ? null : itemId));
  };

  const renderAccordionItem = (article) => {
    const itemId = getArticleAnchorId(article);
    const isOpen = expandedItemId === itemId;

    return (
      <div className={styles.cardGroup} key={itemId}>
        <article
          id={itemId}
          className={`${styles.faqCard} ${article.type === "blog" ? styles.blogCard : styles.legalCard} ${isOpen ? styles.faqCardOpen : ""}`}
        >
          <button
            type="button"
            className={styles.faqTrigger}
            onClick={() => toggleItem(itemId)}
            aria-expanded={isOpen}
            aria-controls={`${itemId}-content`}
          >
            <span className={styles.faqHeadingWrap}>
              <span className={styles.faqMetaStrip}>
                <span className={styles.faqTag}>{article.updateNumber}</span>
                <span className={styles.faqMetaDelimiter}>|</span>
                <span className={styles.faqMetaText}>May 2019</span>
                {article.type === "blog" ? (
                  <>
                    <span className={styles.faqMetaDelimiter}>|</span>
                    <span className={styles.faqMetaText}>Author: {article.author}</span>
                  </>
                ) : null}
              </span>

              <span className={styles.faqTitleRow}>
                <span className={styles.faqTitle}>{article.title}</span>
                <span className={styles.faqIcon} aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </span>
            </span>
          </button>

          {isOpen ? (
            <div id={`${itemId}-content`} className={styles.faqContent}>
              {article.subheading ? <p className={styles.articleSubheading}>{article.subheading}</p> : null}

              {article.type === "blog" ? (
                <p className={styles.articleMetaInline}>Author: {article.author}</p>
              ) : null}

              {article.paragraphs.map((paragraph, index) => (
                <p key={`${itemId}-paragraph-${index}`} className={styles.articleBody}>{paragraph}</p>
              ))}

              {article.type === "blog" && article.slug ? (
                <div className={styles.readMoreBlock}>
                  <Link href={`/legalupdates/${article.slug}`} className={styles.readMoreLink}>
                    Read More
                  </Link>
                </div>
              ) : null}

              {article.bullets && article.bullets.length > 0 ? (
                <div>
                  {article.bullets.map((bullet, index) => (
                    <div key={`${itemId}-bullet-${index}`} className={styles.articleBullet}>
                      <span className={styles.bulletDot} />
                      <span className={styles.bulletText}>{bullet}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {article.afterBullets && article.afterBullets.map((paragraph, index) => (
                <p key={`${itemId}-after-${index}`} className={styles.articleBody}>{paragraph}</p>
              ))}

              {article.readLink ? (
                <div>
                  <p className={styles.articleBody}>Read here :</p>
                  <a href={article.readLink} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                    {article.readLink}
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </article>
      </div>
    );
  };

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
            onClick={() => setActiveSection("legal")}
            className={`${styles.filterButton} ${activeSection === "legal" ? styles.activeFilter : ""}`}
          >
            Legal Updates
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("blog")}
            className={`${styles.filterButton} ${activeSection === "blog" ? styles.activeFilter : ""}`}
          >
            Blogs
          </button>
        </div>
      </div>

      <div className={styles.articlesSection}>
        {activeSection === "legal" ? (
          <section id="legal-updates-section" className={styles.faqSection}>
            <div className={styles.faqList}>
              {legalArticles.map((article) => renderAccordionItem(article))}
            </div>
          </section>
        ) : null}

        {activeSection === "blog" ? (
          <section id="blog-section" className={styles.faqSection}>
            <div className={styles.faqList}>
              {blogArticles.map((article) => renderAccordionItem(article))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
