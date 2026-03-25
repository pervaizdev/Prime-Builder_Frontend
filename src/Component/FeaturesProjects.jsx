"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function FeaturesProjects({ item }) {
  const shouldReduceMotion = useReducedMotion();
  const isCompleted = item.status?.toLowerCase() === "completed";
  const isComingSoon = item.status?.toLowerCase().includes("soon");

  // Re-usable animation variants for performance
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 20 : 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="will-change-transform"
      style={{ isolation: "isolate" }}
    >
      <Link href={`/projects/${item.id}`} className="block group">
        <div
          className={`relative h-[450px] w-[310px] sm:w-[350px] lg:w-[420px] overflow-hidden rounded-[32px] shadow-2xl transition-shadow duration-500 bg-gray-100 ${isComingSoon
            ? "border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            : "hover:shadow-glow"
            }`}
        >
          {/* Main Image with refined next/image optimization */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 will-change-transform"
          >
            <Image
              src={item.image}
              alt={item.title || "Prime Builders Project"}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlays for better contrast and depth */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 z-10 ${isComingSoon
                ? "bg-linear-to-t from-black/90 via-black/40 to-transparent"
                : "bg-linear-to-t from-black/80 via-transparent to-transparent group-hover:from-black/95 group-hover:via-black/50"
              }`}
          />

          {/* Badge - Top Left */}
          <div className="absolute top-6 left-6 z-20">
            <span
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-lg transition-all duration-300 ${isCompleted
                  ? "border-white/40 bg-white/95 text-black"
                  : isComingSoon
                    ? "animate-pulse border-amber-400 bg-amber-500/90 text-black"
                    : "border-white/20 bg-black/60 text-white"
                }`}
            >
              {item.status === "Comming Soon" ? "Coming Soon" : item.status}
            </span>
          </div>

          {/* Project Details Revealed on Hover */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-start px-8 pb-8 transition-all duration-500 ease-out translate-y-2 opacity-100 lg:translate-y-12 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            {/* Elegant golden line reveal */}
            <div
              className={`mb-4 h-[2px] w-12 origin-left transition-transform duration-700 ease-out ${shouldReduceMotion ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              style={{
                background: "linear-gradient(90deg, #d1b38c, #e8c87a)",
              }}
            />

            <h3
              className={`text-3xl font-bold parisienne-font leading-tight drop-shadow-xl ${isComingSoon ? "text-amber-400" : "text-white"
                }`}
            >
              {item.title}
            </h3>

            <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d1b38c]">
              Explore Project
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>

          {/* Stamp for Coming Soon projects */}
          {isComingSoon && (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-xl border-4 border-amber-300 bg-amber-500 px-6 py-3 text-2xl font-black uppercase tracking-[0.15em] text-black shadow-2xl"
              >
                Soon
              </motion.div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}