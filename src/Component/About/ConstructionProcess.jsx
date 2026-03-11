"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
import { constructionProcessData } from "@/data/constructionProcessData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

function ConstructionStepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = Icons[step.icon];

  // Logic to determine grid column span to keep original layout
  const positionClass =
    index < 3
      ? "lg:col-span-2"
      : index === 3
        ? "lg:col-span-2 lg:col-start-2"
        : "lg:col-span-2";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`h-full ${positionClass}`}
    >
      <div
        className="relative flex cursor-pointer h-full flex-col rounded-[28px] border p-8 transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: hovered ? "#d1b38c" : "rgba(209,179,140,0.3)",
          boxShadow: hovered
            ? "0 24px 60px rgba(15,61,32,0.22), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 8px 30px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* top accent line */}
        <div
          className="absolute left-8 right-8 top-0 h-[2px] origin-left transition-transform duration-500"
          style={{
            background: "linear-gradient(90deg, #d1b38c, #e8c87a)",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        {/* decorative corner glow */}
        <div
          className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full blur-2xl transition-opacity duration-500"
          style={{
            background: "#d1b38c",
            opacity: hovered ? 0.25 : 0,
          }}
        />

        <div className="flex flex-col items-center text-center">
          {Icon && (
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-all duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(209,179,140,0.25), rgba(232,200,122,0.3))",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <Icon
                className="h-8 w-8 transition-colors duration-500"
                style={{ color: "#0f3d20" }}
              />
            </motion.div>
          )}

          <h3
            className="text-xl font-bold transition-colors duration-500 md:text-2xl"
            style={{ color: "#0f3d20" }}
          >
            {step.title}
          </h3>

          <p
            className="mt-4 text-sm leading-7 transition-colors duration-500 md:text-base text-gray-600"
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ConstructionProcess() {
  return (
    <div className="background-color-section">
      <section className="relative overflow-hidden py-24">
        <motion.div
          className="container mx-auto px-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              variants={fadeUpSoft}
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] shadow-sm"
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
              Our Method
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl parisienne-font md:text-5xl"
              style={{ color: "#0f3d20" }}
            >
              Construction Process
            </motion.h2>

            <motion.p
              variants={fadeUpSoft}
              className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500 md:text-base"
            >
              Our process is designed to ensure clarity, quality, and consistency at
              every stage, from the first idea to final project delivery.
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-6 gap-8">
            {constructionProcessData.map((step, index) => (
              <ConstructionStepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

