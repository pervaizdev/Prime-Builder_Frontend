"use client";

import React from "react";
import WhoWeAreHeader from "./WhoWeAreHeader";
import WhoWeAreStats from "./WhoWeAreStats";

export default function WeAre() {
    // Shared animation variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
            },
        },
    };

    const fadeUp = {
        hidden: { y: 26, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const fadeUpSlow = {
        hidden: { y: 40, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <div className="bg-white min-h-[60vh] relative top-[-70px] rounded-t-[60px] py-5">
            <div className="container mx-auto mt-32 px-6">
                <WhoWeAreHeader
                    container={container}
                    fadeUp={fadeUp}
                    fadeUpSlow={fadeUpSlow}
                />

                <WhoWeAreStats
                    container={container}
                    fadeUp={fadeUp}
                    fadeUpSlow={fadeUpSlow}
                />
            </div>
        </div>
    );
}