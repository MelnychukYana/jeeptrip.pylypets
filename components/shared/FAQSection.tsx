"use client";

import { motion } from "framer-motion";

export default function FAQSection() {
  return (
    <motion.section
      id="faq"
      className="w-full py-10 bg-[#fcfaf5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: 0.25,
      }}
    >
      <div className="w-[98%] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
          FAQ
        </h2>

        <p className="text-center mt-3 text-sm md:text-base text-[#FF8A3D]">
          Все, що потрібно знати перед пригодою
        </p>

        {/* FAQ GRID */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">

          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Де проходять польоти?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Польоти проходять у районі{" "}
              <span className="font-semibold text-black">Боржавського хребта</span>{" "}
              біля села{" "}
              <span className="font-semibold text-black">Пилипець</span>.
              З висоти відкриваються неймовірні панорами Карпат.
            </p>
          </motion.div>

          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи потрібен досвід для польоту?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Політ відбувається виключно в тандемі з інструктором.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Які обмеження по вазі?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Від 40 до 110 кг.</span>{" "}
              Це оптимальні параметри для безпечного польоту.
            </p>
          </motion.div>

          {/* 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи є вікові обмеження?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Вікових обмежень немає.
            </p>
          </motion.div>

          {/* 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи входить підйом на гору у вартість?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні, оплачується окремо.</span>{" "}
              750 грн з особи (від 4 людей у машині) або 2500 грн за авто.
            </p>
          </motion.div>

          {/* 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Скільки триває політ?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">15–20 хвилин.</span>{" "}
              Тривалість залежить від погоди та повітряних умов.
            </p>
          </motion.div>

          {/* 7 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Де відбувається приземлення?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">
                На горі або внизу в селі.
              </span>{" "}
              Варіант залежить від погоди, інструктор приймає рішення на місці.
            </p>
          </motion.div>

          {/* 8 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Квадроцикли
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи можна керувати квадроциклом?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Так.</span>{" "}
              Але маршрут веде інструктор, і всі рухаються в колоні.
            </p>
          </motion.div>

          {/* 9 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Квадроцикли
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Скільки людей на квадроциклі?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">1–2 особи.</span>
            </p>
          </motion.div>

          {/* 10 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Снігоходи
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи можна керувати снігоходом?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Тільки з водієм-інструктором.
            </p>
          </motion.div>

          {/* 11 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Снігоходи
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Коли доступні снігоходи?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Взимку.</span> При наявності достатнього снігу.
            </p>
          </motion.div>

          {/* 12 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Коли політ може бути скасований?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">
                Через погодні умови.
              </span>{" "}
              Сильний вітер, дощ, туман або гроза можуть стати причиною перенесення або скасування польоту.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}