import Link from "next/link";
import { socialLinks, contactInfo } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer({ lang = "ar" }: { lang?: string }) {
  const isAr = lang === "ar";
  const c = isAr ? contactInfo.ar : contactInfo.en;

  const t = {
    brand: isAr ? "النورس" : "Al Nawras",
    subBrand: isAr ? "للملكية الفكرية والاستشارات الإدارية" : "Intellectual Property & Management Consultants",
    about: isAr 
      ? "فريقنا من الخبراء يتمتع بخبرة عميقة وفهم دقيق لتحديات السوق المحلية والعالمية، مما يتيح لنا تقديم حلول مخصصة تناسب احتياجات عملائنا."
      : "Our team of experts possesses deep experience and a precise understanding of local and international market challenges, allowing us to provide customized solutions that suit our clients' needs.",
    quickLinks: isAr ? "روابط سريعة" : "Quick Links",
    home: isAr ? "الرئيسية" : "Home",
    aboutUs: isAr ? "من نحن" : "About Us",
    services: isAr ? "خدماتنا" : "Our Services",
    contact: isAr ? "اتصل بنا" : "Contact Us",
    blog: isAr ? "المدونة" : "Blog",
    ourServices: isAr ? "خدماتنا" : "Our Services",
    contactUs: isAr ? "تواصل معنا" : "Contact Us",
    rights: isAr 
      ? `© ${new Date().getFullYear()} شركة النورس للملكية الفكرية والاستشارات الإدارية. جميع الحقوق محفوظة.`
      : `© ${new Date().getFullYear()} Al Nawras Intellectual Property & Management Consultants. All rights reserved.`,
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <img src="/images/logo.png" alt="Al Nawras Logo" className={styles.logoImg} />
            <div>
              <h3>{t.brand}</h3>
              <p>{t.subBrand}</p>
            </div>
          </div>
          <p>{t.about}</p>
        </div>

        <div>
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link href={`/${lang}/`}>{t.home}</Link></li>
            <li><Link href={`/${lang}/about-us/`}>{t.aboutUs}</Link></li>
            <li><Link href={`/${lang}/services/`}>{t.services}</Link></li>
            <li><Link href={`/${lang}/contact/`}>{t.contact}</Link></li>
            <li><Link href={`/${lang}/blog/`}>{t.blog}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{t.ourServices}</h4>
          <ul>
            <li><Link href={`/${lang}/services/trademarks/`}>{isAr ? "العلامات التجارية" : "Trademarks"}</Link></li>
            <li><Link href={`/${lang}/services/patent-applications/`}>{isAr ? "براءات الاختراع" : "Patents"}</Link></li>
            <li><Link href={`/${lang}/services/company-formation/`}>{isAr ? "تأسيس الشركات" : "Company Formation"}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{t.contactUs}</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>{c.email}</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>{c.phone}</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{c.address}</span>
            </li>
          </ul>
          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" title={s.platform} className={styles.socialIcon}>
                <span className={styles.iconPlaceholder}>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
