"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Islamabad Prime Builder",
    src: "/images/logo.png",
    description: "Building modern spaces for living, business, and investment in Islamabad.",
  },
  {
    name: "Islamabad Tea Company",
    src: "/images/partner logo.png",
    description: "Delivering quality tea and unforgettable taste experiences.",
  },

];

export default function ClientsSwiper() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white pb-16 md:pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-100 pt-16 md:pt-20">
          {/* Header */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-white inline-block bg-black px-8 py-2.5 shadow-sm  mb-10"
            >
              Trusted Partners
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-black"
            >
              Built on <span className="text-yellow-400">Strong Partnerships</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto"
            >
              We collaborate with world-class organisations to deliver excellence at
              every stage of development.
            </motion.p>
          </motion.div>

          {/* Partner Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                variants={fadeUp}
                className="group flex flex-col items-center justify-center gap-6 rounded-3xl border border-gray-100 bg-gray-50 px-10 py-12 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-14 w-full">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={160}
                    height={56}
                    unoptimized
                    className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="w-12 h-px bg-yellow-400 group-hover:w-20 transition-all duration-300" />

                <div className="text-center">
                  <p className="text-base font-bold text-black">{partner.name}</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-wide">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-xs text-gray-400 tracking-widest uppercase"
          >
            Partnering for long-term impact
          </motion.p>
        </div>
      </div>
    </section>
  );
}