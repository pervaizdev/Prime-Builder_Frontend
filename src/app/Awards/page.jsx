"use client";

import AwardSection from "@/Component/AwardSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <div className="relative w-full h-[35vh] lg:h-[95vh]">
        <Image
          src="/images/2b.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <motion.h1
            className="text-[#eece9c] font-sans font-bold ms-4 lg:ms-12 text-4xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Awards
          </motion.h1>
        </div>
      </div>
      <div className="relative top-[-75] lg:top-[-100] bg-white rounded-[35] lg:rounded-[60] lg:px-8 py-12">
        <hr className="border-gray-700 mt-8 lg:mt-12" />
        <AwardSection />
      </div>
    </>
  );
}
