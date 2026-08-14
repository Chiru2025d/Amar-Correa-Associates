import Header from "../../../components/header.jsx";
import styles from "./detail.module.css";

export default function CounselAccusedVideoConferencePage() {
  return (
    <>
      <Header />

      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>LEGAL UPDATES & BLOG</h1>
        <p className={styles.heroLabel}>Legal Landscape: Recent Developments</p>
      </section>

      <main className={styles.page}>
        <article className={styles.article}>
          <h1>Counsel-accused Video Conference</h1>

          <p>
            The Supreme Court has made mandatory and issued directions to Legal
            Services Committees / Authorities of every State, to extend the
            facility for video conferencing between the counsel and the accused
            lodged in jail, in matters entrusted by the Legal Services Committee.
          </p>

          <h2>Counsel-accused Video Conference</h2>

          <p>
            The Supreme Court has made mandatory and issued directions to Legal
            Services Committees / Authorities of every State, to extend facility
            for video conferencing between the counsel and the accused lodged in
            jail, in matters entrusted by Legal Services Committee.
          </p>

          <p>
            Considering and commending earlier direction of the Supreme Court
            Legal Services Committee, and noting that very often the Court sees
            that the Advocates who appear in matters entrusted by the Supreme
            Court Legal Services Committee, do not have the advantage of having
            had a dialogue with either the accused or those who are in the know
            of the details about the case, which at times seriously hampers the
            efforts on part of the Advocates, the Supreme Court reiterating
            that, all such attempts to facilitate dialogue between the counsel
            and his client would further the cause of justice and make legal aid
            meaningful, has directed all Legal Services Authorities/Committees
            in every State to extend similar such facility in every criminal
            case wherever the accused is lodged in jail and shall extend the
            facility of video conferencing between the counsel on one hand and
            the accused or anybody in the know of the matter on the other, so
            that the cause of justice is well served.
          </p>

          <div className={styles.readBlock}>
            <p>Read here :</p>
            <a
              href="https://api.sci.gov.in/supremecourt/2018/20446/20446_2018_Judgement_14-Aug-2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://api.sci.gov.in/supremecourt/2018/20446/20446_2018_Judgement_14-Aug-2018.pdf
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
