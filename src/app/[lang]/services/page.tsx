import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/content";

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const isAr = lang === "ar";
  return {
    title: isAr ? "خدماتنا" : "Our Services",
    description: isAr 
      ? "خدمات شركة النورس للملكية الفكرية — العلامات التجارية، براءات الاختراع، التصاميم الصناعية، تأسيس الشركات والمزيد."
      : "Al Nawras IP Services — Trademarks, Patents, Industrial Designs, Company Formation and more.",
  };
}

export default function ServicesPage({ params: { lang = "ar" } }: { params: { lang: string } }) {
  const isAr = lang === "ar";

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>{isAr ? "خدماتنا" : "Our Services"}</h1>
            <p>
              {isAr 
                ? "نقدم مجموعة شاملة من خدمات الملكية الفكرية والاستشارات الإدارية لحماية أفكارك وتعزيز أعمالك."
                : "We offer a comprehensive range of IP and management consultancy services to protect your ideas and boost your business."}
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {services.map((s) => (
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
          </div>
        </section>

        <CTABanner lang={lang} />
      </main>
    </>
  );
}
