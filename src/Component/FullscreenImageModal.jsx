"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function FullScreenImageModal({
  images = [],
  selectedIndex = 0,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 md:p-8">
      <button
        onClick={onClose}
        className="absolute top-25 right-4 md:top-6 md:right-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
        aria-label="Close preview"
      >
        <FiX size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Previous image"
          >
            <FiChevronLeft size={26} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Next image"
          >
            <FiChevronRight size={26} />
          </button>
        </>
      )}

      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-[72vh] md:h-[88vh]">
          <Image
            src={currentImage?.src}
            alt={currentImage?.alt || "Preview image"}
            fill
            quality={100}
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}