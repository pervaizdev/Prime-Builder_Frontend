"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6">
        {/* White Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="rounded-[32px] bg-white px-10 py-14 shadow-2xl"
        >
          {/* Top Content */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-10 md:grid-cols-3"
          >

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">

              {/* Logo */}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-20 w-auto md:h- select-none"
              />

              {/* Company Name */}
              <h2 className="mt-4 text-xl font-bold text-black">
                Islamabad Prime Builder
              </h2>

              {/* Description */}
              <p className="mt-6 text-xs text-gray-500 leading-relaxed max-w-sm">
                We are creators of transformative spaces that inspire,
                innovate, and endure.
              </p>

            </motion.div>

            {/* Middle Column */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-6 text-sm text-gray-600"
            >


              <ul className="space-y-3">
                <li>Home</li>
                <li>Projects</li>
                <li>Awards</li>
                <li>Contact</li>
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={fadeUp}>
              <p className="text-lg font-semibold text-black">
                +(084) 123 - 45688
              </p>

              <p className="mt-3 text-lg font-semibold text-black underline underline-offset-4">
                spaciaz@example.com
              </p>

              <p className="mt-6 text-xs text-gray-500">
                Facebook · Instagram · Youtube · Twitter
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="my-10 border-t border-gray-200" />

          {/* Bottom */}
          <motion.p variants={fadeUp} className="text-center text-xs text-gray-500">
            © 2026 <span className="font-semibold text-black">Islamabad Prime Builder</span>. All
            Rights Reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}