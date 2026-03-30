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
                        <h2 className="founder-name">Amar Correa</h2>
                        <span className="founder-role"></span>

                        <div className="founder-bio-container">
                            <p className="founder-bio">
                                Amar Correa, heads ACA Juris. is a Bangalore-based multidisciplinary law firm with
a core focus on criminal law. Established in 2002, the firm brings over 25 years of dedicated
experience in advising and representing individual and corporate clients across all stages of
criminal litigation—from Magistrate and Sessions Courts to the High Court.
                            </p>
                            <p className="founder-bio">
                                ACAJuris offers strategic legal counsel and courtroom representation grounded in practical
insight. The Firm engages with a wide range of matters, including offences under the Indian
Penal Code, prosecutions under the Companies Act, infringement of copyright and trademark
laws, workplace sexual harassment, cheque dishonour under the Negotiable Instruments Act,
defamation-related litigation and criminal prosecution, extradition proceedings, legal issues
concerning foreign nationals, cybercrime and digital offences, investigations and prosecutions by
the Enforcement Directorate, and cases under the Narcotic Drugs and Psychotropic Substances
Act.
                            </p>
                            <p className="founder-bio">
                               The firm’s approach to each client’s cause is a reflection of its experience in criminal law—built
over years of focused practice, not drawn from general legal theory and academic concepts—
resulting in clarity, diligence, and focus in navigating legal issues.
                        </p>
                    </div>                    </div>
                    <div className="founder-img-wrap">
                        <span className="hidetext">&nbsp;</span>
                        {/* <h2 className="hidetext">&nbsp;</h2> */}
                        <h6 className="hidetext">&nbsp;</h6>
                        <span className="hidetext">&nbsp;</span>
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
