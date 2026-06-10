
import type { Metadata } from "next";
import ParaglidingSection from "@/components/shared/ParaglidingSection";

export const metadata: Metadata =  {
  title: "Політ на параплані в Пилипці — Карпати, Гимба, Закарпаття",
  description:
    "Тандемні польоти на параплані в Пилипці над Карпатами та горою Гимба. Адреналін, море хмар і найкращі краєвиди Боржавського хребта. Активний відпочинок у Закарпатті.",

  keywords: [
    "параплан Пилипець",
    "політ на параплані Карпати",
    "Гимба параплан",
    "Закарпаття параплан",
    "Боржавський хребет політ",
    "активний відпочинок Карпати",
    "параплан Україна",
  ],

  alternates: {
    canonical: "https://jeeptrip-pylypets.com.ua/paragliding",
  },

  openGraph: {
    title: "Політ на параплані в Пилипці — Карпати з висоти",
    description:
      "Параплан у Пилипці: гори Гимба, Боржавський хребет, море хмар і незабутні емоції польоту над Карпатами.",
    url: "https://jeeptrip-pylypets.com.ua/paragliding",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/par4.webp",
        width: 1200,
        height: 630,
        alt: "Параплан Пилипець Карпати",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Політ на параплані в Пилипці",
    description:
      "Карпати з висоти пташиного польоту — параплан над Гимбою та Боржавою.",
    images: ["/par4.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ParaglidingPage() {
  return (
    <main className="w-full bg-[#fcfaf5] py-20">
      <ParaglidingSection />
    </main>
  );
}