"use client";

import React from "react";
import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function WhoWeAreStats({ container, fadeUp, fadeUpSlow }) {
    return (
        <motion.div
            className="mt-16 grid gap-8 lg:grid-cols-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Left image block - Unified as one animating piece */}
            <motion.div className="lg:col-span-7 relative" variants={fadeUpSlow}>
                <div className="h-[520px] w-full overflow-hidden rounded-[36px] rounded-tl-[70px] bg-gray-200">
                    <img
                        src="/images/1 ba night.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Main white notch */}
                <div className="absolute top-0 left-0 bg-white h-[45px] w-[220px] rounded-br-[30px]">
                    <div className="relative left-[-12px] top-[33px] h-24 w-24 rotate-90 border-l-12 border-b-12 border-white rounded-bl-4xl" />
                </div>

                <div className="absolute left-[208px] top-[-14px] h-8 w-8 rotate-90 border-l-12 border-b-12 border-white rounded-bl-4xl" />
            </motion.div>

            {/* Right cards */}
            <motion.div className="lg:col-span-5" variants={container}>
                <motion.div className="grid gap-8 sm:grid-cols-2" variants={container}>
                    <StatCard
                        label="GLOBAL REACH"
                        value="85"
                        subtextLines={["offices worldwide"]}
                        fadeUp={fadeUp}
                        container={container}
                    />

                    <StatCard
                        label="LOCAL EXPERTISE"
                        value="1,500"
                        subtextLines={["employees"]}
                        fadeUp={fadeUp}
                        container={container}
                    />

                    <StatCard
                        label="OUR IMPACT"
                        value="248"
                        subtextLines={["projects done"]}
                        fadeUp={fadeUp}
                        container={container}
                    />

                    {/* Small image */}

                    <motion.div
                        variants={fadeUpSlow}
                        className="h-[240px] w-full overflow-hidden rounded-[28px] bg-gray-200"
                    >
                        <motion.img
                            src="/images/1 ba night.jpg"
                            alt="Small"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.12 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.4 }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
