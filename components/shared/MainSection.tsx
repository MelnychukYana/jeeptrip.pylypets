"use client";

import {
  FaCar,
  FaMapMarkedAlt,
  FaSun,
  FaShieldAlt,
  FaCamera,
  FaGift,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section id="home" className="w-full bg-white">

      {/* HERO */}
      <div
        className="w-full h-[70vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/main.webp')",
        }}
      >

        <div className="w-[98%] mx-auto px-6">

          <div className="max-w-4xl relative">

            <div className="absolute -inset-6 bg-white/40 blur-2xl rounded-3xl" />

            <div className="relative">

              <motion.h1
                initial={{ opacity: 0, x: -180, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="text-4xl md:text-7xl font-bold text-black uppercase leading-none"
              >
                ВІДЧУЙ КАРПАТИ
                <br />
                ПО-СПРАВЖНЬОМУ
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -180, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 text-black/80 text-sm md:text-lg leading-relaxed"
              >
                Джип-тури гірськими хребтами,
                <br />
                квадроцикли серед диких маршрутів,
                <br />
                снігоходи засніженими схилами
                <br />
                та польоти на параплані над хмарами Пилипця.
              </motion.p>

            </div>

          </div>

        </div>

      </div>

      {/* FEATURES */}
      <div className="w-full bg-[#fcfaf5]">

        <div className="w-[98%] mx-auto py-12">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaCar className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Досвідчені водії
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  Професіонали з досвідом більше 5 років
                </p>
              </div>

            </div>

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaMapMarkedAlt className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Найкращі маршрути
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  Гимба, Великий Верх та Світанки над хмарами
                </p>
              </div>

            </div>

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaSun className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Неймовірні світанки
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  що залишають слід у серці
                </p>
              </div>

            </div>

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaShieldAlt className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Безпека понад усе
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  Сучасна техніка та інструктори
                </p>
              </div>

            </div>

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaCamera className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Фото та відео
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  Допоможемо зробити крутий контент
                </p>
              </div>

            </div>

            {/* CARD */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-xl border border-black/10 rounded-2xl p-5 hover:shadow-md transition">

              <FaGift className="text-[#FF8A3D] text-xl mt-1 shrink-0" />

              <div>
                <h3 className="text-black font-semibold text-sm">
                  Подарункові сертифікати
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-snug">
                  Емоції, які хочеться дарувати
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}