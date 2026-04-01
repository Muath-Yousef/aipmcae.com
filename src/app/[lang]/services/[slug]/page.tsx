import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { services, getServiceBySlug } from "@/lib/content";
import styles from "./page.module.css";

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  ["ar", "en"].forEach((lang) => {
    services.forEach((s) => {
      params.push({ lang, slug: s.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const isAr = params.lang === "ar";
  const s = isAr ? service.ar : service.en;
  return {
    title: s.title,
    description: s.description,
  };
}

export default function ServiceDetailPage({ params: { lang, slug } }: Props) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isAr = lang === "ar";
  const s = isAr ? service.ar : service.en;
  const otherServices = services.filter((svc) => svc.slug !== slug).slice(0, 4);

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            {service.icon.startsWith("/") ? (
              <img src={service.icon} alt={s.title} style={{ width: "80px", marginBottom: "1.5rem" }} />
            ) : (
              <span style={{ fontSize: "3.5rem", marginBottom: "1.5rem", display: "block" }}>{service.icon}</span>
            )}
            <h1>{s.title}</h1>
            <p>{s.description}</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.grid}>
              <article className={styles.article}>
                {s.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </article>

              <aside className={styles.sidebar}>
                <div className={`glass ${styles.sideCard}`}>
                  <h3>{isAr ? "خدمات أخرى" : "Other Services"}</h3>
                  <ul>
                    {otherServices.map((svc) => (
                      <li key={svc.slug}>
                        <Link href={`/${lang}/services/${svc.slug}/`}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            {svc.icon.startsWith("/") ? (
                              <img src={svc.icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                            ) : (
                              <span>{svc.icon}</span>
                            )}
                            {isAr ? svc.ar.title : svc.en.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/${lang}/contact/`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {isAr ? "اطلب هذه الخدمة" : "Request this Service"}
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <CTABanner lang={lang} />
      </main>
    </>
  );
}
