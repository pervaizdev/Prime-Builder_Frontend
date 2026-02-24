"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function StatCard({ label, value, subtextLines = [], fadeUp, container }) {
    return (
        <motion.div
            variants={fadeUp} 
            className="flex h-[240px] flex-col rounded-[28px] bg-gray-100 p-8"
        >

            <motion.div variants={container} className="flex h-full flex-col">
                <motion.div
                    variants={fadeUp}
                    className="text-[10px] font-semibold tracking-widest text-black/70"
                >
                    {label}
                </motion.div>

                <motion.div variants={fadeUp} className="mt-4 h-px w-full bg-black/10" />

                <motion.div variants={container} className="mt-auto">
                    <motion.div variants={fadeUp} className="flex items-start gap-1">
                        <CountUp
                            value={value}
                            duration={1.25}
                            className="text-5xl font-extrabold text-black"
                        />
                        <motion.span
                            variants={fadeUp}
                            className="text-2xl font-extrabold text-[#eed498]"
                        >
                            +
                        </motion.span>
                    </motion.div>

                    <motion.div variants={container} className="mt-3 text-sm text-black/60">
                        {subtextLines.map((line, idx) => (
                            <motion.span key={idx} variants={fadeUp} className="block">
                                {line}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
