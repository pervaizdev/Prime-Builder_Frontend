"use client";

import React, { useEffect, useMemo, useRef } from "react";
import {
    motion,
    animate,
    useInView,
    useMotionValue,
    useTransform,
} from "framer-motion";


export default function CountUp({ value = 0, duration = 1.2, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    const numericTarget = useMemo(() => {
        if (typeof value === "number") return value;
        const cleaned = String(value).replace(/,/g, "");
        const n = Number(cleaned);
        return Number.isFinite(n) ? n : 0;
    }, [value]);

    const motionVal = useMotionValue(0);

    // Format number with commas
    const formatted = useTransform(motionVal, (latest) => {
        const rounded = Math.round(latest);
        return new Intl.NumberFormat().format(rounded);
    });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(motionVal, numericTarget, {
            duration,
            ease: [0.22, 1, 0.36, 1],
        });

        return () => controls.stop();
    }, [isInView, motionVal, numericTarget, duration]);

    return (
        <span ref={ref} className={className}>
            <motion.span>{formatted}</motion.span>
        </span>
    );
}
