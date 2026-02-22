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
import FooterSection from "@/Component/Footer/footer";

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
          ease: [0.22, 1, 0.36, 1], // smooth/premium ease
        },
      });

      // Small premium pause
      await new Promise((r) => setTimeout(r, 220));

      // 2) Fade overlay gently (don’t vanish instantly)
      overlay.start({
        opacity: 0,
        transition: {
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      // 3) Cinematic zoom out (slower + smoother)
      await logo.start({
        scale: 6, // keep 5.5–6.5 for smoothness (7+ feels aggressive)
        opacity: 0,
        filter: "blur(10px)", // optional but makes it feel buttery
        transition: {
          duration: 1.25, // slower = smoother
          ease: [0.22, 1, 0.36, 1],
        },
      });

      // tiny delay to let the last frame settle
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
          <BackgroundVideo src="/Videos/Home.mp4" />
          <HeroSection />

          <div className="relative z-10 mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card) => (
              <Cards
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <WeAre />
          <Services />
          <DifferentSection />
          <TestimonialsSection />
          <ClientsSwiper />
          <Team />
          <CallBackSection />
          <FooterSection />
        </motion.div>
      )}
    </div>
  );
}