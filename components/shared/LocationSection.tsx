"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LocationSection() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("location-map");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="w-full py-10 bg-[#fcfaf5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jeep Trip Pylypets",
            "description":
              "Організація джип-турів, парапланів, квадроциклів та світанкових поїздок у Пилипці та на горі Гимба в Карпатах.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Пилипець",
              "addressRegion": "Закарпатська область",
              "addressCountry": "UA"
            },
            "areaServed": [
              "Пилипець",
              "Гора Гимба",
              "Боржавський хребет",
              "Воловець",
              "Карпати"
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.674,
              "longitude": 23.289
            },
            "url": "https://www.jeeptrip-pylypets.com.ua/location",
            "image": "https://www.jeeptrip-pylypets.com.ua/sunrise.webp",
            "keywords":
              "Пилипець як дістатись, Гимба Карпати, джип тури Пилипець, параплан Пилипець, Боржавський хребет",
            "knowsAbout": [
              "Jeep tours",
              "Paragliding",
              "ATV tours",
              "Snowmobile tours",
              "Sunrise tours"
            ]
          }),
        }}
      />
      {/* CONTAINER */}
      <div className="w-[98%] mx-auto px-6">

        {/* TITLE */}
        <h3 className="text-3xl md:text-5xl font-bold text-center uppercase">
          Як нас знайти?
        </h3>

        <p className="text-center mt-3 text-sm md:text-base text-[#FF8A3D]">
          Село <span className="font-semibold text-[#FF8A3D]">Пилипець</span>, Закарпатська область, Україна
        </p>

        {/* CONTENT */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">

          {/* LEFT SIDE (без змін) */}
          <div>

            <p className="text-gray-700 leading-relaxed">
              Ми знаходимось у селі{" "}
              <span className="font-semibold text-black">Пилипець</span> —
              гірському курорті Карпат, де починаються наші тури, світанки
              та польоти над горами.
            </p>

            <div className="mt-6">

              <h4 className="text-2xl md:text-3xl font-bold text-[#FF8A3D]">
                Як до нас дістатись?
              </h4>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Найзручніший маршрут — потягом до станції{" "}
                <span className="font-semibold text-black">Воловець</span>,
                а далі трансфером або таксі прямо до села{" "}
                <span className="font-semibold text-black">Пилипець</span>.
              </p>

              <p className="text-gray-700 mt-3 leading-relaxed">
                Дорога займає приблизно{" "}
                <span className="font-semibold text-black">25–40 хвилин</span>.
                Ми можемо допомогти з організацією трансферу.
              </p>

            </div>

          </div>

          {/* MAP (ОПТИМІЗОВАНО ТІЛЬКИ ЦЕ) */}
          <motion.div
            id="location-map"
            className="overflow-hidden rounded-[28px] h-[380px] shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.6,
              },
              show: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {showMap ? (
              <iframe
                src="https://www.google.com/maps?q=Pylypets%20Ukraine&output=embed&z=13"
                className="w-full h-full border-0"
                loading="lazy"
                style={{
                  filter:
                    "sepia(0.18) saturate(1.25) hue-rotate(-12deg) brightness(1.05)",
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                Завантаження карти...
              </div>
            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
}