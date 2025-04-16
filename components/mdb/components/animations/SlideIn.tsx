"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

/**
 * SlideIn
 * ---------------------
 * Animates its child by sliding in from a given direction on mount.
 *
 * ✅ Use for:
 * - Content that should enter dynamically
 * - Left/right reveals of HeroSplit, media, or CTAs
 * - Animated elements that complement FadeIn
 *
 * 🧠 Design Notes:
 * - Fully direction-aware: slide from left, right, top, or bottom
 * - Uses Framer Motion for smooth animation
 * - You can pair with ScrollReveal or StaggerGroup for sequenced entrances
 *
 * 🛠️ Props:
 * - children: ReactNode — the content to animate
 * - direction: 'left' | 'right' | 'top' | 'bottom' (default: 'left')
 * - delay: number (seconds, default: 0)
 * - duration: number (seconds, default: 0.6)
 * - distance: number (px offset to slide from, default: 60)
 * - className: string — utility overrides
 *
 * 🚀 Example Usage:
 * <SlideIn direction="left" delay={0.2}>
 *   <FloatingCard>Slides in from the left</FloatingCard>
 * </SlideIn>
 *
 * <SlideIn direction="right" distance={100} delay={0.4}>
 *   <FloatingCard className="bg-brand-dark text-white p-6">
 *     <h3 className="text-lg font-bold">Slide In with Style</h3>
 *     <p className="text-sm text-white/70">Smooth directional motion on mount.</p>
 *   </FloatingCard>
 * </SlideIn>
 */

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  distance = 60,
  className,
}: SlideInProps) {
  const offset = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    top: { x: 0, y: -distance },
    bottom: { x: 0, y: distance },
  }[direction];

  return (
    <motion.div
      className={clsx(className)}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
