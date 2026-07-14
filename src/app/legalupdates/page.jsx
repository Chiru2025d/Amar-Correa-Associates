import Header from "../../components/header.jsx";
import styles from "./legalupdates.module.css";

const articles = [
  {
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
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>LEGAL UPDATES & BLOG</h1>
        <p className={styles.heroLabel}>Legal Landscape: Recent Developments</p>
      </section>

      {/* Articles */}
      <div className={styles.articlesSection}>
        {articles.map((article, idx) => (
          <article id={`article-${idx + 1}`} key={idx} className={styles.article}>
            <div className={styles.articleInner}>
              {/* Meta row */}
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>
                  {article.updateNumber}
                  {idx < 2 ? "," : ""}
                </span>
                {idx < 2 && <span className={styles.articleDateLabel}>{article.author}</span>}
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

                {article.readLink ? (
                  <div>
                    <p className={styles.articleBody}>Read here :</p>
                    <a href={article.readLink} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                      {article.readLink}
                    </a>
                  </div>
                ) : (
                  <a href="/legalupdates/counsel-accused-video-conference" className={styles.readMore}>
                    Read More
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
