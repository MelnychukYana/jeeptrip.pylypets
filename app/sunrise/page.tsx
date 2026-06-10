"use client";

import SunrisesSection from "@/components/shared/SunriseSection";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function SunrisesPage() {
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
    <main className="w-full min-h-screen bg-[#fcfaf5]">
      <SunrisesSection />
    </main>
  );
}