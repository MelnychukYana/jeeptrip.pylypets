"use client";

import AdventuresSection from "@/components/shared/AdventuresSection";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function AdventuresPage() {
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
    <main className="w-full min-h-screen g-[#fcfaf5] py-10">
      <AdventuresSection />
    </main>
  );
}