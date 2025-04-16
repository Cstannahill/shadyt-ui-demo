"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  logo?: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

/**
 * TestimonialCard
 * ---------------------
 * A testimonial quote block with person, role, and optional branding.
 *
 * ✅ Use for:
 * - Landing page testimonials or quotes
 * - Customer callouts in ShowcaseRow
 * - Social proof in product or pricing pages
 *
 * 🧠 Design Notes:
 * - Designed to be clean, trust-building, and readable
 * - Optional avatar or company logo slot
 * - Responsive and minimal by default
 *
 * 🛠️ Props:
 * - quote: string — the actual testimonial quote
 * - name: string — person giving the quote
 * - role?: string — their role or title
 * - company?: string — company name (optional)
 * - avatarUrl?: string — photo of person
 * - logo?: ReactNode — optional brand/logo element
 * - className?: string — extra utility classes
 * - variant?: 'light' | 'dark' (default: 'dark')
 *
 * 🚀 Example Usage:
 * <TestimonialCard
 *   quote="The components saved us months of design work!"
 *   name="Alex Morgan"
 *   role="Lead Engineer"
 *   company="NovaLabs"
 * />
 *
 * <TestimonialCard
 *   quote="Our users instantly noticed the UI upgrade. It’s slick."
 *   name="Sasha Trent"
 *   role="Design Lead"
 *   company="Nimbus"
 *   avatarUrl="/avatars/sasha.png"
 *   logo={<img src="/logos/nimbus.svg" className="h-6" />}
 *   className="bg-brand-dark text-white"
 * />
 */

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarUrl,
  logo,
  className,
  variant = "dark",
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl p-6 shadow-sm border border-white/10 transition-all",
        variant === "dark" ? "bg-white/5 text-white" : "bg-white text-gray-900",
        className
      )}
    >
      <blockquote className="text-lg italic leading-relaxed opacity-90 mb-4">
        “{quote}”
      </blockquote>

      <div className="flex items-center gap-4 mt-4">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}

        <div className="flex flex-col text-sm">
          <span className="font-semibold">{name}</span>
          {role && (
            <span className="opacity-70">
              {role}
              {company && `, ${company}`}
            </span>
          )}
        </div>

        {logo && <div className="ml-auto">{logo}</div>}
      </div>
    </div>
  );
}
