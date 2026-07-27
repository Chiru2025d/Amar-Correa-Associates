"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const recipientEmail = "office@acajuris.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indianPhonePattern = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedPhone = phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const isEmailValid = emailPattern.test(email.trim());
  const isPhoneValid = indianPhonePattern.test(normalizedPhone);
  const canSubmit = isEmailValid && isPhoneValid && !isSubmitting;

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!canSubmit) {
    setTouched({
      email: true,
      phone: true,
    });
    return;
  }

  setIsSubmitting(true);
  setStatus({
    type: "idle",
    message: "",
  });

  try {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: `+91 ${normalizedPhone}`,
        message: message.trim(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to send email");
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTouched({
      email: false,
      phone: false,
    });

    setStatus({
      type: "success",
      message: "Thank you. Your message has been sent successfully.",
    });

  } catch (err) {

    setStatus({
      type: "error",
      message: "Unable to send your message. Please try again later.",
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
        <p className={styles.formNote}>
          <strong>Please note:</strong> You may use this form solely to request an appointment for an online or offline meeting.
          Kindly ensure all fields are completed. The message box may contain a concise description of your
          issue. We respectfully request that you do not seek legal counsel or consultation through this form.
        </p>

        <div className={styles.formFields}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              placeholder="Email Address"
              className={`${styles.formInput} ${touched.email && !isEmailValid ? styles.invalidInput : ""}`}
              aria-invalid={touched.email && !isEmailValid}
              aria-describedby="email-error"
              suppressHydrationWarning
              required
            />
            {touched.email && !isEmailValid && (
              <span id="email-error" className={styles.fieldError}>
                Please enter a valid email address.
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "SENDING..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </section>
  );
}
