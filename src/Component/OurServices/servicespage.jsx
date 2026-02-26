"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
  // Animation Variants
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto overflow-hidden">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 text-center mt-10"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
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
        viewport={{ once: true, amount: 0.12 }}
        className="max-w-7xl mx-auto mt-16 grid gap-8 px-6 mb-15 grid-cols-2 lg:grid-cols-3"
      >
        {servicesData.map((item) => {
          const Icon = Icons[item.icon];

          return (
            <motion.div key={item.id} variants={fadeUp}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-400 p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  {Icon && (
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white group-hover:scale-105 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl  font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-600">
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
