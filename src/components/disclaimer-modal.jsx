"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./disclaimer-modal.module.css";

const DISCLAIMER_KEY = "aca_disclaimer_accepted";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(DISCLAIMER_KEY);
    if (accepted !== "true") {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isOpen]);

  const handleProceed = () => {
    if (!isChecked) return;
    window.localStorage.setItem(DISCLAIMER_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className={styles.modal}>
        <div className={styles.logoWrap}>
          <Image
            src="/images/aca-headerlogo.png"
            alt="ACA Juris"
            width={222}
            height={71}
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.content}>
          <h2 id="disclaimer-title" className={styles.title}>DISCLAIMER</h2>

          <div className={styles.textBlock}>
            <p className={styles.text}>
              <strong>ACA</strong>Juris has taken great care to ensure that the contents of this website are merely
              informational - about the Chambers’ lawyers and work. In addition, the website is informational
              and educative on legal development in India. The website does not constitute legal advice in any
              form, and <strong>ACA</strong>Juris shall not be held accountable for any actions taken by individuals relying on
              the information provided herein.
            </p>

            <p className={styles.text}>
              Your accessing this website is an acknowledgment and confirmation that you are seeking
              information about <strong>ACA</strong>Juris of your own accord, without any solicitation, invitation, or
              advertisement by the Chambers or its Associates.
            </p>
          </div>

          <label className={styles.agreeRow}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span>I Agree</span>
          </label>

          <button
            type="button"
            className={styles.proceedBtn}
            onClick={handleProceed}
            disabled={!isChecked}
          >
            PROCEED TO WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
}
