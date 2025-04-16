"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  tint?: "light" | "dark" | "none";
  border?: boolean;
}

/**
 * GlassPanel
 * ---------------------
 * A frosted-glass UI layer with soft blur, tint, and elevation.
 *
 * ✅ Use for:
 * - Overlays and modal panels
 * - Elevated UI within dark layouts
 * - Hero sections with background blur
 *
 * 🧠 Design Notes:
 * - Uses backdrop-filter for blur
 * - Optionally includes semi-transparent tint layer
 * - Can include border for separation
 *
 * 🛠️ Props:
 * - blur: boolean (default: true)
 * - tint: 'light' | 'dark' | 'none' (default: 'dark')
 * - border: boolean (default: true)
 *
 * 🚀 Example Usage:
 * <GlassPanel>
 *   <h3>Blurred but beautiful</h3>
 * </GlassPanel>
 *  
 * ----------------------
 * <TexturedOverlay opacity={0.04}>
  <GlassPanel className="text-white">
    <h2 className="text-lg font-semibold">Mongo-style overlay</h2>
    <p className="text-sm text-white/70">Frosted + textured + elegant.</p>
  </GlassPanel>
</TexturedOverlay>
 * 
 * 
 * -----------------------
 */

export default function GlassPanel({
  children,
  className,
  blur = true,
  tint = "dark",
  border = true,
}: GlassPanelProps) {
  const tintColor =
    tint === "light"
      ? "bg-white/30"
      : tint === "dark"
      ? "bg-black/20"
      : "bg-transparent";

  return (
    <div
      className={clsx(
        "rounded-xl p-6 transition-all duration-200",
        blur && "backdrop-blur-sm",
        tintColor,
        border && "border border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
