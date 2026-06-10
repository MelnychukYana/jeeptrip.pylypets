
import type { Metadata } from "next";
import LocationSection from "@/components/shared/LocationSection";

export const metadata: Metadata = {
  title: "Локація — Пилипець, гора Гимба, Боржавський хребет | Карпати",
  description:
    "Де проходять джип тури та політ на параплані в Пилипці. Гора Гимба, Боржавський хребет, Закарпаття — точні локації активного відпочинку в Карпатах.",

  alternates: {
    canonical: "/location",
  },

  keywords: [
    "Пилипець локація",
    "гора Гимба як дістатися",
    "Боржавський хребет маршрут",
    "джип тури Пилипець місце",
    "параплан Пилипець старт",
    "Карпати Закарпаття локація",
    "світанок Гимба де знаходиться",
  ],

  openGraph: {
    title: "Локація — Пилипець, Карпати",
    description:
      "Гора Гимба, Боржавський хребет та місця старту джип турів і парапланів у Пилипці.",
    url: "https://jeeptrip-pylypets.com.ua/location",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Локація Пилипець Карпати",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Локація Пилипець — Карпати",
    description:
      "Гора Гимба та Боржава — де проходять джип тури і параплан у Пилипці.",
    images: ["/preview.jpg"],
  },
};

export default function LocationPage() {

  
  return (
    <main className="w-full bg-[#fcfaf5] py-10">
      <LocationSection />
    </main>
  );
}