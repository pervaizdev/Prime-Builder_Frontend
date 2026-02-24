"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Small helper to animate each line (or chunk) separately
 */
export default function AnimatedLines({
    lines = [],
    className = "",
    as: Tag = "div",
    lineClassName = "",
    variants,
}) {
    const MotionTag = motion[Tag] ?? motion.div;

    return (
        <MotionTag className={className} variants={variants}>
            {lines.map((line, idx) => (
                <motion.span
                    key={idx}
                    className={`block ${lineClassName}`}
                    variants={variants}
                >
                    {line}
                </motion.span>
            ))}
        </MotionTag>
    );
}
