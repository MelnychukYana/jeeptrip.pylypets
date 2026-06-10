"use client";

import { useEffect, useState } from "react";

import MainSection from "@/components/shared/MainSection";
//import ReviewsSection from "@/components/shared/ReviewsSection";

import LoadingScreen from "@/components/ui/LoadingScreen";
import { useScrollRoute } from "@/components/ui/useScrollRoute";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useScrollRoute();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // ⬅️ час загрузки (2 сек)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MainSection />

      {/* <ReviewsSection /> */}
    </>
  );
}