import type { Metadata } from "next";
import styles from "./page.module.css";
import { contactInfo } from "@/lib/content";

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const isAr = lang === "ar";
  return {
    title: isAr ? "اتصل بنا" : "Contact Us",
    description: isAr 
      ? "تواصل مع شركة النورس للملكية الفكرية — نحن هنا لمساعدتك في حماية حقوقك الفكرية."
      : "Contact Al Nawras Intellectual Property — we are here to help you protect your IP rights.",
  };
}

export default function ContactPage({ params: { lang = "ar" } }: { params: { lang: string } }) {
  const isAr = lang === "ar";
  const c = isAr ? contactInfo.ar : contactInfo.en;

  const t = {
    heroH1: isAr ? <>اتصل <span style={{ color: "var(--gold)" }}>بنا</span></> : <>Contact <span style={{ color: "var(--gold)" }}>Us</span></>,
    heroP: isAr ? "نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية." : "We are here to help. Contact us for a free consultation.",
    infoTitle: isAr ? "معلومات التواصل" : "Contact Information",
    email: isAr ? "البريد الإلكتروني" : "Email",
    address: isAr ? "العنوان" : "Address",
    hours: isAr ? "ساعات العمل" : "Working Hours",
    formTitle: isAr ? "أرسل رسالة" : "Send a Message",
    nameLabel: isAr ? "الاسم الكامل" : "Full Name",
    namePlace: isAr ? "أدخل اسمك" : "Enter your name",
    emailLabel: isAr ? "البريد الإلكتروني" : "Email Address",
    subjectLabel: isAr ? "الموضوع" : "Subject",
    subjectPlace: isAr ? "موضوع الرسالة" : "Message subject",
    messageLabel: isAr ? "الرسالة" : "Message",
    messagePlace: isAr ? "اكتب رسالتك هنا..." : "Write your message here...",
    submit: isAr ? "إرسال الرسالة" : "Send Message",
  };

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>{t.heroH1}</h1>
            <p>{t.heroP}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <div>
                <div className={`glass ${styles.infoCard}`}>
                  <h3>{t.infoTitle}</h3>
                  <div className={styles.infoItem}>
                    <span>📧</span>
                    <div>
                      <strong>{t.email}</strong>
                      <p>{c.email}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span>📍</span>
                    <div>
                      <strong>{t.address}</strong>
                      <p>{c.address}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span>📞</span>
                    <div>
                      <strong>{isAr ? "الهاتف" : "Phone"}</strong>
                      <p>{c.phone}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span>🕐</span>
                    <div>
                      <strong>{t.hours}</strong>
                      <p>{c.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className={`glass ${styles.form}`}>
                <h3>{t.formTitle}</h3>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>{t.nameLabel}</label>
                    <input type="text" placeholder={t.namePlace} required />
                  </div>
                  <div className={styles.field}>
                    <label>{t.emailLabel}</label>
                    <input type="email" placeholder="example@email.com" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>{t.subjectLabel}</label>
                  <input type="text" placeholder={t.subjectPlace} required />
                </div>
                <div className={styles.field}>
                  <label>{t.messageLabel}</label>
                  <textarea rows={5} placeholder={t.messagePlace} required />
                </div>
                <button type="submit" className="btn btn-primary">
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
