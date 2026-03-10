"use client";

import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { reviews } from "@/data/reviews";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionFadeUp = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardFadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.96,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-green-800 py-20">
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center lg:text-5xl text-4xl parisienne-font text-yellow-400"
        >
          Client Experiences
        </motion.h2>

        {mounted && (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonialSwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  variants={cardFadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08 }}
                  className="testimonial-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
                      {review.avatar}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {review.reviewsCount} reviews · {review.photosCount} photos
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex text-sm text-yellow-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">{review.time}</span>
                  </div>

                  <p className="mt-4 text-sm text-gray-700">
                    {review.comment}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="testimonial-pagination mt-10 flex justify-center gap-2"></div>
      </motion.div>

      <style jsx global>{`
        .testimonialSwiper .swiper-slide {
          opacity: 0.4;
          transform: scale(0.85);
          transition: all 0.5s ease;
        }

        .testimonialSwiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
        }

        .testimonial-card {
          background: white;
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .testimonial-pagination .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          border-radius: 4px;
          background: #d1d5db;
          opacity: 1;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #facc15;
          width: 45px;
        }
      `}</style>
    </div>
  );
}