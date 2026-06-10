
import type { Metadata } from "next";
import SunrisesSection from "@/components/shared/SunriseSection";

export const metadata: Metadata =  {
  title: "Світанок у Пилипці на горі Гимба — джип тури та параплан на світанку",
  description:
    "Світанки в Пилипці на горі Гимба та Боржавському хребті — це унікальні джип тури на світанку, польоти на параплані та романтичні пригоди в Карпатах. Закарпаття, море хмар, перші промені сонця і найкращі емоції ранку.",

  keywords: [
    "світанок Пилипець",
    "джип тур на світанку Пилипець",
    "параплан Пилипець",
    "гора Гимба світанок",
    "Боржавський хребет світанок",
    "Карпати світанок",
    "Закарпаття джип тури",
    "світанок в горах Україна",
    "романтичний світанок Пилипець",
  ],

  alternates: {
    canonical: "/sunrise",
  },

  openGraph: {
    title: "Світанок у Пилипці — джип тури та параплан на горі Гимба",
    description:
      "Найкращі світанки в Карпатах: джип тури, параплан і море хмар у Пилипці. Гора Гимба та Боржавський хребет.",
    url: "https://jeeptrip-pylypets.com.ua/sunrise",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/sunrise.webp",
        width: 1200,
        height: 630,
        alt: "Світанок у Пилипці на горі Гимба",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Світанок у Пилипці — джип тур і параплан",
    description:
      "Карпати, Гимба, Боржава — найкращі світанки з джип турами та польотами на параплані.",
    images: ["/sunrise.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SunrisesPage() {
  return (
    <main className="w-full min-h-screen bg-[#fcfaf5]">
      <SunrisesSection />
    </main>
  );
}