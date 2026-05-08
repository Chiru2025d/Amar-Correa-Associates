import Image from "next/image";
import Header from "../../components/header.jsx";
import styles from "./professional-services.module.css";

const professionalServices = [
  {
    title: "Legal Consultation & Counsel Services",
    description:
      "From the inception stage of identifying the existence of a fraud or a civil wrong, reading of materials and discussions, on the courses to be adopted, remedies available under law and its processes, the apt stage of initiating the remedies. Through meetings, knowing facts and circumstances, assessment of the situation and then rendering legal counsel, helps decide the stage to act or abstain from any actions.",
    image: "/Banner/Frame 1984078292.png",
  },
  {
    title: "Legal Opinion",
    description:
      "Upon meetings, thorough reading of issue related documents like agreements, deeds or any other records, reading of communications of all nature, knowing overall facts and circumstances and assessment of the situation, and finally by application of prevailing laws, we render legal opinion.",
    image: "/Banner/Frame 1984078304.png",
  },
  {
    title: "Drafting and Assistance towards initiating the legal processes",
    description:
      "Of complaint to be lodged before police; assistance towards lodging complaint before police; drafting of complaint to be presented before court along with representation and appearance before court.",
    image: "/Banner/Frame 1984078303.png",
  },
  {
    title: "Representation before Trial Courts",
    description:
      "This simplifies comprehensive professional services, in handling the case in its entirety. From stage of inception, like initial legal counsel and advice, legal strategising, rendering legal opinion through the services of drafting of all necessary pleadings and finally representation in court.",
    image: "/Banner/Frame 1984078291.png",
  },
  {
    title: "Representation Before High Court",
    description:
      "Filing of new quashing petitions, writ petitions, appeals, revisions, contempt cases and other proceedings before the High Court, representation therein and addressing arguments on interim applications and main petitions and appeals, on merits.",
  },
  {
    title: "Senior Advocate Engagements",
    description:
      "There may be cases where it is desirable to engage services of a Senior Advocate, in a given matter, primarily at the stage of addressing arguments for interim relief or stay or the like, and also at the stage of final disposal on merits. ACAJuris renders these services. These professional services would be in matters ACAJuris has filed petitions on behalf of clients or represented and appeared for parties as respondents.",
  },
  {
    title: "Supreme Court Matters",
    description:
      "While ACAJuris does not presently have active practice in the Supreme Court, the firm regularly refers matters to lawyers who practice in the Supreme Court. That said, ACAJuris continues legal counsel services in such referred matters and follows up with the lawyers in Supreme Court, on the progress of the case. Besides, the firm assists the Supreme Court lawyers in referred matters and assists during addressing arguments and all important stages.",
  },
  {
    title: "Police Station - Assistance",
    description:
      "Services of a lawyer are considered essential before the Police, in different circumstances and situations. Conceivably, to give a representation or initiate a complaint or for an inquiry when summoned or to show cause to an allegation or charge, and so forth. ACAJuris offers professional services, in representative capacity before the police, in such circumstances and situations.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <h1>Professional Services</h1>
        </section>

        <section className={styles.services}>
          {professionalServices.map((service, index) => (
            <article
              className={`${styles.serviceBand} ${index % 2 === 1 ? styles.altBand : ""}`}
              key={service.title}
            >
              <div className={`${styles.serviceInner} ${index % 2 === 1 ? styles.reverse : ""}`}>
                <div className={styles.mediaWrap}>
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className={styles.serviceImage}
                    />
                  ) : (
                    <div className={styles.placeholder} aria-hidden="true" />
                  )}
                </div>

                <div className={styles.copy}>
                  <h2>{service.title}</h2>
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
