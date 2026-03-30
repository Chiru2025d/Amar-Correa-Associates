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
  const whatsappPhone = phone.replace(/\D/g, ''); // Remove non-digit characters
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
            href={`https://wa.me/${whatsappPhone}`}
            className="contact-icon-bubble"
            style={{ right, bottom: phoneBottom }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="whatsapp-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactFloating
