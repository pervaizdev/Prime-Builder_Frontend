"use client";

import { use } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/card";
import CardDetails from "@/Component/CardDetails.jsx";
import FeaturesAmenities from "@/Component/FeaturesAmenities";
import Description from "@/Component/ProjectDescription.jsx";
import MediaSection from "@/Component/MediaSection";
import Location from "@/Component/Location";
import { motion } from "framer-motion";

import {
  AnimatedSection,
  AnimatedImage,
  AnimatedDivider,
} from "@/Component/AnimationWrappers";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-15 w-15 items-center justify-center rounded-full border border-black/10">
        <Icon className="text-2xl text-black/80" />
      </div>
      <div className="font-sans">
        <p className="font-bold text-black/40">{label}</p>
        <p className="font-bold text-black">{value}</p>
      </div>
    </div>
  );
}

export default function Page({ params }) {
  const { slug } = use(params);

  const project = projects.find((p) => p.id === slug);
  if (!project) return notFound();

  return (
    <>
      {/* Hero */}
      <div className="relative h-[35vh] w-full lg:h-[95vh]">
        <Image
          src="/footer-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Animated title */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-10 lg:pb-20 px-6 lg:px-14"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold tracking-[0.35em] uppercase text-lime-300 mb-3"
          >
            Project Detail
          </motion.p>
         
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mt-4 text-white/70 text-sm"
          >
            <span className="text-lime-300 text-lg">📍</span>
            {project.location}
          </motion.div>
        </motion.div>
      </div>

      {/* White card content */}
      <div className="relative top-[-80px] lg:top-[-180px] bg-white rounded-[35px] lg:rounded-[60px] px-4 lg:px-8">

        <AnimatedSection className="pt-2">
          <CardDetails project={project} InfoItem={InfoItem} />
        </AnimatedSection>

        <div className="mx-auto px-0 lg:px-10 pt-14">
          <AnimatedImage className="relative mt-12 h-[300px] lg:h-[650px] w-full overflow-hidden rounded-[40px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </AnimatedImage>

          <AnimatedSection>
            <Description />
          </AnimatedSection>
        </div>

        <AnimatedDivider className="border mt-15" />

        <AnimatedSection>
          <FeaturesAmenities />
        </AnimatedSection>

        <AnimatedDivider className="border mt-15 mb-10" />

        <AnimatedSection>
          <MediaSection />
        </AnimatedSection>

        <AnimatedSection>
          <Location />
        </AnimatedSection>
      </div>
    </>
  );
}

