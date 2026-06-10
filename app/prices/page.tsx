
import type { Metadata } from "next";
import PriceSection from "@/components/shared/PriceSection";

export const metadata: Metadata = {
  title: "Ціни на джип тури, параплан і активний відпочинок у Пилипці",
  description:
    "Актуальні ціни на джип тури в Пилипці, політ на параплані, квадроцикли та інші активності в Карпатах. Закарпаття, гора Гимба, Боржавський хребет — найкращі пригоди з фіксованими цінами та індивідуальними пропозиціями.",

  keywords: [
    "ціни Пилипець",
    "джип тур ціна Пилипець",
    "параплан ціна Карпати",
    "активний відпочинок Закарпаття",
    "ціни джип тури Карпати",
    "Пилипець ціни",
    "Гимба тури",
    "Боржавський хребет тури",
    "джип тури Закарпаття",
  ],

  alternates: {
    canonical: "https://jeeptrip-pylypets.com.ua/prices",
  },

  openGraph: {
    title: "Ціни на тури в Пилипці — джипи, параплан, Карпати",
    description:
      "Дізнайтесь актуальні ціни на джип тури, параплан та активний відпочинок у Пилипці. Карпати, Закарпаття, гора Гимба.",
    url: "https://jeeptrip-pylypets.com.ua/prices",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ціни JeepTrip Pylypets",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ціни на джип тури і параплан у Пилипці",
    description:
      "Актуальні ціни на активний відпочинок у Карпатах: джип тури, параплан, Закарпаття.",
    images: ["/preview.jpg"],
  },
};

export default function PricePage() {
  
  return (
    <main className="w-full min-h-screen bg-[#fcfaf5] py-10">
      <PriceSection />
    </main>
  );
}