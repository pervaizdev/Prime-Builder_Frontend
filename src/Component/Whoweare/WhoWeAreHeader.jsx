"use client";

import React from "react";
import { motion } from "framer-motion";
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
      className="grid items-start md:grid-cols-[400px_1fr]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* WHO WE ARE pill badge — original style */}
      <motion.span
        variants={fadeUp}
        className="justify-self-center md:justify-self-start mb-6 md:mb-0 inline-flex items-center gap-2 rounded-full border px-5 py-2 w-[165px] text-xs font-bold uppercase tracking-[0.2em] shadow-sm"
        style={{
          borderColor: "#d1b38c",
          color: "#8B5E3C",
          background: "rgba(209,179,140,0.1)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "#d1b38c" }}
        />
        Who We Are
      </motion.span>
      {/* Right content */}
      <motion.div
        variants={container}
        className="md:ms-[-200px] ms-0"
      >
        <motion.h2
          className="text-4xl parisienne-font md:text-5xl md:text-start text-center text-[#0f3d20]"
          variants={fadeUpSlow}
        >
          Islamabad Prime Builders – 
          <span className="text-[#0f3d20]" >Real Estate Developers</span>
        </motion.h2>

        {/* Decorative underline */}
        <motion.div
          variants={fadeUpSlow}
          className="mt-4 lg:mx-0 mx-auto h-[2px] w-14 rounded-full"
          style={{ background: "linear-gradient(90deg, #1a5c32, #d1b38c)" }}
        />

        <motion.p
          variants={fadeUpSlow}
          className="mt-6 text-gray-600 lg:text-start text-center leading-relaxed"
        >
          Islamabad Prime Builders is a professional real estate development and
          construction company focused on delivering high-quality residential and
          commercial projects. By combining modern design, durable construction,
          and strategic locations, we create properties that offer long-term
          value, functionality, and investment potential. Our commitment to
          quality, transparency, and customer satisfaction makes us a trusted
          partner in building modern living and business spaces.
        </motion.p>

        <motion.div
          variants={fadeUpSoft}
          className="mt-10 flex justify-center lg:justify-end"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1a5c32, #0f3d20)" }}
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
