import Link from "next/link";
import Header from "../../../components/header.jsx";
import { formatAcaJuris } from "../../../components/aca-juris.jsx";
import styles from "./slug.module.css";

const expertiseContent = {
  "quashing-petitions-inherent-powers": {
    title: "QUASHING PETITIONS - INHERENT POWERS",
    icon: "/icons/PracticeList/Quashing_Petitions_icon.png",
    description:
      "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent powers flowing from Section 482 of Cr.P.C - now Section 528 of Bharatiya Nyaya Sakshya Sanhita - may make such orders, to prevent abuse of process of Court or to secure ends of justice. ACAJuris’ practice before the High Court predominantly encompasses litigations arising within this specialized area of law. Illustrative remedies falling within this jurisdiction are -",
    bullets: [
      "Quashing of FIR, Charge Sheet and entire criminal proceedings.",
      "Directions for transfer of investigation to higher ranked police officer or a different agency.",
      "Directions for Speedy Investigation & Trial.",
      "Directions to police to conduct further investigation, by reason of biased, partial, directionless and incomplete investigation.",
      "Directions with respect to Passport, Look Out Circular, Citizenship and similar matters.",
      "Quashing Police Notices.",
      "Directions with respect to Extradition Act and implementation of Agreement between two Nations.",
      "Directions with respect to protection of one's Privacy and Right to be Forgotten.",
    ],
  },
  bail: {
    title: "BAIL",
    icon: "/icons/PracticeList/BailIcon.png",
    description:
      "Bail is the primary legal relief desired by someone accused of a crime, offering protection from arrest. It is usually advised by lawyers at the stage of FIR registration—the start of a criminal case—or even earlier. Bail operates at different stages of a criminal case, offering protection and relief to the accused in various forms.",
    bullets: [
      "Anticipatory Bail: Sought before arrest, mainly in non-bailable offences.",
      "Interim Bail: Temporary relief granted when courts find the case deserving.",
      "Post-arrest Bail: Requested after arrest to secure release from custody.",
    ],
    closingText: "Relief through bail should ideally be sought promptly, but at times it must be carefully timed—for example, when applying for anticipatory bail for someone currently abroad. ACAJuris, with over 24 years of experience in criminal litigation, provides expert bail services across diverse laws—including cases under the IPC (fraud, scams, economic offences, dowry harassment, murder), organised crime statutes, the Foreigners Act, Passport Act, NDPS Act, Cyber Crimes, Companies Act, and more.",
  },
  "cbi-prosecutions-defence-of": {
    title: "CBI PROSECUTIONS - DEFENCE OF",
    icon: "/icons/PracticeList/CBI_Icon.png",
    description:
      "The Central Bureau of Investigation (CBI) is often tasked with probing major financial crimes and scams. The scale of such cases can create systemic biases within the criminal justice process. Effective defence, therefore, requires a meticulous and comprehensive review of the extensive documentation contained in CBI charge sheets.",
    bullets: [],
  },
  "frauds-financial-business-bank": {
    title: "FRAUDS - FINANCIAL, BUSINESS & BANK",
    icon: "/icons/PracticeList/FraudsIcon.png",
    description:
      "ACAJuris has extensive experience in financial, corporate, business, and banking fraud cases, representing both complainants and accused individuals, as well as multinational and Indian companies. Our services in this field include -",
    bullets: [
      "Consultation & Legal Counsel: Gathering information, assessing fraud or civil wrongs, strategising, researching remedies, and implementing legal action.",
      "Drafting & Initiation: Preparing and assisting with complaints to police or courts to begin legal proceedings.",
      "Representation & Trial: Appearing before courts to represent victims or defend accused persons, including conducting trials.",
    ],
  },
  "look-out-circular-passport-related": {
    title: "LOOK OUT CIRCULAR - PASSPORT RELATED CASES",
    icon: "/icons/PracticeList/PassportIcon.png",
    description:
      "A Look Out Circular (LOC) is a legal measure issued by investigating agencies or courts during ongoing criminal proceedings to restrict an individual's travel, either preventing departure from the country or detaining them upon arrival. Passport complications often arise in such cases, as issuance or renewal may be withheld while the matter is pending.",
    paragraphs: [
      "ACAJuris brings decades of expertise in resolving complex legal challenges, offering clients strategic advice, filing petitions, and securing effective outcomes through diligent representation before the courts.",
      "ACAJuris offers specialized counsel in matters involving foreigners, citizenship, extradition, and international legislation. Our services include legal opinions, consultations, counsel, and filing of petitions.",
      "ACAJuris also serves on the panels of select foreign Consulates and High Commissions.",
    ],
    bullets: [],
  },
  "sexual-harassment-at-workplace": {
    title: "SEXUAL HARASSMENT AT WORKPLACE",
    icon: "/icons/PracticeList/HarassmentIcon.png",
    description:
      "Over the years, ACAJuris has represented both victims and accused, delivering comprehensive professional services in this field of practice like -",
    bullets: [
      "Legal Advice: On statutory compliances with respect to prevailing laws in India, more particularly The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
      "Case specific Legal counsel: On the necessary measures to be taken, based on the factual background and prevailing situation.",
      "Drawing up strategy: On the legal course to be adopted, to a case in point.",
      "Filing Petition for Bail & Representations before Courts, by addressing arguments for Bail.",
      "Filing Petition for Quashing: Of the FIR or Charge Sheet or Criminal Proceedings, before High Court and includes Representations and addressing arguments (including other remedies before High Court).",
      "For Victims: Legal counsel, Representations before Courts during the process of Bail or Quashing and opposing the relief.",
    ],
  },
  "defamation-laws": {
    title: "DEFAMATION LAWS",
    icon: "/icons/PracticeList/DefamationIcon.png",
    description:
      "Defamation refers to acts that damage a person's reputation, whether through written statements (libel) or spoken words (slander). ACAJuris' services in this area of law include -",
    bullets: [
      "Issuing Legal Notice: As a pre-emptive action to forestall imminent litigation.",
      "Drafting Complaint: Representations before Courts, in prosecuting the Complaint.",
      "Representing Accused and Conducting defence, before Courts.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
    ],
  },
  "narcotic-drugs": {
    title: "NARCOTIC DRUGS",
    icon: "/icons/PracticeList/NarcoticsIcon.png",
    description:
      "The NDPS Act, 1985, is India's primary law governing narcotics and psychotropic offences. Violations are treated as among the most serious crimes, with stringent provisions on remand, custody, bail, and trial procedures. ACAJuris' experience in this field of law, includes -",
    bullets: [
      "Filing Petition for Bail & Representations before Trial Court or High Court, during the process of Bail.",
      "Conducting defence, during the course of Trial.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & addressing arguments.",
    ],
  },
  "matrimonial-family-laws": {
    title: "MATRIMONIAL AND FAMILY LAWS",
    icon: "/icons/PracticeList/MatrimonialIcon.png",
    description:
      "ACAJuris advises and represents clients in divorce, alimony, child custody, guardianship, dowry harassment, and domestic violence matters. We also handle recognition and enforcement of foreign court orders in Indian litigation. ACAJuris offers extensive expertise and a broad range of services in this area of law, particularly in -",
    bullets: [
      "Counselling and Legal Advice in the direction of Reconciliation.",
      "Case specific Legal counsel: On the necessary measures to be taken, based on the factual background and prevailing situation.",
      "Drawing up strategy: On the legal course to be adopted, to a case in point.",
      "Filing Petition for Bail & Representations before Courts, during the process of Bail.",
      "Filing Petition for Quashing: Of the FIR or Charge Sheet or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
      "Participating in Out-of-Court Mediation and also the Legal process of Mediation.",
    ],
  },
  "cheque-dishonour-cases-ni": {
    title: "CHEQUE DISHONOUR CASES - NI ACT",
    icon: "/icons/PracticeList/ChequeIcon.png",
    description:
      "Dishonour of cheques is a criminal offence under India's Negotiable Instruments Act. ACAJuris represents both drawers and drawees, who become accused and complainant in the ensuing litigation and our expertise and experience expands in this area of law, to -",
    bullets: [
      "Issuing Legal Notice: A statutory requirement under law, mandated before initiating prosecution.",
      "Drafting Complaint: Representations before Courts, in prosecuting the Complaint.",
      "Representing Accused and Conducting defence, before Courts.",
      "Filing Petition for Quashing: Of complaints or criminal proceedings before the High Court, with Representations throughout the process including related remedies.",
      "Representing and opposing Petitions for Quashing filed by the Accused, before the High Court.",
    ],
  },
  "violations-under-information-technology": {
    title: "VIOLATIONS UNDER INFORMATION TECHNOLOGY ACT",
    icon: "/icons/PracticeList/ViolationIcon.png",
    description:
      "Commonly termed cybercrime, the Information Technology Act penalizes violations involving computers and the internet. ACAJuris' practice includes -",
    bullets: [
      "Advancing Legal Counsel: In relation to identifying nature of offences that may arise from IT Act and related offences under other general penal laws.",
      "Drafting Complaint: Representations before Courts, in prosecuting the Complaint.",
      "Filing Petition for Bail & Representations before Courts, during the process of Bail.",
      "Representing Accused and Conducting defence, before Courts - Trials.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
      "Representing and opposing Petitions for Quashing filed by the Accused, before the High Court.",
    ],
  },
  "prevention-of-corruption": {
    title: "PREVENTION OF CORRUPTION ACT",
    icon: "/icons/PracticeList/Prevention_Corruption_Icon.png",
    description:
      "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act (P.C.Act) is significant. Our practice in this area of criminal law over the years includes -",
    bullets: [
      "Filing Petition for Bail & Representations before Courts, during the process of Bail.",
      "Legal Assistance, Counsel & Advice: During the stage of investigation.",
      "Representing Accused and Conducting defence, before Courts - Trials.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
    ],
  },
  "prevention-of-money-laundering": {
    title: "PREVENTION OF MONEY LAUNDERING ACT (PMLA)",
    icon: "/icons/PracticeList/Money_Laundering_Icon.png",
    description:
      "PMLA, an act to prevent money-laundering - which means, actions of indulging in any processes or activities connected with proceeds of crime. ACAJuris has the experience and exposure of advising and representing clients in relation to -",
    bullets: [
      "Legal Assistance, Counsel & Advice: During the stage of investigation.",
      "Petition for Bail & Representations before Courts, during the process of Bail.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
    ],
  },
  "company-law-prosecutions-sfio": {
    title: "COMPANY LAW PROSECUTIONS - SFIO",
    icon: "/icons/PracticeList/Company_Law_Icon.png",
    description:
      "Under the Companies Act 2013, offences involving fraud, such as concealment of facts, abuse of position, deceit, or false statements and accounts, are investigated and prosecuted by the Serious Fraud Investigation Office. ACAJuris has expertise in delivering diverse services in this area of law, particularly -",
    bullets: [
      "Legal Assistance, Counsel & Advice: During the stage of investigation.",
      "Advancing Legal Counsel: In relation to validity of prosecutions, more particularly issue relating to jurisdiction and applicability of Companies Act 2013 vis-a-vis Companies Act 1956.",
      "Filing Petition for Bail & Representations before Courts, during the process of Bail.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
    ],
  },
  "copyright-trademark-violation": {
    title: "COPYRIGHT AND TRADEMARK VIOLATION",
    icon: "/icons/PracticeList/Copywrite_Icon.png",
    description:
      "Trademark and copyright violations may result in prosecution under the Trade Marks Act, 1999 and the Copyright Act, 1957.",
    paragraphs: [
      "The Trade Marks Act governs the registration and protection of marks for goods and services, while the Copyright Act safeguards creators of literary, dramatic, musical, and artistic works, as well as producers of films and sound recordings, and prohibits fraudulent use.",
      "ACAJuris offers professional services in this field to both aggrieved parties and alleged transgressors. Our services include -",
    ],
    bullets: [
      "Advancing Legal Counsel and Advice: In relation to identifying if there exists a violation or not.",
      "Legal Notice: As a pre-emptive action to forestall imminent litigation.",
      "Drafting Complaint: Representations before Courts, in prosecuting the Complaint.",
      "Representing Accused and Conducting defence, before Courts.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
      "Representation for the Aggrieved / Complainant, in any proceedings filed for Quashing the Complaint or Criminal Proceedings before High Court and defending the action of filing the Complaint and initiating the legal proceedings.",
    ],
  },
  "extradition-laws": {
    title: "EXTRADITION LAWS",
    icon: "/icons/PracticeList/ExtraditionIcon.png",
    description:
      "Extradition cases are uncommon. As of 2023, India had agreements with 12 countries and treaties with 48 others, though fugitives from non-treaty nations may still be extradited through established procedures. Once extradition is initiated or completed, the provisions of Extradition Laws apply in accordance with the governing agreement, even without a formal treaty. ACAJuris has handled matters involving extradited fugitive, ensuring strict application of the Extradition Act or Agreement. Our professional services in this domain include -",
    bullets: [
      "Legal Counsel and Assistance: During the stage of extradition proceedings.",
      "Filing Petition and Representation before Courts including High Court: Towards strict compliance of extradition terms.",
    ],
  },
  "motor-vehicle-offences": {
    title: "MOTOR VEHICLE OFFENCES",
    icon: "/icons/PracticeList/Motor_Vehicle_Icon.png",
    description:
      "Motor vehicle accident cases are common, but death by negligence under Section 304-A IPC carries serious consequences. Though legally considered less grave, conviction can still result in a minimum of six months' imprisonment, as mandated by the Supreme Court.",
    bullets: [
      "Filing Petition for Bail & Representations before Courts, during the process of Bail.",
      "Legal Counsel & Assistance: During the stage of investigation.",
      "Representing Accused and Conducting defence, before Courts - in Trials.",
      "Filing Petition for Quashing: Of the Complaint or Criminal Proceedings, before High Court & Representations through the process (including other remedies before High Court).",
    ],
  },
  "other-areas": {
    title: "OTHER AREAS -",
    icon: "/icons/PracticeList/Criminal_Trails_Icon.png",
    description:
      "Over 25 years of criminal practice, ACA Juris has also dealt with offences under various statutes, including the Wild Life Protection Act, Juvenile Justice (Care and Protection) Act, POCSO Act, Drugs and Cosmetics Act, as well as violations under the Factories Act, Industrial Disputes Act, Karnataka Shops and Commercial Establishments Act, Minimum Wages Act, and Payment of Wages Act, among others.",
    bullets: [],
  },
};

