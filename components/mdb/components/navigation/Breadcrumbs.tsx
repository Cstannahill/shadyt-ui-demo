"use client";

import Link from "next/link";
import clsx from "clsx";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
  separator?: React.ReactNode;
  itemClassName?: string;
}

/**
 * Breadcrumbs
 * ---------------------
 * A simple hierarchical path display, often used near headers or page titles.
 *
 * ✅ Use for:
 * - Navigating between nested sections (Docs > Guides > Installation)
 * - Reflecting dynamic paths in dashboards or settings pages
 *
 * 🧠 Design Notes:
 * - Final item is treated as current and non-clickable
 * - Separator is customizable (defaults to ›)
 * - Easily styled via `className` or `itemClassName`
 *
 * 🛠️ Props:
 * - items: { label, href? }[] — each breadcrumb step
 * - separator?: ReactNode — string or icon between items (default: ›)
 * - className?: string — wrapper styling
 * - itemClassName?: string — link or span style
 *
 * 🚀 Example Usage:
 * <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'API' }]} />
 *
 * <Breadcrumbs
 *   items={[
 *     { label: 'Projects', href: '/projects' },
 *     { label: 'SynapseChain', href: '/projects/synapse' },
 *     { label: 'Deployment' },
 *   ]}
 *   separator="⟩"
 *   className="text-sm text-white/80"
 *   itemClassName="hover:underline"
 * />
 */

export default function Breadcrumbs({
  items,
  separator = "›",
  className,
  itemClassName,
}: BreadcrumbsProps) {
  return (
    <nav
      className={clsx("flex items-center gap-2", className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className={clsx("text-sm", itemClassName)}>
                {item.label}
              </Link>
            ) : (
              <span
                className={clsx("text-sm opacity-70", itemClassName)}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            {!isLast && <span className="opacity-50">{separator}</span>}
          </span>
        );
      })}
    </nav>
  );
}
