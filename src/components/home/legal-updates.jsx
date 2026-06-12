"use client";

import Link from "next/link";
import Image from "next/image";

export default function LegalUpdatesPreview() {
  return (
    <section className="legal-preview">
      <div className="container">
        {/* <span className="legal-section-tag">Blog & Article</span> */}
        <h2 className="legal-title">
          <Link href="/legalupdates">Legal Updates</Link>
        </h2>
        {/* <p className="legal-desc">Discover expert tips and step-by-step guides to help you learn, grow, and create with confidence.</p> */}

        <div className="legal-grid">
          {/* Update 1 */}
          <Link href="/legalupdates" className="legal-card">
            <div className="legal-img-wrap">
              <Image
                src="/images/legalupdate1_1.svg"
                alt="Legal update 1"
                width={534}
                height={309}
              />
            </div>
            <div className="legal-content">
              <div className="update-meta">
                <span>Blog/Legal Update 01</span>
                <span className="update-meta-separator" aria-hidden="true">|</span>
                <span>Amar Correa</span>
                <span className="update-meta-separator" aria-hidden="true">|</span>
                <span className="update-meta-line" aria-hidden="true" />
                <span>August 28, 2025</span>
              </div>
              <h4 className="update-title">An Incorrect View on Trial Court’s Powers U/S 173(8) Cr.P.C</h4>
            </div>
          </Link>

          {/* Update 2 */}
          <Link href="/legalupdates" className="legal-card">
            <div className="legal-img-wrap">
              <Image
                src="/images/legalupdate2_2.svg"
                alt="Legal update 2"
                width={534}
                height={309}
              />
            </div>
            <div className="legal-content">
              <div className="update-meta">
                <span>Blog/Legal Update 02</span>
                <span className="update-meta-separator" aria-hidden="true">|</span>
                <span>Amar Correa</span>
                <span className="update-meta-separator" aria-hidden="true">|</span>
                <span className="update-meta-line" aria-hidden="true" />
                <span>August 28, 2025</span>
              </div>
              <h4 className="update-title">The Correct View on Trial Court’s Powers U/S 173(8) Cr.P.C</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
