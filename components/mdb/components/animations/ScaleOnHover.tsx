"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ScaleOnHoverProps {
  children: ReactNode;
  scaleAmount?: number;
  shadow?: boolean;
  glowColor?: string;
  className?: string;
  transitionDuration?: number;
}

/**
 * ScaleOnHover
 * ---------------------
 * Adds a subtle scale animation on hover, with optional shadow/glow.
 * Gives visual feedback and makes elements feel interactive and elevated.
 *
 * ✅ Use for:
 * - FloatingCards, buttons, CTAs
 * - Logo rows or interactive elements
 * - Anything you want to "respond" on hover
 *
 * 🧠 Design Notes:
 * - Uses CSS scale transform on hover
 * - Optional `glowColor` adds a blurred, colored background pulse
 * - Fully compatible with Tailwind utilities and layout wrappers
 *
 * 🛠️ Props:
 * - children: ReactNode — your wrapped content
 * - scaleAmount?: number — default: 1.03 (e.g. 1.1 = 10% grow)
 * - shadow?: boolean — applies shadow-md on hover (default: true)
 * - glowColor?: string — adds blurred glow behind element (default: none)
 * - className?: string — wrapper class override
 * - transitionDuration?: number — in ms (default: 200)
 *
 * 🚀 Example Usage:
 * <ScaleOnHover glowColor="#00ED64">
 *   <FloatingCard>...</FloatingCard>
 * </ScaleOnHover>
 *
 *<ScaleOnHover scaleAmount={1.05} glowColor="#00ED64" shadow>
 * <FloatingCard className="bg-brand-dark text-white p-6">
 *  <h3 className="text-lg font-bold">Try It Free</h3>
 * <p className="text-sm text-white/70">Launch something vibrant.</p>
 * </FloatingCard>
 *</ScaleOnHover>
 *
 */

export default function ScaleOnHover({
  children,
  scaleAmount = 1.03,
  shadow = true,
  glowColor,
  className,
  transitionDuration = 200,
}: ScaleOnHoverProps) {
  return (
    <div
      className={clsx(
        "relative group inline-block transition-transform duration-200 ease-in-out",
        className
      )}
      style={{
        transitionDuration: `${transitionDuration}ms`,
      }}
    >
      {glowColor && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-300 z-0"
          style={{ backgroundColor: glowColor }}
        />
      )}

      <div
        className={clsx(
          "relative z-10 transition-transform transform",
          shadow && "group-hover:shadow-md"
        )}
        style={{
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        <div
          className="transition-transform"
          style={{
            transform: `scale(1)`,
          }}
        >
          <div
            className="group-hover:scale-[var(--scaleAmount)]"
            style={
              {
                "--scaleAmount": scaleAmount,
              } as React.CSSProperties
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
