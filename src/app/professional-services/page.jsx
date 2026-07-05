import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Header from "../../components/header.jsx";
import { formatAcaJuris } from "../../components/aca-juris.jsx";
import styles from "./professional-services.module.css";

const professionalServices = [
  {
    slug: "legal-consultation-counsel-services",
    title: "Legal Consultation & Counsel Services",
    icon: "/icons/PracticeList/Legal-Consultation-&-Counsel-Services.png",
    image: "/images/Professional services - web/P1-Web.png",
    description:
      "From distinguishing and identifying a crime or civil wrong to determining the appropriate legal remedy, the process involves study, discussion, meetings, fact-finding, assessment, and counsel - guiding whether to act or abstain, and if to act, what legal remedy to pursue, ACAJuris provides these comprehensive services.",
  },
  {
    slug: "legal-opinion",
    title: "Legal Opinion",
    icon: "/icons/PracticeList/Legal-Opinion.png",
    image: "/images/Professional services - web/P2-Web.png",
    description:
      "Through meetings, review of documents and communications, and assessment of facts and circumstances, then applying prevailing laws, statutes, and case precedents, ACAJuris provides a considered Legal Opinion - advising clients on their legal standing, litigation risks, and likely dispute outcomes.",
  },
  {
    slug: "legal-drafting-initiation",
    title: "Legal Drafting & Initiation",
    icon: "/icons/PracticeList/Legal-Drafting-&-Initiation.png",
    image: "/images/Professional services - web/P3-Web.png",
    description:
      "We provide drafting and assistance in initiating legal processes, including preparing and lodging complaints before the police, drafting complaints to be presented before the Court, and offering representation and appearance before the Court.",
  },
  {
    slug: "legal-services-on-retainer",
    title: "Legal Services on Retainer",
    icon: "/icons/PracticeList/REtainers.png",
    image: "/images/Professional services - web/P4-Web.png",
    description:
      "ACAJuris offers legal services on a retainer basis, providing clients with immediate and continuous access to legal support. This arrangement ensures ongoing consultation, counsel, document review, legal opinions, and urgent professional assistance as needed.",
  },
  {
    slug: "representative-services-before-trial-courts",
    title: "Representative Services before Trial Courts",
    icon: "/icons/PracticeList/Representative-Services-before-Trial-Courts.png",
    image: "/images/Professional services - web/P5-Web.png",
    description:
      "This signifies comprehensive professional services, i.e. handling the case in its entirety. From stage of inception, like initial legal counsel and advice, legal strategising, rendering legal opinion through the services of drafting of all necessary pleadings and finally representation in Trial Courts including conducting defence.",
  },
  {
    slug: "representation-before-high-court",
    title: "Representation Before High Court",
    icon: "/icons/PracticeList/Representation-Before-High-Court.png",
    image: "/images/Professional services - web/P6-Web.png",
    description:
      "ACAJuris' core practice is centred on proceedings before the High Court of Karnataka. Services include filing and pursuing Quashing Petitions, Writ Petitions, Appeals, Revisions, and Contempt Cases, along with making representations and presenting arguments on interim applications, main petitions, and appeals on merits.",
  },
  {
    slug: "senior-advocate-engagements",
    title: "Senior Advocate Engagements",
    icon: "/icons/PracticeList/Senior-Advocate-Engagements.png",
    image: "/images/Professional services - web/P7-Web.png",
    description:
      "In certain matters, it may be desirable to engage the services of a Senior Advocate, particularly at the stage of presenting arguments for interim relief such as stay orders, and at the stage of final disposal on merits. ACAJuris facilitates such engagements in cases where it has filed petitions on behalf of clients or represented parties as respondents.",
  },
  {
    slug: "supreme-court-matters",
    title: "Supreme Court Matters",
    icon: "/icons/PracticeList/Supreme-Court-Matters.png",
    image: "/images/Professional services - web/P8-Web.png",
    description:
      "While ACAJuris does not presently maintain an active practice before the Supreme Court, the Firm regularly refers matters to experienced Supreme Court practitioners. In such cases, ACAJuris continues to provide legal counsel, monitors progress with the engaged counsel, and offers ongoing support. The Firm also assists Supreme Court lawyers in these referred matters, including during the preparation and presentation of arguments and at all significant stages of proceedings.",
  },
  {
    slug: "criminal-trials",
    title: "Criminal Trials",
    icon: "/icons/PracticeList/Criminal-Trials.png",
    image: "/images/Professional services - web/P9-Web.png",
    description:
      "A criminal trial is widely regarded as one of the most challenging areas in the practice of law, demanding precision, resilience, and exceptional advocacy. The role of a trial lawyer is exacting, requiring rigorous preparation and sustained effort throughout proceedings. ACAJuris has gained substantial experience in conducting criminal trials, having represented clients in numerous complex and demanding cases.",
  },
  {
    slug: "criminal-appeals-revisions",
    title: "Criminal Appeals & Revisions",
    icon: "/icons/PracticeList/Criminal-Appeals-&-Revisions.png",
    image: "/images/Professional services - web/P10-Web.png",
    description:
      "ACAJuris represents clients in filing Criminal Appeals and Criminal Revisions before the District Courts as well as the High Court. These services encompass a thorough study of the trial court records, preparation and drafting of appeals or revisions, and effective representation through appearances and arguments before the appellate or revision courts.",
  },
  {
    slug: "police-station-assistance",
    title: "Police Station - Assistance",
    icon: "/icons/PracticeList/Police-Station---Assistance.png",
    image: "/images/Professional services - web/P11-Web.png",
    description:
      "The services of a lawyer are often indispensable before the police in a variety of circumstances. These may include submitting representations, initiating complaints, responding to inquiries when summoned, or addressing allegations and charges. ACAJuris provides professional representation in such matters, ensuring effective legal support and guidance throughout these interactions.",
  },
];

