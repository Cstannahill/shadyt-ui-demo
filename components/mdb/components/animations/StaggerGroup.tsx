"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerGroupProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}

/**
 * StaggerGroup
 * ---------------------
 * A wrapper that staggers the entrance animation of its children.
 * Works best when each child has its own animation (e.g., `FadeIn`, `SlideIn`, or `AnimationWrapper`)
 *
 * ✅ Use for:
 * - Rows of cards or feature blocks
 * - Lists of items that should animate in sequence
 * - ShowcaseRow children (FloatingCards)
 *
 * 🧠 How It Works:
 * - Framer Motion will animate all direct children (if they're also motion-enabled)
 * - This component applies the stagger effect
 * - Combine with `FadeIn`, `SlideIn`, or `AnimationWrapper` on each child for visual variety
 *
 * 🛠️ Props:
 * - children (ReactNode): Children must be individual motion components
 * - delay?: number (default: 0) — time before the whole group starts animating
 * - stagger?: number (default: 0.15) — spacing between each child's animation
 * - className?: string — wrapper className
 *
 * 🚀 Example Usage:
 * <StaggerGroup stagger={0.2}>
 *   <FadeIn>...</FadeIn>
 *   <FadeIn>...</FadeIn>
 *   <FadeIn>...</FadeIn>
 * </StaggerGroup>
 *
 * <StaggerGroup>
 * {features.map((feature, i) => (
 *   <FadeIn key={i}>
 *     <FloatingCard>{feature.title}</FloatingCard>
 *   </FadeIn>
 * ))}
 *</StaggerGroup>
 *
 *
 *
 *
 *
 * 📦 Dependencies:
 * - Requires Framer Motion (`npm install framer-motion`)
 */

export default function StaggerGroup({
  children,
  delay = 0,
  stagger = 0.15,
  className,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
