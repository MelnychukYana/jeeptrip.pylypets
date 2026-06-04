import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FDF6EF] border-t border-[#F0E4D6]">
      
      <div className="w-[98%] mx-auto px-6 py-10">
        
        <div className="grid grid-cols-2 items-center">

          {/* LEFT */}
          <div className="flex justify-start">
            <Image
              src="/favicon.png"
              alt="JeepTrip"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="text-right">

            <p className="text-gray-700 text-sm md:text-base">
              Відчуй Карпати по-справжньому
            </p>

            <p className="text-gray-400 text-xs mt-1">
              Пилипець, Закарпатська область
            </p>

            {/* PHONE */}
            <p className="mt-2 text-xs md:text-sm text-gray-600">
              <a
                href="tel:+380955077567"
                className="text-black hover:text-[#FF8A3D] transition-colors font-medium"
              >
                +380 95 507 75 67
              </a>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}