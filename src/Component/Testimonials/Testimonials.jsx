"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
        quote:
            "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
        name: "John McConnor",
        role: "Senior Marketing Manager",
    },
    {
        quote:
            "Professional, responsive, and highly dependable. We felt supported from start to finish.",
        name: "Sarah Williams",
        role: "Operations Lead",
    },
    {
        quote:
            "Excellent service and great attention to detail. The result exceeded expectations.",
        name: "Michael Brown",
        role: "Product Owner",
    },
];

export default function TestimonialsSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="mt-20 overflow-visible">
            {/* ── White strip with concave wave dip ─────────────────────── */}
            <div className="relative bg-white w-full h-[140px]">
                {/* SVG wave: creating a deeper, wider circular cutout dip */}
                <svg
                    className="absolute bottom-[-40px] left-0 w-full"
                    viewBox="0 0 1440 140"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,0 L1440,0 L1440,100 Q1080,100 880,100 C800,100 780,140 720,140 C660,140 640,100 560,100 Q340,100 0,100 Z"
                        fill="white"
                    />
                    <path
                        d="M0,100 Q360,100 560,100 C640,100 660,140 720,140 C780,140 800,100 880,100 Q1080,100 1440,100 L1440,140 L0,140 Z"
                        fill="#f4efe7"
                    />
                </svg>

                {/* Rotating Badge — centred in the dip with a visible gap */}
                <div className="absolute left-1/2 bottom-[-25px] -translate-x-1/2 z-20">
                    <div className="relative w-[150px] h-[150px]">
                        <motion.svg
                            viewBox="0 0 200 200"
                            className="absolute inset-0 w-full h-full z-10"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            style={{ transformOrigin: "50% 50%" }}
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                                />
                            </defs>
                            <text
                                fill="#111"
                                fontSize="12"
                                fontWeight="700"
                                letterSpacing="2"
                            >
                                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                    • WHAT PEOPLE SAYS • WHAT PEOPLE SAYS • WHAT PEOPLE SAYS
                                </textPath>
                            </text>
                        </motion.svg>

                        {/* Image background circle */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[110px] h-[110px] rounded-full overflow-hidden relative border-4 border-white shadow-xl">
                                <Image
                                    src="/project_2.jpg"
                                    alt="testimonial-bg"
                                    fill
                                    className="object-cover"
                                />
                                {/* Center Quote Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <FaQuoteRight className="text-[#111] text-xl translate-y-px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Beige testimonials panel ───────────────────────────────── */}
       <div className="bg-gradient-to-b from-[#f4efe7] from-40% to-white to-100% mt-10 px-6 pb-24 pt-10 md:px-12 relative">         {/* Swiper */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    className="w-full"
                >
                    {testimonials.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
                                <p className="text-black font-bold text-2xl md:text-3xl leading-snug md:leading-relaxed">
                                    "{t.quote}"
                                </p>
                                <div className="mt-12">
                                    <p className="text-black font-bold text-lg uppercase tracking-wider">{t.name}</p>
                                    <p className="text-gray-600 text-sm mt-2 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Arrow Buttons */}
                <button
                    ref={prevRef}
                    className="hidden md:flex items-center justify-center
                               w-12 h-12 rounded-full bg-white text-black shadow
                               absolute left-10 top-[35%] -translate-y-1/2 z-20
                               hover:bg-black hover:text-white transition"
                    aria-label="Previous testimonial"
                    type="button"
                >
                    <FiChevronLeft size={22} />
                </button>

                <button
                    ref={nextRef}
                    className="hidden md:flex items-center justify-center
                               w-12 h-12 rounded-full bg-white text-black shadow
                               absolute right-10 top-[35%] -translate-y-1/2 z-20
                               hover:bg-black hover:text-white transition"
                    aria-label="Next testimonial"
                    type="button"
                >
                    <FiChevronRight size={22} />
                </button>
            </div>
        </section>
    );
}