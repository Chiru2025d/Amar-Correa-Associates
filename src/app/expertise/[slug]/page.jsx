import Link from "next/link";
import Header from "../../../components/header.jsx";
import styles from "./slug.module.css";

const expertiseContent = {
  "quashing-petitions-inherent-powers": {
    title: "Quashing Petitions – Inherent Powers",
    icon: "/icons/PracticeList/Quashing_Petitions_icon.png",
    description:
      "The High Court, exercising its extraordinary power under Article 226 of the Indian Constitution or the inherent power under Section 482 of the CrPC – now Section 528 of Bharatiya Naaya Sanhita – may make such orders to prevent abuse of process of Court or to secure ends of justice. 'Quashing' is a term under the umbrella of which diverse reliefs can be sought. Relief of 'Quashing' can be sought by a Corporate or Director or Partner or by an individual, to drop criminal proceedings initiated in whatever form. Few of such reliefs that the Firm has had exposure and represented clients in, are:",
    bullets: [
      "Quashing of FIR, Charge Sheet and entire criminal proceedings, covering comprehensive criminal laws prevailing in India.",
      "Directions for transfer of investigation to higher ranked police officer or a different agency.",
      "Directions for Speedy Investigation & Trial.",
      "Directions to police to conduct further investigation, by reason of biased, partial, directionless and incomplete investigation.",
      "Directions with respect to Passport, Look Out Circular, Citizenship and similar matters.",
      "Quashing Police Notices.",
      "Directions with respect to Extradition Act and implementation of Agreement between two Nations, arising out of it.",
      "Directions with respect to protection of one's Privacy and Right to be Forgotten.",
    ],
  },
  bail: {
    title: "Bail",
    icon: "/icons/PracticeList/BailIcon.png",
    description:
      "Protection from being arrested is the first and foremost legal relief desired by an individual facing a criminal allegation. Our team handles regular bail, anticipatory bail, and cancellation proceedings across Magistrate, Sessions, and High Court forums with a strategy tailored to the case record and urgency.",
    bullets: [
      "Anticipatory Bail applications before Sessions Court and High Court.",
      "Regular Bail after arrest, at all stages of investigation and trial.",
      "Bail in serious and special offences including NDPS, PMLA, and CBI cases.",
      "Cancellation of bail and opposing bail applications.",
      "Bail conditions, modification, and enforcement matters.",
      "Emergency and urgent bail applications with round-the-clock availability.",
    ],
  },
  "cbi-prosecutions-defence-of": {
    title: "CBI Prosecutions – Defence Of",
    icon: "/icons/PracticeList/CBI_Icon.png",
    description:
      "Major financial scams and frauds are very often investigated by the Central Bureau of Investigation – CBI. We provide structured defence in CBI prosecutions, including charge-stage challenges, trial strategy, witness handling, and appellate remedies in complex criminal prosecutions.",
    bullets: [
      "Defence in cases investigated and prosecuted by the Central Bureau of Investigation.",
      "Challenging CBI jurisdiction and transfer of cases before competent courts.",
      "Bail applications in CBI cases including cases before Special CBI Courts.",
      "Charge-framing challenges and discharge applications.",
      "Cross-examination strategy and trial management over extended trials.",
      "Appeals and revisions arising from CBI trial court verdicts.",
    ],
  },
  "frauds-financial-business-bank": {
    title: "Frauds – Financial, Business & Bank",
    icon: "/icons/PracticeList/FraudsIcon.png",
    description:
      "ACAJuris' practice over the years has included representations and appearances in cases involving financial, business, and banking frauds at all stages of investigation, trial, and appeal.",
    bullets: [
      "Defence representation in bank fraud prosecutions under IPC and Banking Regulation Act.",
      "Cases involving cheating, criminal breach of trust and misappropriation of funds.",
      "SFIO and Enforcement Directorate investigations arising from financial fraud.",
      "Fraud-linked bail applications and anticipatory bail matters.",
      "Cross-examination of expert witnesses including chartered accountants and auditors.",
      "Settlement and compounding proceedings in eligible financial offence matters.",
    ],
  },
  "look-out-circular-passport-related": {
    title: "Look Out Circular | Passport Related Cases",
    icon: "/icons/PracticeList/PassportIcon.png",
    description:
      "Look Out Circular – LOC is a measure invoked by the investigation agency in an ongoing investigation to prevent an accused or suspect from leaving the country. We assist clients in urgent interim and final relief before competent courts.",
    bullets: [
      "Challenging Look Out Circulars (LOC) before the High Court.",
      "Passport impounding orders – legal challenge and relief.",
      "Pre-arrest remedies relating to international travel restrictions.",
      "Cases involving denial or revocation of passport by Passport Authority.",
      "Surrender, extension, and re-issuance of passports in the context of criminal proceedings.",
      "Coordination with immigration authorities for urgent travel permissions.",
    ],
  },
  "sexual-harassment-at-workplace": {
    title: "Sexual Harassment At Workplace",
    icon: "/icons/PracticeList/HarassmentIcon.png",
    description:
      "ACAJuris' exposure to practice over the years includes a wide range of cases in this area, with representation for both complainants and respondents before Internal Committees, Local Committees, and criminal courts.",
    bullets: [
      "Representation before Internal Complaints Committee (ICC) proceedings.",
      "Criminal defence in cases arising from workplace harassment allegations.",
      "Advisory to employers on POSH Act compliance and committee constitution.",
      "Complaints before Local Complaints Committee (LCC) for unorganised sector.",
      "Challenging illegal or biased ICC findings before the High Court.",
      "Appellate remedies arising from POSH Act inquiries.",
    ],
  },
  "defamation-laws": {
    title: "Defamation Laws",
    icon: "/icons/PracticeList/DefamationIcon.png",
    description:
      "Defamation – acts that harm a person's reputation. This covers written (libel) and spoken (slander) statements. Our team handles criminal and civil defamation cases, including pre-litigation strategy and reputation-sensitive court representation.",
    bullets: [
      "Criminal defamation complaints under Section 356 BNS (formerly Section 499 IPC).",
      "Defence in criminal defamation cases initiated by public figures and corporations.",
      "Online and social media defamation – criminal and civil remedies.",
      "Reputation management advice and pre-litigation strategy.",
      "Injunctions and interim reliefs to prevent continued defamation.",
      "Appeals and revisions in defamation proceedings.",
    ],
  },
  "narcotic-drugs": {
    title: "Narcotic Drugs",
    icon: "/icons/PracticeList/NarcoticsIcon.png",
    description:
      "The Narcotics Drugs and Psychotropic Substances Act, 1985 is the primary legislation governing narcotic drug offences. We represent clients at all stages from arrest, bail, trial, to appeal.",
    bullets: [
      "Bail applications in NDPS offences including commercial quantity cases.",
      "Challenging seizure, sampling and NCB/STF investigation procedure.",
      "Defence in prosecutions involving possession, trafficking, and financing of drug offences.",
      "Strict compliance challenges to mandatory procedural safeguards under NDPS Act.",
      "Cross-examination of police and expert witnesses in NDPS trials.",
      "Appeals before High Court in NDPS conviction and sentence matters.",
    ],
  },
  "matrimonial-family-laws": {
    title: "Matrimonial & Family Laws",
    icon: "/icons/PracticeList/MatrimonialIcon.png",
    description:
      "We take up the cause of both women and men – women who are victims of domestic abuse, and men who are victims of misuse of matrimonial laws. We handle matrimonial and family law matters alongside connected criminal proceedings.",
    bullets: [
      "Domestic violence complaints and defence under the Domestic Violence Act.",
      "Dowry harassment and Section 498-A IPC defence and prosecution.",
      "Matrimonial disputes including divorce, maintenance, and custody matters.",
      "Anticipatory bail and regular bail in matrimonial criminal cases.",
      "Quashing of criminal proceedings in matrimonial disputes.",
      "Child custody connected criminal proceedings including abduction cases.",
    ],
  },
  "cheque-dishonour-cases-ni": {
    title: "Cheque Dishonour Cases – NI ACT",
    icon: "/icons/PracticeList/ChequeIcon.png",
    description:
      "Dishonour of cheques attracts a criminal offence in India under the Negotiable Instruments Act. We handle prosecution and defence in cheque dishonour litigation with focused trial strategy.",
    bullets: [
      "Filing and defending complaints under Section 138 of the Negotiable Instruments Act.",
      "Statutory notice drafting, compliance verification, and legal demand strategy.",
      "Evidence management including bank communications and cheque forensics.",
      "Compounding and settlement negotiations in NI Act cases.",
      "Appeals against acquittals and convictions under Section 138 NI Act.",
      "Summary trial procedure management before Metropolitan Magistrate courts.",
    ],
  },
  "violations-under-information-technology": {
    title: "Violations Under Information Technology",
    icon: "/icons/PracticeList/ViolationIcon.png",
    description:
      "Otherwise known as cyber crime, the Information Technology Act makes penal certain acts of computer-related violations and online frauds. We advise and defend cyber-offence allegations under the IT regime.",
    bullets: [
      "Defence in cases involving hacking, data theft, and cyber intrusion.",
      "Online fraud and phishing prosecution and defence.",
      "Social media abuse, identity theft, and morphed-image cases.",
      "Digital evidence analysis, admissibility challenges, and forensic expert engagement.",
      "IT Act offences combined with IPC charges – coordinated defence strategy.",
      "Bail applications and anticipatory bail in cyber crime cases.",
    ],
  },
  "prevention-of-corruption": {
    title: "Prevention Of Corruption",
    icon: "/icons/PracticeList/Prevention_Corruption_Icon.png",
    description:
      "The exposure and experience of ACAJuris in handling cases under the Prevention of Corruption Act spans several decades of dedicated practice in corruption-related prosecutions.",
    bullets: [
      "Defence in trap cases and disproportionate assets prosecutions.",
      "Sanction for prosecution – legal challenge and advisory.",
      "Anticipatory bail and regular bail in PC Act cases.",
      "Cross-examination of public witnesses and Lokayukta officers in PC Act trials.",
      "Appeals and revisions in Central and State vigilance court matters.",
      "Advisory to public servants on compliance and conflict-of-interest issues.",
    ],
  },
  "prevention-of-money-laundering": {
    title: "Prevention Of Money Laundering",
    icon: "/icons/PracticeList/Money_Laundering_Icon.png",
    description:
      "PMLA is an act to prevent money-laundering by making penal all actions of indulging in any processes or activities connected with the proceeds of crime. We provide defence and advisory support in PMLA matters.",
    bullets: [
      "Bail applications before Special PMLA Courts and High Courts.",
      "Challenging attachment of property under PMLA provisions.",
      "Defence in Enforcement Directorate prosecutions under PMLA.",
      "PMLA summons compliance, responses, and advisory.",
      "Predicate offence strategy and its interplay with PMLA proceedings.",
      "Appellate remedies before High Courts in PMLA detention and attachment orders.",
    ],
  },
  "company-law-prosecutions-sfio": {
    title: "Company Law Prosecutions – SFIO",
    icon: "/icons/PracticeList/Company_Law_Icon.png",
    description:
      "Offences under the Companies Act 2013 are investigated and prosecuted by the Serious Fraud Investigation Office – SFIO. We handle strategic representation in corporate criminal allegations.",
    bullets: [
      "Defence in SFIO investigations and prosecutions under the Companies Act 2013.",
      "SFIO summons, statements, and document compliance advisory.",
      "Application for bail in SFIO custody and special court hearings.",
      "Challenging company law prosecution on procedural and substantive grounds.",
      "Director and officer liability – individual defence strategy.",
      "Coordination with NCLT proceedings and criminal court defence.",
    ],
  },
  "copyright-trademark-violation": {
    title: "Copyright & Trademark Violation",
    icon: "/icons/PracticeList/Copywrite_Icon.png",
    description:
      "Violations of trade marks and/or copyrights can lead to prosecutions under the Trade Marks Act 1999 and the Copyright Act 1957. We handle criminal and related proceedings in this area.",
    bullets: [
      "Criminal complaints for trademark and copyright infringement.",
      "Defence in IP violation prosecutions including raids and seizures.",
      "Bail applications and anticipatory bail in IP criminal matters.",
      "Liaison with Customs and enforcement authorities on border protection.",
      "Search-and-seizure challenge proceedings before criminal courts.",
      "Advisory on IP infringement risk and preventive enforcement measures.",
    ],
  },
  "extradition-laws": {
    title: "Extradition Laws",
    icon: "/icons/PracticeList/ExtraditionIcon.png",
    description:
      "Cases arising out of Extradition Laws are rare but significant. As of 2023, India has extradition treaties in force with several countries. We advise on extradition-linked criminal issues.",
    bullets: [
      "Advisory on extradition risk and preventive legal remedies.",
      "Challenging extradition requests before Indian courts.",
      "Bail and bail-related applications pending extradition proceedings.",
      "INTERPOL Red Notice – challenge and removal applications.",
      "Strategy on dual criminality, specialty rule, and political offence exceptions.",
      "Liaison with Ministry of External Affairs and diplomatic process representation.",
    ],
  },
  "motor-vehicle-offences": {
    title: "Motor Vehicle Offences",
    icon: "/icons/PracticeList/Motor_Vehicle_Icon.png",
    description:
      "Cases arising from motor vehicle accidents include death by negligence, rash and negligent driving, and hit-and-run offences. We represent clients in serious and routine motor vehicle offence matters.",
    bullets: [
      "Defence in rash and negligent driving cases resulting in death or injury.",
      "Hit-and-run offence prosecution and defence.",
      "Accident-linked criminal allegations combined with motor accident claim proceedings.",
      "Bail applications in motor vehicle accident fatality cases.",
      "Appeals against conviction and sentence in MV offence matters.",
      "Evidence gathering from CCTV, forensic reconstruction, and accident reports.",
    ],
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
          <p className={styles.practiceDescription}>{detail.description}</p>

          {detail.bullets && detail.bullets.length > 0 && (
            <ul className={styles.bulletList}>
              {detail.bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <img src="/icons/bullet.png" alt="" className={styles.bulletIcon} />
                  <span className={styles.bulletText}>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
