"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

export function AnimatedHeroTitle({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedSection({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedStagger({ children, className = "" }) {
    return (
        <motion.div
            className={className}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedFadeUp({ children, className = "" }) {
    return (
        <motion.div className={className} variants={fadeUp}>
            {children}
        </motion.div>
    );
}

export function AnimatedImage({ children, className = "" }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedDivider({ className = "" }) {
    return (
        <motion.hr
            className={className}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
        />
    );
}
