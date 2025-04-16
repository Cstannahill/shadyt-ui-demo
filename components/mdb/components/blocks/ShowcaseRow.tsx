"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ShowcaseRowProps {
  title?: string;
  subtitle?: string;
  cards: ReactNode[];
  columns?: 2 | 3 | 4;
  align?: "left" | "center";
  className?: string;
}

/**
 * ShowcaseRow
 * ---------------------
 * A flexible row of feature cards or content previews.
 *
 * ✅ Use for:
 * - Highlighting core components, features, or tools
 * - Landing page midsection
 * - Product benefits, use cases, or demos
 *
 * 🧠 Design Notes:
 * - Responsive grid with optional alignment + column control
 * - Accepts any card-style ReactNode as a child
 * - Optional title/subtitle for section intro
 *
 * 🛠️ Props:
 * - cards: ReactNode[] — array of card components (e.g. FloatingCard, SpotlightCard)
 * - title?: string — optional section heading
 * - subtitle?: string — optional short intro
 * - columns?: 2 | 3 | 4 — sets card grid columns (default: 3)
 * - align?: 'left' | 'center' — text alignment for title/subtitle
 * - className?: string — wrapper styling
 *
 * 🚀 Example Usage:
 * <ShowcaseRow
 *   title="Explore Components"
 *   subtitle="Quick to deploy. Easy to extend."
 *   cards={[<FloatingCard />, <SpotlightCard />]}
 * />
 */

export default function ShowcaseRow({
  title,
  subtitle,
  cards,
  columns = 3,
  align = "left",
  className,
}: ShowcaseRowProps) {
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

        <div className={clsx("grid gap-8", columnClass)}>
          {cards.map((card, i) => (
            <div key={i}>{card}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
