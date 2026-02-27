"use client";

import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineCircleStack,
  HiOutlineBuildingLibrary
} from "react-icons/hi2";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function CardDetails({ project, InfoItem }) {
  return (
    <motion.div
      className="pt-14 px-10"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <HiLocationMarker className="text-xl lg:text-3xl text-lime-300" />
        <p className="font-bold text-sm lg:text-lg text-black">{project.location}</p>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-5 lg:text-7xl text-2xl font-sans font-bold text-black"
      >
        {project.title}
      </motion.h1>

      <motion.hr variants={fadeUp} className="my-12 border-black/20" />

      <motion.div
        variants={stagger}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <motion.div variants={fadeUp}>
          <InfoItem
            icon={HiOutlineCircleStack}
            label="Status"
            value={project.status}
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <InfoItem
            icon={HiOutlineBuildingOffice2}
            label="Project Type"
            value={project.projectType}
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <InfoItem
            icon={HiOutlineBuildingLibrary}
            label="Floors"
            value={project.floor}
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <InfoItem
            icon={HiOutlineCalendarDays}
            label="Commencement date"
            value={project.commencementDate}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

