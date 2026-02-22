"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "/home";

    return (
        <motion.header
            id="main-navbar"
            className="absolute w-full mt-10 z-50"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.8,
                delay: isHome ? 1.8 : 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <nav className="mx-auto w-[92%] max-w-6xl">

                {/* Border Wrapper */}
                <div className="premium-border-glow">

                    {/* Inner Navbar */}
                    <div className="inner-content relative flex items-center justify-between rounded-full px-6 py-4">

                        {/* LEFT: Logo + Brand */}
                        <div className="flex items-center gap-4 min-w-[260px]">
                            <div className="flex items-center justify-center">
                                <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
                            </div>

                            <div className="leading-tight">
                                <span className="text-base font-extrabold text-black tracking-tight block">
                                    Islamabad Prime
                                </span>
                                <span className="text-sm font-bold text-gray-700 block">
                                    Builder
                                </span>
                            </div>
                        </div>

                        {/* CENTER: Links */}
                        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Projects", path: "/projects" },

                                { name: "Awards", path: "/pages" },
                                { name: "Contact", path: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="#"
                            className="rounded-full primary-bg px-6 py-3 text-sm font-bold text-gray-900 hover:bg-lime-300 transition"
                        >
                            Get In Touch
                        </Link>

                    </div>
                </div>
            </nav>
        </motion.header>
    );
}