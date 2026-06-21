import Image from "next/image";
import Header from "../../components/header.jsx";
import { formatAcaJuris } from "../../components/aca-juris.jsx";
import styles from "./professional-services.module.css";

const professionalServices = [
  {
    slug: "legal-consultation-counsel-services",
    title: "Legal Consultation & Counsel Services",
    icon: "/icons/PracticeList/Legal-Consultation-&-Counsel-Services.png",
    mobileImage: "/images/Professional services - Mobile/P1.png",
    webImage: "/images/Professional services - web/P1-Web.png",
    description:
      "From distinguishing and identifying a crime or civil wrong to determining the appropriate legal remedy, the process involves study, discussion, meetings, fact-finding, assessment, and counsel - guiding whether to act or abstain, and if to act, what legal remedy to pursue, ACAJuris provides these comprehensive services.",
  },
  {
    slug: "legal-opinion",
    title: "Legal Opinion",
    icon: "/icons/PracticeList/Legal-Opinion.png",
    mobileImage: "/images/Professional services - Mobile/P2.png",
    webImage: "/images/Professional services - web/P2-Web.png",
    description:
      "Through meetings, review of documents and communications, and assessment of facts and circumstances, then applying prevailing laws, statutes, and case precedents, ACAJuris provides a considered Legal Opinion - advising clients on their legal standing, litigation risks, and likely dispute outcomes.",
  },
  {
    slug: "legal-drafting-initiation",
    title: "Legal Drafting & Initiation",
    icon: "/icons/PracticeList/Legal-Drafting-&-Initiation.png",
    mobileImage: "/images/Professional services - Mobile/P3.png",
    webImage: "/images/Professional services - web/P3-Web.png",
    description:
      "We provide drafting and assistance in initiating legal processes, including preparing and lodging complaints before the police, drafting complaints to be presented before the Court, and offering representation and appearance before the Court.",
  },
  {
    slug: "legal-services-on-retainer",
    title: "Legal Services on Retainer",
    icon: "/icons/PracticeList/Legal-Consultation-&-Counsel-Services.png",
    mobileImage: null,
    webImage: "/images/Professional services - web/P1-Web.png",
    description:
      "This legal service structure is designed to ensure immediate and continuous access to a law chambers' expertise and availability. It establishes a retainer arrangement for the provision of comprehensive legal support, including consultation and counsel services, advisory assistance, document review, preparation of legal opinions, and related professional services, particularly in urgent or time-sensitive matters.",
  },
  {
    slug: "representative-services-before-trial-courts",
    title: "Representative Services before Trial Courts",
    icon: "/icons/PracticeList/Representative-Services-before-Trial-Courts.png",
    mobileImage: "/images/Professional services - Mobile/P4.png",
    webImage: "/images/Professional services - web/P4-Web.png",
    description:
      "This signifies comprehensive professional services, i.e. handling the case in its entirety. From stage of inception, like initial legal counsel and advice, legal strategising, rendering legal opinion through the services of drafting of all necessary pleadings and finally representation in Trial Courts including conducting defence.",
  },
  {
    slug: "representation-before-high-court",
    title: "Representation Before High Court",
    icon: "/icons/PracticeList/Representation-Before-High-Court.png",
    mobileImage: "/images/Professional services - Mobile/P5.png",
    webImage: "/images/Professional services - web/P5-Web.png",
    description:
      "ACAJuris' core practice is centred on proceedings before the High Court of Karnataka. Services include filing and pursuing Quashing Petitions, Writ Petitions, Appeals, Revisions, and Contempt Cases, along with making representations and presenting arguments on interim applications, main petitions, and appeals on merits.",
  },
  {
    slug: "senior-advocate-engagements",
    title: "Senior Advocate Engagements",
    icon: "/icons/PracticeList/Senior-Advocate-Engagements.png",
    mobileImage: "/images/Professional services - Mobile/P6.png",
    webImage: "/images/Professional services - web/P6-Web.png",
    description:
      "In certain matters, it may be desirable to engage the services of a Senior Advocate, particularly at the stage of presenting arguments for interim relief such as stay orders, and at the stage of final disposal on merits. ACAJuris facilitates such engagements in cases where it has filed petitions on behalf of clients or represented parties as respondents.",
  },
  {
    slug: "supreme-court-matters",
    title: "Supreme Court Matters",
    icon: "/icons/PracticeList/Supreme-Court-Matters.png",
    mobileImage: "/images/Professional services - Mobile/P7.png",
    webImage: "/images/Professional services - web/P7-Web.png",
    description:
      "While ACAJuris does not presently maintain an active practice before the Supreme Court, the Firm regularly refers matters to experienced Supreme Court practitioners. In such cases, ACAJuris continues to provide legal counsel, monitors progress with the engaged counsel, and offers ongoing support. The Firm also assists Supreme Court lawyers in these referred matters, including during the preparation and presentation of arguments and at all significant stages of proceedings.",
  },
  {
    slug: "criminal-trials",
    title: "Criminal Trials",
    icon: "/icons/PracticeList/Criminal-Trials.png",
    mobileImage: "/images/Professional services - Mobile/P8.png",
    webImage: "/images/Professional services - web/P8-Web.png",
    description:
      "A criminal trial is widely regarded as one of the most challenging areas in the practice of law, demanding precision, resilience, and exceptional advocacy. The role of a trial lawyer is exacting, requiring rigorous preparation and sustained effort throughout proceedings. ACAJuris has gained substantial experience in conducting criminal trials, having represented clients in numerous complex and demanding cases.",
  },
  {
    slug: "criminal-appeals-revisions",
    title: "Criminal Appeals & Revisions",
    icon: "/icons/PracticeList/Criminal-Appeals-&-Revisions.png",
    mobileImage: "/images/Professional services - Mobile/P9.png",
    webImage: "/images/Professional services - web/P9-Web.png",
    description:
      "ACAJuris represents clients in filing Criminal Appeals and Criminal Revisions before the District Courts as well as the High Court. These services encompass a thorough study of the trial court records, preparation and drafting of appeals or revisions, and effective representation through appearances and arguments before the appellate or revision courts.",
  },
  {
    slug: "police-station-assistance",
    title: "Police Station - Assistance",
    icon: "/icons/PracticeList/Police-Station---Assistance.png",
    mobileImage: "/images/Professional services - Mobile/P10.png",
    webImage: "/images/Professional services - web/P10-Web.png",
    description:
      "The services of a lawyer are often indispensable before the police in a variety of circumstances. These may include submitting representations, initiating complaints, responding to inquiries when summoned, or addressing allegations and charges. ACAJuris provides professional representation in such matters, ensuring effective legal support and guidance throughout these interactions.",
  },
];

