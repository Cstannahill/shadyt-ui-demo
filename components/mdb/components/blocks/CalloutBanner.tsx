"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CalloutBannerProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * CalloutBanner
 * ---------------------
 * A strong visual call-to-action banner, typically placed before the footer or between sections.
 *
 * ✅ Use for:
 * - Promoting signups or demos
 * - Drawing attention to product launches
 * - Mid or end-page conversion boosts
 *
 * 🧠 Design Notes:
 * - Fully customizable with slot-based CTA button
 * - Optional alignment: center (default) or left
 * - Background + text style can be overridden via `className`
 *
 * 🛠️ Props:
 * - title: string — main headline
 * - subtitle?: string — supporting callout
 * - action?: ReactNode — slot for CTAButton or link
 * - align?: 'left' | 'center' — alignment (default: center)
 * - className?: string — section wrapper
 *
 * 🚀 Example Usage:
 * <CalloutBanner title="Ready to launch?" action={<CTAButton>Get Started</CTAButton>} />
 */

export default function CalloutBanner({
  title,
  subtitle,
  action,
  align = "center",
  className,
}: CalloutBannerProps) {
  return (
    <section
      className={clsx(
        "w-full py-20 px-4 bg-gradient-to-r from-brand to-green-500 text-white",
        className
      )}
    >
      <div
        className={clsx(
          "max-w-4xl mx-auto flex flex-col gap-4 items-center",
          align === "left" ? "text-left items-start" : "text-center"
        )}
      >
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-white/80 max-w-xl">{subtitle}</p>}
        {action && <div className="mt-4">{action}</div>}
      </div>
    </section>
  );
}
