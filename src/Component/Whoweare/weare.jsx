"use client";

import React from "react";
import WhoWeAreHeader from "./WhoWeAreHeader";



export default function WeAre() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const fadeUp = {
        hidden: { y: 40, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], },
        },
    };

    const fadeUpSlow = {
        hidden: { y: 40, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <div className="bg-white relative top-0 md:rounded-t-[60px] rounded-t-[30px] py-5">
            <div className="container mx-auto lg:mt-20 mt-15 px-6">
                <WhoWeAreHeader
                    container={container}
                    fadeUp={fadeUp}
                    fadeUpSlow={fadeUpSlow}
                />


            </div>
        </div>
    );
}