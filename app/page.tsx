"use client";

import { useEffect, useState } from "react";

import MainSection from "@/components/shared/MainSection";
import PriceSection from "@/components/shared/PriceSection";
import GiftCertificateSection from "@/components/shared/GiftCertificateSection";
import SunrisesSection from "@/components/shared/SunriseSection";
//import ReviewsSection from "@/components/shared/ReviewsSection";
import AdventuresSection from "@/components/shared/AdventuresSection";
import LocationSection from "@/components/shared/LocationSection";
import FAQSection from "@/components/shared/FAQSection";
import ParaglidingSection from "@/components/shared/ParaglidingSection";

import LoadingScreen from "@/components/ui/LoadingScreen";
import { useScrollRoute } from "@/components/ui/useScrollRoute";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useScrollRoute();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // ⬅️ час загрузки (2 сек)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>

      <MainSection />
      <SunrisesSection />
      <PriceSection />
      <GiftCertificateSection />
      <AdventuresSection />
      <ParaglidingSection />
      <FAQSection />
      <LocationSection />
      {/* <ReviewsSection /> */}
    </>
  );
}