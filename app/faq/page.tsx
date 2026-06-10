import type { Metadata } from "next";
import FAQSection from "@/components/shared/FAQSection";

export const metadata: Metadata = {
  title: "FAQ — Джип тури Пилипець, параплан, світанки в Карпатах",
  description:
    "Відповіді на часті питання про джип тури в Пилипці, світанки на горі Гимба, політ на параплані та організацію відпочинку в Карпатах (Закарпаття, Боржава).",

  alternates: {
    canonical: "/faq",
  },

  keywords: [
    "джип тури Пилипець FAQ",
    "параплан Пилипець питання",
    "світанок Гимба Карпати",
    "Боржавський хребет тури",
    "відпочинок Пилипець Закарпаття",
    "Карпати джип тури",
    "часті питання Пилипець",
  ],

  openGraph: {
    title: "FAQ — Джип тури Пилипець",
    description:
      "Все про джип тури, параплани та світанки в Пилипці. Відповіді на популярні питання.",
    url: "https://jeeptrip-pylypets.com.ua/faq",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Пилипець Карпати FAQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FAQ — Пилипець джип тури та параплан",
    description:
      "Часті питання про відпочинок у Пилипці: джип тури, світанки, параплани.",
    images: ["/preview.jpg"],
  },
};

export default function FAQPage() {

  return (
    <main className="w-full bg-[#fcfaf5] py-10">
      <FAQSection />
    </main>
  );
}