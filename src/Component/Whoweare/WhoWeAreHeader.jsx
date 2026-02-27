"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCity, FaAward } from "react-icons/fa";
import AnimatedLines from "./AnimatedLines";

export default function WhoWeAreHeader({ container, fadeUp, fadeUpSlow }) {
  return (
    <motion.div
      className="grid items-start md:grid-cols-[400px_1fr]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Pill */}
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest"
      >
        <motion.h2 variants={fadeUp} className="text-black">
          WHO WE ARE
        </motion.h2>
      </motion.div>

      <div className="ms-[-200] mt-10">
        {/* Animate heading line-by-line */}
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-black md:text-5xl"
          variants={container}
        >
          <motion.span className="block" variants={fadeUpSlow}>
            Leaders in Strategic Real Estate Development
          </motion.span>
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 mt-10 text-black"
          variants={container}
        >
          {/* Vision */}
          <motion.div variants={container}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <FaCity className="text-lg text-black" />
              <motion.h3 variants={fadeUp} className="text-lg font-bold">
                Strategic Development
              </motion.h3>
            </motion.div>

            {/* Animate paragraph in lines (chunks) */}
            <AnimatedLines
              Tag="p"
              variants={fadeUp}
              className="mt-4 text-sm leading-6 text-black/70"
              lines={[
                "We carefully select prime locations like Top City, Islamabad, ensuring every project offers strong connectivity, accessibility, and long-term value.",
              ]}
            />
          </motion.div>

          {/* Mission */}
          <motion.div variants={container}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <FaAward className="text-lg text-black" />
              <motion.h3 variants={fadeUp} className="text-lg font-bold">
                Commitment to Excellence
              </motion.h3>
            </motion.div>

            <AnimatedLines
              Tag="p"
              variants={fadeUp}
              className="mt-4 text-sm leading-6 text-black/70"
              lines={[
                "Our developments combine luxury, functionality, and modern design to create exceptional residential and commercial experiences.",
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
