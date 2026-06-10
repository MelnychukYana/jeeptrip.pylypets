"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SunrisesSection() {
  return (
    <section id="sunrise" className="w-full relative bg-[#fcfaf5]">

      {/* HERO (PHOTO SECTION) */}
      <div className="relative py-28">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/sunrise.webp')",
            backgroundPosition: "70% center",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="relative w-[98%] mx-auto px-6">
          <div className="max-w-3xl text-left text-white">

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                delay: 0.45,
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              НЕЗАБУТНІЙ СВІТАНОК НАД КАРПАТАМИ,
              <br />
              ЯКИЙ ВИ ЗАПАМʼЯТАЄТЕ НАЗАВЖДИ
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1.3,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 text-white/85 text-sm md:text-base leading-relaxed"
            >
              <p>Виїзд ще затемна. Дорога гірськими хребтами.</p>
              <p className="mt-2">Перші промені сонця над хмарами.</p>
              <p className="mt-2">Гаряча кава на вершині та неймовірні фото.</p>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1.2,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 text-white/90 text-base md:text-lg font-medium"
            >
              ОБЕРІТЬ СВОЮ ПРИГОДУ:
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.22,
                    delayChildren: 0.7,
                  },
                },
              }}
              className="mt-5 flex flex-col md:flex-row gap-3"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
              >
                JEEP SUNRISE TOUR
              </motion.button>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
              >
                SUNRISE PARAGLIDING
              </motion.button>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
              >
                VIP ROMANTIC SUNRISE
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* TEXT AFTER PHOTO */}
<div className="w-full bg-gradient-to-b from-[#fff3e6] via-[#fff7ed] to-[#fffaf5] py-20">

  <div className="w-[98%] mx-auto px-6">

    {/* HERO TEXT */}
    <div>

      <h2 className="text-3xl md:text-5xl font-bold text-center text-black uppercase mb-4 ">
        Світанок в Пилипці на горі Гимба
      </h2>

      <p className="mt-5 text-lg text-gray-700 leading-relaxed">
        Світанок у{" "}
        <span className="text-[#FF8A3D] text-800">
          Пилипці
        </span>{" "}
        — один із найкращих ранкових досвідів у{" "}
        <span className="text-[#FF8A3D] text-800">
          Карпатах
        </span>.
        На горі{" "}
        <span className="text-[#FF8A3D] text-800">
          Гимба
        </span>{" "}
        в{" "}
        <span className="text-[#FF8A3D] text-800">
          Закарпатті
        </span>{" "}
        відкривається панорама{" "}
        <span className="text-[#FF8A3D] text-800">
          Боржавського хребта
        </span>{" "}
        над морем хмар.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        Виїзд відбувається ще до{" "}
        <span className="text-[#FF8A3D] text-800">
          світанку
        </span>, щоб зустріти перші промені сонця на вершині.
        Це тиша, гори і повне перезавантаження в серці Карпат.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        <span className="text-[#FF8A3D] text-800">
          Джип-тур на світанку
        </span>{" "}
        в Пилипці починається в темряві, коли Карпати ще сплять.
        Ви піднімаєтесь на гору Гимба, а над Боржавським хребтом народжується світло і море хмар.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        Організація пропозиції руки та серця на світанку в Пилипці — це можливість створити унікальний романтичний момент серед Карпат.
        Ми допомагаємо підготувати все: від локації до моменту зізнання над хмарами.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        <span className="text-[#FF8A3D] text-800">
          Політ на параплані
        </span>{" "}
        на світанку — це свобода над Закарпаттям, коли під вами розкривається Боржава, а небо стає ближчим за землю.
      </p>

      {/* HIGHLIGHTS */}
      <div className="mt-6 flex flex-wrap gap-3">

        <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-sm font-medium">
          Світанок на Гимбі
        </span>

        <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-sm font-medium">
          Боржавський хребет
        </span>

        <span className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-sm font-medium">
          Закарпаття
        </span>

      </div>

    </div>

    {/* IMAGE BOTTOM */}
    <div className="mt-12 rounded-2xl overflow-hidden shadow-xl relative w-full h-[220px] md:h-[380px]">
      <Image
        src="/jeep5.jpg"
        alt="Світанок у Пилипці на горі Гимба"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* SEO BLOCK */}
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-orange-100">

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Чому обирають світанок у Пилипці
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Це не просто екскурсія, а досвід Карпат і Закарпаття, який поєднує джип-тури, параплан і світанок на горі Гимба.
        Один із найпопулярніших ранкових маршрутів у Пилипці.
      </p>

    </div>

  </div>
</div>
    </section>
  );
}