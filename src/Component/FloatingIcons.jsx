"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function FloatingIcons() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [bounce, setBounce] = useState(false);

    // ✅ Only animate on the visitor's first load (this session)
    const [isMounted, setIsMounted] = useState(false);

    // Handle Mount and Session Storage for Intro Animation
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const key = "floating_icons_intro_done";
        const alreadyDone = sessionStorage.getItem(key);

        if (!alreadyDone) {
            setShouldAnimate(true);
            sessionStorage.setItem(key, "1");
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        const interval = setInterval(() => {
            setBounce(true);
            setTimeout(() => setBounce(false), 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const themeColor = "#222222";

    if (!isMounted) return null;

    return (
        <motion.div
            className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50"
            initial={shouldAnimate ? { y: -1000, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 1.5,
                delay: 0.5
            }}
        >
            {/* Scroll to Top Arrow */}
            <button
                onClick={scrollToTop}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-500 hover:scale-110 ${scrollProgress > 5 ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
                    }`}
                style={{
                    background: `conic-gradient(${themeColor} ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
                }}
                aria-label="Scroll to top"
            >
                <div className="absolute inset-[3px] bg-white rounded-full flex items-center justify-center">
                    <FaArrowUp className="text-xl" style={{ color: themeColor }} />
                </div>
            </button>

            {/* WhatsApp Icon */}
            <motion.a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
                animate={bounce ? { y: [0, -15, 0, -8, 0] } : { y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </motion.a>
        </motion.div>
    );
}