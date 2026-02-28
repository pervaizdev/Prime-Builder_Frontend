"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/IslamabadPrimeBuilders",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@IslamabadPrimeBuilders",
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 pb-16">
        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="rounded-[32px] bg-white/95 backdrop-blur-xl px-8 py-12 md:px-12 md:py-14 shadow-[0_30px_90px_rgba(0,0,0,0.12)] border border-black/5"
        >
          {/* Top */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12"
          >
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Islamabad Prime Builder"
                  width={72}
                  height={72}
                  className="h-16 w-auto select-none"
                  priority={false}
                />
                <div className="leading-tight">
                  <p className="text-lg font-extrabold text-black">
                    Islamabad Prime
                  </p>
                  <p className="text-sm font-semibold text-gray-700">Builder</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-sm">
                We build modern homes and landmark developments—designed for
                lifestyle, built for long-term value, and delivered with
                transparency.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div variants={fadeUp} className="md:justify-self-center">
              <p className="text-sm font-bold text-black mb-4">Quick Links</p>

              <ul className="space-y-3 text-sm text-gray-600">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 hover:text-black transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              className="md:justify-self-end text-center md:text-left"
            >
              <p className="text-sm font-bold text-black mb-4">Contact</p>

              <a
                href="tel:+9208412345688"
                className="block text-lg font-semibold text-black hover:opacity-80 transition"
              >
                +92 084 123 45688
              </a>

              <a
                href="mailto:spaciaz@example.com"
                className="mt-2 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:opacity-80 transition"
              >
                spaciaz@example.com
              </a>

              <div className="flex gap-3 mt-6">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f2ea] text-black/70 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <s.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="my-10 border-t border-gray-200/80"
          />

          {/* Bottom */}
          <motion.p
            variants={fadeUp}
            className="text-center text-xs text-gray-500"
          >
            © 2026{" "}
            <span className="font-semibold text-black">
              Islamabad Prime Builder
            </span>
            . All Rights Reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
