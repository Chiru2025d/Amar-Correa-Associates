import Header from "../../../components/header.jsx";
import Link from "next/link";
import styles from "../counsel-accused-video-conference/detail.module.css";

export const metadata = {
  title: "The Correct View on Trial Court's Powers Under Section 173(8) Cr.P.C",
};

const paragraphs = [
  "In the preceding article, Part I, the judgments in Amruthbhai Shambhubhai Patel v/s Sumanbhai Kantibhai Patel and Others (2017) 4 SCC 177 and Reeta Nag v/s State of West Bengal and Others (2009) 9 SCC 129 were examined with a view that those ratios do not fully promote the legislative intent behind Section 173(8) Cr.P.C.",
  "This article discusses the purpose and background leading to the 1973 amendment introducing Section 173(8), and why trial courts must be understood to possess the power to direct further investigation even after cognizance, whether suo motu or on an application by the complainant.",
  "The Forty-first Report of the Law Commission noted that police may discover further evidence even after submission of a report under Section 173, and cautioned against narrow interpretations that permanently prevent reopening investigation. Such rigidity, it observed, can be unfair both to prosecution and accused.",
  "The purpose of criminal investigation is to unearth truth and place the best available material before court. If all facts are not discovered initially, legal process should not foreclose mechanisms for discovering them later. Section 173(8) operationalizes this logic.",
  "If police can further investigate upon fresh material after filing report, a key question follows: what principle bars courts from directing further investigation when vital facts emerge before them? Procedurally, the immediate stage after final report is cognizance and process, where only prima facie appreciation is undertaken.",
  "A court may take cognizance while still noticing significant investigative gaps, such as failure to send crucial material to FSL or to examine key witnesses visible in supporting evidence. Denying power to direct further investigation in such scenarios would impair justice rather than protect process.",
  "Trial courts, as courts of original jurisdiction, are often best placed to evaluate both what exists and what is missing in investigation records. A meaningful trial presupposes full and fair investigation, and judicial powers should be interpreted to further that objective.",
  "Arguments that post-cognizance recourse to Sections 311 and 319 alone is sufficient are incomplete. Those provisions serve specific trial functions and are not structural substitutes for curing foundational investigative lacunae through Section 173(8).",
  "Victim-centric justice concerns also support a wider interpretation. Effective adjudication requires that courts retain practical ability to remedy investigative deficiencies where justice demands, instead of confining such correction solely to police initiative.",
  "Several Supreme Court decisions support this broader position. In Kishan Lal v/s Dharmendra Bafna (2009) 7 SCC 685, the Court observed that further investigation may be directed at various stages including post-cognizance. In Samaj Parivartan Samudaya v/s State of Karnataka (2012) 7 SCC 407, the Court reaffirmed judicial competence to direct further investigation in cases instituted on police report.",
  "In Vinay Tyagi v/s Irshad Ali (2013) 5 SCC 762, the Court undertook extensive analysis and held that a Magistrate before whom a report under Section 173(2) is filed is empowered to direct further investigation. It emphasized that procedural law should be construed to advance justice and legislative object.",
  "Earlier authority such as Ram Lal Narang v/s State (Delhi Administration) (1979) 2 SCC 322 and H.N. Rishbud v/s State of Delhi (AIR 1955 SC 196) also informs this framework by recognizing that defects in investigation can be cured and that courts hold final discretion over further action.",
  "The cumulative position supports the proposition that trial courts do have jurisdiction, even post-cognizance, to direct further investigation when required for fairness and completeness. A rigidly restrictive reading weakens the criminal process and frustrates the truth-seeking function of trial.",
  "A justice-oriented interpretation of Section 173(8), harmonized with precedent and statutory purpose, better preserves fairness to victim, accused, and system alike, and strengthens the integrity of criminal adjudication.",
];

export default function CorrectViewBlogPage() {
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
          <h1>The Correct View on Trial Court's Powers Under Section 173(8) Cr.P.C</h1>
          <h2>Part II - Purpose, Precedent, and Judicial Power</h2>

          {paragraphs.map((paragraph, index) => (
            <p key={`correct-view-paragraph-${index}`}>{paragraph}</p>
          ))}
        </article>
      </main>
    </>
  );
}
