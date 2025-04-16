"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
  className?: string;
  orientation?: "vertical" | "horizontal";
  trend?: string;
}

/**
 * MetricCard
 * ---------------------
 * A compact card designed to highlight a key stat or metric.
 *
 * ✅ Use for:
 * - KPI or analytics dashboards
 * - Feature callouts with numbers
 * - Highlighted stats in landing page sections
 *
 * 🧠 Design Notes:
 * - Works with text only, or with icons and descriptions
 * - Two layout modes: vertical (stacked) or horizontal (row)
 * - Defaults are minimal and clean, easily brandable
 *
 * 🛠️ Props:
 * - label: string — small text above or next to the value
 * - value: string | number — the stat to highlight
 * - icon?: ReactNode — optional left/top icon
 * - description?: string — optional subtext below the stat
 * - orientation?: 'vertical' | 'horizontal' (default: 'vertical')
 * - className?: string — custom utility classes
 *
 * 🚀 Example Usage:
 * <MetricCard label="Requests/sec" value="3.2K" />
 *
 * <MetricCard
 *   label="Uptime"
 *   value="99.99%"
 *   icon={<CheckCircleIcon className="w-6 h-6 text-brand" />}
 *   description="based on the last 90 days"
 *   className="bg-brand-dark text-white"
 * />
 */

export default function MetricCard({
  label,
  value,
  icon,
  description,
  orientation = "vertical",
  className,
}: MetricCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl p-6 shadow-sm border border-white/10 bg-white/5 backdrop-blur-sm",
        orientation === "horizontal" ? "flex items-center gap-4" : "space-y-2",
        className
      )}
    >
      {icon && <div className="text-2xl">{icon}</div>}

      <div>
        <div className="text-sm font-medium opacity-70">{label}</div>
        <div className="text-3xl font-bold">{value}</div>
        {description && (
          <div className="text-xs opacity-60 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
}
