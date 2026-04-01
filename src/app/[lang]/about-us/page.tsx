import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import styles from "./page.module.css";

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const isAr = lang === "ar";
  return {
    title: isAr ? "من نحن" : "About Us",
    description: isAr 
      ? "تعرف على شركة النورس للملكية الفكرية والاستشارات الإدارية — خبرة متخصصة في حماية حقوق الملكية فكرية في الإمارات."
      : "Learn about Al Nawras Intellectual Property & Management Consultants — specialized expertise in protecting IP rights in the UAE.",
  };
}

export default function AboutPage({ params: { lang = "ar" } }: { params: { lang: string } }) {
  const isAr = lang === "ar";

  const t = {
    heroH1: isAr ? <>نبذة عن <span style={{ color: "var(--gold)" }}>شركتنا</span></> : <>About <span style={{ color: "var(--gold)" }}>Our Firm</span></>,
    heroP: isAr 
      ? "في شركة النورس للملكية الفكرية، نحن أكثر من مجرد مستشارين قانونيين؛ نحن شركاؤك في حماية أفكارك وتحقيق رؤيتك."
      : "At Al Nawras Intellectual Property, we are more than just legal advisors; we are your partners in protecting your ideas and realizing your vision.",
    introP1: isAr 
      ? "نؤمن بأن كل فكرة مبتكرة تستحق الحماية، وكل علامة تجارية تحمل هوية فريدة يجب أن تُصان. انطلاقًا من قلب دبي، عاصمة الابتكار وريادة الأعمال، نقدم خدمات متكاملة في مجال حقوق الملكية الفكرية."
      : "We believe that every innovative idea deserves protection, and every unique brand identity must be safeguarded. from the heart of Dubai, we provide integrated IP services.",
    introP2: isAr 
      ? "فريقنا من الخبراء يتمتع بخبرة عميقة وفهم دقيق لتحديات السوق المحلية والعالمية، مما يتيح لنا تقديم حلول مخصصة تناسب احتياجات عملائنا."
      : "Our team of experts enjoys deep experience and precise understanding of market challenges, allowing us to provide customized solutions for our clients.",
    whyTitle: isAr ? <>لماذا <span className="accent">النورس</span>؟</> : <>Why Choose <span className="accent">Al Nawras</span>?</>,
    whyP: isAr ? "مميزات تجعلنا الخيار الأمثل لحماية ملكيتك الفكرية" : "Features that make us the ideal choice for your intellectual property protection.",
    features: [
      { icon: "/images/icons/copyright.png", title: isAr ? "أمان سحابي متقدم" : "Advanced Cloud Security", text: isAr ? "نعتمد على تقنيات Cloudflare لتأمين الموقع وحماية بيانات العملاء." : "We rely on Cloudflare technologies to secure the site and protect client data." },
      { icon: "/images/icons/trademark.png", title: isAr ? "خبرة متخصصة" : "Specialized Expertise", text: isAr ? "نمتلك خبرة واسعة في حماية حقوق الملكية الفكرية وفق أعلى المعايير." : "We have extensive experience in protecting IP rights per elite legal standards." },
      { icon: "/images/icons/patent.png", title: isAr ? "متابعة مستمرة" : "Continuous Follow-up", text: isAr ? "نقدم متابعة قانونية مستمرة لضمان حماية ملكيتك الفكرية وتحديثها." : "We provide ongoing legal follow-up to ensure your IP protection is always current." },
      { icon: "/images/icons/company.png", title: isAr ? "استشارات احترافية" : "Professional Consultancy", text: isAr ? "نقدم استشارات قانونية متخصصة تلبي احتياجات المبتكرين في الإمارات." : "We provide specialized legal consultations that meet the needs of innovators in the UAE." },
    ],
    protectionTitle: isAr ? "حماية أفكارك تبدأ من هنا" : "Your Idea's Protection Starts Here",
    protectionP1: isAr 
      ? "كل فكرة مبتكرة هي أصل ثمين يمكن أن يكون الأساس لنجاحك وتفوقك في عالم الأعمال. نؤمن بأن الإبداع يستحق الحماية لضمان استمراريته."
      : "Every innovative idea is a precious asset that can be the foundation of your success. We believe creativity deserves protection to ensure its continuity.",
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

        <section className={styles.intro}>
          <div className="container">
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className="section-title">
              <h2>{t.whyTitle}</h2>
              <p>{t.whyP}</p>
            </div>
            <div className={styles.featGrid}>
              {t.features.map((f, i) => (
                <div key={i} className={`glass ${styles.featCard}`}>
                  <span className={styles.featIcon}>
                    {f.icon.startsWith("/") ? <img src={f.icon} alt={f.title} style={{ width: '64px', margin: '0 auto 20px' }} /> : f.icon}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.protection}>
          <div className="container">
            <div className={`glass ${styles.protectionCard}`}>
              <h2>{t.protectionTitle}</h2>
              <p>{t.protectionP1}</p>
            </div>
          </div>
        </section>

        <CTABanner lang={lang} />
      </main>
    </>
  );
}
