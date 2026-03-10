"use client";

import { motion } from "framer-motion";
import { featuresAmenities } from "@/data/featuresAmenities";
import { FiShield } from "react-icons/fi";
import { FaBolt, FaPlaneDeparture, FaLeaf } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { GiFireExtinguisher } from "react-icons/gi";

const iconMap = {
  shield: FiShield,
  camera: FaBolt,
  dumbbell: FaPlaneDeparture,
  kids: FaLeaf,
  tools: MdSolarPower,
  pool: GiFireExtinguisher,
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
      className="relative rounded-[48px] bg-green-800 px-8 pb-10 pt-20 text-center"
    >
      {/* <div
        className=" absolute -top-[13px] right-[124px] w-8 h-14 border-l-15 border-white rounded-tl-full rotate-38"
      />
      <div
        className="absolute left-[141px] -top-[13px] w-8 h-14 border-r-15 border-white rounded-tr-full rotate-323"
      /> */}
      <div className="absolute left-1/2 top-0 h-17 w-17 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-yellow-300">
        <Icon className="text-4xl mt-4 text-black" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-5 text-white">{desc}</p>
    </motion.div>
  );
}

export default function FeaturesAmenities() {
  return (
    <div className="mt-20 mb-25 md:px-6">
      <motion.h2
        className="text-4xl lg:text-6xl parisienne-font text-center lg:text-start text-black"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        Features &amp; Amenities
      </motion.h2>

      <motion.div
        className="mt-23 grid gap-14 lg:gap-13 grid-cols-1 lg:grid-cols-3"
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
