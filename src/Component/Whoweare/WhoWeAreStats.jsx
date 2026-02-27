"use client";

import React from "react";
import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function WhoWeAreStats() {
  // Parent stagger for the whole section
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  // Standard fade up
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Slightly slower for big images
  const fadeUpSlow = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="mt-30 grid gap-8 lg:grid-cols-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left image block */}
      <motion.div className="lg:col-span-7 relative" variants={fadeUpSlow}>
        <div className="h-[520px] w-full overflow-hidden rounded-[36px] rounded-tl-[70px] bg-gray-200">
          <img
            src="/images/sold image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main white notch */}
        <div className="absolute top-0 left-0 bg-white h-[45px] w-[220px] rounded-br-[30px]">
          <div className="relative left-[-12px] top-[33px] h-24 w-24 rotate-90 border-l-12 border-b-12 border-white rounded-bl-4xl" />
        </div>

        <div className="absolute left-[208px] top-[-14px] h-8 w-8 rotate-90 border-l-12 border-b-12 border-white rounded-bl-4xl" />
      </motion.div>

      {/* Right cards */}
      <motion.div className="lg:col-span-5" variants={fadeUp}>
        <motion.div className="grid gap-8 sm:grid-cols-2" >
          <StatCard
            label="GLOBAL REACH"
            value="15"
            subtextLines={["Offices Worldwide"]}
            fadeUp={fadeUp}
            container={container}
          />

          <StatCard
            label="Satisfied Clients"
            value="800"
            subtextLines={["Clients"]}
            fadeUp={fadeUp}
            container={container}
          />

          <StatCard
            label="OUR IMPACT"
            value="2"
            subtextLines={["Projects Done"]}
            fadeUp={fadeUp}
            container={container}
          />

          <StatCard
            label="STRATEGIC PARTNERS"
            value="4"
            subtextLines={["Business Collaborations"]}
            fadeUp={fadeUp}
            container={container}
          />

        </motion.div>
      </motion.div>
    </motion.div>
  );
}
