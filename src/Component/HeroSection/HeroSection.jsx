"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
const MotionLink = motion(Link);
export default function HeroSection() {
  const ref = useRef(null);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp = {
    hidden: { y: 24, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative z-10 mx-auto flex min-h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Headline */}
      <motion.h1
        className="mt-56 text-4xl text-[#eed498] font-extrabold leading-tight sm:text-6xl lg:text-7xl"
        variants={fadeUp}
      >
        Islamabad
      </motion.h1>

      <motion.h1
        className="text-4xl font-extrabold text-[#eed498] leading-tight sm:text-6xl lg:text-7xl"
        variants={fadeUp}
      >
        Prime Builder
      </motion.h1>

      {/* Sub headline */}
      <motion.p
        className="mt-5 max-w-3xl text-base font-semibold text-[#FFFFFFB3] sm:text-lg lg:text-xl"
        variants={fadeUp}
      >
        Building modern homes and landmark developments in Islamabad —
        designed for lifestyle, built for long-term value, and delivered with
        transparency.
      </motion.p>

      {/* Divider */}
      <motion.div
        className="my-10 h-px w-full mt-16 max-w-5xl bg-white/30"
        variants={fadeUp}
      />

      {/* Bottom row */}
      <motion.div
        className="flex w-full max-w-5xl flex-col items-center justify-between gap-8 sm:flex-row sm:items-start"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-left text-xl leading-snug sm:text-xl lg:text-2xl">
          We develop planned communities and premium projects
          <br className="hidden sm:block" />
          with strong locations, quality construction, and
          <br className="hidden sm:block" />
          investor-focused returns.
        </p>
        <MotionLink
          href="/projects"
          whileHover={{ scale: 1.05 }}
          
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group inline-flex items-center rounded-full bg-white px-5 py-3 text-black shadow-md"
        >
          <span className="mr-4 font-semibold">View Projects</span>

          <motion.span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-200"
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <MdArrowOutward />
          </motion.span>
        </MotionLink>
      </motion.div>
    </motion.div>
  );
}