"use client";

import Image from "next/image";

export default function ParaglidingSection() {
  return (
    <section className="w-full py-6 bg-[#fcfaf5]" id="paragliding">
      <div className="w-[98%] mx-auto px-6">

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Політ на параплані Пилипець",
            "description": "Тандемні польоти на параплані в Пилипці над Карпатами та горою Гимба.",
            "areaServed": "Пилипець, Україна",
            "touristType": "AdventureTourists",
            "keywords": "параплан пилипець, політ карпати, тандемний політ",
            "image": "https://www.jeeptrip-pylypets.com.ua//par4.webp",
            "url": "https://www.jeeptrip-pylypets.com.ua/paragliding"
            }),
          }}
        />

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-black">
            Політ на параплані в Пилипці
          </h2>

          <p className="mt-4 text-lg text-[#FF8A3D] text-600 max-w-2xl mx-auto font-medium">
            Карпати • Адреналін • Свобода
          </p>
        </div>

        {/* SEO TEXT BLOCK */}
        <div className="w-full">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-sm border border-orange-200 p-6 md:p-10 lg:p-12">

            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* LEFT TEXT */}
            <div className="space-y-5 text-gray-700 leading-relaxed w-full max-w-none text-justify">

            <p>
                <strong>Політ на параплані в Пилипці</strong> — це унікальна можливість побачити Карпати з висоти пташиного польоту
                та відчути справжню свободу над одним із найкрасивіших гірських масивів України — Боржавським хребтом.
                Саме тут відкриваються панорами на гору Гимба, полонини, гірські хребти та глибоку долину Пилипця.
            </p>

            <p>
                Тандемний політ проходить разом із сертифікованим інструктором, який повністю контролює процес:
                від старту зі схилу до м’якого приземлення в долині.
                Вам не потрібно мати жодного досвіду — достатньо бажання літати.
            </p>

            <p className="text-gray-900 font-semibold">
                У момент зльоту ви буквально “відпускаєте землю” і переходите в стан абсолютної свободи.
                Саме за це параплан у Пилипці вважають одним із найсильніших вражень у Карпатах.
            </p>

            <p>
                <strong>Параплан</strong> — це один із найпопулярніших видів активного відпочинку в Закарпатті,
                який щороку обирають тисячі туристів з України та Європи.Кожна секунда у повітрі
                сприймається інакше — без шуму міста, без обмежень, тільки вітер, простір і панорама гір.
                У хорошу погоду можна побачити десятки кілометрів Карпатського масиву.
            </p>

            </div>

              {/* RIGHT IMAGE */}
              <div className="space-y-5">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/par4.webp"
                    alt="Параплан Пилипець вид на Карпати"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

            {/* BOTTOM INFO BLOCKS (MORE ORANGE) */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange-90">
                <p className="text-[#FF8A3D] text-700  font-bold">⛰ Локація</p>
                <p className="text-sm text-gray-700 mt-1">
                  Боржавський хребет, гора Гимба, Пилипець
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange-90">
                <p className="text-[#FF8A3D] text-700 font-bold">🪂 Формат</p>
                <p className="text-sm text-gray-700 mt-1">
                  Тандемний політ з інструктором (без досвіду)
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange-90">
                <p className="text-[#FF8A3D] text-700 font-bold">🔥 Емоції</p>
                <p className="text-sm text-gray-700 mt-1">
                  Адреналін, свобода та найкраща панорама Карпат
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}