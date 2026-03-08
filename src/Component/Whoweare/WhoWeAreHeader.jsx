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
      <motion.div
        variants={fadeUp}
        className="rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs mx-auto md:mx-0"
      >
        <motion.h2 variants={fadeUp} className="text-black">
          WHO WE ARE
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        className="md:ms-[-200px] ms-0"
      >
        <motion.h2
          className="text-4xl font-extrabold text-black md:text-5xl md:text-start text-center md:mt-0 mt-5"
          variants={fadeUpSlow}
        >
          Islamabad Prime Builder – Real Estate Development
        </motion.h2>

        <motion.p
          variants={fadeUpSlow}
          className="mt-8 text-black lg:text-start text-center"
        >
          Islamabad Prime Builders is a professional real estate development and construction company focused on delivering high-quality residential and commercial projects. By combining modern design, durable construction, and strategic locations, we create properties that offer long-term value, functionality, and investment potential. Our commitment to quality, transparency, and customer satisfaction makes us a trusted partner in building modern living and business spaces.  </motion.p>
      </motion.div>
    </motion.div>
  );
}
