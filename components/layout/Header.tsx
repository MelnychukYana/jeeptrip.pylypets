"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Header() {
  const [open, setOpen] = useState(false);

  const glass =
    "backdrop-blur-md bg-white/10 border border-white/20";

  const iconClass =
    "text-black hover:text-[#FF8A3D] transition-colors duration-200";

  const linkClass =
    "hover:text-[#FF8A3D] hover:scale-105 transition-all duration-200 origin-center inline-block";

  const scrollToSection = (id: string, path: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    window.history.pushState({}, "", path);

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">

      {/* HEADER */}
      <div
        className={`w-[98%] flex items-center justify-between ${glass} rounded-full px-6 py-3 mt-4 relative z-50`}
      >

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt="JeepTrip"
            width={32}
            height={32}
            className="rounded-full"
          />

          <span className="text-black font-semibold tracking-[0.2em] text-sm md:text-lg whitespace-nowrap">
            JEEPTRIP
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-black text-sm uppercase">

          <button onClick={() => scrollToSection("home", "/")} className={linkClass}>
            Головна
          </button>

          <button onClick={() => scrollToSection("sunrise", "/sunrise")} className={linkClass}>
            Світанок
          </button>

          <button onClick={() => scrollToSection("prices", "/prices")} className={linkClass}>
            Ціни
          </button>

          <button onClick={() => scrollToSection("certificate", "/certificate")} className={linkClass}>
            Сертифікат
          </button>

          <button onClick={() => scrollToSection("gallery", "/gallery")} className={linkClass}>
            Наші пригоди
          </button>

          <button onClick={() => scrollToSection("faq", "/faq")} className={linkClass}>
            FAQ
          </button>

          <button onClick={() => scrollToSection("location", "/location")} className={linkClass}>
            Локація
          </button>
{/*
          <button onClick={() => scrollToSection("reviews", "/reviews")} className={linkClass}>
            Відгуки
          </button>
*/}
        </nav>

        {/* SOCIALS */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <a href="https://www.instagram.com/jeeptrip.pylypets/" target="_blank">
            <FaInstagram className={iconClass} />
          </a>
          <a href="https://www.tiktok.com/@jeeptrip.pylypets" target="_blank">
            <SiTiktok className={iconClass} />
          </a>
          <a href="https://t.me/mcherepp" target="_blank">
            <FaTelegramPlane className={iconClass} />
          </a>
          <a href="tel:+380955077567">
            <FaPhoneAlt className={iconClass} />
          </a>
        </div>

        {/* BURGER */}
        <button
          className="md:hidden text-black text-2xl hover:text-[#FF8A3D] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[98%] z-[999]">

          <div className={`${glass} rounded-3xl p-5 flex flex-col gap-4`}>

            <button onClick={() => scrollToSection("home", "/")} className={linkClass}>
              Головна
            </button>

            <button onClick={() => scrollToSection("sunrise", "/sunrise")} className={linkClass}>
              Світанок
            </button>

            <button onClick={() => scrollToSection("prices", "/prices")} className={linkClass}>
              Ціни
            </button>

            <button onClick={() => scrollToSection("certificate", "/certificate")} className={linkClass}>
              Сертифікат
            </button>

            <button onClick={() => scrollToSection("gallery", "/gallery")} className={linkClass}>
              Наші пригоди
            </button>

            <button onClick={() => scrollToSection("faq", "/faq")} className={linkClass}>
              FAQ
            </button>

            <button onClick={() => scrollToSection("location", "/location")} className={linkClass}>
              Локація
            </button>
{/*
            <button onClick={() => scrollToSection("reviews", "/reviews")} className={linkClass}>
              Відгуки
            </button>
*/}
            {/* SOCIALS MOBILE */}
            <div className="flex gap-4 pt-3 border-t border-white/20 text-2xl">
              <FaInstagram className={iconClass} />
              <SiTiktok className={iconClass} />
              <FaTelegramPlane className={iconClass} />
              <FaPhoneAlt className={iconClass} />
            </div>

          </div>
        </div>
      )}
    </header>
  );
}