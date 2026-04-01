import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const isAr = lang === "ar";
  return {
    title: isAr ? "المدونة" : "Blog",
    description: isAr 
      ? "مقالات ونصائح حول الملكية الفكرية، العلامات التجارية، وبراءات الاختراع من شركة النورس."
      : "Articles and tips on IP, Trademarks, and Patents from Al Nawras Intellectual Property.",
  };
}

export default function BlogPage({ params: { lang = "ar" } }: { params: { lang: string } }) {
  const isAr = lang === "ar";

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>{isAr ? "المدونة" : "Blog"}</h1>
            <p>
              {isAr 
                ? "مقالات ونصائح حول الملكية الفكرية والاستشارات الإدارية" 
                : "Articles and tips on Intellectual Property and Management Consultancy"}
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="glass" style={{ padding: "64px 32px", maxWidth: 600, margin: "0 auto" }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: 16 }}>📝</span>
              <h2 style={{ fontSize: "1.4rem", color: "var(--gold)", marginBottom: 12 }}>
                {isAr ? "قريبًا" : "Coming Soon"}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {isAr 
                  ? "نعمل على إعداد مقالات متخصصة في مجال الملكية الفكرية والاستشارات الإدارية. ترقبوا المزيد."
                  : "We are preparing specialized articles on Intellectual Property and Management Consultancy. Stay tuned."}
              </p>
            </div>
          </div>
        </section>

        <CTABanner lang={lang} />
      </main>
    </>
  );
}
