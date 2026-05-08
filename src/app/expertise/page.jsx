import Header from "../../components/header.jsx";
import Link from "next/link";
import styles from "./expertise.module.css";

const expertiseItems = [
  {
    slug: "quashing-petitions-inherent-powers",
    title: "Quashing Petitions – Inherent Powers",
    icon: "/icons/PracticeList/Quashing_Petitions_icon.png",
    excerpt:
      "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent powers flowing from Section 482 of Cr.P.C - now Section 528 of Bharatiya Nyaya Sakshya Sanhita - may make such orders to prevent abuse of process of Court or to secure ends of justice. ACAJuris’ practice before the High Court predominantly encompasses litigations arising within this specialized area of law. Illustrative remedies falling within this jurisdiction are: Quashing of FIR, Charge Sheet and entire criminal proceedings; Directions for transfer of investigation to higher ranked police officer or a different agency; Directions for Speedy Investigation & Trial; Directions to police to conduct further investigation, by reason of biased, partial, directionless and incomplete investigation; Directions with respect to Passport, Look Out Circular, Citizenship and similar matters; Quashing Police Notices; Directions with respect to Extradition Act and implementation of Agreement between two Nations; Directions with respect to protection of one’s Privacy and Right to be Forgotten.",
  },
  {
    slug: "bail",
    title: "Bail",
    icon: "/icons/PracticeList/BailIcon.png",
    excerpt:
      "Bail is the primary legal relief desired by someone accused of a crime, offering protection from arrest. It is usually advised by lawyers at the stage of FIR registration—the start of a criminal case—or even earlier.",
  },
  {
    slug: "cbi-prosecutions-defence-of",
    title: "CBI Prosecutions – Defence Of",
    icon: "/icons/PracticeList/CBI_Icon.png",
    excerpt:
      "The Central Bureau of Investigation (CBI) is often tasked with probing major financial crimes and scams. The scale of such cases can create systemic biases within the criminal justice process. Effective defence, therefore, requires a meticulous and comprehensive review of the extensive documentation contained in CBI charge sheets.",
  },
  {
    slug: "frauds-financial-business-bank",
    title: "Frauds – Financial, Business & Bank",
    icon: "/icons/PracticeList/FraudsIcon.png",
    excerpt:
      "ACAJuris has extensive experience in financial, corporate, business, and banking fraud cases, representing both complainants and accused individuals, as well as multinational and Indian companies. Our services in this field include consultation and legal counsel, drafting and initiation, and representation and trial.",
  },
  {
    slug: "look-out-circular-passport-related",
    title: "Look Out Circular | Passport Related Cases",
    icon: "/icons/PracticeList/PassportIcon.png",
    excerpt:
      "A Look Out Circular (LOC) is a legal measure issued by investigating agencies or courts during ongoing criminal proceedings to restrict an individual's travel, either preventing departure from the country or detaining them upon arrival. ACAJuris brings decades of expertise in resolving complex legal challenges involving LOCs, passports, foreigners, citizenship, extradition, and international legislation.",
  },
  {
    slug: "sexual-harassment-at-workplace",
    title: "Sexual Harassment At Workplace",
    icon: "/icons/PracticeList/HarassmentIcon.png",
    excerpt:
      "Over the years, ACAJuris has represented both victims and accused, delivering comprehensive professional services in this field of practice, including legal advice on statutory compliances with respect to prevailing laws in India, more particularly The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
  },
  {
    slug: "defamation-laws",
    title: "Defamation Laws",
    icon: "/icons/PracticeList/DefamationIcon.png",
    excerpt:
      "Defamation refers to acts that damage a person's reputation, whether through written statements (libel) or spoken words (slander). ACAJuris' services in this area include issuing legal notices, drafting complaints, representing accused persons, and filing petitions for quashing.",
  },
  {
    slug: "narcotic-drugs",
    title: "Narcotic Drugs",
    icon: "/icons/PracticeList/NarcoticsIcon.png",
    excerpt:
      "The NDPS Act, 1985, is India's primary law governing narcotics and psychotropic offences. Violations are treated as among the most serious crimes, with stringent provisions on remand, custody, bail, and trial procedures.",
  },
  {
    slug: "matrimonial-family-laws",
    title: "Matrimonial & Family Laws",
    icon: "/icons/PracticeList/MatrimonialIcon.png",
    excerpt:
      "ACAJuris advises and represents clients in divorce, alimony, child custody, guardianship, dowry harassment, and domestic violence matters. We also handle recognition and enforcement of foreign court orders in Indian litigation.",
  },
  {
    slug: "cheque-dishonour-cases-ni",
    title: "Cheque Dishonour Cases – NI ACT",
    icon: "/icons/PracticeList/ChequeIcon.png",
    excerpt:
      "Dishonour of cheques is a criminal offence under India's Negotiable Instruments Act. ACAJuris represents both drawers and drawees, who become accused and complainant in the ensuing litigation.",
  },
  {
    slug: "violations-under-information-technology",
    title: "Violations Under Information Technology",
    icon: "/icons/PracticeList/ViolationIcon.png",
    excerpt:
      "Commonly termed cybercrime, the Information Technology Act penalizes violations involving computers and the internet. ACAJuris' practice includes legal counsel, complaint drafting, bail petitions, trial defence, quashing petitions, and opposing quashing petitions.",
  },
  {
    slug: "prevention-of-corruption",
    title: "Prevention Of Corruption",
    icon: "/icons/PracticeList/Prevention_Corruption_Icon.png",
    excerpt:
      "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act (P.C.Act) is significant. Our practice in this area of criminal law includes bail petitions, investigation-stage assistance, trial defence, and quashing petitions.",
  },
  {
    slug: "prevention-of-money-laundering",
    title: "Prevention Of Money Laundering",
    icon: "/icons/PracticeList/Money_Laundering_Icon.png",
    excerpt:
      "PMLA is an act to prevent money-laundering, which means actions of indulging in any processes or activities connected with proceeds of crime. ACAJuris advises and represents clients during investigation, bail, and quashing proceedings.",
  },
  {
    slug: "company-law-prosecutions-sfio",
    title: "Company Law Prosecutions – SFIO",
    icon: "/icons/PracticeList/Company_Law_Icon.png",
    excerpt:
      "Under the Companies Act 2013, offences involving fraud, such as concealment of facts, abuse of position, deceit, or false statements and accounts, are investigated and prosecuted by the Serious Fraud Investigation Office.",
  },
  {
    slug: "copyright-trademark-violation",
    title: "Copyright & Trademark Violation",
    icon: "/icons/PracticeList/Copywrite_Icon.png",
    excerpt:
      "Trademark and copyright violations may result in prosecution under the Trade Marks Act, 1999 and the Copyright Act, 1957. ACAJuris offers professional services in this field to both aggrieved parties and alleged transgressors.",
  },
  {
    slug: "extradition-laws",
    title: "Extradition Laws",
    icon: "/icons/PracticeList/ExtraditionIcon.png",
    excerpt:
      "Extradition cases are uncommon. As of 2023, India had agreements with 12 countries and treaties with 48 others, though fugitives from non-treaty nations may still be extradited through established procedures.",
  },
  {
    slug: "motor-vehicle-offences",
    title: "Motor Vehicle Offences",
    icon: "/icons/PracticeList/Motor_Vehicle_Icon.png",
    excerpt:
      "Motor vehicle accident cases are common, but death by negligence under Section 304-A IPC carries serious consequences. Though legally considered less grave, conviction can still result in a minimum of six months' imprisonment, as mandated by the Supreme Court.",
  },
];

export default function ExpertisePage() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <p className={styles.heroLabel}>Expertise</p>
        <h1 className={styles.heroTitle}>AREAS OF PRACTICE</h1>
        <p className={styles.heroSubtitle}>Find more about our practice areas</p>
      </section>

      {/* Practice Cards Grid */}
      <section className={styles.practiceSection}>
        <div className={styles.sectionInner}>
          <div className={styles.practiceGrid}>
            {/* First cell: Find more text */}
            <div className={styles.findMoreCell}>
              <p className={styles.findMoreText}>
                Find more about<br />our practice areas
              </p>
            </div>

            {expertiseItems.map(({ slug, title, icon, excerpt }) => (
              <div key={slug} className={styles.card}>
                <div className={styles.cardIconArea}>
                  <span className={styles.acaWatermark}>ACA</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icon}
                    alt={title}
                    className={styles.cardIcon}
                  />
                </div>
                <div className={styles.cardContent}>
                  <Link href={`/expertise/${slug}`} className={styles.cardTitle}>
                    {title}
                  </Link>
                  <p className={styles.cardExcerpt}>{excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
