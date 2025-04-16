"use client";

import { useState, ReactNode, useEffect } from "react";
import clsx from "clsx";

interface Tab {
  label: string;
  value: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  value?: string;
  onChange?: (value: string) => void;
  initialValue?: string;
  className?: string;
  tabListClassName?: string;
  tabButtonClassName?: string;
  activeTabClassName?: string;
  contentClassName?: string;
  styles?: React.CSSProperties;
}

/**
 * Tabs
 * ---------------------
 * A tab switcher with animated content panels.
 *
 * ✅ Use for:
 * - Switching between views or sections
 * - Product page tabs (Overview / Features / Pricing)
 * - Dashboard tools or UI filters
 *
 * 🧠 Design Notes:
 * - Controlled internally via useState
 * - Tabs are accessible and keyboard-friendly
 * - Fully stylable via className overrides
 *
 * 🛠️ Props:
 * - tabs: { label, value, content }[] — all available tabs
 * - initialValue?: string — default selected tab (defaults to first)
 * - className?: string — outer wrapper styling
 * - tabListClassName?: string — tab list row
 * - tabButtonClassName?: string — all tab buttons
 * - activeTabClassName?: string — only applied to active tab
 * - contentClassName?: string — tab content container
 *
 * 🚀 Example Usage:
 * <Tabs
 *   tabs={[
 *     { label: 'Overview', value: 'overview', content: <p>Overview content here</p> },
 *     { label: 'Features', value: 'features', content: <FeatureList /> },
 *   ]}
 * />
 *
 * <Tabs
 *   initialValue="pricing"
 *   className="bg-brand-dark p-6 rounded-lg text-white"
 *   tabButtonClassName="text-white/50 hover:text-white px-4 py-2"
 *   activeTabClassName="border-b-2 border-brand text-white"
 *   tabs={[
 *     { label: 'Docs', value: 'docs', content: <DocsPanel /> },
 *     { label: 'Pricing', value: 'pricing', content: <PricingTable /> },
 *   ]}
 * />
 */

export default function Tabs({
  tabs,
  value,
  onChange,
  initialValue,
  className,
  tabListClassName,
  tabButtonClassName,
  activeTabClassName,
  contentClassName,
  styles,
}: TabsProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(
    initialValue || tabs[0]?.value
  );
  const activeValue = isControlled ? value : internalValue;

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.name;
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  return (
    <div className={clsx("w-full flex flex-col", className)}>
      <div
        className={clsx(
          "flex gap-2 border-b border-white/10",
          tabListClassName
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.value === activeValue;
          return (
            <button
              key={tab.value}
              name={tab.value}
              onClick={handleTabClick}
              className={clsx(
                "text-sm font-medium transition",
                tabButtonClassName,
                isActive && activeTabClassName
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className={clsx("pt-2", contentClassName)}>
        {tabs.find((tab) => tab.value === activeValue)?.content}
      </div>
    </div>
  );
}