const boxImageDesignTitles = new Set([
  "Legal Consultation & Counsel Services",
  "Legal Drafting & Initiation",
  "Legal Services on Retainer",
  "Representation Before High Court",
  "Supreme Court Matters",
  "Criminal Appeals & Revisions",
]);

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="professional-services-title">
          <p>What Professional Legal Services We Offer</p>
          <h1 id="professional-services-title">Professional Services</h1>
        </section>

        <section className={styles.services} id="professional-services-list">
          <div className={styles.mobileImagesContainer}>
            {professionalServices.map((service, index) => (
              <div key={service.title} className={styles.mobileImageWrapper}>
                {service.mobileImage ? (
                  <Image
                    src={service.mobileImage}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className={styles.mobileImage}
                    priority={false}
                  />
                ) : (
                  <article className={styles.mobileTextCard}>
                    <h2>{service.title}</h2>
                    <p>{formatAcaJuris(service.description)}</p>
                  </article>
                )}
              </div>
            ))}
          </div>

          {professionalServices.map((service, index) => {
            const isBoxImageDesign = boxImageDesignTitles.has(service.title);
            return (
              <article
                id={service.slug}
                className={`${styles.serviceCard} ${isBoxImageDesign ? styles.imageLeft : ""}`}
                key={service.title}
                style={{ backgroundImage: `url("${service.webImage}")` }}
              >
                {isBoxImageDesign && (
                  <div className={styles.cardMedia}>
                    <div className={styles.iconCircle}>
                      <div className={styles.iconBg}>
                        <Image
                          src={service.icon}
                          alt=""
                          width={64}
                          height={64}
                          className={styles.cardIcon}
                        />
                      </div>
                    </div>
                    <div className={styles.cardLogo}>
                      <Image
                        src="/icons/ACA_Dark.png"
                        alt="ACA"
                        width={56}
                        height={56}
                        className={styles.cardLogoImg}
                      />
                    </div>
                  </div>
                )}

                {isBoxImageDesign && <div className={styles.cardDivider} aria-hidden="true" />}

                <div className={styles.cardContent}>
                  <div className={styles.cardIndicator}>
                    <div className={styles.indicatorDots} aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className={styles.indicatorLine} aria-hidden="true" />
                  </div>
                  <h2>{service.title}</h2>
                  <p>{formatAcaJuris(service.description)}</p>
                </div>

                {!isBoxImageDesign && <div className={styles.cardDivider} aria-hidden="true" />}

                {!isBoxImageDesign && (
                  <div className={styles.cardMedia}>
                    <div className={styles.iconCircle}>
                      <div className={styles.iconBg}>
                        <Image
                          src={service.icon}
                          alt=""
                          width={64}
                          height={64}
                          className={styles.cardIcon}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
