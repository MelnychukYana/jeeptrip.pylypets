"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const data = [
  {
    title: "Джип-тури",
    bg: "/jeep1.jpg",
    images: [
      "/jeep1.jpg",
      "/jeep2.png",
      "/jeep3.jpg",
      "/jeep4.jpg",
      "/jeep5.jpg",
    ],
  },
  {
    title: "Квадроцикли",
    bg: "/atv1.jpg",
    images: [
      "/atv1.jpg",
      "/atv2.jpg",
      "/atv3.png",
      "/atv4.png",
      "/atv5.jpg",
    ],
  },
  {
    title: "Снігоходи",
    bg: "/snow2.jpg",
    images: [
      "/snow2.jpg",
      "/snow6.jpg",
      "/snow3.jpg",
      "/snow4.jpg",
    ],
  },
  {
    title: "Параплани",
    bg: "/fly1.png",
    images: [
      "/fly1.png",
      "/fly2.png",
      "/fly3.png",
    ],
  },
];

export default function AdventuresSection() {
  const [active, setActive] = useState<number | null>(null);
  const [index, setIndex] = useState(0);

  const openGallery = useCallback((i: number) => {
    setActive(i);
    setIndex(0);
  }, []);

  const closeGallery = useCallback(() => {
    setActive(null);
    setIndex(0);
  }, []);

  const next = useCallback(() => {
    if (active === null) return;

    setIndex((prev) => {
      const len = data[active].images.length;
      return prev + 1 >= len ? 0 : prev + 1;
    });
  }, [active]);

  const prev = useCallback(() => {
    if (active === null) return;

    setIndex((prev) => {
      const len = data[active].images.length;
      return prev - 1 < 0 ? len - 1 : prev - 1;
    });
  }, [active]);

  // KEYBOARD CONTROL
  useEffect(() => {
    if (active === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeGallery();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, next, prev, closeGallery]);

  return (
    <section id="gallery" className="w-full py-14 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Фото пригод у Пилипці",
            "description":
              "Галерея фото джип-турів, квадроциклів, снігоходів та польотів на параплані в Пилипці, на горі Гимба та Боржавському хребті.",
            "url": "https://www.jeeptrip-pylypets.com.ua/gallery",
            "keywords":
              "Пилипець фото, гора Гимба, Боржавський хребет, джип тури Пилипець, квадроцикли Пилипець, снігоходи Пилипець, параплан Пилипець",
            "image": [
              "https://www.jeeptrip-pylypets.com.ua/jeep1.jpg",
              "https://www.jeeptrip-pylypets.com.ua/atv1.jpg",
              "https://www.jeeptrip-pylypets.com.ua/snow2.jpg",
              "https://www.jeeptrip-pylypets.com.ua/fly1.png"
            ]
          }),
        }}
      />
      <div className="w-[98%] mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
          Наші пригоди
        </h2>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => openGallery(i)}
              className="relative h-56 rounded-2xl overflow-hidden cursor-pointer group"
            >

              <Image
                src={item.bg}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* bottom text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-xs text-white/80">
                  Натисни щоб переглянути фото
                </p>
              </div>

              {/* button */}
              <motion.div
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FF8A3D] text-white flex items-center justify-center shadow-md"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0px 0px 25px rgba(255,138,61,0.6)",
                  x: 3,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                ➜
              </motion.div>

            </div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {active !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-4 text-white text-5xl z-50"
          >
            ‹
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-4 text-white text-5xl z-50"
          >
            ›
          </button>

          {/* IMAGE */}
          <div className="relative w-full max-w-5xl h-[75vh] mx-6">
          <Image
            src={data[active].images[index]}
            alt="gallery"
            fill
            className="object-contain rounded-2xl"
            priority
          />
          </div>

        </div>
      )}

    </section>
  );
}