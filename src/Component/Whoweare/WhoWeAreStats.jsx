"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  {
    value: "10",
    suffix: "+",
    label: "Years Experience",
    sub: "Proven Expertise",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    value: "800",
    suffix: "+",
    label: "Satisfied Clients",
    sub: "Client Trust",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "2",
    suffix: "+",
    label: "Major Projects Done",
    sub: "Our Impact",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "4",
    suffix: "+",
    label: "Business Collaborations",
    sub: "Strategic Partners",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scaleX: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhoWeAreStats() {
  return (
    <section className="relative overflow-hidden my-14"
      style={{ background: "linear-gradient(135deg, #0a2e16 0%, #0f3d20 50%, #163d23 100%)" }}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d1b38c, transparent)" }} />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #eed498, transparent)" }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 px-8 py-10 lg:px-16">
        {/* Header row */}
        <motion.div
          className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 md:py-1.5 text-xs md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-3"
              style={{ borderColor: "rgba(209,179,140,0.4)", color: "#c29e6d", background: "rgba(209,179,140,0.08)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#d1b38c" }} />
              Our Numbers
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-4xl lg:text-5xl parisienne-font text-white"
            >
              Built on Decades of{" "}
              <span className="text-[#c29e6d]" >Excellence</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-white/50 text-md md:text-sm leading-relaxed max-w-xs text-center md:text-left lg:text-right mt-4 md:mt-0"
          >
            Every number tells a story of trust, dedication, and premium real estate excellence.
          </motion.p>
        </motion.div>

        {/* Golden divider */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="origin-left h-px mb-8 lg:mb-10"
          style={{ background: "linear-gradient(90deg, #d1b38c, rgba(209,179,140,0.2), transparent)" }}
        />

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-7 py-10 md:py-5"
            >
              {/* Vertical divider */}
              {i !== 0 && (
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 ${i % 2 === 0 ? "hidden lg:block" : "hidden md:block"
                    }`}
                  style={{ background: "linear-gradient(180deg, transparent, rgba(209,179,140,0.3), transparent)" }}
                />
              )}

              {/* Horizontal divider for stacked layouts */}
              {i !== 0 && (
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 ${i >= 2 ? "block lg:hidden" : "block md:hidden"
                    }`}
                  style={{ background: "linear-gradient(90deg, transparent, rgba(209,179,140,0.3), transparent)" }}
                />
              )}

              {/* Icon in a subtle badge */}
              <div
                className="mb-5 md:mb-4 w-fit rounded-lg p-3 md:p-2.5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(209,179,140,0.12)", color: "#d1b38c" }}
              >
                {stat.icon}
              </div>

              {/* Big animated number */}
              <div className="flex items-center md:items-start justify-center md:justify-start gap-1 mb-2 md:mb-1.5">
                <CountUp
                  value={stat.value}
                  duration={1.5}
                  className="text-[4rem] md:text-[2.75rem] lg:text-[56px] font-black text-white leading-none tracking-tight"
                  once={true}
                />
                <span
                  className="text-4xl md:text-[28px] font-black mt-2 md:mt-1"
                  style={{ color: "#d1b38c" }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-white/90 lg:font-semibold font-bold text-lg md:text-[15px] mb-1.5 md:mb-1 leading-tight">{stat.label}</p>

              {/* Sub-label */}
              <p className="text-sm md:text-[11px] uppercase tracking-[0.15em] text-[#c29e6d] font-bold">
                {stat.sub}
              </p>

              {/* Subtle bottom accent on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[1px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 hidden md:block"
                style={{ background: "linear-gradient(90deg, #d1b38c, transparent)" }}
              />
              <div
                className="absolute bottom-0 left-10 right-10 h-[1px] scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100 md:hidden"
                style={{ background: "linear-gradient(90deg, transparent, #d1b38c, transparent)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "rgba(209,179,140,0.15)" }}
        >
          <p className="text-white/40 text-[13px] italic">
            "Quality is never an accident; it is always the result of intelligent effort."
          </p>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#d1b38c" }}>
            <div className="h-px w-6 text-[#c29e6d]"  />
           Islamabad Prime Builders
          </div>
        </motion.div>
      </div>
    </section>
  );
}
