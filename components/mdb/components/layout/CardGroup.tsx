"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardGroupProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  gap?: string;
  className?: string;
}

/**
 * CardGroup
 * ---------------------
 * A responsive grid container for rendering card components with consistent spacing.
 * Works with FloatingCard, MetricCard, TestimonialCard, etc.
 *
 * ✅ Use for:
 * - Grouping cards in ShowcaseRows
 * - Creating reusable grid layout patterns for content blocks
 * - Responsive display of key feature/benefit cards
 *
 * 🧠 Design Notes:
 * - Defaults to 3 columns (adjustable via `columns`)
 * - Use `maxWidth` to constrain container if needed
 * - Pass any card component inside (doesn't enforce card type)
 *
 * 🛠️ Props:
 * - children: ReactNode — array of cards or elements to render
 * - columns?: 2 | 3 | 4 — number of grid columns (default: 3)
 * - maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full' — layout container width (default: 'xl')
 * - gap?: string — Tailwind gap classes (default: 'gap-6')
 * - className?: string — optional overrides
 *
 * 🚀 Example Usage:
 * <CardGroup columns={3}>
 *   <FloatingCard />
 *   <FloatingCard />
 *   <FloatingCard />
 * </CardGroup>
 *
 * <CardGroup columns={2} maxWidth="lg" gap="gap-8" className="pt-12">
 *   <MetricCard label="Users" value="1.4M" />
 *   <MetricCard label="Conversion" value="38%" />
 * </CardGroup>
 */

export default function CardGroup({
  children,
  columns = 3,
  maxWidth = "xl",
  gap = "gap-6",
  className,
}: CardGroupProps) {
  const columnClasses =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={clsx("w-full", className)}>
      <div
        className={clsx(
          `max-w-${maxWidth} mx-auto grid ${columnClasses} ${gap}`
        )}
      >
        {children}
      </div>
    </div>
  );
}
