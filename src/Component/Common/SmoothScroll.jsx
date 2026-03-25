"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

/**
 * SmoothScroll component using Lenis for premium, synchronized scrolling.
 * This ensures that Framer Motion animations and scroll positions feel extremely smooth,
 * solving the "scroll less smooth" issue mentioned by the user.
 */
export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  );
}
