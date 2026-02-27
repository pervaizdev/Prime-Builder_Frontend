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

export default function ProjectDescription() {
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
          <motion.p variants={fadeUp}>
            Prime Mall is a flagship real estate project developed by Islamabad
            Prime Builder, officially commenced on 20th August 2020 with a
            vision to create a modern commercial hub in Islamabad. The goal was
            to develop a space that brings together retail shops, corporate
            offices, and a vibrant business environment under one roof. From the
            very beginning, our focus was on prime location selection, smart
            planning, and quality construction to ensure long-term value for
            investors and businesses.
          </motion.p>

          <motion.p variants={fadeUp}>
            During the development phase, we faced several challenges, including
            rising construction material costs, supply delays, and workforce
            management issues. Despite these obstacles, our team remained
            dedicated and worked with careful planning, strong coordination, and
            strict quality control to keep the project on schedule. Through
            commitment and teamwork, Prime Mall was successfully completed on
            28th November 2021. Today, it stands as a symbol of reliability,
            resilience, and excellence — offering modern commercial spaces and
            strong investment potential in the heart of Islamabad.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Right: key details */}
      <motion.div variants={stagger} className="lg:w-[35%] mt-12 lg:mt-5">
        <motion.h3
          variants={fadeUp}
          className="mt-5 text-4xl font-bold font-sans text-black"
        >
          Key Details
        </motion.h3>

        <motion.ul variants={stagger} className="mt-10 space-y-3">
          {[
            { label: "Location ", text: "Plot # 5, Kunwar TopCity-1, Sahara Kashmir Rd, Islamabad." },
            {
              label: "Number of Floors ",
              text: "8, including 24 Shopes and 84 Offices.",
            },
            {
              label: "Special Features ",
              text: "Vertical garden facade, modern collaborative workspaces, and an energy-efficient HVAC system for comfort and sustainability.",
            },
            {
              label: "Amenities ",
              text: "Fully equipped gym, cafe, daycare facility, and a rooftop event space for relaxation and gatherings. Gym, cafe, daycare, and rooftop event space.",
            },
          ].map(({ label, text }) => (
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
