"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const recipientEmail = "office@acajuris.com";
const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const indianPhonePattern = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedPhone = phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const isEmailValid = gmailPattern.test(email.trim());
  const isPhoneValid = indianPhonePattern.test(normalizedPhone);
  const canSubmit = isEmailValid && isPhoneValid && !isSubmitting;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit) {
      setTouched({ email: true, phone: true });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("email", email.trim());
    formData.set("phone", `+91 ${normalizedPhone}`);
    formData.append("_subject", "New enquiry from ACA Juris website");
    formData.append("_template", "table");

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      form.reset();
      setEmail("");
      setPhone("");
      setTouched({ email: false, phone: false });
      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent to ACA Juris.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Sorry, we could not send your message. Please email office@acajuris.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        {status.message && (
          <p className={`${styles.formStatus} ${status.type === "error" ? styles.formStatusError : ""}`}>
            {status.message}
          </p>
        )}

        <button type="submit" className={styles.submitBtn} disabled={!canSubmit}>
          {isSubmitting ? "SENDING..." : "SUBMIT"}
        </button>
      </form>
    </section>
  );
}
