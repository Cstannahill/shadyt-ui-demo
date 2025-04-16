"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GradientBackgroundProps {
  children: ReactNode;
  type?: "radial" | "linear";
  className?: string;
}

/**
 * GradientBackground
 * ---------------------
 * Wraps children in a stylized background layer.
 * Useful as a soft section background, hero overlay, or behind cards.
 *
 * ✅ Use for:
 * - Landing page sections
 * - Hero callouts
 * - Inset or masked backgrounds
 *
 * 🧠 Design Notes:
 * - Supports radial and linear themes
 * - Can be combined with `TexturedOverlay` or `GlassPanel`
 * - Use `z-index` carefully if layering
 *
 * 🛠️ Props:
 * - type: 'radial' | 'linear' (default: 'radial')
 * - className: string
 *
 * 🚀 Example Usage:
 * <GradientBackground>
 *   <PaperBlock>...</PaperBlock>
 * </GradientBackground>
 */

export default function GradientBackground({
  children,
  type = "radial",
  className,
}: GradientBackgroundProps) {
  const gradient =
    type === "radial"
      ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ED64]/10 via-[#001f2e]/60 to-[#001f2e]"
      : "bg-gradient-to-b from-[#001927] via-[#001f2e] to-[#002f40]";

  return (
    <div className={clsx("relative", gradient, className)}>{children}</div>
  );
}
