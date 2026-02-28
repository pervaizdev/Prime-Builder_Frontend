"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "../../Component/Cards";
import { projects } from "../../data/card";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export default function ProjectPage() {
  return (
    <>
      <div className="relative w-full h-[35vh] lg:h-[95vh]">
        <Image
          src="/images/2b.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="ms-4 lg:ms-12"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[#eece9c] font-sans text-center font-bold text-4xl lg:text-8xl mt-20 lg:mt-0"
            >
              Our Projects
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 lg:mt-10 lg:w-140 text-center text-xs lg:text-lg"
            >
              Islamabad Prime Builder is a trusted real estate developer
              delivering premium residential and commercial projects.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="relative top-[-40] lg:top-[-100] bg-white rounded-3xl lg:rounded-[60] px-4 lg:px-8 pt-12">
        <motion.hr
          className="border-gray-700 mt-5 lg:mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="mx-auto gap-6 grid grid-cols-1 lg:grid-cols-2 mt-13 lg:mt-25 mb-30"
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
