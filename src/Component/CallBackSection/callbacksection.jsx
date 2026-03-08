"use client";

import { motion } from "framer-motion";

export default function CallBackSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="bg-white py-16 text-black md:py-24">
      <div className="mx-auto max-w-7xl px-2">
        {/* Background Container (NO ANIMATION) */}
        <div
          className="rounded-[25px] bg-cover bg-center px-2 py-20 md:rounded-[36px] md:px-16 sm:px-10"
          style={{
            backgroundImage: "url('/images/1 ba night.jpg')",
          }}
        >
          {/* White Card (Animation starts here) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-4xl rounded-3xl bg-white px-4 py-12 shadow-xl sm:px-12"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="rounded-full border border-[#FACC15] px-4 py-1 text-[10px] font-semibold tracking-[0.25em]">
                QUICK IN TOUCH
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-center text-xl font-extrabold leading-snug sm:text-2xl md:text-3xl"
            >
              Get specialist advice for residential,
              <br className="hidden sm:block" />
              commercial or property
            </motion.h2>

            {/* Form */}
            <motion.form variants={container} className="mt-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <motion.div variants={fadeUp}>
                  <Input placeholder="Your Name*" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Input placeholder="Email*" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Input placeholder="Phone Number*" />
                </motion.div>

                <motion.div variants={fadeUp} className="md:col-span-3">
                  <Textarea placeholder="Your Message..." />
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-xs text-gray-500">
                  We're excited to connect with you!
                  <br />
                  Required fields are marked *
                </p>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-5 mx-auto flex items-center gap-3 rounded-full bg-[#FACC15] px-6 py-3 text-xs font-bold transition hover:brightness-95 active:scale-95 md:mx-0 md:mt-1"
                >
                  Get A Call Back
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    →
                  </span>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Inputs */

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="h-12 w-full rounded-full bg-gray-100 px-5 text-sm outline-none focus:ring-2 focus:ring-[#FACC15]"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className="w-full resize-none rounded-2xl bg-gray-100 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FACC15]"
    />
  );
}