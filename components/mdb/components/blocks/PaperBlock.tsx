"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface PaperBlockProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "glass" | "texture";
  padding?: string;
  color?: string;
  id?: string;
}

/**
 * PaperBlock
 * ---------------------
 * A flexible, elevated block-style container.
 * Commonly used for key content areas like feature tiles, callouts, or dashboards.
 *
 * ✅ Use for:
 * - Tactile cards
 * - Section wrappers
 * - Docs, dashboards, or highlights
 *
 * 🧠 Design Notes:
 * - Texture/blur/tint variants handled via `background` prop
 * - ClassName is merged for full Tailwind flexibility
 *
 * 🛠️ Props:
 * - background: 'default' | 'glass' | 'texture' (default: 'default')
 * - padding: string (Tailwind spacing, default: 'p-8')
 * - className: string (extra styles or overrides)
 *
 * 🚀 Example Usage:
 * <PaperBlock background="texture">
 *   <h2 className="text-xl text-white font-bold">Mongo-style block</h2>
 *   <p className="text-sm text-white/80">Feels layered, clean, and elegant.</p>
 * </PaperBlock>
 */

export default function PaperBlock({
  children,
  className,
  background = "default",
  padding = "p-8",
  id,
}: PaperBlockProps) {
  const baseStyles = clsx(
    "relative rounded-3xl shadow-xl overflow-hidden hover:ring-1 hover:ring-white/10 hover:outline-white/5 hover:outline-1 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01]",
    padding,
    className
  );

  const backgroundLayer =
    background === "glass"
      ? "bg-white/50 backdrop-blur-sm"
      : background === "texture"
      ? `bg-[url("/textures/paper-dark.jpg")] bg-cover bg-center bg-black`
      : "bg-gradient-to-br from-[#383737]/100 to-[#444040]/100";

  return (
    <div id="doc-content" className={clsx(baseStyles, backgroundLayer)}>
      {children}
    </div>
  );
}
