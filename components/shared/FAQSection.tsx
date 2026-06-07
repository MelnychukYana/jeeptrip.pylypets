export default function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full py-10 bg-[#fcfaf5]"
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
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
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
          </div>

          {/* 2 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи потрібен досвід для польоту?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Політ відбувається виключно в тандемі з інструктором.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
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
          </div>

          {/* 4 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи є вікові обмеження?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Вікових обмежень немає.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи входить підйом на гору у вартість?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні, оплачується окремо.</span>{" "}
              700 грн з особи (від 4 людей у машині) або 2500 грн за авто.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
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
          </div>

          {/* 7 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Де відбувається приземлення?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">На горі або внизу в селі.</span>{" "}
              Варіант залежить від погоди, інструктор приймає рішення на місці.
            </p>
          </div>

          {/* 8 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
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
          </div>

          {/* 9 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Квадроцикли
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Скільки людей на квадроциклі?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">1–2 особи.</span>
            </p>
          </div>

          {/* 10 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Снігоходи
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Чи можна керувати снігоходом?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Ні.</span> Тільки з водієм-інструктором.
            </p>
          </div>

          {/* 11 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Снігоходи
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Коли доступні снігоходи?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Взимку.</span> При наявності достатнього снігу.
            </p>
          </div>

          {/* 12 */}
          <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/5 hover:shadow-lg transition">
            <div className="inline-flex px-3 py-1 rounded-full bg-[#FF8A3D]/10 text-[#FF8A3D] text-xs font-medium mb-3">
              Параплан
            </div>

            <h3 className="text-xl font-bold text-[#FF8A3D] mb-3">
              Коли політ може бути скасований?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Через погодні умови.</span>{" "}
              Сильний вітер, дощ, туман або гроза можуть стати причиною перенесення або скасування польоту.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}