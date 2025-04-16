"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface SpotlightCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  media?: ReactNode;
  className?: string;
  glowColor?: string;
  align?: "left" | "center";
}

/**
 * SpotlightCard
 * ---------------------
 * A bold, glowing feature or CTA card used to highlight standout elements.
 *
 * ✅ Use for:
 * - Standalone feature highlights
 * - Call-to-action with strong visuals
 * - Promotion blocks, events, or limited offers
 *
 * 🧠 Design Notes:
 * - Supports media (image/illustration), icon, and glow effect
 * - Default is a centered dark card with brand green glow
 * - Align left/right using `align` if used in multi-column layouts
 *
 * 🛠️ Props:
 * - title: string — main headline
 * - subtitle?: string — supporting text
 * - icon?: ReactNode — optional top icon or emoji
 * - media?: ReactNode — optional bottom image/graphic
 * - glowColor?: string — blurred pulse background color (default: #00ED64)
 * - align?: 'left' | 'center' — text alignment (default: center)
 * - className?: string — utility overrides
 *
 * 🚀 Example Usage:
 * <SpotlightCard title="Now with AI" subtitle="Automatically generate UIs." />
 *
 * <SpotlightCard
 *   title="MongoDB + AI"
 *   subtitle="Train and deploy fine-tuned models using our platform."
 *   icon={<SparklesIcon className="w-6 h-6 text-brand" />}
 *   media={<img src="/img/ai-demo.png" className="rounded-xl" />}
 *   glowColor="#00ED64"
 *   className="bg-brand-dark text-white"
 * />
 */

export default function SpotlightCard({
  title,
  subtitle,
  icon,
  media,
  glowColor = "#00ED64",
  className,
  align = "center",
}: SpotlightCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-12 shadow-md border border-white/10 transition-all",
        "bg-gradient-to-b from-[#001f2e] to-[#002f40]",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Glowing background pulse */}
      <div
        className="absolute inset-0 pointer-events-none blur-[80px] opacity-20"
        style={{ backgroundColor: glowColor }}
      />

      <div className="relative z-10 space-y-4">
        {icon && <div className="text-3xl mx-auto">{icon}</div>}
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
        <div></div>
        {media && <div className="mt-4 flex justify-center">{media}</div>}
      </div>
    </div>
  );
}
