import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import NeuralNetwork from "@/components/NeuralNetwork";
import { services } from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage({ params: { lang = "ar" } }: { params: { lang: string } }) {
  const isAr = lang === "ar";
  
  const t = {
    badge: isAr ? "🦅 شركة النورس للملكية الفكرية" : "🦅 Al Nawras Intellectual Property",
    heroH1: isAr ? (
      <>نحمي <span className={styles.gold}>أفكارك</span> ونحقق <span className={styles.gold}>رؤيتك</span></>
    ) : (
      <>Protecting your <span className={styles.gold}>Ideas</span> & Realizing your <span className={styles.gold}>Vision</span></>
    ),
    heroP: isAr 
      ? "نحن أكثر من مجرد مزود خدمات قانونية؛ نحن شركاؤك في حماية أفكارك وتحقيق رؤيتك. نسعى لتمكين الأفراد والشركات في دبي وخارجها من حماية حقوقهم الفكرية بفعالية."
      : "We are more than just a legal service provider; we are your partners in protecting your ideas and realizing your vision in Dubai and beyond.",
    btnAbout: isAr ? "من نحـــن" : "About Us",
    btnContact: isAr ? "للتواصل معنا" : "Contact Us",
    trust: [
      { icon: "🛡️", title: isAr ? "أمان عالمي" : "Global Security", text: isAr ? "حماية متكاملة ومشفرة لبياناتك وابتكاراتك وفق المعايير الدولية." : "Integrated and encrypted protection for your data and innovations per international standards." },
      { icon: "⚖️", title: isAr ? "نزاهة قانونية" : "Legal Integrity", text: isAr ? "الالتزام بأعلى معايير النزاهة والشفافية في كافة الإجراءات القانونية." : "Commitment to the highest standards of integrity and transparency in all legal procedures." },
      { icon: "🌍", title: isAr ? "رؤية عالمية" : "Global Vision", text: isAr ? "نصل بابتكاراتك إلى الأسواق العالمية مع ضمان حمايتها في كل مكان." : "Taking your innovations to global markets while ensuring their protection everywhere." },
    ],
    aboutTitle: isAr ? <>النورس <span className="accent">للملكية الفكرية</span></> : <>Al Nawras <span className="accent">Intellectual Property</span></>,
    aboutP: isAr 
      ? "تأسس مكتب النورس ليكون المنصة الرائدة في دبي لحماية الإبداع والابتكار. نحن نجمع بين الخبرة القانونية العميقة والحلول التقنية المتطورة لضمان أمان أصولك غير الملموسة."
      : "Al Nawras was established to be the leading platform in Dubai for protecting creativity and innovation. We combine deep legal expertise with advanced technical solutions.",
    mvg: [
      { h: isAr ? "رسالتنا" : "Mission", p: isAr ? "تمكين المبتكرين عبر حماية حقوقهم بفعالية." : "Empowering innovators by protecting their rights effectively." },
      { h: isAr ? "رؤيتنا" : "Vision", p: isAr ? "الريادة العالمية في خدمات الملكية الفكرية." : "Global leadership in IP protection services." },
      { h: isAr ? "قيمنا" : "Values", p: isAr ? "الابتكار، النزاهة، والتميز القانوني." : "Innovation, Integrity, and Legal Excellence." },
    ],
    servicesH2: isAr ? <>خدمات <span className="accent">النخبة</span></> : <>Elite <span className="accent">Services</span></>,
    servicesP: isAr ? "حلول قانونية فاخرة مصممة خصيصاً لحماية أصولك الفكرية عالمياً." : "Luxury legal solutions specifically designed to protect your IP assets globally.",
    btnAllServices: isAr ? "استعرض جميع الخدمات" : "View All Services",
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <NeuralNetwork />
          <div className={`container ${styles.heroInner}`}>
            <div className={`${styles.heroText} reveal`}>
              <span className={styles.badge}>{t.badge}</span>
              <h1>{t.heroH1}</h1>
              <p>{t.heroP}</p>
              <div className={styles.heroButtons}>
                <Link href={`/${lang}/about-us/`} className="btn btn-primary">
                  {t.btnAbout}
                </Link>
                <Link href={`/${lang}/contact/`} className="btn btn-outline" style={{ borderColor: 'var(--gold-premium)', color: 'var(--gold-premium)' }}>
                  {t.btnContact}
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              {/* Optional: Add a high-end visual element here if needed */}
            </div>
          </div>
        </section>

        {/* Trust Grid */}
        <section className={styles.trust}>
          <div className="container">
            <div className={styles.trustGrid}>
              {t.trust.map((item, i) => (
                <div key={i} className={`${styles.trustCard} reveal`}>
                  <span className={styles.trustIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className={styles.about}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className="reveal">
                <div className="section-title" style={{ textAlign: isAr ? "start" : "end" }}>
                  <h2>{t.aboutTitle}</h2>
                </div>
                <p style={{ maxWidth: '800px', margin: isAr ? '0 0 40px auto' : '0 auto 40px 0' }}>{t.aboutP}</p>
                <div className={styles.mvg}>
                  {t.mvg.map((item, i) => (
                    <div key={i} className={`card-premium ${styles.mvgCard}`}>
                      <h4>{item.h}</h4>
                      <p>{item.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <div className="container">
            <div className="section-title reveal">
              <h2>{t.servicesH2}</h2>
              <p>{t.servicesP}</p>
            </div>
            <div className={styles.servicesGrid}>
              {services.slice(0, 8).map((s) => (
                <ServiceCard
                  key={s.slug}
                  icon={s.icon}
                  title={isAr ? s.ar.title : s.en.title}
                  description={isAr ? s.ar.description : s.en.description}
                  href={`/${lang}/services/${s.slug}/`}
                  lang={lang}
                  className="reveal"
                />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 60 }} className="reveal">
              <Link href={`/${lang}/services/`} className="btn btn-primary">
                {t.btnAllServices}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner lang={lang} />
      </main>
    </>
  );
}
