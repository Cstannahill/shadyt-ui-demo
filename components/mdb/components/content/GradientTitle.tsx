"use client";

import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface GradientTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  gradient?: string;
  size?: string;
}

/**
 * GradientTitle
 * ---------------------
 * Heading element with a gradient-filled text effect.
 *
 * ✅ Use for:
 * - Hero titles
 * - Section headers
 * - Branded callouts
 *
 * 🧠 Design Notes:
 * - Uses `bg-clip-text` and `text-transparent` for gradient text
 * - `as` lets you render any heading level (h1–h6)
 * - Customizable gradient + size
 *
 * 🛠️ Props:
 * - text: string (required) — content to display
 * - as: tag name (default: 'h2')
 * - gradient: string (Tailwind bg classes, default: teal-green combo)
 * - size: string (Tailwind text size class, default: 'text-3xl')
 * - className: string (optional overrides)
 *
 * 🚀 Example Usage:
 * <GradientTitle text="Welcome to MongoStyle" gradient="bg-gradient-to-r from-emerald-400 to-lime-500" />
 */

export default function GradientTitle({
  text,
  as: Tag = "h2",
  size = "text-3xl",
  gradient = "bg-gradient-to-r from-teal-400 to-green-500",
  className,
  ...rest
}: GradientTitleProps) {
  return (
    <Tag
      className={clsx(
        "font-bold bg-clip-text text-transparent",
        size,
        gradient,
        className
      )}
      {...rest}
    >
      {text}
    </Tag>
  );
}
