"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const logos = [
  { name: "Bechtel", src: "https://static.cdnlogo.com/logos/b/97/bechtel-unternehmen.svg" },
  { name: "Bechtel", src: "https://static.cdnlogo.com/logos/b/97/bechtel-unternehmen.svg" },
  { name: "Bechtel", src: "https://static.cdnlogo.com/logos/b/97/bechtel-unternehmen.svg" },
  { name: "Bechtel", src: "https://static.cdnlogo.com/logos/b/97/bechtel-unternehmen.svg" },
];

const repeatedLogos = Array.from({ length: 8 }, () => logos).flat();

export default function ClientsSwiper() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white pb-12 md:pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-100 md:pt-16 pt-0">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <p className="text-center text-[10px] md:text-sm font-black tracking-[0.4em] uppercase text-black inline-block bg-yellow-300 px-8 py-2.5 shadow-sm italic">
              WE’RE PROUD TO PARTNER WITH BEST-IN-CLASS CLIENTS
            </p>
          </motion.div>

          {/* Swiper */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 overflow-hidden"
          >
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              loopAdditionalSlides={30}
              speed={12000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              freeMode={{ enabled: true, momentum: false }}
              allowTouchMove={false}
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 60 },
                1024: { slidesPerView: 5, spaceBetween: 100 },
              }}
              className="w-full swiper-linear-marquee homeswipper"
            >
              {repeatedLogos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center py-4 pointer-events-none"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={60}
                    unoptimized
                    className="md:h-[45px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}