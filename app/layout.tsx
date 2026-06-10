import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeeptrip-pylypets.com.ua"),

  title: {
    default: "Джип тури Пилипець — пригоди в Карпатах на джипах",
    template: "%s | JeepTrip Pylypets",
  },

  description:
    "Джип тури, параплани, квадроцикли та снігоходи у Пилипці. Активний відпочинок у Карпатах з найкращими маршрутами та інструкторами.",

  keywords: [
    "джип тури Пилипець",
    "параплани Карпати",
    "квадроцикли Пилипець",
    "снігоходи Карпати",
    "активний відпочинок Карпати",
    "джип тріп Пилипець",
    "jeeptrip",
    "jeep trip",
    "pylypets",
    "Пилипець",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Активний відпочинок у Пилипці, Карпати — тури та пригоди",
    description:
      "Джип тури, параплани, квадроцикли та снігоходи у Пилипці. Активний відпочинок у Карпатах.",
    url: "https://jeeptrip-pylypets.com.ua",
    siteName: "JeepTrip Pylypets",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "JeepTrip Pylypets — Карпати",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Активний відпочинок у Пилипці, Карпати — тури та пригоди",
    description:
      "Джип тури, параплани, квадроцикли та снігоходи у Пилипці. Активний відпочинок у Карпатах",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${bebas.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}