"use client";

import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { reviews } from "@/data/reviews";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blockFadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-10 overflow-visible border-none bg-white text-black">
      <motion.div
        variants={blockFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white"
      >
        {/* top curve only */}
        <div className="relative h-[120px] w-full bg-white">
          <svg
            className="absolute bottom-[-41px] left-0 z-10 hidden w-full md:block"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>

        {/* review slider */}
        <div className="relative bg-gradient-to-b from-[#f4efe7] from-40% to-white to-100% px-6 pb-16 pt-16 md:px-12 md:pb-24">
          {mounted && (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="w-full"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="mx-auto flex justify-center">
                    <div className="w-full max-w-3xl bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      {/* Header */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
                          {review.avatar}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            {review.name}
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            {review.reviewsCount} reviews · {review.photosCount}{" "}
                            photos
                          </p>
                        </div>
                      </div>

                      {/* Stars + time */}
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex text-yellow-400 text-sm">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>

                        <span className="text-xs text-gray-500">
                          {review.time}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-gray-700 text-start text-sm mt-4">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow transition hover:bg-black hover:text-white md:flex"
            aria-label="Previous review"
            type="button"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow transition hover:bg-black hover:text-white md:flex"
            aria-label="Next review"
            type="button"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
