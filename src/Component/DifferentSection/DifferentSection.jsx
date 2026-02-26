"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiThumbsUp } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";

export default function DifferentSection() {
  // Smooth premium fade-up for text/lines
  const fadeUpSoft = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // General container stagger (sections / blocks)
  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  // For animating each line inside a heading/paragraph
  const lineStagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  return (
    <section className="bg-[#f5f5f5] text-black py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT IMAGE */}
        <motion.div variants={stagger} className="relative">
          <motion.div variants={fadeUpSoft} className="rounded-[40px] overflow-hidden">
            <Image
              src="/images/1 ba night.jpg"
              alt="What makes us different"
              width={600}
              height={700}
              className="w-full h-[520px] object-cover"
            />
          </motion.div>

          {/* Rating Card */}
          <motion.div
            variants={fadeUpSoft}
            className="
              absolute bottom-10 left-10 w-[240px] rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              p-6 text-center overflow-hidden
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

            <motion.h3 variants={fadeUpSoft} className="relative text-5xl font-extrabold text-yellow-300">
              4.9
            </motion.h3>

            <motion.div variants={fadeUpSoft} className="relative flex justify-center -space-x-3 mt-4">
              <div className="w-9 h-9 rounded-full bg-blue-400 border-2 border-white/80" />
              <div className="w-9 h-9 rounded-full bg-green-400 border-2 border-white/80" />
              <div className="w-9 h-9 rounded-full bg-pink-400 border-2 border-white/80" />
            </motion.div>

            <motion.div variants={fadeUpSoft} className="relative text-yellow-300 text-base mt-3 tracking-wide">
              ★★★★★
            </motion.div>

            <motion.p variants={fadeUpSoft} className="relative text-sm text-white/80 mt-3 font-medium">
              2k+ satisfied customers
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={stagger}>
          {/* Badge */}
          <motion.span
            variants={fadeUpSoft}
            className="inline-block px-4 py-1 text-sm border rounded-full mb-6"
          >
            OUR COMMITMENT
          </motion.span>

          {/* Heading - animate each line */}
          <motion.h2 variants={lineStagger} className="text-4xl font-bold mb-6 leading-tight">
            <motion.span variants={fadeUpSoft} className="block">
              What makes us
            </motion.span>
            <motion.span variants={fadeUpSoft} className="block">
              different
            </motion.span>
          </motion.h2>

          {/* Paragraph - animate each line */}
          <motion.p variants={lineStagger} className="text-gray-600 mb-10">
            <motion.span variants={fadeUpSoft} className="block">
              It's not just about creating something good; it's about designing,
            </motion.span>
            <motion.span variants={fadeUpSoft} className="block">
              innovating, and collaborating to forge remarkable and unparalleled
            </motion.span>
            <motion.span variants={fadeUpSoft} className="block">
              experiences.
            </motion.span>
          </motion.p>

          {/* Items container */}
          <motion.div variants={stagger} className="space-y-8">
            {/* Item 1 */}
            <motion.div variants={fadeUpSoft} className="flex gap-6 items-start">
              <motion.div variants={fadeUpSoft} className="bg-yellow-400 p-4 rounded-full">
                <FiThumbsUp className="text-black text-xl" />
              </motion.div>

              <motion.div variants={lineStagger}>
                <motion.h4 variants={fadeUpSoft} className="font-semibold text-lg">
                  Corporate Responsibility
                </motion.h4>
                <motion.p variants={fadeUpSoft} className="text-gray-600 text-sm">
                  Our goal is zero incidents and our lost time frequency rate is industry leading.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={fadeUpSoft} className="flex gap-6 items-start">
              <motion.div variants={fadeUpSoft} className="bg-yellow-400 p-4 rounded-full">
                <RiTeamLine className="text-black text-xl" />
              </motion.div>

              <motion.div variants={lineStagger}>
                <motion.h4 variants={fadeUpSoft} className="font-semibold text-lg">
                  Experts with Team Spirit
                </motion.h4>
                <motion.p variants={fadeUpSoft} className="text-gray-600 text-sm">
                  Our multi-skilled team provides innovative, forward-thinking solutions.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Item 3 */}
            <motion.div variants={fadeUpSoft} className="flex gap-6 items-start">
              <motion.div variants={fadeUpSoft} className="bg-yellow-400 p-4 rounded-full">
                <HiOutlineUsers className="text-black text-xl" />
              </motion.div>

              <motion.div variants={lineStagger}>
                <motion.h4 variants={fadeUpSoft} className="font-semibold text-lg">
                  Diversity, Equity & Inclusion
                </motion.h4>
                <motion.p variants={fadeUpSoft} className="text-gray-600 text-sm">
                  We work with both investors and developers to create landmarks that make an impact.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}