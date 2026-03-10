"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCity, FaAward } from "react-icons/fa";
import AnimatedLines from "./AnimatedLines";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeAreHeader({ container, fadeUp, fadeUpSlow }) {

  const fadeUpSoft = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

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
          className="text-4xl parisienne-font text-black md:text-5xl md:text-start text-center md:mt-0 mt-5"
          variants={fadeUpSlow}
        >
          Islamabad Prime Builder – Real Estate Developers
        </motion.h2>

        <motion.p
          variants={fadeUpSlow}
          className="mt-8 text-black lg:text-start text-center"
        >
          Islamabad Prime Builders is a professional real estate development and construction company focused on delivering high-quality residential and commercial projects. By combining modern design, durable construction, and strategic locations, we create properties that offer long-term value, functionality, and investment potential. Our commitment to quality, transparency, and customer satisfaction makes us a trusted partner in building modern living and business spaces.  </motion.p>
          <motion.div
            variants={fadeUpSoft}
            className="mt-10 flex justify-center lg:justify-end"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
              >
                About Us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </Link>
          </motion.div>
      </motion.div>
      
    </motion.div>
  );
}
