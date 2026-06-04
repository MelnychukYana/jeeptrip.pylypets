"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section id="location" className="w-full py-10 bg-[#fcfaf5]">

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

          {/* LEFT SIDE */}
          <div>

            <p className="text-gray-700 leading-relaxed">
              Ми знаходимось у селі{" "}
              <span className="font-semibold text-black">Пилипець</span> —
              гірському курорті Карпат, де починаються наші тури, світанки
              та польоти над горами.
            </p>

            {/* HOW TO GET */}
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

          {/* MAP */}
          <motion.div
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

            <iframe
              src="https://www.google.com/maps?q=Pylypets%20Ukraine&output=embed&z=13"
              className="w-full h-full border-0"
              loading="lazy"
              style={{
                filter:
                  "sepia(0.18) saturate(1.25) hue-rotate(-12deg) brightness(1.05)",
              }}
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}