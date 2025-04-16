"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import TexturedOverlay from "../overlays/TexturedOverlay";

interface SectionBlockProps {
  children: ReactNode;
  id?: string;
  background?: string;
  padding?: string;
  className?: string;
  containerClassName?: string;
  texture?: boolean;
  textureOpacity?: number;
  curvedEdges?: "top" | "bottom" | "both";
}

/**
 * SectionBlock
 * ---------------------
 * A universal wrapper for layout sections.
 * Now supports optional texture and curved SVG edges.
 *
 * ✅ Use for:
 * - HeroSplit, ShowcaseRow, or grouped content blocks
 * - Anchoring with IDs
 * - Background fills, gradients, or textures
 * - Transition sections with curves
 *
 * 🧠 Design Notes:
 * - Curves use SVG paths via absolute wrappers
 * - Texture layering handled by <TexturedOverlay />
 * - Padding defaults are large for vertical rhythm
 *
 * 🛠️ Props:
 * - id?: string — for navigation anchors
 * - background?: string — Tailwind bg class
 * - padding?: string — Tailwind padding (default: 'py-24')
 * - texture?: boolean — adds a soft grain layer
 * - textureOpacity?: number — controls visibility (default: 0.04)
 * - curvedEdges?: 'top' | 'bottom' | 'both'
 *
 * 🚀 Example Usage:
 * <SectionBlock
 *   id="features"
 *   curvedEdges="bottom"
 *   background="bg-[#001f2e]"
 *   texture
 * >
 *   <ShowcaseRow columns={3}>...</ShowcaseRow>
 * </SectionBlock>
 *
 * Curves + Texture:
 * <SectionBlock
 * id="intro"
 * curvedEdges="both"
 * background="bg-gradient-to-b from-[#001927] to-[#001f2e]"
 * texture
 * >
 * <HeroSplit
 *   title="Build with structure and style"
 *   subtitle="Reusable, elevated, animated"
 *   media={<img src="/img/ui-block.png" className="rounded-lg shadow-xl" />}
 * />
 *</SectionBlock>
 *
 */

export default function SectionBlock({
  children,
  id,
  background,
  padding = "py-24",
  className,
  containerClassName,
  texture = false,
  textureOpacity = 0.04,
  curvedEdges,
}: SectionBlockProps) {
  const content = (
    <div
      className={clsx("relative w-full", background, padding, className)}
      id={id}
    >
      {curvedEdges === "top" || curvedEdges === "both" ? (
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

      <div
        className={clsx(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>

      {curvedEdges === "bottom" || curvedEdges === "both" ? (
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
    </div>
  );

  return texture ? (
    <TexturedOverlay opacity={textureOpacity}>{content}</TexturedOverlay>
  ) : (
    content
  );
}
