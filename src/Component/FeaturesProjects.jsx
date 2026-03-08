"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesProjects({ item }) {
  const isCompleted = item.status?.toLowerCase() === "completed";
  const isComingSoon = item.status?.toLowerCase().includes("soon");

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: -6,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="container mx-auto"
    >
      <Link href={`/projects/${item.id}`} className="block group">
        <div
          className={`relative h-[450px] w-[320px] lg:w-[450px] overflow-hidden rounded-[30px] shadow-xl transition-all duration-300 ${isComingSoon
            ? "border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            : ""
            }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt={item.title || "Project"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <div
            className={`absolute inset-0 transition-all duration-500 ${isComingSoon
              ? "bg-linear-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/40 group-hover:backdrop-blur-sm"
              : "bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70"
              }`}
          />

          <div className="absolute top-6 left-6 z-20">
            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-md transition-all duration-300 ${isCompleted
                ? "border-white/40 bg-white/90 text-black"
                : isComingSoon
                  ? "animate-pulse border-amber-400 bg-amber-500/90 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "border-white/20 bg-black/60 text-white"
                }`}
            >
              {item.status === "Comming Soon" ? "Coming Soon" : item.status}
            </span>
          </div>

          {isComingSoon && (
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rotate-[-12deg] rounded-xl border-2 border-amber-300 bg-amber-500 px-6 py-3 text-2xl font-black uppercase tracking-widest text-black shadow-[0_0_40px_rgba(245,158,11,0.6)]"
              >
                Coming Soon
              </motion.div>
            </div>
          )}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-4 text-center text-3xl font-bold transition-colors ${isComingSoon
            ? "text-amber-500 drop-shadow-sm group-hover:text-amber-600"
            : "text-black group-hover:text-gray-700"
            }`}
        >
          {item.title}
        </motion.h3>
      </Link>
    </motion.div>
  );
}