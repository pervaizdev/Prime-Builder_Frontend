"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../Common/Cards/ServiceCard";

export default function ServicesPage() {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
            },
        },
    };

    return (
        <div className="container mx-auto overflow-hidden">

            {/* Top Badge */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center items-center"
            >
                <div className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest">
                    <h2 className="text-black">WHO WE ARE</h2>
                </div>
            </motion.div>

            {/* Heading */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-5xl mx-auto px-6 text-center mt-10"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
                    Take a brief look at
                    <br />
                    some of the services
                    <br />
                    we offer
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="container p-2 md:p-0max-w-7xl mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                <motion.div variants={fadeUp}>
                    <ServiceCard
                        title="Real Estate"
                        image="/images/1 ba night.jpg"
                        description="We provide premium residential and commercial property solutions tailored to your needs."
                        services={[
                            "Property Buying & Selling",
                            "Leasing Services",
                            "Market Analysis",
                        ]}
                    />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <ServiceCard
                        title="Project Management"
                        image="/images/1 ba night.jpg"
                        description="End-to-end construction and development management with complete transparency."
                        services={[
                            "Planning & Execution",
                            "Cost Control",
                            "Timeline Management",
                        ]}
                    />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <ServiceCard
                        title="Investment & Capital"
                        image="/images/1 ba night.jpg"
                        description="Strategic investment advisory services designed to maximize real estate returns."
                        services={[
                            "Capital Structuring",
                            "ROI Forecasting",
                            "Portfolio Management",
                        ]}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}