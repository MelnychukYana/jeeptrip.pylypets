"use client";

import PriceSection from "@/components/shared/PriceSection";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function PricePage() {
    const [loading, setLoading] = useState(true);
  
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
    <main className="w-full min-h-screen bg-[#fcfaf5] py-10">
      <PriceSection />
    </main>
  );
}