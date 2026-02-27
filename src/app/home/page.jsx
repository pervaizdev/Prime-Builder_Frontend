"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import BackgroundVideo from "@/Component/BackgroundVideo";
import Cards from "@/Component/Common/Cards/homecard";
import HeroSection from "@/Component/HeroSection/HeroSection";
import cardData from "@/data/cardData";
import WeAre from "@/Component/Whoweare/weare";
import Services from "@/Component/OurServices/servicespage";
import DifferentSection from "@/Component/DifferentSection/DifferentSection";
import TestimonialsSection from "@/Component/Testimonials/Testimonials";
import ClientsSwiper from "@/Component/Swiper/ClientsSwiper";
import Team from "@/Component/Team/Team";
import CallBackSection from "@/Component/CallBackSection/callbacksection";

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
        >
          <BackgroundVideo src="/videos/PrimeMall.webm" />
          <HeroSection />

          <div className=" container mx-auto relative z-10 p-2 md:p-0 mt-7 grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card) => (
              <Cards
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <WeAre  />
          <Services />
          <DifferentSection />
          <TestimonialsSection />
          <ClientsSwiper />
          <Team />
          <CallBackSection />
      
        </motion.div>
      )}
    </div>
  );
}