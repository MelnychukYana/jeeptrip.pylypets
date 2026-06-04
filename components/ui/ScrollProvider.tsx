"use client";

import { useEffect } from "react";

const sections = [
  "home",
  "sunrise",
  "gallery",
  "faq",
  "location",
  "reviews",
];

export function useScrollRoute() {
  useEffect(() => {
    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    // 🔥 чекаємо DOM повністю
    const init = () => {
      const path = window.location.pathname.replace("/", "");

      if (sections.includes(path)) {
        setTimeout(() => scrollToId(path), 300);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            // щоб не перезаписувало зайвий раз
            window.history.replaceState(null, "", `/${id}`);
          });
        },
        { threshold: 0.6 }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return observer;
    };

    const observer = init();

    return () => observer?.disconnect();
  }, []);
}