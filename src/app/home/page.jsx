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
import {projects} from "@/data/card.js";

function Intro({ onDone }) {
  const logo = useAnimation();
  const overlay = useAnimation();

  useEffect(() => {
    const run = async () => {
      // 1) Smooth fade-in
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
          {/* HERO AREA (Made sticky so the video stays fixed behind the scrolling page) */}
          <section className="sticky top-[0px] h-[100vh] w-full overflow-hidden z-0">
            <BackgroundVideo src="/videos/PrimeMall.webm" />
            <HeroSection />
          </section>

          {/* REST OF PAGE (relative z-10 puts these blocks ON TOP of the sticky video) */}
          <div className="relative z-10 bg-white">
            <WeAre />
            <Services />
             <h1 className="text-5xl text-black py-15 bg-white font-bold text-center">Features Projects</h1>
            <div
              className="container mx-auto px-30 bg-white gap-6 grid grid-cols-1 lg:grid-cols-2 pb-30"
            >
             
              {projects.map((item) => (
                <motion.div key={item.id}>
                  <FeaturesProjects item={item} />
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
