"use client";

import React from "react";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const displayServices = isServicesPage
    ? servicesData
    : servicesData.slice(0, 3);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUpSoft = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf8f3] to-white py-20 ">
      <motion.div
        className="container mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            variants={fadeUpSoft}
            className="inline-flex rounded-full border border-yellow-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 shadow-sm"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-extrabold leading-tight text-black md:text-5xl"
          >
            Our Services
          </motion.h2>

          <motion.p
            variants={fadeUpSoft}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base"
          >
            We deliver premium real estate development and construction
            solutions designed to create lasting value, modern functionality,
            and exceptional living and business spaces.
          </motion.p>
        </div>

        {/* Button */}
        {!isServicesPage && (
          <motion.div
            variants={fadeUpSoft}
            className="mt-10 flex justify-center lg:justify-end"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
              >
                View Services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {displayServices.map((item, index) => {
            const Icon = Icons[item.icon];

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full flex-col rounded-[28px] border bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-yellow-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${index === 1 ? "lg:-mt-4 border-yellow-200" : "border-gray-100"
                    }`}
                >
                  {/* top accent line */}
                  <div className="absolute left-8 right-8 top-0 h-[2px] origin-left scale-x-0 bg-yellow-400 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex flex-col items-center text-center">
                    {Icon && (
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-md transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-black"
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>


                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}