"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion, animate, useInView, useMotionValue, useTransform } from "framer-motion";

export default function CountUp({
  value = 0,
  duration = 1.2,
  className = "",
  once = true,
  amount = 0.6,
  startFrom = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Parse numeric target
  const { numericTarget, shouldCommaFormat } = useMemo(() => {
    const raw = typeof value === "number" ? String(value) : String(value);
    const shouldCommaFormat = raw.includes(","); // keep comma style only if user passed commas
    const cleaned = raw.replace(/,/g, "");
    const n = Number(cleaned);
    return {
      numericTarget: Number.isFinite(n) ? n : 0,
      shouldCommaFormat,
    };
  }, [value]);

  const motionVal = useMotionValue(startFrom);

  // Format output
  const formatted = useTransform(motionVal, (latest) => {
    const rounded = Math.round(latest);

    if (shouldCommaFormat) {
      return new Intl.NumberFormat().format(rounded);
    }

    // If original value had no commas, keep it clean (no commas)
    return String(rounded);
  });

  useEffect(() => {
    if (!isInView) return;

    // Always reset to startFrom when the animation begins
    motionVal.set(startFrom);

    const controls = animate(motionVal, numericTarget, {
      duration,
      ease: [0.16, 1, 0.3, 1], // smoother premium feel
    });

    return () => controls.stop();
  }, [isInView, motionVal, numericTarget, duration, startFrom]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{formatted}</motion.span>
    </span>
  );
}