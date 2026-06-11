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

//import Link from "next/link";


export default function MainSection() {
  
  return (
    <section id="home" className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Jeep Trip Pylypets",
            "url": "https://www.jeeptrip-pylypets.com.ua/",
            "description":
              "Джип-тури, квадроцикли, снігоходи та параплани в Пилипці, на горі Гимба та Боржавському хребті в Карпатах.",
            "inLanguage": "uk-UA",
            "publisher": {
              "@type": "Organization",
              "name": "Jeep Trip Pylypets",
              "areaServed": "Пилипець, Карпати, Україна",
              "knowsAbout": [
                "Jeep tours",
                "Paragliding",
                "ATV tours",
                "Snowmobile tours",
                "Sunrise tours"
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.jeeptrip-pylypets.com.ua/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
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

       <div className="w-[98%] mx-auto mb-12">

        <div className="bg-white/80 backdrop-blur-xl border border-[#FF8A3D] rounded-[40px] p-10 md:p-16 shadow-sm">

          {/* TITLE */}
          <div className="text-center">
            <span className="uppercase tracking-[6px] text-[#FF8A3D] font-semibold">
              Закарпаття • Пилипець • Боржава
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-black uppercase mt-4">
              Пригоди в Карпатах: джипінг, параплани, квадроцикли та снігоходи
            </h2>

          </div>

          {/* STORY BLOCKS */}
          <div className="mt-14 space-y-10 text-gray-700 leading-8">

            <div>
              <h3 className="text-xl font-bold text-black text-[#FF8A3D]">
                🚙 Джип-тури Пилипець
              </h3>
              <p className="mt-1">
                Джип-тури дозволяють за короткий час піднятися до найвищих точок Боржавського хребта.
                Маршрути проходять через гірські дороги, лісові ділянки та панорамні майданчики з видом на Карпати.
                Це один із найпопулярніших форматів відпочинку в Пилипці.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">
                🏍️ Квадроцикли в Пилипці
              </h3>
              <p className="mt-1">
                Катання на квадроциклах — це активний спосіб дослідити Карпати.
                Маршрути проходять через бездоріжжя, гірські стежки та лісові дороги.
                Це ідеальний варіант для тих, хто хоче драйву, швидкості та повного занурення в природу.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">
                🪂 Параплани над Пилипцем
              </h3>
              <p className="mt-1">
                Політ на параплані — це найсильніша емоція, яку можна отримати в Карпатах.
                Ви бачите Боржавський хребет і долини Пилипця з висоти пташиного польоту.
                Це досвід, який запам’ятовується назавжди.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">
                ❄️ Зимові маршрути та снігоходи
              </h3>
              <p className="mt-1">
                Взимку Пилипець перетворюється на окремий світ.
                Снігоходи дозволяють дістатися до засніжених вершин,
                де відкриваються одні з найкращих краєвидів Карпат.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">
                📍 Локації: Гимба, Магура, Великий Верх
              </h3>
              <p className="mt-1">
                Гора Гимба, озеро Магура та Великий Верх — ключові точки Боржавського хребта.
                Саме тут відкриваються панорамні краєвиди на десятки кілометрів Карпат.
                Ці локації є основою більшості джип-турів і маршрутів квадроциклів.
              </p>
            </div>

          </div>
          {/* KEYWORDS STRIP */}
          <div className="mt-14 flex flex-wrap gap-3 justify-center">
            {[
              "джип тури Пилипець",
              "квадроцикли Карпати",
              "параплан Пилипець",
              "гора Гимба",
              "Великий Верх",
              "озеро Магура",
              "водоспад Шипіт",
            ].map((item) => (
              <span
                key={item}
                className="text-xs bg-[#fcfaf5] border px-4 py-2 rounded-full text-gray-700"
              >
                #{item}
              </span>
            ))}
          </div>

        </div>

      </div> 

    </section>
  );
}