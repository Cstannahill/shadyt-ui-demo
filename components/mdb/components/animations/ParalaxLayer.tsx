"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // lower = moves slower = deeper
  offset?: number; // vertical offset from natural position
  className?: string;
  triggerScale?: number; // how much scroll affects it
}

/**
 * ParallaxLayer
 * ---------------------
 * Applies a scroll-based translation to simulate depth and layering.
 * Common in modern landing pages, especially when combined with imagery.
 *
 * ✅ Use for:
 * - Hero illustrations or background SVGs
 * - Textured overlays that should move slower
 * - Adding subtle scroll dynamics to decorative layers
 *
 * 🧠 Design Notes:
 * - Uses scroll position relative to viewport height
 * - The lower the `speed`, the more the element "lags behind"
 * - Works best with absolute/fixed positioning or layers inside SectionBlock
 *
 * 🛠️ Props:
 * - children: ReactNode — your animated content
 * - speed?: number — how slow it scrolls (default: 0.3)
 * - offset?: number — initial vertical offset (default: 0)
 * - triggerScale?: number — how sensitive to scroll it is (default: 1.0)
 * - className?: string — optional wrapper classes
 *
 * 🚀 Example Usage:
 * <ParallaxLayer>
 *   <img src="/blob.svg" className="w-96 opacity-60" />
 * </ParallaxLayer>
 *
 * <ParallaxLayer speed={0.2} offset={-30}>
 *   <img src="/img/logo-glow.png" className="absolute -top-12 left-0 z-0" />
 * </ParallaxLayer>
 */

export default function ParallaxLayer({
  children,
  speed = 0.3,
  offset = 0,
  triggerScale = 1.0,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const y = offset + scrollY * speed * triggerScale;

  return (
    <div
      ref={ref}
      className={clsx(
        "will-change-transform transition-transform ease-out",
        className
      )}
      style={{
        transform: `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
