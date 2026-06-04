"use client";

import {
  FaCarSide,
  FaCloudSun,
  FaMotorcycle,
  FaSnowflake,
  FaParachuteBox,
  FaSun,
} from "react-icons/fa";

export default function PriceSection() {
  const card =
    "bg-white/70 backdrop-blur-md border border-black/10 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg";

  const icon = "text-2xl text-black mb-2";

  return (
    <section id="prices" className="w-full py-12 bg-[#fcfaf5]">
      <div className="w-[98%] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black uppercase">
          Ціни
        </h2>

        {/* GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

          {/* JEEP TOURS */}
          <div className={card}>
            <FaCarSide className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Джип-тури
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Панорамні поїздки Боржавським хребтом, підйом на Гимбу та фото-зупинки з видами Карпат.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              від 2500 грн
            </p>
          </div>

          {/* SUNRISE JEEP */}
          <div className={card}>
            <FaCloudSun className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Джип на світанку
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Ранковий виїзд на Боржаву, коли туман лежить у долинах, а сонце сходить над хребтом.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              5000 грн
            </p>
          </div>

          {/* PARAGLIDING */}
          <div className={card}>
            <FaParachuteBox className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Політ на параплані
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Політ над Пилипцем і Гимбою з видом на весь Боржавський хребет.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              3000 грн
            </p>
          </div>

          {/* SUNRISE PARAGLIDING */}
          <div className={card}>
            <FaSun className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Політ на світанку
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Найкрасивіший політ у Карпатах — золоті промені над хребтом і тиша гір.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              4000 грн
            </p>
          </div>

          {/* ATV */}
          <div className={card}>
            <FaMotorcycle className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Квадроцикли
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Маршрути лісами Пилипця та підйоми з краєвидами на Боржаву.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              від 1000 грн
            </p>
          </div>

          {/* SNOW */}
          <div className={card}>
            <FaSnowflake className={icon} />
            <h3 className="text-black font-semibold text-sm uppercase">
              Снігоходи
            </h3>
            <p className="text-black/60 text-xs mt-2">
              Зимові маршрути горами Пилипця з панорамами засніженої Гимби.
            </p>
            <p className="text-black font-semibold text-sm mt-2">
              від 1500 грн
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}