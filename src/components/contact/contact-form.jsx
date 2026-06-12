"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const indianPhonePattern = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });

  const normalizedPhone = phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const isEmailValid = gmailPattern.test(email.trim());
  const isPhoneValid = indianPhonePattern.test(normalizedPhone);
  const canSubmit = isEmailValid && isPhoneValid;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!canSubmit) {
      setTouched({ email: true, phone: true });
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");

    const whatsappMessage = [
      "New enquiry from ACA Juris website",
      "",
      `Name: ${name}`,
      `Email: ${email.trim()}`,
      `Phone: +91 ${normalizedPhone}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919663812090?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="leave-message" className={styles.contactForm}>

      {/* LEAVE A MESSAGE */}
      <p className={styles.leaveMessage}>LEAVE A MESSAGE</p>

      {/* FORM HEADING */}
      {/* <h2 className={styles.formHeading}>
        We ready to hear from you
      </h2> */}

      {/* FORM */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.formInput}
          suppressHydrationWarning
          required
        />

        <div className={styles.fieldGroup}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            placeholder="Gmail ID"
            className={`${styles.formInput} ${touched.email && !isEmailValid ? styles.invalidInput : ""}`}
            aria-invalid={touched.email && !isEmailValid}
            aria-describedby="email-error"
            suppressHydrationWarning
            required
          />
          {touched.email && !isEmailValid && (
            <span id="email-error" className={styles.fieldError}>
              Incorrect email. Enter a valid @gmail.com address.
            </span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
            placeholder="10-digit mobile number"
            className={`${styles.formInput} ${touched.phone && !isPhoneValid ? styles.invalidInput : ""}`}
            aria-invalid={touched.phone && !isPhoneValid}
            aria-describedby="phone-error"
            inputMode="numeric"
            autoComplete="tel"
            suppressHydrationWarning
            required
          />
          {touched.phone && !isPhoneValid && (
            <span id="phone-error" className={styles.fieldError}>
              Incorrect phone number. Enter a valid 10-digit Indian mobile number.
            </span>
          )}
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className={styles.formTextarea}
          suppressHydrationWarning
          required
        ></textarea>

        <button type="submit" className={styles.submitBtn} disabled={!canSubmit}>
          SUBMIT
        </button>
      </form>
    </section>
  );
}
