"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGem, FaRocket } from "react-icons/fa";
import AnimatedLines from "./AnimatedLines";

export default function WhoWeAreHeader({ container, fadeUp, fadeUpSlow }) {
    return (
        <motion.div
            className="grid items-start gap-16 md:grid-cols-[400px_1fr]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            {/* Pill */}
            <motion.div
                variants={fadeUp}
                className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest"
            >
                <motion.h2 variants={fadeUp} className="text-black">
                    WHO WE ARE
                </motion.h2>
            </motion.div>

            <div>
                {/* Animate heading line-by-line */}
                <motion.h2
                    className="text-4xl font-extrabold leading-tight text-black md:text-5xl"
                    variants={container}
                >
                    <motion.span className="block" variants={fadeUpSlow}>
                        The largest privately held real estate investors and managers in
                    </motion.span>
                    <motion.span className="block" variants={fadeUpSlow}>
                        the world
                    </motion.span>
                </motion.h2>

                <motion.div
                    className="grid gap-10 md:grid-cols-2 mt-10 text-black"
                    variants={container}
                >
                    {/* Vision */}
                    <motion.div variants={container}>
                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-3"
                        >
                            <FaGem className="text-lg text-black" />
                            <motion.h3 variants={fadeUp} className="text-lg font-bold">
                                Our vision
                            </motion.h3>
                        </motion.div>

                        {/* Animate paragraph in lines (chunks) */}
                        <AnimatedLines
                            Tag="p"
                            variants={fadeUp}
                            className="mt-4 text-sm leading-6 text-black/70"
                            lines={[
                                "To empower businesses with cutting-edge web solutions that",
                                "enhance their digital presence and drive growth.",
                            ]}
                        />
                    </motion.div>

                    {/* Mission */}
                    <motion.div variants={container}>
                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-3"
                        >
                            <FaRocket className="text-lg text-black" />
                            <motion.h3 variants={fadeUp} className="text-lg font-bold">
                                Our mission
                            </motion.h3>
                        </motion.div>

                        <AnimatedLines
                            Tag="p"
                            variants={fadeUp}
                            className="mt-4 text-sm leading-6 text-black/70"
                            lines={[
                                "Our solutions are designed to meet the needs of modern",
                                "enterprises, ensuring they thrive in today’s competitive",
                                "online landscape.",
                            ]}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
