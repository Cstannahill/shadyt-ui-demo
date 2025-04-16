"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface StackedFeatureCardProps {
  title: string;
  description?: string;
  features?: string[];
  icon?: ReactNode;
  media?: ReactNode;
  className?: string;
  glow?: boolean;
  align?: "left" | "center";
}

/**
 * StackedFeatureCard
 * ---------------------
 * A vertically stacked card that highlights a main feature + sub-points.
 *
 * ✅ Use for:
 * - Feature breakdowns on landing pages
 * - Showing what's included in a plan
 * - Explaining grouped functionality
 *
 * 🧠 Design Notes:
 * - Title + description sit at top
 * - Optional list of subfeatures (text-only)
 * - Optional icon/media blocks support branding or visuals
 * - Optional glow adds attention/visual elevation
 *
 * 🛠️ Props:
 * - title: string — card heading
 * - description?: string — main summary or message
 * - features?: string[] — list of sub-bullets
 * - icon?: ReactNode — optional icon/emblem
 * - media?: ReactNode — optional image or graphic
 * - align?: 'left' | 'center' — text alignment (default: 'left')
 * - glow?: boolean — adds subtle green blur behind the card
 * - className?: string — optional custom styles
 *
 * 🚀 Example Usage:
 * <StackedFeatureCard title="Secure by default" description="End-to-end encryption across services" />
 *
 * <StackedFeatureCard
 *   title="Real-time Collaboration"
 *   description="Work with your team in real time"
 *   features={['Live cursors', 'Comments', 'Instant updates']}
 *   icon={<UsersIcon className="w-6 h-6 text-brand" />}
 *   glow
 *   className="bg-brand-dark text-white"
 * />
 */

export default function StackedFeatureCard({
  title,
  description,
  features,
  icon,
  media,
  align = "left",
  glow = false,
  className,
}: StackedFeatureCardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-xl p-6 sm:p-8 transition-all border border-white/10",
        "bg-gradient-to-b from-[#001f2e] to-[#002f40]",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {glow && (
        <div
          className="absolute inset-0 blur-[100px] opacity-10 pointer-events-none -z-10"
          style={{ backgroundColor: "#ffffff" }}
        />
      )}

      <div className="relative z-10 space-y-4">
        {icon && (
          <div className={clsx("text-3xl", align === "center" && "mx-auto")}>
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold">{title}</h3>

        {description && <p className="text-sm opacity-80">{description}</p>}

        {features && features.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm opacity-70 list-disc list-inside">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        {media && <div className="mt-4">{media}</div>}
      </div>
    </div>
  );
}
