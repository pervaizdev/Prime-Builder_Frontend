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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div className="ms-4 lg:ms-12" initial="hidden" animate="show">
            <motion.h1 className="text-[#eece9c]  font-sans font-bold text-center text-4xl lg:text-8xl mt-10 lg:mt-0">
              Awards
            </motion.h1>
            <motion.p className="mt-5 lg:ms-10 lg:mt-10 lg:w-140 text-center text-xs lg:text-lg">
              It stands as a symbol of trust, long-term investment value, and a
              commitment to delivering outstanding standards.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="relative top-[-70] lg:top-[-100] bg-white rounded-[35] lg:rounded-[60] lg:px-8 py-12">
        <hr className="border-gray-700 mt-8 lg:mt-12" />
        <AwardSection />
      </div>
    </>
  );
}
