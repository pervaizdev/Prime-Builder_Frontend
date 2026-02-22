"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGem, FaRocket } from "react-icons/fa";

export default function WeAre() {
    return (
        <div className="bg-white min-h-[60vh] relative top-[-70px] rounded-t-[60px] py-5">
            <div className="container mx-auto mt-32 px-6">

                {/* ================= WHO WE ARE ================= */}
                <div className="grid items-start gap-16 md:grid-cols-[400px_1fr]">
                    <div className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest">
                        <h2 className="text-black">WHO WE ARE</h2>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ x: -80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold leading-tight text-black md:text-5xl"
                        >
                            The largest privately held real estate investors and managers in
                            the world
                        </motion.h2>

                        <div className="grid gap-10 md:grid-cols-2 mt-10 text-black">

                            {/* Vision */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaGem className="text-lg text-black" />
                                    <h3 className="text-lg font-bold">Our vision</h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-black/70">
                                    To empower businesses with cutting-edge web solutions that
                                    enhance their digital presence and drive growth.
                                </p>
                            </div>

                            {/* Mission */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaRocket className="text-lg text-black" />
                                    <h3 className="text-lg font-bold">Our mission</h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-black/70">
                                    Our solutions are designed to meet the needs of modern
                                    enterprises, ensuring they thrive in today’s competitive
                                    online landscape.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= STATS SECTION (NEW) ================= */}
                <div className="mt-32 grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7 relative">
                        <div className="h-[520px] w-full overflow-hidden rounded-[36px] rounded-tl-[70px] bg-gray-200">
                            <img src="/images/1 ba night.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        {/* Main white notch */}
                        <div className="absolute top-0 left-0 bg-white h-[45px] w-[220px] rounded-br-[30px]">
                            <div className="relative left-[-12px] top-[33px] h-24 w-24 rotate-90 border-l-[12px] border-b-[12px] border-white rounded-bl-4xl">
                            </div>
                        </div>
                        <div className="absolute left-[208px] top-[-14px] h-8 w-8 rotate-90 border-l-[12px] border-b-[12px] border-white rounded-bl-4xl">
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="lg:col-span-5">
                        <div className="grid gap-8 sm:grid-cols-2">

                            {/* Card 1 */}
                            <StatCard
                                label="GLOBAL REACH"
                                value="85"
                                subtext="offices worldwide"
                            />

                            {/* Card 2 */}
                            <StatCard
                                label="LOCAL EXPERTISE"
                                value="1,500"
                                subtext="employees"
                            />

                            {/* Card 3 */}
                            <StatCard
                                label="OUR IMPACT"
                                value="248"
                                subtext="projects done"
                            />

                            {/* Small Image */}
                            <div className="h-[240px] w-full overflow-hidden rounded-[28px] bg-gray-200">

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

function StatCard({ label, value, subtext }) {
    return (
        <div className="flex h-[240px] flex-col rounded-[28px] bg-gray-100 p-8">
            <div className="text-[10px] font-semibold tracking-widest text-black/70">
                {label}
            </div>

            <div className="mt-4 h-px w-full bg-black/10" />

            <div className="mt-auto">
                <div className="flex items-start gap-1">
                    <span className="text-5xl font-extrabold text-black">
                        {value}
                    </span>
                    <span className="text-2xl font-extrabold text-[#eed498]">
                        +
                    </span>
                </div>
                <div className="mt-3 text-sm text-black/60">
                    {subtext}
                </div>
            </div>
        </div>
    );
}  