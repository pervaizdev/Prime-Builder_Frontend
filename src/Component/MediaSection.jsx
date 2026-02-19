"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { projectMedia } from "@/data/projectMedia";
import {
  HiOutlinePhoto,
  HiOutlineMap,
  HiOutlineVideoCamera,
  HiOutlineXMark,
  HiOutlineArrowsPointingOut,
  HiOutlineShare,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const TABS = [
  { key: "photos", label: "Photos", Icon: HiOutlinePhoto },
  { key: "plans", label: "Plans", Icon: HiOutlineMap },
  { key: "videos", label: "Video", Icon: HiOutlineVideoCamera },
];

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function Tabs({ active, setActive }) {
  return (
    <div className="flex gap-3">
      {TABS.map(({ key, label, Icon }) => (
        <button
          key={key}
          onClick={() => setActive(key)}
          className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition
            ${
              active === key
                ? "border-lime-200 bg-lime-300 text-black"
                : "border-black/10 bg-white text-black/70 hover:bg-black/5"
            }`}
        >
          <Icon className="text-lg" />
          {label}
        </button>
      ))}
    </div>
  );
}

function FocusCarousel({ items, type, onOpen }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);

  const prev = () => setActive((v) => Math.max(0, v - 1));
  const next = () => setActive((v) => Math.min(items.length - 1, v + 1));

  useEffect(() => {
    const updateOffset = () => {
      const container = containerRef.current;
      if (!container) return;

      const slide = container.querySelector("[data-slide]");
      if (!slide) return;

      const containerWidth = container.offsetWidth;
      const slideWidth = slide.offsetWidth;

      // center position
      const centerOffset = (containerWidth - slideWidth) / 2;
      setOffset(centerOffset);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent md:w-40" />

      <div className="relative overflow-hidden px-6 pb-4 md:px-10">
        <div
          className="flex items-center gap-8 transition-transform duration-500 ease"
          style={{
            transform: `translateX(${offset - active * (offset * 2)}px)`,
          }}
        >
          {items.map((item, i) => {
            const isActive = i === active;

            return (
              <button
                key={item.id}
                data-slide
                type="button"
                onClick={() => onOpen(i)}
                className={`relative shrink-0 overflow-hidden rounded-[40px] border border-black/10 bg-white shadow-sm
                  h-[300px] w-[70%] md:h-[420px] md:w-[60%] lg:h-[520px] lg:w-[55%]
                  transition duration-300
                  ${isActive ? "opacity-100" : "opacity-30"}`}
                style={{ filter: isActive ? "none" : "blur(2px)" }}
              >
                <div className="absolute inset-0">
                  {type === "video" ? (
                    <Image
                      src={item.poster}
                      alt={item.title || "Video"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt || "Media"}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        disabled={active === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-gray-100 disabled:opacity-40"
      >
        ←
      </button>

      <button
        onClick={next}
        disabled={active === items.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-gray-100 disabled:opacity-40"
      >
        →
      </button>
    </div>
  );
}



function Lightbox({ open, items, type, index, setIndex, onClose }) {
  const boxRef = useRef(null);
  const current = items[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((v) => Math.max(0, v - 1));
      if (e.key === "ArrowRight") setIndex((v) => Math.min(items.length - 1, v + 1));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, items.length, onClose, setIndex]);

  const fullscreen = async () => {
    try {
      const el = boxRef.current;
      if (!el) return;
      if (!document.fullscreenElement) await el.requestFullscreen();
      else await document.exitFullscreen();
    } catch {}
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="absolute left-6 top-6 z-10 text-white/80 text-sm font-semibold">
        {index + 1} / {items.length}
      </div>

      <div className="absolute right-6 top-6 z-10 flex gap-3">
        <button
          onClick={fullscreen}
          className="rounded-full bg-white/10 p-3 text-white hover:bg-white/15"
        >
          <HiOutlineArrowsPointingOut className="text-xl" />
        </button>
        <button
          onClick={() => alert("Dummy share links:\nFacebook\nTwitter\nCopy Link")}
          className="rounded-full bg-white/10 p-3 text-white hover:bg-white/15"
        >
          <HiOutlineShare className="text-xl" />
        </button>
        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-3 text-white hover:bg-white/15"
        >
          <HiOutlineXMark className="text-xl" />
        </button>
      </div>

      <div ref={boxRef} className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative h-[78vh] w-full max-w-[1100] overflow-hidden rounded-[28px] bg-black">
          {type === "video" ? (
            <video className="h-full w-full object-contain" controls autoPlay poster={current.poster}>
              <source src={current.src} type="video/mp4" />
            </video>
          ) : (
            <Image src={current.src} alt={current.alt || "Media"} fill className="object-contain" />
          )}
        </div>
      </div>

      <button
        onClick={() => setIndex((v) => Math.max(0, v - 1))}
        disabled={index === 0}
        className={`absolute left-10 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/15 ${
          index === 0 ? "opacity-40" : ""
        }`}
      >
        <HiOutlineChevronLeft className="text-3xl" />
      </button>

      <button
        onClick={() => setIndex((v) => Math.min(items.length - 1, v + 1))}
        disabled={index === items.length - 1}
        className={`absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/15 ${
          index === items.length - 1 ? "opacity-40" : ""
        }`}
      >
        <HiOutlineChevronRight className="text-3xl" />
      </button>
    </div>
  );
}

export default function MediaSection() {
  const [tab, setTab] = useState("photos");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const { items, type } = useMemo(() => {
    if (tab === "videos") return { items: projectMedia.videos, type: "video" };
    if (tab === "plans") return { items: projectMedia.plans, type: "image" };
    return { items: projectMedia.photos, type: "image" };
  }, [tab]);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-5xl font-extrabold text-black md:text-6xl">Media</h2>
        <Tabs active={tab} setActive={setTab} />
      </div>

      <div className="mt-10">
        <FocusCarousel items={items} type={type} onOpen={openAt} />
      </div>

      <Lightbox
        open={open}
        items={items}
        type={type}
        index={index}
        setIndex={setIndex}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
