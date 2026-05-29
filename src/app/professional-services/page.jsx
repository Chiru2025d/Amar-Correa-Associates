import Image from "next/image";
import Header from "../../components/header.jsx";
import styles from "./professional-services.module.css";

const professionalServices = [
  {
    slug: "legal-consultation-counsel-services",
    title: "Legal Consultation & Counsel Services",
    icon: "/icons/PracticeList/Legal-Consultation-&-Counsel-Services.png",
    description:
      "From the inception stage of identifying the existence of a fraud or a civil wrong; reading of materials and discussions; on the courses to be adopted, remedies available under law and its processes; the apt stage of initiating the remedies. Through meetings, knowing facts & circumstances, assessment of the situation and then rendering legal counsel. Helps decide the stage to act or abstain from any actions.",
  },
  {
    slug: "legal-opinion",
    title: "Legal Opinion",
    icon: "/icons/PracticeList/Legal-Opinion.png",
    description:
      "Upon Meeting/s, thorough reading of issue related documents like Agreements, Deeds or any other records, reading of communications of all nature, knowing overall facts & circumstances and assessment of the situation, and finally by application of prevailing laws, we render Legal Opinion.",
  },
  {
    slug: "legal-drafting-initiation",
    title: "Legal Drafting & Initiation",
    icon: "/icons/PracticeList/Legal-Drafting-&-Initiation.png",
    description:
      "Drafting and Assistance towards initiating the legal processes - of Complaint to be lodged before police; assistance towards lodging complaint before police; drafting of complaint to be presented before Court along with representation and appearance before Court.",
  },
  {
    slug: "representative-services-before-trial-courts",
    title: "Representative Services before Trial Courts",
    icon: "/icons/PracticeList/Representative-Services-before-Trial-Courts.png",
    description:
      "This signifies, comprehensive professional services, i.e handling the case in its entirety. From stage of inception, like initial Legal counsel and advice, legal strategising, rendering legal opinion through the services of drafting of all necessary pleadings and finally representation in Court.",
  },
  {
    slug: "representation-before-high-court",
    title: "Representation Before High Court",
    icon: "/icons/PracticeList/Representation-Before-High-Court.png",
    description:
      "Filing of new Quashing Petitions, Writ Petitions, Appeals, Revisions, Contempt Cases, etc. before the High Court of Karnataka, representations therein and addressing Arguments on interim applications and main petitions and Appeals, on merits.",
  },
  {
    slug: "senior-advocate-engagements",
    title: "Senior Advocate Engagements",
    icon: "/icons/PracticeList/Senior-Advocate-Engagements.png",
    description:
      "There may be cases where it is desirable to engage services of a Senior Advocate, in a give matter, primarily at the stage of addressing arguments for interim relief of Stay or the like, and also at the stage of final disposal on merits, ACAJuris renders these services. These professional services would be in matters ACAJuris has filed Petitions on behalf of Clients or represented and appeared for parties as Respondents.",
  },
  {
    slug: "supreme-court-matters",
    title: "Supreme Court Matters",
    icon: "/icons/PracticeList/Supreme-Court-Matters.png",
    description:
      "While ACAJuris does not presently have active practice in the Supreme Court, the Firm regularly refers matters to lawyers, who practice in the Supreme Court. That said, ACAJuris continues Legal counsel services in such referred matters and follows up with the Lawyers in Supreme Court, on the progress of the case. Besides, the Firm assists the Supreme Court lawyers in so referred matters and assists during addressing arguments and all important stages.",
  },
  {
    slug: "criminal-trials",
    title: "Criminal Trials",
    icon: "/icons/PracticeList/Criminal-Trials.png",
    description:
      "Criminal Trial, often considered among the most challenging field in practice of law, the role of a Trial Lawyer is truly exacting, demanding and stretching. ACAJuris has had huge exposure in conducting Criminal Trials, in very many challenging cases.",
  },
  {
    slug: "criminal-appeals-revisions",
    title: "Criminal Appeals & Revisions",
    icon: "/icons/PracticeList/Criminal-Appeals-&-Revisions.png",
    description:
      "ACAJuris represents clients in filing Criminal Appeals or Criminal Revisions before the District Courts any also before the High Court. This service is taken up from the stage of studying the Trial Court records through the services of drafting of Appeal or Revision, making appearances and addressing arguments before Appellate or Revision Courts.",
  },
  {
    slug: "police-station-assistance",
    title: "Police Station - Assistance",
    icon: "/icons/PracticeList/Police-Station---Assistance.png",
    description:
      "Services of a Lawyer are considered essential before the Police, in different circumstances and situations. Conceivably, to give a representation or initiate a complaint or for an inquiry when summoned or to show cause to an allegation or charge, and so forth. ACAJuris offers professional services, in representative capacity before the police, in such circumstances and situations.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="professional-services-title">
          <p>Services</p>
          <h1 id="professional-services-title">Professional Services</h1>
        </section>

        <section className={styles.services} id="professional-services-list">
          {professionalServices.map((service, index) => (
            <article
              id={service.slug}
              className={`${styles.serviceBand} ${index % 2 === 1 ? styles.altBand : ""}`}
              key={service.title}
            >
              <div className={`${styles.serviceInner} ${index % 2 === 1 ? styles.reverse : ""}`}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardBrand} aria-hidden="true">
                    <span>ACA</span>
                    <Image
                      src={service.icon}
                      alt=""
                      width={64}
                      height={64}
                      className={styles.cardIcon}
                    />
                  </div>
                  <h2>{service.title}</h2>
                </div>

                <div className={styles.copy}>
                  <p>{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
