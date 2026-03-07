"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCity, FaAward } from "react-icons/fa";
import AnimatedLines from "./AnimatedLines";

export default function WhoWeAreHeader({ container, fadeUp, fadeUpSlow }) {
  return (
    <motion.div
      className="grid items-start md:grid-cols-[400px_1fr] "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Pill */}
      <motion.div
        variants={fadeUp}
        className="inline-flex jusitems-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest  mx-auto md:mx-0"
      >
        <motion.h2 variants={fadeUp} className="text-black">
          WHO WE ARE
        </motion.h2>
      </motion.div>

      <div className="md:ms-[-200] ms-0">
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-black md:text-5xl md:text-start text-center md:mt-0 mt-5 "
          variants={container}
        >
          <motion.span className="block" variants={fadeUpSlow}>
            Islamabad Prime Builder Real Estate Development
          </motion.span>
        </motion.h2>
        <p className="mt-8 text-black ">
          Islamabad Prime Builders is a construction and development company
          committed to delivering high-quality residential and commercial
          projects. We combine modern design, durable construction, and
          strategic locations to create spaces that stand out. Our focus is to
          build developments that offer long-term value, functionality, and
          trust.
        </p>
      </div>
    </motion.div>
  );
}
