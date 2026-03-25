"use client";

import React, { useRef, useEffect } from "react";

export default function BackgroundVideo({
  src,
  webmSrc,
  type = "video/mp4",
  overlay = true,
  overlayOpacity = "bg-black/25",
  poster = "/images/video-poster.jpg"
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to handle slow network/autopause by forcing play on mobile if possible
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.warn("Autoplay failed, user interaction may be required", e);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black/10 select-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      >
        {/* Prioritize WebM for performance */}
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        
        {/* Support the provided src directly if it's already webm/mp4 */}
        <source src={src} type={src.endsWith(".webm") ? "video/webm" : type} />
        
        Your browser does not support the video tag.
      </video>

      {overlay && (
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${overlayOpacity}`} 
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
}