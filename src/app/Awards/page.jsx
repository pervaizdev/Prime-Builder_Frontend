"use client";

import AwardSection from "@/Component/AwardSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      {/* FIXED HERO (NOT SCROLLABLE) */}
      <div className="fixed inset-0 -z-10 h-[90vh] lg:h-[95vh] w-full">
        <Image
          src="/images/2b.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div initial="hidden" animate="show" className="text-center">
            <motion.h1 className="text-white font-sans font-bold text-5xl lg:text-8xl">
              Awards
            </motion.h1>

            <motion.p className="mt-5 max-w-2xl mx-auto text-white/90 text-lg sm:text-base lg:text-lg">
              It stands as a symbol of trust, long-term investment value, and a
              commitment to delivering outstanding standards.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Spacer (same height as hero) */}
      <div className="h-[35vh] lg:h-[95vh]" />

      {/* SCROLLING CONTENT (comes up and hides the hero) */}
      <div className="relative mt-70 lg:-mt-24 bg-white rounded-t-[35px] lg:rounded-t-[60px] px-4 lg:px-8 py-12 z-10">
        <hr className="border-gray-200 mt-4 lg:mt-6" />
        <AwardSection />
      </div>
    </>
  );
}