"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  className?: string;
}

/**
 * ScrollReveal
 * ---------------------
 * Reveals its child with a fade+rise animation once it enters the viewport.
 *
 * ✅ Use for:
 * - Feature tiles in ShowcaseRow
 * - FloatingCards that animate on scroll
 * - Any element you don’t want to animate on initial load
 *
 * 🧠 Design Notes:
 * - Uses IntersectionObserver internally (via useRef)
 * - Optional `once` prop prevents re-triggering on scroll
 * - Defaults to `fade + y offset`, but can be styled with `className`
 *
 * 🛠️ Props:
 * - children: ReactNode — the content to animate
 * - delay?: number — animation delay in seconds (default: 0)
 * - duration?: number — animation duration in seconds (default: 0.6)
 * - yOffset?: number — rise from offset in px (default: 20)
 * - once?: boolean — if true, reveals only once (default: true)
 * - className?: string — additional styling on wrapper
 *
 * 🚀 Example Usage:
 * <ScrollReveal>
 *   <FloatingCard>Revealed on scroll!</FloatingCard>
 * </ScrollReveal>
 *
 * <ScrollReveal delay={0.2} yOffset={30}>
 *   <FloatingCard className="bg-brand-dark text-white p-6">
 *     <h3 className="text-lg font-bold">Trusted by teams</h3>
 *     <p className="text-sm text-white/70">Subtle, smooth entry animation.</p>
 *   </FloatingCard>
 * </ScrollReveal>
 */

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasRevealed(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  const shouldAnimate = once ? hasRevealed || isVisible : isVisible;

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial={{ opacity: 0, y: yOffset }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
