"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group"
    >
      <Link href={`/projects/${item.id}`} className="block">
        <div className="relative h-[520px] w-full overflow-hidden rounded-[30px] shadow-lg">

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col p-7 text-white">

            {/* Top badges */}
            <div className="flex justify-between">
              <span className="rounded-full bg-[#f5f5f5] px-4 py-2 text-xs font-bold text-black shadow-sm">
                {item.status}
              </span>

              <span className="rounded-full bg-[#eece9c] px-4 py-2 text-xs font-bold text-black shadow-sm">
                {item.availability}
              </span>
            </div>

            {/* Bottom content */}
            <div className="mt-auto">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-2xl text-lime-300" />
                <p className="font-semibold text-sm tracking-wide">
                  {item.location}
                </p>
              </div>

              <hr className="my-5 border-white/30" />

              <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}