"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/ar/");
  }, [router]);

  return (
    <div style={{ background: '#0A1628', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#C5A356', fontFamily: 'Cairo, sans-serif' }}>جارٍ التحميل... / Loading...</p>
    </div>
  );
}
