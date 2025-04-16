"use client";

import clsx from "clsx";
import StackedFeatureCard from "@/components/mdb/components/ui/cards/StackedFeatureCard";

interface Plan {
  title: string;
  description?: string;
  features?: string[];
  icon?: React.ReactNode;
  glow?: boolean;
  media?: React.ReactNode;
  className?: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: Plan[];
  className?: string;
}

/**
 * PricingSection
 * ---------------------
 * A responsive pricing grid using `StackedFeatureCard` for each plan/tier.
 *
 * ✅ Use for:
 * - Tiered SaaS pricing
 * - Package breakdowns
 * - Usage-based feature grouping
 *
 * 🧠 Design Notes:
 * - Horizontally scrollable on mobile, stacked on larger screens
 * - Simple structure for integrating buttons or pricing logic
 * - Can use glow or icon accents for premium tiers
 *
 * 🛠️ Props:
 * - title?: string — section heading
 * - subtitle?: string — short subtext
 * - plans: Plan[] — array of plan data
 * - className?: string — section wrapper
 *
 * 🚀 Example Usage:
 * <PricingSection
 *   title="Choose Your Plan"
 *   subtitle="Flexible pricing for any team size"
 *   plans={[{ title: 'Starter', features: ['1 Project'], glow: true }]}
 * />
 */

export default function PricingSection({
  title,
  subtitle,
  plans,
  className,
}: PricingSectionProps) {
  return (
    <section className={clsx("w-full py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto space-y-2">
            {title && (
              <h2 className="text-3xl font-bold text-white">{title}</h2>
            )}
            {subtitle && <p className="text-white/70">{subtitle}</p>}
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <StackedFeatureCard
              key={i}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              icon={plan.icon}
              glow={plan.glow}
              media={plan.media}
              className={plan.className || "text-white"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
