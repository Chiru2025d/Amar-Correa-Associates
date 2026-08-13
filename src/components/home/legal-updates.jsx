"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { legalUpdates } from "./legal-updates-data";

export default function LegalUpdatesPreview() {
  const [itemsVisible, setItemsVisible] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const sortedUpdates = [...legalUpdates].sort((a, b) => {
    const aNumber = Number(a.id.match(/(\d+)$/)?.[1] ?? 0);
    const bNumber = Number(b.id.match(/(\d+)$/)?.[1] ?? 0);
    return bNumber - aNumber;
  });

  const maxIndex = Math.max(0, sortedUpdates.length - itemsVisible);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let nextItemsVisible = 3;

      if (width <= 768) {
        nextItemsVisible = 1;
      } else if (width <= 1024) {
        nextItemsVisible = 2;
      }

      setItemsVisible(nextItemsVisible);
      setStartIndex((prev) => Math.min(prev, Math.max(0, sortedUpdates.length - nextItemsVisible)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="legal-preview">
      <div className="container">
        <h2 className="legal-title">
          <Link href="/legalupdates">Legal Updates & Blog</Link>
        </h2>

        <div className="carousel-section legal-carousel">
          {sortedUpdates.length > 3 ? (
            <button
              className="carousel-arrow left"
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous legal update"
            >
              <span aria-hidden="true">←</span>
            </button>
          ) : null}

          <div className="carousel-container">
            <div
              className="carousel-track legal-carousel-track"
              style={{ transform: `translateX(-${startIndex * (100 / itemsVisible)}%)` }}
            >
              {sortedUpdates.map((update) => (
                <div
                  className="legal-carousel-item"
                  key={update.id}
                  style={{
                    flex: `0 0 calc((100% - ${itemsVisible * 20}px) / ${itemsVisible})`,
                    maxWidth: `calc((100% - ${itemsVisible * 20}px) / ${itemsVisible})`,
                  }}
                >
                  <Link href={update.href} className="legal-card">
                    <div className="legal-img-wrap">
                      <Image
                        src={update.image}
                        alt={update.alt}
                        width={534}
                        height={309}
                      />
                    </div>
                    <div className="legal-content">
                      <span className="update-label">{update.label}</span>
                      <h3 className="update-heading">
                        <span className="update-heading-primary">{update.headingPrimary}</span>
                        {update.headingSecondary ? (
                          <span className="update-heading-secondary">{update.headingSecondary}</span>
                        ) : null}
                      </h3>
                      <div className="update-bottom">
                        <h4 className="update-title">{update.title}</h4>
                        <span className="update-divider" aria-hidden="true" />
                        <div className={update.author ? "update-footer" : "update-footer update-footer-date-only"}>
                          {update.author ? <span className="update-footer-author">Author: {update.author}</span> : null}
                          {update.date ? <span className="update-footer-date">{update.date}</span> : null}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {sortedUpdates.length > 3 ? (
            <button
              className="carousel-arrow right"
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              aria-label="Next legal update"
            >
              <span aria-hidden="true">→</span>
            </button>
          ) : null}
        </div>

        <div className="legal-actions">
          <Link href="/legalupdates" className="hero-btn legal-view-all">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
