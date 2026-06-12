import Header from "../../components/header.jsx";
import styles from "./legalupdates.module.css";

const articles = [
  {
    updateNumber: "Blog/Legal Update 01",
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
    updateNumber: "Blog/Legal Update 02",
    author: "Amar Correa",
    title: "\u201c The Correct View on Trial Court\u2019s Powers Under Section 173(8) Cr.P.C \u201d",
    subheading: "A Clarified and Legally Supported Interpretation",
    paragraphs: [
      "The more accurate and legally sound position is that the trial court does possess the authority, even after taking cognizance, to order further investigation under Section 173(8) Cr.P.C. This authority may be exercised suo motu or at the instance of the complainant when the facts of the case reveal gaps in investigation or the need for additional material.",
      "This interpretation aligns with judicial precedents that emphasize the court\u2019s duty to discover the truth and ensure a fair trial. Empowering the trial court to order further investigation strengthens the justice system by correcting investigative lapses, promoting transparency, and supporting the larger goals of justice and effective advocacy.",
    ],
    bullets: [],
  },
];

export default function LegalUpdatesPage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <p className={styles.heroLabel}>Updates</p>
        <h1 className={styles.heroTitle}>LEGAL UPDATES & BLOG</h1>
      </section>

      {/* Articles */}
      <div className={styles.articlesSection}>
        {articles.map((article, idx) => (
          <article id={`article-${idx + 1}`} key={idx} className={styles.article}>
            <div className={styles.articleInner}>
              {/* Meta row */}
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>{article.updateNumber},</span>
                <span className={styles.articleDateLabel}>{article.author}</span>
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

              <a href="/legalupdates/counsel-accused-video-conference" className={styles.readMore}>
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
