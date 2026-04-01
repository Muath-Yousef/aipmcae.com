import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner({ lang = "ar" }: { lang?: string }) {
  const isAr = lang === "ar";

  const t = {
    title: isAr ? "حماية أفكارك تبدأ من هنا" : "Your Brand Protection Starts Here",
    text: isAr 
      ? "اتصل الآن واحصل على استشارة مجانية من فريق خبرائنا في الملكية الفكرية" 
      : "Contact us now for a free consultation with our intellectual property experts.",
    request: isAr ? "طلب خدمة" : "Request Service",
    learn: isAr ? "تعرف على خدماتنا" : "Learn More",
  };

  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
        <div className={styles.buttons}>
          <Link href={`/${lang}/contact/`} className="btn btn-primary">
            {t.request}
          </Link>
          <Link href={`/${lang}/services/`} className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            {t.learn}
          </Link>
        </div>
      </div>
    </section>
  );
}
