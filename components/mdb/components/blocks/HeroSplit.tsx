"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface HeroSplitProps {
  title: string;
  subtitle?: string;
  media?: ReactNode;
  reverse?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * HeroSplit
 * ---------------------
 * A two-column hero layout with text/media split.
 * Can be reversed for right-align visual balance.
 *
 * ✅ Use for:
 * - Product landing sections
 * - Above-the-fold intros
 * - Brand + image or brand + component demos
 *
 * 🧠 Design Notes:
 * - Reversible layout via `reverse`
 * - Responsive stacking on smaller viewports
 * - Media slot can be an <img>, component, or animation
 *
 * 🛠️ Props:
 * - title: string — heading text
 * - subtitle?: string — optional subtext
 * - media?: ReactNode — media block (image/video/component)
 * - reverse?: boolean — swaps column order
 * - children?: ReactNode — allows buttons/extra content under text
 * - className?: string — layout wrapper styling
 *
 * 🚀 Example Usage:
 * <HeroSplit
 *   title="Powerful, Simple Mongo-Style UI"
 *   subtitle="Start building apps with depth and elegance"
 *   media={<img src="/img/ui-preview.png" className="rounded-xl shadow-xl" />}
 * />
 */

export default function HeroSplit({
  title,
  subtitle,
  media,
  reverse = false,
  children,
  className,
}: HeroSplitProps) {
  return (
    <section className={clsx("w-full py-24", className)}>
      <div
        className={clsx(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* Text Side */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          {subtitle && <p className="text-lg text-white/80">{subtitle}</p>}
          {children && <div className="mt-6">{children}</div>}
        </div>

        {/* Media Side */}
        {media && (
          <div className="flex justify-center items-center">{media}</div>
        )}
      </div>
    </section>
  );
}
