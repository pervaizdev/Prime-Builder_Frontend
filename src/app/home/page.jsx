"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import BackgroundVideo from "@/Component/BackgroundVideo";
import Cards from "@/Component/Common/Cards/homecard";
import HeroSection from "@/Component/HeroSection/HeroSection";
import cardData from "@/data/cardData";
import WeAre from "@/Component/Whoweare/weare";
import DifferentSection from "@/Component/DifferentSection/DifferentSection";
import TestimonialsSection from "@/Component/Testimonials/Testimonials";
import ClientsSwiper from "@/Component/Swiper/ClientsSwiper";
import Team from "@/Component/Team/Team";
import CallBackSection from "@/Component/CallBackSection/callbacksection";
import FooterSection from "@/Component/Footer/footer";
import Services from "@/Component/OurServices/servicespage";
import WhoWeAreStats from "@/Component/Whoweare/WhoWeAreStats";
import FeaturesProjects from "@/Component/FeaturesProjects";
import { projects } from "@/data/card.js";

function Intro({ onDone }) {
  const logo = useAnimation();
  const overlay = useAnimation();

  useEffect(() => {
    const run = async () => {
      await logo.start({
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      await new Promise((r) => setTimeout(r, 220));

      overlay.start({
        opacity: 0,
        transition: {
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      await logo.start({
        scale: 6,
        opacity: 0,
        filter: "blur(10px)",
        transition: {
          duration: 1.25,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      await new Promise((r) => setTimeout(r, 80));

      onDone();
    };

    run();
  }, [logo, overlay, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={overlay}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <motion.img
        src="/images/logo.png"
        alt="Logo"
        className="h-24 w-24 md:h-32 md:w-32 select-none"
        style={{
          willChange: "transform, opacity, filter",
          transformOrigin: "center",
        }}
        initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
        animate={logo}
        draggable={false}
      />
    </motion.div>
  );
}

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

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

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
            <BackgroundVideo src="/videos/P2.webm" />
            <HeroSection />
          </div>

          <div className="relative z-10 bg-white rounded-4xl">
            <WeAre />
            <Services />
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
                Features Projects
              </motion.span>

              <motion.h1
                className="text-4xl lg:text-5xl text-black mt-7 bg-white parisienne-font text-center"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Our Projects
              </motion.h1>
            </div>

            <div className="container mx-auto bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 justify-items-center mt-15">
              {projects.map((item, index) => (
                <motion.div key={item.id}
                className={index % 2 === 0 ? "lg:justify-self-end" : "lg:justify-self-start"}>
                  <FeaturesProjects item={item} index={index} />
                </motion.div>
              ))}
            </div>

            <WhoWeAreStats />
            {/* <DifferentSection /> */}
            <ClientsSwiper />
            <TestimonialsSection />
            {/* <Team /> */}
            <CallBackSection />
            <FooterSection />
          </div>
        </motion.div>
      )}
    </div>
  );
}
