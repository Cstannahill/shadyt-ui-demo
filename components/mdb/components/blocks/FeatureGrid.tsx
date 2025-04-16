"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
  align?: "left" | "center";
}

/**
 * FeatureGrid
 * ---------------------
 * A simple icon + text grid for visualizing product features or advantages.
 *
 * ✅ Use for:
 * - Homepage feature blocks
 * - Why Us / Platform benefits
 * - Product or pricing feature support
 *
 * 🧠 Design Notes:
 * - Responsive grid (defaults to 3 columns on desktop)
 * - Icons are optional
 * - Can center or left-align text
 *
 * 🛠️ Props:
 * - features: Feature[] — array of feature data
 * - title?: string — optional section heading
 * - subtitle?: string — optional short intro
 * - columns?: 2 | 3 | 4 — number of columns (default: 3)
 * - align?: 'left' | 'center' — text alignment (default: left)
 * - className?: string — wrapper override
 *
 * 🚀 Example Usage:
 * <FeatureGrid
 *   title="What’s Included"
 *   features={[{ title: "Fast API", description: "90ms response time." }]}
 * />
*
*
* <FeatureGrid
*   title="Why Use This UI Kit?"
*   subtitle="Build faster, design cleaner, and ship confidently."
*   columns={3}
*   align="center"
*   features={[
*    {
*      title: 'Reusable Components',
*     description: 'Copy, customize, and compose them across projects.',
*      icon: <span>🧩</span>,
*    },
*    {
*      title: 'Brandable Design Tokens',
*      description: 'Built-in theme support with Tailwind + CSS vars.',
*      icon: <span>🎨</span>,
*    },
*    {
*      title: 'Developer-First API',
*      description: 'Extremely flexible props and clean TypeScript interfaces.',
*      icon: <span>⚙️</span>,
*    },
*  ]}
/>

 */

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  align = "left",
  className,
}: FeatureGridProps) {
  const columnClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  const textAlign =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className={clsx("w-full py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {(title || subtitle) && (
          <div className={clsx("max-w-3xl mx-auto space-y-2", textAlign)}>
            {title && (
              <h2 className="text-3xl font-bold text-white">{title}</h2>
            )}
            {subtitle && <p className="text-white/70">{subtitle}</p>}
          </div>
        )}

        <div className={clsx("grid gap-10", columnClass)}>
          {features.map((feature, i) => (
            <div key={i} className={clsx("flex flex-col gap-2", textAlign)}>
              {feature.icon && <div className="text-3xl">{feature.icon}</div>}
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
