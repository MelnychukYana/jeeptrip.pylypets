import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
    default: "JeepTrip Pylypets — Джип тури та параплани в Пилипці",
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
  ],

  alternates: {
    canonical: "https://jeeptrip-pylypets.com.ua",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "JeepTrip Pylypets — Джип тури та параплани",
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
    title: "JeepTrip Pylypets — Джип тури та параплани",
    description:
      "Джип тури, параплани, квадроцикли та снігоходи у Пилипці.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}