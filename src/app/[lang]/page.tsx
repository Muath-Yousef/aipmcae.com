import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
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
      ? "نحن أكثر من مجرد مزود خدمات قانونية؛ نحن شركاؤك في حماية أفكارك وتحقيق رؤيتك. نسعى لتمكين الأفراد والشركات في دولة الإمارات وخارجها من حماية حقوقهم الفكرية بفعالية."
      : "We are more than just a legal service provider; we are your partners in protecting your ideas and realizing your vision. We empower individuals and companies in the UAE and beyond.",
    btnAbout: isAr ? "من نحـــن" : "About Us",
    btnContact: isAr ? "للتواصل معنا" : "Contact Us",
    trust: [
      { icon: "🛡️", title: isAr ? "أمان متقدم عبر Cloudflare" : "Advanced Cloudflare Security", text: isAr ? "حماية متكاملة ضد الهجمات السيبرانية وتشفير كامل للبيانات لضمان أعلى مستويات الأمان." : "Fully integrated DDoS & WAF protection with end-to-end encryption for maximum security." },
      { icon: "🤝", title: isAr ? "الشفافية والمصداقية" : "Transparency & Integrity", text: isAr ? "نحرص على تطبيق أعلى معايير الشفافية والمصداقية لضمان ثقة عملائنا في كل خطوة." : "We uphold the highest standards of transparency and integrity to earn our clients' trust." },
      { icon: "🏆", title: isAr ? "خبرة متخصصة" : "Specialized Expertise", text: isAr ? "نمتلك خبرة واسعة في حماية حقوق الملكية الفكرية وفق أعلى المعايير القانونية." : "We possess extensive experience in protecting intellectual property rights per elite legal standards." },
    ],
    aboutTitle: isAr ? <>النورس <span className="accent">للملكية الفكرية</span></> : <>Al Nawras <span className="accent">Intellectual Property</span></>,
    aboutP: isAr 
      ? "نحن أكثر من مجرد مستشارين قانونيين؛ نحن شركاؤك في حماية أفكارك وتحقيق رؤيتك. نؤمن بأن كل فكرة مبتكرة تستحق الحماية، وكل علامة تجارية تحمل هوية فريدة يجب أن تُصان."
      : "We are more than just legal advisors; we are your partners in protecting your ideas and realizing your vision. Every innovative idea deserves protection, and every unique brand identity must be safeguarded.",
    mvg: [
      { h: isAr ? "رسالتنا" : "Mission", p: isAr ? "تقديم حلول قانونية متميزة لحماية حقوق الملكية الفكرية مع التركيز على الابتكار والجودة." : "Providing distinguished legal solutions for IP protection with a focus on innovation and quality." },
      { h: isAr ? "رؤيتنا" : "Vision", p: isAr ? "أن نكون الخيار الأول في حماية حقوق الملكية الفكرية وتعزيز الابتكار." : "To be the first choice in IP protection and fostering global innovation." },
      { h: isAr ? "أهدافنا" : "Goals", p: isAr ? "حماية حقوق الملكية الفكرية بفعالية، تعزيز الوعي القانوني، ودعم الابتكار." : "Effective IP protection, enhancing legal awareness, and supporting global startups." },
    ],
    servicesH2: isAr ? <>خدمات <span className="accent">المكتب</span></> : <>Our <span className="accent">Services</span></>,
    servicesP: isAr ? "نقدم مجموعة شاملة من خدمات الملكية الفكرية والاستشارات الإدارية" : "We offer a comprehensive suite of IP and management consultancy services.",
    btnAllServices: isAr ? "جميع الخدمات" : "View All Services",
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroText}>
              <span className={styles.badge}>{t.badge}</span>
              <h1>{t.heroH1}</h1>
              <p>{t.heroP}</p>
              <div className={styles.heroButtons}>
                <Link href={`/${lang}/about-us/`} className="btn btn-primary">
                  {t.btnAbout}
                </Link>
                <Link href={`/${lang}/contact/`} className="btn btn-outline" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                  {t.btnContact}
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.orbGold} />
              <div className={styles.orbBlue} />
              <div className={styles.shield}>🛡️</div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className={styles.trust}>
          <div className="container">
            <div className={styles.trustGrid}>
              {t.trust.map((item, i) => (
                <div key={i} className={`glass ${styles.trustCard}`}>
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
              <div>
                <div className="section-title" style={{ textAlign: isAr ? "start" : "end" }}>
                  <h2>{t.aboutTitle}</h2>
                </div>
                <p>{t.aboutP}</p>
                <div className={styles.mvg}>
                  {t.mvg.map((item, i) => (
                    <div key={i} className={`glass ${styles.mvgCard}`}>
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
            <div className="section-title">
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
                />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href={`/${lang}/services/`} className="btn btn-outline" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
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
