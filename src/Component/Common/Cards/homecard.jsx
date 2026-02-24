"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HighQualityCard({ title, description }) {
  const containerVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2, // items inside will follow
      },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.50 }}
    >
      <div
        className="h-full bg-gradient-to-b from-black/60 via-black/35 to-white/40"
      >
        <div className="p-8">
          <div className="mb-6">
            <div className="grid w-10 grid-cols-2 gap-2">
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-3 w-3 rounded-full bg-lime-300" />
              <span className="h-5 w-5 rounded-full bg-lime-300" />
            </div>
          </div>

          <div className="h-px w-full bg-white/15" />

          <div className="mt-6">
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold tracking-tight text-white"
            >
              {title}
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-white/60"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}