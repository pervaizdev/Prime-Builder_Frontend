"use client";

import React from "react";
import * as Icons from "lucide-react";
import { constructionProcessData } from "@/data/constructionProcessData";
import { motion } from "framer-motion";

export default function ConstructionProcess() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="container mx-auto py-10 lg:py-24"
    >
      <div className="text-center max-w-3xl mx-auto overflow-hidden">
        <motion.p variants={fadeUp} className="text-yellow-500 font-semibold  uppercase text-4xl">
          Construction Process
        </motion.p>

        <motion.p variants={fadeUp} className="mt-5 text-gray-600 leading-8">
          Our process is designed to ensure clarity, quality, and consistency at
          every stage, from the first idea to final project delivery.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-6 gap-6">
        {constructionProcessData.map((step, index) => {
          const Icon = Icons[step.icon];

          const positionClass =
            index < 3
              ? "lg:col-span-2"
              : index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2";

          return (
            <motion.div
              variants={fadeUp}
              key={step.id}
              className={`
          rounded-3xl bg-gray-50 border border-gray-200 p-6 hover:shadow-lg hover:border-yellow-400 transition-all duration-300
        ${positionClass}
        `}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-yellow-400">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                <span className="text-2xl font-bold text-gray-300">
                  {step.id}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
