"use client";

import { motion } from "framer-motion";

export default function SunrisesSection() {
  return (
    <section
      id="sunrise"
      className="w-full py-28 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/sunrise.png')",
        backgroundPosition: "70% center",
        backgroundSize: "cover",
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="w-[98%] mx-auto px-6 relative">

        <div className="max-w-3xl text-left text-white">

          {/* TITLE */}
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

          {/* DESCRIPTION */}
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

          {/* TITLE */}
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

          {/* OPTIONS */}
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

            {/* CARD 1 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
            >
              JEEP SUNRISE TOUR
            </motion.button>

            {/* CARD 2 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
            >
              SUNRISE PARAGLIDING
            </motion.button>

            {/* CARD 3 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#f6c28b]/40 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-xl text-sm font-medium"
            >
              VIP ROMANTIC SUNRISE
            </motion.button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}