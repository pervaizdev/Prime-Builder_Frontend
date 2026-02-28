"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
  // Small bottom -> up + fade in
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl mt-16 font-extrabold text-black leading-tight">
          Take a brief look at some of
          <br />
          the services we offer
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="max-w-7xl mx-auto mt-16 grid gap-8 px-6 mb-20 grid-cols-1 lg:grid-cols-3"
      >
        {servicesData.map((item) => {
          const Icon = Icons[item.icon];

          return (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="will-change-transform"
            >
              <div
                className="group rounded-2xl bg-white border border-gray-100 shadow-sm
                           hover:shadow-md hover:border-yellow-300
                           transition-all duration-300 ease-out
                           p-8 transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  {Icon && (
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Expanding Line */}
                  <div className="mt-4 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-20" />

                  {/* Description */}
                  <p className="mt-4 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}