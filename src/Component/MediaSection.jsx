"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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
    // overflow-hidden here clips the side-peek slides cleanly
    <div className="w-full pb-12 overflow-hidden">
      <Swiper
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={20}
        observer={true}
        observeParents={true}
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
            className="rounded-4xl overflow-hidden"
          >
            <div className="relative w-full h-[490px]">
              <Image
                src={item.src}
                alt={item.alt || "Media"}
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


export default function ProjectMediaSection({ project }) {
  const [activeTab, setActiveTab] = useState("photos");

  const media = project?.media ?? { photos: [], plans: [], videos: [] };

  const content = useMemo(() => {
    if (activeTab === "photos") return { type: "images", items: media.photos };
    if (activeTab === "plans") return { type: "images", items: media.plans };
    return { type: "videos", items: media.videos };
  }, [activeTab, media.photos, media.plans, media.videos]);

  const hasItems = content.items && content.items.length > 0;

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
                  ${isActive
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
        {!hasItems && (
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-black/60">
            No media available.
          </div>
        )}

        {hasItems && content.type === "images" && (
          <MediaSwiper items={content.items} />
        )}

        {content.type === "videos" && (
          <div className="flex flex-col gap-8">
            {content.items.map((video) => (
              <div
                key={video.id}
                className="rounded-4xl overflow-hidden border border-gray-200 bg-black"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full h-[300px] md:h-[560px] object-cover"
                />
                {video.title && (
                  <div className="px-5 py-4 bg-white">
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