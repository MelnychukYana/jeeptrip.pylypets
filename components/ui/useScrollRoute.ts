"use client";

import { useEffect } from "react";

const sections = [
  "home",
  "sunrise",
  "prices",
  "certificate",
  "gallery",
  "faq",
  "location",
  "reviews",
  "paragliding",
];

export function useScrollRoute() {
  useEffect(() => {
    let activeId = "";
    let ticking = false;

    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    // 🔥 WAIT UNTIL DOM IS READY
    const waitForElementAndScroll = (id: string) => {
      let attempts = 0;

      const interval = setInterval(() => {
        attempts++;

        const success = scrollToId(id);

        if (success || attempts > 30) {
          clearInterval(interval);
        }
      }, 100);
    };

    // 🔥 1. READ URL AFTER REWRITE
    const path = window.location.pathname.replace("/", "");

    if (sections.includes(path)) {
      waitForElementAndScroll(path);
    }

    // 🔥 2. SCROLL SPY (URL update)
    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const offset = window.innerHeight * 0.4;

        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;

          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollY + offset >= top && scrollY + offset < bottom) {
            if (id !== activeId) {
              activeId = id;
              window.history.replaceState(null, "", `/${id}`);
            }
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}