import Link from "next/link";
import Image from "next/image";

import Header from "../../components/header.jsx";
import { legalUpdates } from "../../components/home/legal-updates-data";
import styles from "./page.module.css";

export default function BlogPage() {
    return (
        <>
            <Header />

            <main className={styles.page}>
                <section className={styles.hero}>
                    <p className={styles.kicker}>Blogs &amp; Legal Updates</p>
                    <h1 className={styles.title}>All blog and legal update cards</h1>
                    <p className={styles.description}>
                        Browse every published update and the new placeholder cards that will be expanded later.
                    </p>
                </section>

                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {legalUpdates.map((update) =>
                            <Link key={update.id} href={update.href} className={styles.card}>
                                <div className={styles.imageWrap}>
                                    <Image
                                        src={update.image}
                                        alt={update.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.label}>{update.label}</span>
                                    <h2 className={styles.cardTitle}>
                                        <span>{update.headingPrimary}</span>
                                        {update.headingSecondary ? (
                                            <span className={styles.secondaryTitle}>{update.headingSecondary}</span>
                                        ) : null}
                                    </h2>
                                    <p className={styles.cardCopy}>{update.title}</p>
                                    <div className={`${styles.meta}${update.id === "legal-update-002" ? ` ${styles.metaDateOnly}` : ""}`}>
                                        {update.author ? <span>{`Author : ${update.author}`}</span> : null}
                                        {update.date ? <span>{update.date}</span> : null}
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
