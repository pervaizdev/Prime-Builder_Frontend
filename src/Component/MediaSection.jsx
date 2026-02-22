"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { projectMedia } from "@/data/projectMedia";

import { FiImage, FiLayout, FiVideo } from "react-icons/fi";

const TABS = [
  { key: "photos", label: "Photos", icon: <FiImage /> },
  { key: "plans", label: "Plans", icon: <FiLayout /> },
  { key: "videos", label: "Video", icon: <FiVideo /> },
];

function MediaSwiper({ items }) {
  const SIDE_PEEK_PERCENT = 0.2;
  const centerWidthPercent = (1 - SIDE_PEEK_PERCENT * 2) * 100;

  return (
    <div className="w-full pb-12">
      <Swiper
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!rounded-4xl overflow-hidden"
            style={{ width: `${centerWidthPercent}%` }}
          >
            <div className="relative w-full h-[450px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 70vw"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function ProjectMediaSection() {
  const [activeTab, setActiveTab] = useState("photos");

  const content = useMemo(() => {
    if (activeTab === "photos") return { type: "images", items: projectMedia.photos };
    if (activeTab === "plans") return { type: "images", items: projectMedia.plans };
    if (activeTab === "videos") return { type: "videos", items: projectMedia.videos };
  }, [activeTab]);

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          Media
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-full border px-6 py-3 text-sm md:text-base transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#E6F06A] border-[#E6F06A] text-black"
                      : "bg-white border-gray-200 text-black hover:bg-gray-50"
                  }
                `}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        {content.type === "images" && (
          <MediaSwiper items={content.items} />
        )}

        {content.type === "videos" && (
          <div className="grid gap-6 md:grid-cols-2">
            {content.items.map((video) => (
              <div
                key={video.id}
                className="rounded-4xl overflow-hidden border border-gray-200 bg-black"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full h-[450px] object-cover"
                />
                {video.title && (
                  <div className="p-4 bg-white">
                    <p className="text-sm font-medium text-black">
                      {video.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}