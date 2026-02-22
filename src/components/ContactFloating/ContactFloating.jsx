"use client";
import React from 'react'
import Image from "next/image";
import "./contactFloating.css";

const ContactFloating = ({
  email = "office@acajuris.com",
  phone = "+919663812090",
  right = 28,
  emailBottom = 180,
  phoneBottom = 120,
}) => {
  return (
    <div className="hero-contact-floating">
      <div className="contact-text-block">
        <div className="contact-row">
          <a
            href={`mailto:${email}`}
            className="contact-icon-bubble"
            style={{ right, bottom: emailBottom }}
            aria-label="Email"
          >
            <Image src="/images/email.svg" alt="Email" width={20} height={20} />
          </a>
        </div>

        <div className="contact-row">
          <a
            href={`tel:${phone}`}
            className="contact-icon-bubble"
            style={{ right, bottom: phoneBottom }}
            aria-label="Phone"
          >
            <Image src="/images/phone.svg" alt="Phone" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactFloating
