"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from "react-icons/hi2";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import FooterSection from "@/Component/Footer/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const contactInfo = [
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+(084) 123 - 45688",
    href: "tel:+08412345688",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    value: "Info@IslamabadPrimeBuilders.com",
    href: "mailto:Info@IslamabadPrimeBuilders.com",
  },
  {
    icon: HiOutlineMapPin,
    label: "Address",
    value: "Islamabad, Pakistan",
    href: null,
  },
  {
    icon: HiOutlineClock,
    label: "Working Hours",
    value: "24 Hours",
    href: null,
  },
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div>
      {/* FIXED HERO (NOT SCROLLABLE) */}
      <section className="fixed inset-0 -z-10 h-[80vh] lg:h-[98vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact.png')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* grid centering */}
        <div className="relative z-10 grid place-items-center h-full text-center px-4">
          <div>
            <motion.h1
              className="text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Get In Touch
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-white/70 text-base sm:text-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Have a question or want to discuss your next project? We&apos;d love
              to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Spacer so content starts after hero height */}
      <div className="h-[35vh] lg:h-[98vh]" />

      {/* SCROLLING CONTENT */}
      <section className="relative w-full overflow-hidden bg-white md:rounded-t-[60px] rounded-[20px] md:mt-[-60px] mt-[240px] z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 mt-20 gap-16 overflow-hidden">
            {/* LEFT — Contact Info */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.span
                variants={fadeUp}
                className="block w-fit mx-auto lg:mx-0 rounded-full border border-[#eed498] px-4 py-2 text-[10px] tracking-[0.25em] font-semibold text-black uppercase"
              >
                Reach Out
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl sm:text-4xl font-extrabold text-black leading-tight text-center lg:text-left"
              >
                Let&apos;s Build
                <br />
                Something Great
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-black/50 leading-relaxed text-center lg:text-left"
              >
                Whether you&apos;re looking for a new home, investment opportunity,
                or partnership — we&apos;re here to help.
              </motion.p>

              {/* Info Items - GRID */}
              <motion.div variants={stagger} className="mt-10 grid gap-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="grid grid-cols-[46px_1fr] md:grid-cols-[70px_1fr] gap-1 items-center group w-full"
                  >
                    <div className="grid place-items-center md:h-14 md:w-14 h-10 w-10 rounded-full bg-[#f5f2ea] group-hover:bg-[#eed498] transition-colors duration-300">
                      <item.icon className="text-xl text-black/70" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-bold text-black hover:text-[#cdb376] transition-colors break-all sm:break-normal"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-black break-all sm:break-normal">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links - GRID */}
              <motion.div variants={fadeUp} className="mt-12 grid gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-black/40 text-center lg:text-left">
                  Follow Us
                </p>
                <div className="grid grid-flow-col auto-cols-max gap-3 justify-center lg:justify-start">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="grid place-items-center h-11 w-11 rounded-full bg-[#f5f2ea] text-black/70 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <s.icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                variants={fadeUp}
                className="rounded-[36px] bg-linear-to-br from-[#faf8f4] to-white border border-black/5 p-6 sm:p-12"
              >
                <h3 className="text-2xl font-extrabold text-black">
                  Send Us a Message
                </h3>
                <p className="mt-2 text-sm text-black/50">
                  Fill in the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5 text-black"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp} className="grid gap-2">
                      <label className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="h-13 w-full rounded-full bg-white border border-black/10 px-6 text-sm outline-none focus:ring-2 focus:ring-[#eed498] focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid gap-2">
                      <label className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="h-13 w-full rounded-full bg-white border border-black/10 px-6 text-sm outline-none focus:ring-2 focus:ring-[#eed498] focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid gap-2">
                      <label className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        required
                        className="h-13 w-full rounded-full bg-white border border-black/10 px-6 text-sm outline-none focus:ring-2 focus:ring-[#eed498] focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid gap-2">
                      <label className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-13 w-full rounded-full bg-white border border-black/10 px-6 text-sm outline-none focus:ring-2 focus:ring-[#eed498] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select a topic...</option>
                        <option value="residential">Residential Inquiry</option>
                        <option value="commercial">Commercial Inquiry</option>
                        <option value="investment">Investment</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUp} className="grid gap-2">
                    <label className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      required
                      className="w-full rounded-3xl bg-white border border-black/10 px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-[#eed498] focus:border-transparent transition-all resize-none"
                    />
                  </motion.div>

                  {/* Footer row - GRID */}
                  <motion.div
                    variants={fadeUp}
                    className="grid sm:grid-cols-2 items-center gap-4 pt-2"
                  >
                    <p className="text-xs text-black/40 text-center sm:text-left">
                      We respect your privacy.
                      <br />
                      Required fields are marked *
                    </p>

                    <div className="grid place-items-center sm:place-items-end">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="inline-flex items-center gap-3 rounded-full bg-[#eed498] px-8 py-4 text-sm font-bold text-black hover:shadow-lg hover:shadow-[#eed498]/30 transition-shadow cursor-pointer"
                      >
                        Send Message
                        <span className="grid place-items-center h-8 w-8 rounded-full bg-white">
                          <MdArrowOutward />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          className="max-w-7xl mx-auto px-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[36px] overflow-hidden border border-black/5 shadow-xl">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26595.436048159278!2d72.84856047198296!3d33.56819590273364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df998e5f671345%3A0x6f40e2c6825fd531!2sTopCity-1%D8%8C%20Kashmir%20Highway%20Near%20New%20Islamabad%20Airport%2C%20Street%2016%2C%20Pakistan!5e0!3m2!1sen!2s!4v1772316751850!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>

        <div className="mt-20">
          <FooterSection />
        </div>
      </section>
    </div>
  );
}