"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "../../Component/Cards";
import { projects } from "../../data/card";
import FooterSection from "@/Component/Footer/footer";

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
    < >
      {/* ✅ Sticky Hero (doesn't scroll away; content will scroll over it) */}
      <div className="sticky top-0 z-0 w-full h-[80vh] lg:h-[99vh] overflow-hidden ">
        <div className="relative"></div>
        <Image
          src="/images/2b.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="ms-4 lg:ms-12"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeUp}
              className="text-white font-sans text-center font-bold text-5xl lg:text-8xl mt-20 lg:mt-0"
            >
              Our Projects
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 lg:mt-10 lg:w-140 text-center text-xl lg:text-lg text-white/90"
            >
              A showcase of our completed and ongoing projects built with precision,
              transparency, and a commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ✅ Content Panel scrolls ABOVE hero */}
      <div className="relative z-10 mt-[-30px] lg:-mt-16 bg-white rounded-t-3xl lg:rounded-t-[60px] px-4 lg:px-8 pt-12">   <motion.hr
        className="border-gray-700 mt-5 lg:mt-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />

        <motion.div
          className="mx-auto gap-6 grid grid-cols-1 lg:grid-cols-2 mt-13 lg:mt-25 pb-30"
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
        <FooterSection />
      </div>


    </>
  );
}