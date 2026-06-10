"use client";

import ParaglidingSection from "@/components/shared/ParaglidingSection";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ParaglidingPage() {
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
    <main className="w-full bg-[#fcfaf5] py-20">
      <ParaglidingSection />
    </main>
  );
}