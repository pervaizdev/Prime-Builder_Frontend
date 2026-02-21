"use client";

import React from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const members = [
  {
    name: "Dennis Daniels",
    role: "FOUNDER & CEO",
    image: "https://demo2.wpopal.com/spaciaz/wp-content/uploads/2025/03/team-1.jpg",
    iconVariant: "dark",
    offset: "md:translate-y-0",
    height: "h-[520px]",
  },
  {
    name: "Johan Sanford",
    role: "EXECUTIVE ASSISTANT",
    image: "https://demo2.wpopal.com/spaciaz/wp-content/uploads/2025/03/team-2.jpg",
    iconVariant: "lime",
    offset: "md:translate-y-8",
    height: "h-[560px]",
  },
  {
    name: "Floyd Miles",
    role: "DIRECTOR OF ARCHITECTURE",
    image: "https://demo2.wpopal.com/spaciaz/wp-content/uploads/2025/03/team-3.jpg",
    iconVariant: "lime",
    offset: "md:translate-y-0",
    height: "h-[520px]",
  },
];

export default function Team() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest">
          <h2 className="text-black">WHO WE ARE</h2>
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mt-10">
        <h1 className="text-black font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Meet Our <br /> Team
        </h1>
      </div>

      {/* Cards Row */}
      <div className="max-w-7xl mx-auto mt-20 px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-14">
          {members.map((m, idx) => (
            <div key={idx} className={`relative w-full md:w-[340px] ${m.offset}`}>
              {/* Card */}
              <div className={`relative ${m.height} rounded-[42px]`}>
                {/* IMAGE WRAPPER (clipped) */}
                <div className="absolute inset-0 rounded-[42px] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    priority={idx === 1}
                  />
                </div>

                {/* ===== TOP-RIGHT NOTCH (SMOOTH, NO SHARP EDGES) ===== */}
                {/* Main notch block */}
                <div className="absolute top-0 right-0 bg-[#f5f5f5] h-[74px] w-[74px] rounded-bl-[46px] z-20" />
                {/* Corner smoothing patches (same trick as your WeAre component) */}
                <div className="absolute right-[62px] top-[-12px] h-8 w-8 rotate-180 border-l-[12px] border-b-[12px] border-[#f5f5f5] rounded-bl-4xl z-30" />
                <div className="absolute right-[-12px] top-[62px] h-8 w-8 rotate-180 border-l-[12px] border-b-[12px] border-[#f5f5f5] rounded-bl-4xl z-30" />

                {/* Floating X button (sits inside notch) */}
                <div className="absolute top-0 right-0 z-40">
                  <div
                    className={[
                      "w-16 h-16 rounded-full flex items-center justify-center shadow-md",
                      m.iconVariant === "dark"
                        ? "bg-black text-white"
                        : "bg-black text-white",
                    ].join(" ")}
                  >
                    <FiX className="text-xl" />
                  </div>
                </div>

                {/* Gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent z-10 rounded-b-[42px]" />

                {/* Bottom label */}
                <div className="absolute left-0 right-0 bottom-[-18px] z-30 px-6">
                  <div className="rounded-[22px] bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.18)] py-4 text-center">
                    <p className="text-[10px] font-semibold tracking-widest text-white/90 uppercase">
                      {m.role}
                    </p>
                    <h3 className="mt-1 text-white text-xl font-semibold drop-shadow">
                      {m.name}
                    </h3>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}