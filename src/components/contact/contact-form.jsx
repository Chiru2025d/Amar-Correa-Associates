"use client";

import styles from "./contact.module.css";

export default function ContactForm() {
  return (
    <section id="leave-message" className={styles.contactForm}>

      {/* LEAVE A MESSAGE */}
      <p className={styles.leaveMessage}>LEAVE A MESSAGE</p>

      {/* FORM HEADING */}
      {/* <h2 className={styles.formHeading}>
        We ready to hear from you
      </h2> */}

      {/* FORM */}
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.formInput}
          suppressHydrationWarning
          required
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.formInput}
          suppressHydrationWarning
          required
        />

        <input
          type="text"
          placeholder="Phone"
          className={styles.formInput}
          suppressHydrationWarning
        />

        <textarea
          placeholder="Message"
          rows="5"
          className={styles.formTextarea}
          suppressHydrationWarning
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          SUBMIT
        </button>
      </form>
    </section>
  );
}
