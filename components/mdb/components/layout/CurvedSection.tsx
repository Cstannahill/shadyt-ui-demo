"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CurvedSectionProps {
  children: ReactNode;
  position?: "top" | "bottom" | "both";
  background?: string;
  className?: string;
}

/**
 * CurvedSection
 * ---------------------
 * Wraps a section with curved top/bottom edges.
 * Useful for visually splitting sections with soft transitions.
 *
 * ✅ Use for:
 * - Landing page sections
 * - Between-content transitions
 * - Hero/footer split visuals
 *
 * 🧠 Design Notes:
 * - Uses SVG masks for smooth curve transition
 * - Accepts background color class or gradient
 * - Position can control curve on top, bottom, or both
 *
 * 🛠️ Props:
 * - position: 'top' | 'bottom' | 'both' (default: 'bottom')
 * - background: string (Tailwind classes, default: 'bg-[#001f2e]')
 * - className: string (optional for overrides)
 *
 * 🚀 Example Usage:
 * <CurvedSection position="both" background="bg-gradient-to-b from-gray-900 to-gray-950">
 *   <PaperBlock>...</PaperBlock>
 * </CurvedSection>
 */

export default function CurvedSection({
  children,
  position = "bottom",
  background = "bg-[#001f2e]",
  className,
}: CurvedSectionProps) {
  return (
    <section
      className={clsx("relative overflow-hidden", background, className)}
    >
      {position === "top" || position === "both" ? (
        <div className="absolute top-0 w-full -translate-y-full">
          <svg
            className="w-full h-[80px]"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ) : null}

      {children}

      {position === "bottom" || position === "both" ? (
        <div className="absolute bottom-0 w-full translate-y-full">
          <svg
            className="w-full h-[80px]"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C480,80 960,-80 1440,0 L1440,80 L0,80 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ) : null}
    </section>
  );
}
