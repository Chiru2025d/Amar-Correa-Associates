import Header from "../../../components/header.jsx";
import Link from "next/link";
import styles from "../counsel-accused-video-conference/detail.module.css";

export const metadata = {
  title: "An Incorrect View on Trial Court's Powers Under Section 173(8) Cr.P.C",
};

const paragraphs = [
  "Before a two Judge Bench of the Hon'ble Supreme Court, presided by J. Dipak Misra and J. Amitava Roy, in the case of Amrutbhai Shambhubhai Patel v/s Sumanbhai Kantibhai Patel and Others, reported in (2017) 4 SCC 177, an issue arose whether, after cognizance has been taken and the trial is in progress after the accused has appeared in response to process, the Magistrate or Trial Court is vested with power, either suo motu or on the informant's prayer, to direct further investigation under Section 173(8) Cr.P.C in the absence of a request by the investigating agency.",
  "Answering in the negative, the judgment held that while the investigating agency may undertake further investigation, no such power is available to the Magistrate after cognizance is taken, process is issued, and the accused has entered appearance. It further observed that at that stage, neither suo motu directions nor directions on the complainant's application are maintainable for further investigation.",
  "This view reiterated what had earlier been held in Reeta Nag v/s State of West Bengal (2009) 9 SCC 129, where it was held that once a charge sheet is filed and either charge is framed or accused are discharged, the Magistrate may on a protest petition take cognizance or permit further investigation on an application of the investigating authorities, but cannot suo motu direct further investigation under Section 173(8) Cr.P.C.",
  "In this analysis, that view is questioned as inconsistent with the legislative purpose behind Section 173(8), which is to secure a fair, proper, and complete investigation. This discussion excludes closure report situations and focuses on scenarios where investigation is lopsided, incomplete, unfair, prejudiced, or mala fide.",
  "In practice, informants and victims are frequently kept unaware of the progress and outcomes of investigation. They may not know whether key witnesses were examined, whether crucial circumstances were investigated, or whether all responsible persons were arraigned. Often they learn of these lapses only during trial.",
  "Typical situations include: non-examination of crucial witnesses; failure to investigate specific offences despite allegations; omission of named perpetrators from the array of accused; and failure to investigate unknown but identifiable perpetrators whose involvement was communicated during investigation.",
  "Treating Sections 319 and 311 Cr.P.C as universal substitutes for further investigation in such cases is deeply problematic. Those provisions are not designed to cure foundational investigative unfairness. They cannot replace the evidentiary and fact-finding function of a complete investigation.",
  "Section 173(8) does not expressly bar post-cognizance directions by courts. Nor can the legislative history be read as excluding Magistrates and trial courts from ensuring that investigation remains fair and complete where justice demands intervention.",
  "If the restrictive view is accepted, it creates an untenable framework: the investigating agency that conducted a partial investigation can decline further investigation; the trial court may become a helpless spectator despite visible defects; and the victim is pushed into costly constitutional or supervisory litigation merely to secure basic investigative fairness.",
  "Investigation is the foundation of criminal prosecution. Fair trial is impossible without fair investigation. Any interpretation that structurally immunizes defective investigation from timely correction at the trial court stage undermines justice delivery.",
  "The caution in Ram Lal Narang v/s State (Delhi Administration) (1979) 2 SCC 322 that police should ordinarily inform the court and seek permission for further investigation itself indicates continuing judicial control and judicial responsibility over the process.",
  "There is no compelling basis to assume that the legislature intended a rigid post-cognizance bar on trial-court directions for further investigation while preserving unilateral police discretion. Trial courts are institutionally best placed to assess deficiencies in the material before them.",
  "Accordingly, the restrictive reading in Reeta Nag and Amrutbhai Patel gives rise to serious practical and doctrinal concerns. The controversy requires reconciliation in light of the broader objective of criminal process: a full, fair, and meaningful adjudication based on complete investigation.",
  "In the article to follow, further support is drawn from additional authoritative Supreme Court decisions to demonstrate why a wider, justice-oriented interpretation of Section 173(8) better serves the statutory purpose and constitutional fairness.",
];

export default function IncorrectViewBlogPage() {
  return (
    <>
      <Header />

      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>LEGAL UPDATES & BLOG</h1>
        <p className={styles.heroLabel}>Legal Landscape: Recent Developments</p>
      </section>

      <main className={styles.page}>
        <article className={styles.article}>
          <Link href="/legalupdates?type=blog#blog-section" className={styles.backLink}>
            ← Back to Blogs
          </Link>
          <h1>An Incorrect View on Trial Court's Powers Under Section 173(8) Cr.P.C</h1>
          <h2>Part I - A Critical Analysis</h2>

          {paragraphs.map((paragraph, index) => (
            <p key={`incorrect-view-paragraph-${index}`}>{paragraph}</p>
          ))}

          <div className={styles.readBlock}>
            <p>Reference judgments:</p>
            <a href="https://www.supremecourtofindia.nic.in/jonew/judis/44522.pdf" target="_blank" rel="noopener noreferrer">
              https://www.supremecourtofindia.nic.in/jonew/judis/44522.pdf
            </a>
            <a href="https://www.supremecourtofindia.nic.in/jonew/judis/35704.pdf" target="_blank" rel="noopener noreferrer">
              https://www.supremecourtofindia.nic.in/jonew/judis/35704.pdf
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
