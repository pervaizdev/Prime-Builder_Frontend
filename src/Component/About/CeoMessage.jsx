"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CeoMessage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="py-16 lg:py-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="text-center leading-8"
      >
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-4xl parisienne-font text-black"
        >
          A Message From Our Leadership
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto mt-12 max-w-4xl px-8"
        >
          <span className="absolute -top-6 -left-4 text-8xl text-amber-500/20 font-serif select-none hidden md:block">
            "
          </span>
          <p className="relative z-10 text-xl lg:text-3xl text-gray-800 leading-relaxed font-serif italic">
            At our company, we believe real estate is not just about buildings
            but about creating opportunities, improving lifestyles, and shaping
            stronger communities. Every project we take on reflects our
            commitment to quality, transparency, and long-term trust.
          </p>
          <span className="absolute -bottom-16 -right-4 text-8xl text-amber-500/20 font-serif rotate-180 select-none hidden md:block">
            "
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-10"
        >
          {/* CEO */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-500">
              Mr. Bakhtullah Khan
            </h3>
            <p className="text-gray-500 mt-2 uppercase tracking-widest text-sm font-semibold">
              Chief Executive Officer
            </p>
          </div>

          {/* Divider (only on desktop) */}
          <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

          {/* Director */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-500">
              Mr. Naqeebullah Khan
            </h3>
            <p className="text-gray-500 mt-2 uppercase tracking-widest text-sm font-semibold">
              Chief Director
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
