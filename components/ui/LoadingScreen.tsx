"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {/* glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#FF8A3D] blur-[120px] opacity-40 rounded-full" />

      {/* logo */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/favicon.png"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-[2px] bg-[#FF8A3D]"
        />

        <p className="text-white text-sm tracking-[0.3em]">
          JEEPTRIP
        </p>
      </motion.div>
    </motion.div>
  );
}