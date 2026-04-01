import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div lang={lang} dir={dir}>
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: ${lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
          direction: ${dir};
        }
      `}} />
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
      <WhatsAppButton />
    </div>
  );
}