export default function ProfessionalServicesPage() {
  const regularServices = professionalServices.slice(0, -1);
  const featuredService = professionalServices[professionalServices.length - 1];

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="professional-services-title">
          <p>Our Services</p>
          <h1 id="professional-services-title">Professional Services</h1>
        </section>

        <section className={styles.servicesSection} id="professional-services-list">
          <div className={styles.sectionHeader}>
            <h2>Comprehensive Legal Expertise</h2>
          </div>

          <div className={styles.servicesGrid}>
            {regularServices.map((service, index) => (
              <Fragment key={service.slug}>
                <article id={service.slug} className={styles.serviceCard}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconCircle}>
                      <Image
                        src={service.icon}
                        alt=""
                        width={22}
                        height={22}
                        className={styles.cardIcon}
                      />
                    </div>

                    <div className={styles.titleWrap}>
                      <span className={styles.titleRule} aria-hidden="true" />
                      <h3>{service.title}</h3>
                    </div>
                  </div>

                  <p className={styles.cardDescription}>{formatAcaJuris(service.description)}</p>
                  <span className={styles.cardWatermark}>ACA</span>
                </article>

                {index % 2 === 1 && index < regularServices.length - 1 ? (
                  <div className={styles.rowDivider} aria-hidden="true" key={`${service.slug}-divider`} />
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className={styles.featuredDivider} aria-hidden="true" />

          <article id={featuredService.slug} className={`${styles.serviceCard} ${styles.featuredCard}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconCircle}>
                <Image
                  src={featuredService.icon}
                  alt=""
                  width={22}
                  height={22}
                  className={styles.cardIcon}
                />
              </div>

              <div className={styles.titleWrap}>
                <span className={styles.titleRule} aria-hidden="true" />
                <h3>{featuredService.title}</h3>
              </div>
            </div>

            <p className={styles.cardDescription}>{formatAcaJuris(featuredService.description)}</p>
            <span className={styles.cardWatermark}>ACA</span>
          </article>
        </section>

        <section className={styles.ctaSection} aria-label="Contact Call To Action">
          <div className={styles.ctaPanel}>
            <div>
              <h3>Ready to discuss your needs?</h3>
              <p>Tell us about your matter and we will guide you to the right service and next steps.</p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/contact#leave-message" className={styles.primaryAction}>
                Get in touch
              </Link>
              <Link href="/contact" className={styles.secondaryAction}>
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
