"use client";

import clsx from "clsx";
import TestimonialCard from "@/components/mdb/components/ui/cards/TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  logo?: React.ReactNode;
}

interface TestimonialsRowProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * TestimonialsRow
 * ---------------------
 * A responsive row of testimonial cards with optional title/intro.
 *
 * ✅ Use for:
 * - Landing page social proof
 * - Case study sections
 * - Above footer credibility
 *
 * 🧠 Design Notes:
 * - Uses existing `TestimonialCard`
 * - Stacks on small screens, flex on large
 * - Can include section heading + subtitle
 *
 * 🛠️ Props:
 * - testimonials: Testimonial[] — array of testimonial data
 * - title?: string — section heading
 * - subtitle?: string — short intro text
 * - className?: string — wrapper override
 *
 * 🚀 Example Usage:
 * <TestimonialsRow
 *   title="What Our Users Say"
 *   subtitle="Trusted by developers and designers across industries"
 *   testimonials={[
 *     { quote: "...", name: "Ava", role: "CTO", avatarUrl: "/ava.png" },
 *     ...
 *   ]}
 * />
 */

export default function TestimonialsRow({
  testimonials,
  title,
  subtitle,
  className,
}: TestimonialsRowProps) {
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              role={t.role}
              company={t.company}
              avatarUrl={t.avatarUrl}
              logo={t.logo}
              className="bg-white/5 text-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
