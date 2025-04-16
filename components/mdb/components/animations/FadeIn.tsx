"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * FadeIn
 * ---------------------
 * A simple animation wrapper that fades in and slides up
 * its content as it enters the page.
 *
 * ✅ Use for:
 * - Hero titles or subtitles
 * - Cards inside a ShowcaseRow
 * - Any element you want to reveal gently on mount or scroll
 *
 * 🧠 What This Does:
 * - Wraps your content in a <motion.div>
 * - Starts with `opacity: 0` and `y` position offset
 * - Transitions to `opacity: 1` and normal position when it appears
 * - Uses Framer Motion under the hood
 *
 * 💡 Beginner Tips:
 * - You don’t need to manage visibility logic — Framer handles it
 * - `yOffset` controls how far it "rises" from (default: 20px)
 * - `delay` and `duration` are in seconds (0.2 = 200ms)
 * - Use `FadeIn` inside any layout (SectionBlock, FloatingCard, etc.)
 *
 * 🛠️ Props:
 * - children (ReactNode) — the content to animate
 * - delay?: number — seconds before animation starts (default: 0)
 * - duration?: number — how long it takes to animate (default: 0.6)
 * - yOffset?: number — how far it rises from (default: 20)
 * - className?: string — utility classes applied to motion div
 *
 * 🚀 Example Usage:
 * <FadeIn delay={0.3}>
 *   <GradientTitle text="Animate everything." />
 * </FadeIn>
 *
 * 📦 Dependencies:
 * - Requires Framer Motion (`npm i framer-motion`)
 */

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
