"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header({ lang = "ar" }: { lang?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isAr = lang === "ar";

  const t = {
    brand: isAr ? "النورس" : "Al Nawras",
    subBrand: isAr ? "للملكية الفكرية" : "Intellectual Property",
    home: isAr ? "الرئيسية" : "Home",
    aboutUs: isAr ? "من نحن" : "About Us",
    services: isAr ? "خدماتنا" : "Our Services",
    contact: isAr ? "اتصل بنا" : "Contact Us",
    blog: isAr ? "المدونة" : "Blog",
    requestService: isAr ? "طلب خدمة" : "Request Service",
  };

  const navLinks = [
    { href: `/${lang}/`, label: t.home },
    { href: `/${lang}/about-us/`, label: t.aboutUs },
    { href: `/${lang}/services/`, label: t.services },
    { href: `/${lang}/contact/`, label: t.contact },
    { href: `/${lang}/blog/`, label: t.blog },
  ];

  const switchLang = isAr ? "en" : "ar";
  const switchLabel = isAr ? "English" : "العربية";
  
  // Calculate switch path
  const switchPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}/`} className={styles.logo}>
          <img src="/images/logo.png" alt="Al Nawras Logo" className={styles.logoImg} />
          <div>
            <strong>{t.brand}</strong>
            <small>{t.subBrand}</small>
          </div>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <div className={styles.langSwitchMobile}>
             <Link href={switchPath} className={styles.langLink}>
              {switchLabel}
            </Link>
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href={`/${lang}/contact/`} className="btn btn-primary" onClick={() => setOpen(false)}>
            {t.requestService}
          </Link>
          
          <div className={styles.langSwitchDesktop}>
            <Link href={switchPath} className={styles.langLink}>
              {switchLabel}
            </Link>
          </div>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
