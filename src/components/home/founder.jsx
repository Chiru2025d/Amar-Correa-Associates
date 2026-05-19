"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";

export default function Founder() {
    const sectionRef = useRef(null);
    const bioRef = useRef(null);
    // useEffect(() => {
    //     const section = sectionRef.current;
    //     const bio = bioRef.current;
    //     if (!section || !bio) return;

    //     const handleWheel = (e) => {
    //         // Check if section is approximately in view (basic check)
    //         const rect = section.getBoundingClientRect();
    //         const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    //         if (!isInView) return;

    //         const { scrollTop, scrollHeight, clientHeight } = bio;
    //         const delta = e.deltaY;
    //         const isScrollingDown = delta > 0;
    //         const isScrollingUp = delta < 0;

    //         const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
    //         const isAtTop = scrollTop <= 0;

    //         if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
    //             e.preventDefault();
    //             bio.scrollTop += delta;
    //         }
    //     };

    //     window.addEventListener('wheel', handleWheel, { passive: false });

    //     return () => {
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-inner">
                    <div className="founder-text">
                        <span className="founder-label">Head Associate</span>
                        <h2 className="founder-name">AMAR CORREA</h2>
                        <span className="founder-role"></span>

                        <div className="founder-bio-container">
                            <p className="founder-bio">
                                <span style={{ fontWeight: 500, color: 'rgb(0, 0, 0)' }}>25+ years in criminal law :</span> Practice across Magistrate, Sessions, and High Court, with
                                specialization in Special Laws and complex CBI trials involving financial frauds, cyber crimes,
                                extradition, organised crime, narcotics, mining, SFIO prosecutions, and IPC offences.
                            </p>
                            <p className="founder-bio">
                                <span style={{ fontWeight: 500, color: 'rgb(0, 0, 0)' }}>Matrimonial & constitutional litigation :</span> Extensive experience in divorce, child custody,
                                maintenance, foreign custody orders, habeas corpus petitions, criminal appeals, revisions,
                                bail, quashing and petitions under Section 482 Cr.P.C., and writs on constitutional rights and
                                public interest.
                            </p>
                        </div>
                    </div>
                    <div className="founder-img-wrap">
                        <Image
                            src="/images/amar.png"
                            alt="Amar Correa"
                            className='founderImg'
                            width={400}
                            height={600}
                            style={{ width: '100%', padding: '20px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