const expertiseSlugs = Object.keys(expertiseContent);

export function generateStaticParams() {
  return expertiseSlugs.map((slug) => ({ slug }));
}

export default async function ExpertiseSlugPage({ params }) {
  const { slug } = await params;
  const detail = expertiseContent[slug] || {
    title: "Our Expertise",
    icon: null,
    description:
      "ACA Juris provides strategic representation across criminal litigation at all levels and platforms.",
    bullets: [],
  };

  return (
    <>
      <Header />

      {/* Detail Content */}
      <section className={styles.detailSection}>
        <div className={styles.detailInner}>
          <Link href="/expertise" className={styles.backBtn}>
            ← Back
          </Link>
          <h2 className={styles.practiceTitle}>{detail.title}</h2>
          <p className={styles.practiceDescription}>{formatAcaJuris(detail.description)}</p>
          {detail.paragraphs && detail.paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.practiceDescription}>{formatAcaJuris(paragraph)}</p>
          ))}

          {detail.bullets && detail.bullets.length > 0 && (
            <ul className={styles.bulletList}>
              {detail.bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <img src="/icons/bullet.png" alt="" className={styles.bulletIcon} />
                  <span className={styles.bulletText}>{formatAcaJuris(b)}</span>
                </li>
              ))}
            </ul>
          )}

          {detail.closingText && (
            <p className={styles.practiceDescription}>{formatAcaJuris(detail.closingText)}</p>
          )}
        </div>
      </section>
    </>
  );
}
