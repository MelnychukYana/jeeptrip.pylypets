"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0B0B0F] text-white">

      {/* 🌅 warm orange glow (sunset style) */}
      <div className="absolute w-[600px] h-[600px] bg-orange-500/25 blur-[140px] rounded-full top-[-220px] left-[-220px]" />
      <div className="absolute w-[500px] h-[500px] bg-amber-400/20 blur-[140px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* content */}
      <div className="relative z-10 text-center max-w-xl px-6">

        {/* 404 */}
        <h1 className="text-[120px] font-bold tracking-tight leading-none text-orange-400 drop-shadow-lg">
          404
        </h1>

        {/* title */}
        <h2 className="text-2xl font-semibold mt-4">
          Шлях загублено в горах 🏔️
        </h2>

        <p className="text-gray-300 mt-3 leading-relaxed">
          Сторінка, яку ви шукаєте, могла зникнути в одному з маршрутів або більше не існує.
        </p>

        {/* actions */}
        <div className="flex justify-center mt-8">

          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition hover:scale-105"
          >
            На головну
          </button>

        </div>

        {/* footer hint */}
        <p className="text-xs text-gray-500 mt-8">
          JeepTrip Pylypets • Mountain adventures
        </p>
      </div>
    </div>
  );
}