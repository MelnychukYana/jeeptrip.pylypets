import type { Metadata } from "next";
import GiftCertificateSection from "@/components/shared/GiftCertificateSection";


export const metadata: Metadata = {
  title: "Подарункові сертифікати — Джип тури Пилипець | Карпати",
  description:
    "Подарункові сертифікати на джип тури, параплани та світанки в Пилипці. Ідеальний подарунок у Карпатах, Закарпаття.",

  alternates: {
    canonical: "/certificate",
  },

  openGraph: {
    title: "Подарункові сертифікати — Пилипець",
    description:
      "Подарункові сертифікати на джип тури, параплани та світанки в Карпатах.",
    url: "https://jeeptrip-pylypets.com.ua/certificate",
    siteName: "JeepTrip Pylypets",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Джип тури Пилипець",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Подарункові сертифікати — Пилипець",
    description:
      "Джип тури, параплани та світанки в Карпатах у подарунок.",
    images: ["/preview.jpg"],
  },
};

export default function GiftCertificatePage() {

  return (
    <main className="w-full min-h-screen bg-[#fdf3e4] py-10">
      <GiftCertificateSection />
    </main>
  );
}