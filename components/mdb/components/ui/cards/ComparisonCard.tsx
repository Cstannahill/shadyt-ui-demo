"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export interface ComparisonCardProps {
  title: string;
  sideA: ReactNode;
  sideB: ReactNode;
  iconA?: ReactNode;
  iconB?: ReactNode;
  labelA?: string;
  labelB?: string;
  highlight?: boolean;
  className?: string;
}

/**
 * ComparisonCard
 * ---------------------
 * A two-column card for side-by-side feature, plan, or concept comparison.
 *
 * ✅ Use for:
 * - Comparing Free vs Pro
 * - Feature support tables
 * - Technology stack comparisons
 *
 * 🧠 Design Notes:
 * - Side A and B are passed as content slots (ReactNode)
 * - Optional icons + labels for contextual branding
 * - Optional `highlight` applies emphasized border/blur/shadow
 *
 * 🛠️ Props:
 * - title: string — main heading of the card
 * - sideA: ReactNode — left column content
 * - sideB: ReactNode — right column content
 * - iconA?: ReactNode — optional top-left icon
 * - iconB?: ReactNode — optional top-right icon
 * - labelA?: string — left label text
 * - labelB?: string — right label text
 * - highlight?: boolean — adds border/shadow pop
 * - className?: string — utility overrides
 *
 * 🚀 Example Usage:
 * <ComparisonCard
 *   title="Free vs Pro"
 *   labelA="Free"
 *   labelB="Pro"
 *   sideA={<ul><li>✔ 1 user</li><li>✘ Priority support</li></ul>}
 *   sideB={<ul><li>✔ Unlimited users</li><li>✔ Priority support</li></ul>}
 * />
 *
 * <ComparisonCard
 *   title="Vite vs Webpack"
 *   labelA="Vite"
 *   labelB="Webpack"
 *   iconA={<img src="/icons/vite.svg" className="h-6" />}
 *   iconB={<img src="/icons/webpack.svg" className="h-6" />}
 *   sideA={<p>Fast cold starts, modern dev workflow</p>}
 *   sideB={<p>Mature plugin ecosystem, wide adoption</p>}
 *   highlight
 *   className="bg-[#001f2e] text-white"
 * />
 * -----------------------------------
 * <ComparisonCard
  title="Local Hosting vs Cloud"
  labelA="Local"
  labelB="Cloud"
  iconA={<ComputerDesktopIcon className="w-5 h-5 text-brand" />}
  iconB={<CloudIcon className="w-5 h-5 text-brand" />}
  sideA={
    <ul className="text-sm list-disc pl-4 opacity-80">
      <li>No recurring fees</li>
      <li>Manual scaling</li>
      <li>Offline support</li>
    </ul>
  }
  sideB={
    <ul className="text-sm list-disc pl-4 opacity-80">
      <li>Global scalability</li>
      <li>Usage-based pricing</li>
      <li>Always up-to-date</li>
    </ul>
  }
/>
 * 
 * 
 * 
 * 
 * 
 * 
 */

export default function ComparisonCard({
  title,
  sideA,
  sideB,
  iconA,
  iconB,
  labelA,
  labelB,
  highlight = false,
  className,
}: ComparisonCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 lg:p-8 border transition-all",
        highlight
          ? "border-brand shadow-xl backdrop-blur-sm"
          : "border-white/10 bg-white/5",
        className
      )}
    >
      <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-2 flex flex-col items-center">
          {iconA && <div className="flex justify-center">{iconA}</div>}
          {labelA && (
            <div className="text-sm font-semibold opacity-70">{labelA}</div>
          )}
          <div>{sideA}</div>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          {iconB && <div className="flex justify-center">{iconB}</div>}
          {labelB && (
            <div className="text-sm font-semibold opacity-70">{labelB}</div>
          )}
          <div>{sideB}</div>
        </div>
      </div>
    </div>
  );
}
