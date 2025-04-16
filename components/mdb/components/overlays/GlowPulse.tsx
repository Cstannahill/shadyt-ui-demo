"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlowPulseProps {
  children: ReactNode;
  color?: string;
  size?: string;
  intensity?: number;
  className?: string;
  pulseSpeed?: "slow" | "medium" | "fast";
  as?: keyof JSX.IntrinsicElements;
}

/**
 * GlowPulse
 * ---------------------
 * A background glow + pulse effect that sits behind the child element.
 * It adds a soft "energy" visual — perfect for callouts or logos.
 *
 * ✅ Use for:
 * - Emphasizing a FloatingCard or CTA
 * - Behind logos in hero sections
 * - Visual rhythm behind minimal UIs
 *
 * 🧠 Design Notes:
 * - Creates a blurred circular div behind the component
 * - Uses Tailwind-compatible animation classes for pulsing
 * - Can be positioned behind or around the child via relative/absolute stacking
 *
 * 🛠️ Props:
 * - color: string (Tailwind or hex) — default: '#00ED64'
 * - size: string (Tailwind width/height) — default: 'w-64 h-64'
 * - intensity: number (0.0–1.0) — sets glow opacity, default: 0.3
 * - pulseSpeed: 'slow' | 'medium' | 'fast' — default: 'medium'
 * - className: string — for wrapping element
 * - as: string — tag type (default: 'div')
 *
 * 🚀 Example Usage:
 * <GlowPulse>
 *   <FloatingCard>...</FloatingCard>
 * </GlowPulse>
 *
 *
 * <GlowPulse pulseSpeed="slow" intensity={0.15}>
 * <FloatingCard className="bg-[#001f2e] text-white p-6">
 *   <h3 className="text-lg font-bold">Elevated CTA</h3>
 *   <p className="text-sm text-white/70">Now with subtle power.</p>
 * </FloatingCard>
 *</GlowPulse>
 *
 *
 *
 *
 *
 * 📦 Dependencies:
 * - Uses Tailwind's `animate-pulse` class (or a custom pulse keyframe)
 */

export default function GlowPulse({
  children,
  color = "#00ED64",
  size = "w-64 h-64",
  intensity = 0.3,
  pulseSpeed = "medium",
  className,
  as = "div",
}: GlowPulseProps) {
  const Wrapper = as as any;

  const animationClass =
    pulseSpeed === "slow"
      ? "animate-pulse-slow"
      : pulseSpeed === "fast"
      ? "animate-pulse-fast"
      : "animate-pulse";

  return (
    <Wrapper className={clsx("relative inline-block", className)}>
      <div
        className={clsx(
          "absolute inset-0 mx-auto my-auto rounded-full blur-3xl pointer-events-none z-0",
          size,
          animationClass
        )}
        style={{
          backgroundColor: color,
          opacity: intensity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </Wrapper>
  );
}
