"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "../../Component/Cards";
import { projects } from "../../data/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function ProjectPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative w-full h-[35vh] lg:h-[95vh]">
        <Image
          src="/footer-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <motion.h1
            className="text-white font-sans font-bold ms-4 lg:ms-12 text-4xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Projects
          </motion.h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative top-[-60] bg-white rounded-[60] px-8 py-12">
        <motion.hr
          className="border-gray-700 my-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="mx-auto gap-6 grid grid-cols-1 lg:grid-cols-3 mt-13 mb-30"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
