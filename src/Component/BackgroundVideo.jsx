import React from "react";

export default function BackgroundVideo({
  src,
  webmSrc,
  type = "video/mp4",
  overlay = true,
  overlayOpacity = "bg-black/25",
}) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/video-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* WebM loads first (better compression + quality) */}
        {webmSrc && <source src={webmSrc} type="video/webm" />}

        {/* Fallback MP4 */}
        <source src={src} type={type} />
      </video>

      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
    </div>
  );
}