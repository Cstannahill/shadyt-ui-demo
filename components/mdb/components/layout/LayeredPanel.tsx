"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface LayeredPanelProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "brand" | "glass";
  border?: boolean;
  padding?: string;
  shadow?: boolean;
  glow?: boolean;
}

/**
 * LayeredPanel
 * ---------------------
 * A decorative panel wrapper designed to create visual depth.
 * Great for nested content, feature callouts, or previews.
 *
 * ✅ Use for:
 * - Framing highlighted features
 * - Creating 3D-style stacked visual layers
 * - Encasing content in dark/light glassy shells
 *
 * 🧠 Design Notes:
 * - Combines border, background, glow, and blur props for layered look
 * - Highly customizable, can be nested or stacked in CardGroup/ShowcaseRow
 * - Pairs well with GlassPanel, PaperBlock, or CTA blocks
 *
 * 🛠️ Props:
 * - children: ReactNode — content to render
 * - background?: 'default' | 'brand' | 'glass' (default: 'default')
 * - border?: boolean — default: true
 * - shadow?: boolean — default: true
 * - glow?: boolean — adds subtle glow (default: false)
 * - padding?: string — default: 'p-6'
 * - className?: string — override styles
 *
 * 🚀 Example Usage:
 * <LayeredPanel><h3>Try Now</h3></LayeredPanel>
 *
 * <LayeredPanel
 *   background="brand"
 *   glow
 *   border
 *   shadow
 *   className="text-white"
 * >
 *   <h3 className="text-xl font-semibold">Start for Free</h3>
 *   <p className="text-sm opacity-80 mt-2">Includes full access.</p>
 * </LayeredPanel>
 */

export default function LayeredPanel({
  children,
  background = "default",
  border = true,
  shadow = true,
  glow = false,
  padding = "p-6",
  className,
}: LayeredPanelProps) {
  const bgStyle =
    background === "glass"
      ? "bg-white/5 backdrop-blur-md"
      : background === "brand"
      ? "bg-brand-dark"
      : "bg-[#0f1f28]";

  return (
    <div
      className={clsx(
        "relative rounded-xl transition-all",
        padding,
        bgStyle,
        border && "border border-white/10",
        shadow && "shadow-lg",
        className
      )}
    >
      {glow && (
        <div
          className="absolute inset-0 blur-[100px] opacity-10 pointer-events-none -z-10"
          style={{ backgroundColor: "#00ED64" }}
        />
      )}
      {children}
    </div>
  );
}
