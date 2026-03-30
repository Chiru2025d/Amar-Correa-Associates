import Header from "../../components/header.jsx";
import styles from "./legalupdates.module.css";

const articles = [
  {
    date: "August 28, 2025",
    uploadedLabel: "Uploaded Time",
    title: "\u201c An Incorrect View on Trial Court\u2019s Powers Under Section 173(8) Cr.P.C \u201d",
    subheading: "Understanding the Misconception",
    paragraphs: [
      "A prevalent but incorrect interpretation suggests that, once cognizance is taken, the trial court has no authority to direct further investigation under Section 173(8) of the Criminal Procedure Code. According to this view, the court is barred from acting suo motu or from initiating further investigation at the request of the complainant.",
      "This perspective significantly restricts the court\u2019s ability to ensure a fair and complete investigation, often leading to gaps in evidence and possible miscarriage of justice. In this section, we examine why this interpretation is flawed and how it contradicts the broader principles of criminal jurisprudence.",
    ],
    bullets: [],
  },
  {
    date: "August 28, 2025",
    uploadedLabel: "Uploaded Time",
    title: "\u201c The Correct View on Trial Court\u2019s Powers Under Section 173(8) Cr.P.C \u201d",
    subheading: "A Clarified and Legally Supported Interpretation",
    paragraphs: [
      "The more accurate and legally sound position is that the trial court does possess the authority, even after taking cognizance, to order further investigation under Section 173(8) Cr.P.C.",
      "This can be done:",
    ],
    bullets: ["Suo motu (on its own motion)", "At the instance of the complainant"],
    afterBullets: [
      "This interpretation aligns with judicial precedents that emphasize the court\u2019s duty to discover the truth and ensure a fair trial. Empowering the trial court to order further investigation strengthens the justice system by correcting investigative lapses and promoting transparency.",
      "In this section, we provide analysis, case references, and practical implications of this correct view, highlighting how it supports the larger goals of justice and effective advocacy.",
    ],
  },
];

export default function LegalUpdatesPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>Legal Updates</h1>
      </section>

      {/* Articles */}
      <div className={styles.articlesSection}>
        {articles.map((article, idx) => (
          <article key={idx} className={styles.article}>
            <div className={styles.articleInner}>
              {/* Meta row */}
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>{article.date}</span>
                <span className={styles.articleDateLine} />
                <span className={styles.articleDateLabel}>{article.uploadedLabel}</span>
              </div>

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
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
