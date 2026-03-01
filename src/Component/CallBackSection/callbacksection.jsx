"use client";

import { motion } from "framer-motion";

export default function CallBackSection() {
  // ✅ more noticeable + smoother
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.25,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
        type: "tween",
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  // ✅ keep background subtle (don’t fight the card motion)
  const parentFade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "tween",
      },
    },
  };

  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-2">
        {/* Background Container */}
        <motion.div
          variants={parentFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[25px] md:rounded-[36px] bg-cover bg-center py-20 px-2 sm:px-10 md:px-16"
          style={{
            backgroundImage: "url('/images/1 ba night.jpg')",
            willChange: "opacity",
          }}
        >
          {/* White Card (noticeable slide-up) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-4xl rounded-3xl bg-white px-4 py-12 shadow-xl sm:px-12"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="rounded-full border border-lime-400 px-4 py-1 text-[10px] font-semibold tracking-[0.25em]">
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
            <motion.form variants={stagger} className="mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <Input placeholder="Your Name*" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Input placeholder="Email*" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Input placeholder="Phone Number*" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Select placeholder="You inquiry about..." />
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
                <button
                  type="submit"
                  className="flex mx-auto md:mx-0 mt-5 md:mt-1 items-center gap-3 rounded-full bg-lime-400 px-6 py-3 text-xs font-bold transition hover:brightness-95 active:scale-95"
                >
                  Get A Call Back
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    →
                  </span>
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Inputs */
function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="h-12 w-full rounded-full bg-gray-100 px-5 text-sm outline-none focus:ring-2 focus:ring-lime-300"
    />
  );
}

function Select({ placeholder }) {
  return (
    <select className="h-12 w-full rounded-full bg-gray-100 px-5 text-sm outline-none focus:ring-2 focus:ring-lime-300">
      <option>{placeholder}</option>
      <option>Residential</option>
      <option>Commercial</option>
      <option>Property</option>
    </select>
  );
}