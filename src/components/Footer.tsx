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
            <li>📧 {c.email}</li>
            <li>📞 {c.phone}</li>
            <li>📍 {c.address}</li>
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
