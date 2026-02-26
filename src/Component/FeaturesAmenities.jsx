"use client";

import { motion } from "framer-motion";
import { featuresAmenities } from "@/data/featuresAmenities";

import {
  HiOutlineShieldCheck,
  HiOutlineVideoCamera,
  HiOutlineWrenchScrewdriver,
  HiOutlineLifebuoy,
  HiOutlineFire,
  HiOutlineFaceSmile,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const iconMap = {
  shield: HiOutlineShieldCheck,
  camera: HiOutlineVideoCamera,
  dumbbell: HiOutlineSparkles,
  kids: HiOutlineFaceSmile,
  tools: HiOutlineWrenchScrewdriver,
  pool: HiOutlineLifebuoy,
  fire: HiOutlineFire,
  garden: HiOutlineGlobeAlt,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function FeatureCard({ title, desc, icon }) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      variants={fadeUp}
      className="relative rounded-[48px] bg-linear-to-b from-[#f5f2ea] to-white px-8 pb-10 pt-20 text-center"
    >
      <div className="absolute left-1/2 top-0 h-27 w-27 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      <div
        className="absolute top-[-10] left-45
             w-8 h-8
             border-r-16 
             border-white
             rounded-tr-full rotate-250"
      />
      <div
        className="absolute top-[-10] left-15
             w-8 h-14
              border-r-10
             border-white
             rounded-tr-full rotate-323"
      />
      <div className="absolute left-1/2 top-0 h-17 w-17 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-lime-300">
        <Icon className="text-4xl mt-4 text-black" />
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="mt-5 text-black/50">{desc}</p>
    </motion.div>
  );
}

export default function FeaturesAmenities() {
  return (
    <div className="mt-20 px-6">
      <motion.h2
        className="text-3xl lg:text-6xl font-bold font-sans text-black"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        Features &amp; amenities
      </motion.h2>

      <motion.div
        className="mt-23 grid gap-14 lg:gap-13 grid-cols-1 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featuresAmenities.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

