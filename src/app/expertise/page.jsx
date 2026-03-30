import Header from "../../components/header.jsx";
import Link from "next/link";
import styles from "./expertise.module.css";

const expertiseItems = [
  {
    slug: "quashing-petitions-inherent-powers",
    title: "Quashing Petitions – Inherent Powers",
    icon: "/icons/PracticeList/Quashing_Petitions_icon.png",
    excerpt:
      "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent power under Section 482 of the CrPC, may quash criminal proceedings.",
  },
  {
    slug: "bail",
    title: "Bail",
    icon: "/icons/PracticeList/BailIcon.png",
    excerpt:
      "Protection from being arrested is the first and foremost legal relief desired by an individual facing a criminal allegation. We handle bail at all levels.",
  },
  {
    slug: "cbi-prosecutions-defence-of",
    title: "CBI Prosecutions – Defence Of",
    icon: "/icons/PracticeList/CBI_Icon.png",
    excerpt:
      "Major financial scams and frauds are very often investigated by the Central Bureau of Investigation – CBI. We provide structured defence in such prosecutions.",
  },
  {
    slug: "frauds-financial-business-bank",
    title: "Frauds – Financial, Business & Bank",
    icon: "/icons/PracticeList/FraudsIcon.png",
    excerpt:
      "ACAJuris' practice over the years has included representations and appearances in cases involving financial, business, and banking frauds at all stages.",
  },
  {
    slug: "look-out-circular-passport-related",
    title: "Look Out Circular | Passport Related Cases",
    icon: "/icons/PracticeList/PassportIcon.png",
    excerpt:
      "Look Out Circular – LOC is a measure invoked by the investigation agency in an ongoing investigation to prevent an accused or suspect from leaving the country.",
  },
  {
    slug: "sexual-harassment-at-workplace",
    title: "Sexual Harassment At Workplace",
    icon: "/icons/PracticeList/HarassmentIcon.png",
    excerpt:
      "ACAJuris' exposure to practice over the years includes a wide range of cases in this area, with representation for both complainants and respondents.",
  },
  {
    slug: "defamation-laws",
    title: "Defamation Laws",
    icon: "/icons/PracticeList/DefamationIcon.png",
    excerpt:
      "Defamation – acts that harm a person's reputation. This covers written (libel) and spoken (slander) statements. We handle criminal and civil defamation cases.",
  },
  {
    slug: "narcotic-drugs",
    title: "Narcotic Drugs",
    icon: "/icons/PracticeList/NarcoticsIcon.png",
    excerpt:
      "The Narcotics Drugs and Psychotropic Substances Act, 1985 is the primary legislation governing narcotic drug offences. We represent clients at all stages.",
  },
  {
    slug: "matrimonial-family-laws",
    title: "Matrimonial & Family Laws",
    icon: "/icons/PracticeList/MatrimonialIcon.png",
    excerpt:
      "We take up the cause of both women and men – women who are victims of domestic abuse, and men who are victims of misuse of matrimonial laws.",
  },
  {
    slug: "cheque-dishonour-cases-ni",
    title: "Cheque Dishonour Cases – NI ACT",
    icon: "/icons/PracticeList/ChequeIcon.png",
    excerpt:
      "Dishonour of cheques attracts a criminal offence in India under the Negotiable Instruments Act. We handle prosecution and defence in such matters.",
  },
  {
    slug: "violations-under-information-technology",
    title: "Violations Under Information Technology",
    icon: "/icons/PracticeList/ViolationIcon.png",
    excerpt:
      "Otherwise known as cyber crime, the Information Technology Act makes penal certain acts of computer-related violations and online frauds.",
  },
  {
    slug: "prevention-of-corruption",
    title: "Prevention Of Corruption",
    icon: "/icons/PracticeList/Prevention_Corruption_Icon.png",
    excerpt:
      "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act spans over several decades of dedicated practice.",
  },
  {
    slug: "prevention-of-money-laundering",
    title: "Prevention Of Money Laundering",
    icon: "/icons/PracticeList/Money_Laundering_Icon.png",
    excerpt:
      "PMLA – an act to prevent money-laundering by making penal all actions of indulging in any processes or activities connected with the proceeds of crime.",
  },
  {
    slug: "company-law-prosecutions-sfio",
    title: "Company Law Prosecutions – SFIO",
    icon: "/icons/PracticeList/Company_Law_Icon.png",
    excerpt:
      "Offences under the Companies Act 2013 are investigated and prosecuted by the Serious Fraud Investigation Office – SFIO.",
  },
  {
    slug: "copyright-trademark-violation",
    title: "Copyright & Trademark Violation",
    icon: "/icons/PracticeList/Copywrite_Icon.png",
    excerpt:
      "Violations of trade marks and/or copyrights can lead to prosecutions under the Trade Marks Act 1999 and the Copyright Act 1957.",
  },
  {
    slug: "extradition-laws",
    title: "Extradition Laws",
    icon: "/icons/PracticeList/ExtraditionIcon.png",
    excerpt:
      "Cases arising out of Extradition Laws are rare. As of 2023, India has extradition treaties in force with several countries. We advise on such matters.",
  },
  {
    slug: "motor-vehicle-offences",
    title: "Motor Vehicle Offences",
    icon: "/icons/PracticeList/Motor_Vehicle_Icon.png",
    excerpt:
      "Cases arising from motor vehicle accidents include death by negligence, rash driving, and hit-and-run offences. We represent both prosecution and defence.",
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
