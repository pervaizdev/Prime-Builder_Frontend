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

        <motion.div variants={stagger} className="mt-8 space-y-6 text-lg text-black/60">
          <motion.p variants={fadeUp}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            eum quis reiciendis sequi culpa voluptatibus fugit illo quaerat
            hic? Nam voluptatibus dignissimos eos tenetur optio blanditiis
            molestiae maxime? Voluptatem, id.
          </motion.p>

          <motion.p variants={fadeUp}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            libero velit vel dolorum in, aspernatur earum nulla odit amet
            itaque porro eligendi soluta nam incidunt delectus. Corporis
            alias, dignissimos consectetur quod molestias earum ipsa sapiente
            explicabo quos culpa nemo consequatur facere aliquid quo eligendi
            ex magni iusto ut, tenetur eaque? Excepturi possimus provident
            delectus reiciendis amet nihil exercitationem repellendus quos?
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Right: key details */}
      <motion.div variants={stagger} className="lg:w-[35%] mt-12 lg:mt-5">
        <motion.h3
          variants={fadeUp}
          className="mt-2 text-2xl font-bold font-sans text-black"
        >
          Key Details
        </motion.h3>

        <motion.ul variants={stagger} className="mt-6 space-y-3">
          {[
            { label: "Location", text: "Central Business District." },
            { label: "Total Built-Up Area", text: "350,000 sq. ft." },
            { label: "Number of Floors", text: "20, including two underground levels for parking." },
            { label: "Special Features", text: "Vertical garden facade, collaborative workspaces, and an energy-efficient HVAC system." },
            { label: "Amenities", text: "Gym, café, daycare, and rooftop event space." },
          ].map(({ label, text }) => (
            <motion.li key={label} variants={fadeUp} className="flex items-start gap-4">
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

