"use client";

import GiftCertificateSection from "@/components/shared/GiftCertificateSection";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function GiftCertificatePage() {
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
    <main className="w-full min-h-screen bg-[#fdf3e4] py-10">
      <GiftCertificateSection />
    </main>
  );
}