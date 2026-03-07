"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Awards", path: "/awards" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";
  const isTransparentNavbar =
    isHome ||
    pathname === "/projects" ||
     pathname === "/services" ||
      pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/awards" ||
    pathname.startsWith("/projects/");

  const [open, setOpen] = useState(false);

  // Close menu on route change (works only when pathname actually changes)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      id="main-navbar"
      className={[
        "w-full z-1",
        isTransparentNavbar
          ? "fixed top-0 mt-6 md:mt-10"
          : "sticky top-0 mt-0 backdrop-blur",
      ].join(" ")}
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        delay: isHome ? 1.8 : 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav className="mx-auto w-[92%] max-w-6xl">
        <div className="premium-border-glow">
          <div className="inner-content relative flex items-center justify-between rounded-full px-4 py-3 md:px-6 md:py-4">
            {/* LEFT: Logo + Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 min-w-0 md:min-w-[260px]"
            >
              <Image src="/images/logo.png" alt="Logo" width={44} height={44} />
              <div className="leading-tight min-w-0">
                <span className="text-sm md:text-base font-extrabold text-black tracking-tight block truncate">
                  Islamabad Prime
                </span>
                <span className="text-xs md:text-sm font-bold text-gray-700 block truncate">
                  Builder
                </span>
              </div>
            </Link>

            {/* CENTER: Desktop Links */}
            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => (
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

            {/* RIGHT: Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden md:inline-flex rounded-full primary-bg px-6 py-3 text-sm font-bold text-gray-900 hover:bg-lime-300 transition"
              >
                Get In Touch
              </Link>

              {/* Mobile button */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-black hover:bg-black/5 transition-colors"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? (
                  <HiXMark className="w-6 h-6" />
                ) : (
                  <HiBars3BottomRight className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden origin-top mt-2"
            >
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-black/5 p-4 shadow-2xl shadow-black/10">
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -10, opacity: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      {/* ✅ Close on click even if route is the same */}
                      <Link
                        href={item.path}
                        onClick={closeMenu}
                        className="flex items-center justify-between py-3 px-4 rounded-2xl text-base font-semibold text-gray-900 hover:bg-black/5 active:bg-black/10 transition-all"
                      >
                        {item.name}
                        <span className="opacity-30">→</span>
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="mt-4 flex items-center justify-center rounded-2xl primary-bg px-4 py-4 text-base font-bold text-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-[0.98] transition-all"
                    >
                      Get In Touch
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}