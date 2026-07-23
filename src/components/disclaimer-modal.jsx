"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./disclaimer-modal.module.css";

const DISCLAIMER_KEY = "aca_disclaimer_accepted";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingDestination, setPendingDestination] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Avoid showing on home route, including initial unresolved pathname.
    const timer = window.setTimeout(() => {
      const isHome = !pathname || pathname === "/" || pathname === "/home";
      const accepted = window.localStorage.getItem(DISCLAIMER_KEY);
      setIsOpen(!isHome && accepted !== "true");
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/home") return;

    const showDisclaimerBeforeLeavingHome = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      const isInternalNavigation = destination.origin === current.origin
        && destination.pathname !== "/"
        && destination.pathname !== "/home";

      if (!isInternalNavigation || window.localStorage.getItem(DISCLAIMER_KEY) === "true") return;

      event.preventDefault();
      setPendingDestination(`${destination.pathname}${destination.search}${destination.hash}`);
      setIsOpen(true);
    };

    // Capture the click before Next.js handles the link, so visitors see the
    // disclaimer before leaving the home page.
    document.addEventListener("click", showDisclaimerBeforeLeavingHome, true);
    return () => document.removeEventListener("click", showDisclaimerBeforeLeavingHome, true);
  }, [pathname, router]);

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
    window.localStorage.setItem(DISCLAIMER_KEY, "true");
    setIsOpen(false);

    if (pendingDestination) {
      router.push(pendingDestination);
      setPendingDestination(null);
    }
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

          <button type="button" className={styles.proceedBtn} onClick={handleProceed}>
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
