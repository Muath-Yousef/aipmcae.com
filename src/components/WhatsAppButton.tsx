"use client";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  // Using the contact mobile number for WhatsApp
  const phoneNumber = "971509441113";
  const message = encodeURIComponent("مرحباً النورس للملكية الفكرية، أود الاستفسار عن خدماتكم.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" className={styles.icon} />
      <span className={styles.pulse}></span>
    </a>
  );
}
