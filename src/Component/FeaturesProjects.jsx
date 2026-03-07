"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesProjects({ item }) {
  const isCompleted = item.status?.toLowerCase() === "completed";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className=" container mx-auto"
    >
      <Link href={`/projects/${item.id}`} className="block">

        {/* Card */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-[30px] shadow-xl">

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt={item.title || "Project"}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/70" />

          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <span
              className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-md border ${
                isCompleted
                  ? "bg-white/90 text-black border-white/40"
                  : "bg-black/60 text-white border-white/20"
              }`}
            >
              {item.status}
            </span>
          </div>

        </div>

        {/* Title Under Card */}
        <h3 className="mt-4 text-3xl text-center font-bold text-black">
          {item.title}
        </h3>

      </Link>
    </motion.div>
  );
}