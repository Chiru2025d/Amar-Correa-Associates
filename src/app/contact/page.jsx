import Header from "../../components/header.jsx";

import OfficeInfo from "../../components/contact/office-info.jsx";
import ContactForm from "../../components/contact/contact-form.jsx";

import styles from "../../components/contact/contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className={styles.heroBanner}>
        <p className={styles.heroLabel}>Contact</p>
        <h1 className={styles.heroTitle}>CONTACT US</h1>
      </section>

      <section className={styles.contactPage}>
        <div className={styles.container}>
          <OfficeInfo />

          <div className={styles.formSection}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
