
import type { Metadata } from "next";
import AdventuresSection from "@/components/shared/AdventuresSection";


export const metadata: Metadata =  {
  title: "Галерея Пилипець — Джип тури, параплани та світанки в Карпатах",
  description:
    "Фото з джип турів у Пилипці, польотів на параплані, світанків на горі Гимба та Боржавському хребті. Найкращі моменти Карпат і Закарпаття.",

  alternates: {
    canonical: "/gallery",
  },

  keywords: [
    "галерея Пилипець",
    "джип тури фото Карпати",
    "параплан Пилипець фото",
    "світанок Гимба фото",
    "Боржава фото",
    "Карпати Закарпаття галерея",
    "тури Пилипець фото",
  ],

  openGraph: {
    title: "Галерея — Пилипець, Карпати",
    description:
      "Фото джип турів, парапланів і світанків у Пилипці та на горі Гимба.",
    url: "https://jeeptrip-pylypets.com.ua/gallery",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Галерея Пилипець Карпати",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Галерея Пилипець — Карпати",
    description:
      "Фото джип турів, парапланів та світанків у Пилипці.",
    images: ["/preview.jpg"],
  },
};

export default function AdventuresPage() {

  
  return (
    <main className="w-full min-h-screen g-[#fcfaf5] py-10">
      <AdventuresSection />
    </main>
  );
}