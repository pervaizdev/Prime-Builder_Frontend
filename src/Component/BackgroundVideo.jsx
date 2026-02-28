import React from "react";

export default function BackgroundVideo({
  src,
  type = "video/mp4",
  overlay = true,
  overlayOpacity = "bg-black/45",
}) {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={src} type={type} />
      </video>

      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
    </div>
  );
}