"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export default function ProjectDescription({ project }) {
  return (
    <motion.div
      className="mt-16 lg:flex justify-between lg:gap-24"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Left: description */}
      <motion.div variants={stagger} className="lg:w-[55%]">
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-bold text-black"
        >
          Project description
        </motion.h2>

        <motion.div
          variants={stagger}
          className="mt-8 space-y-6 text-lg text-black/60"
        >
          {project?.description?.map((para, index) => (
            <motion.p key={index} variants={fadeUp}>
              {para}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: key details */}
      <motion.div variants={stagger} className="lg:w-[35%] mt-12 lg:mt-5">
        <motion.h3
          variants={fadeUp}
          className="text-4xl font-bold font-sans text-black"
        >
          Key Details
        </motion.h3>

        <motion.ul variants={stagger} className="mt-10 space-y-3">
          {project?.keyDetails?.map(({ label, text }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="flex items-start gap-4"
            >
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
              <p className="text-lg text-black/70">
                <span className="font-bold text-black">{label}: </span>
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}