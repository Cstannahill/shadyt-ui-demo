"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

/**
 * NavItem
 * ---------------------
 * A flexible navigation link component with active state awareness.
 *
 * ✅ Use for:
 * - Header and sidebar navigation
 * - Horizontal and vertical nav menus
 * - Styled and active-aware anchor links
 *
 * 🧠 Design Notes:
 * - Uses `usePathname()` to detect current route
 * - `exact` mode controls partial path match (e.g. `/docs` vs `/docs/intro`)
 * - Fully overrideable styles via className + activeClassName
 *
 * 🛠️ Props:
 * - href: string — navigation target
 * - children: ReactNode — link text or element
 * - exact?: boolean — match exact path (default: false)
 * - className?: string — base styling
 * - activeClassName?: string — added if link is active
 *
 * 🚀 Example Usage:
 * <NavItem href="/docs">Docs</NavItem>
 *
 * <NavItem
 *   href="/blog"
 *   className="text-white/60 hover:text-white"
 *   activeClassName="text-white font-bold"
 * >
 *   Blog
 * </NavItem>
 */

export default function NavItem({
  href,
  children,
  className,
  activeClassName = "text-white font-semibold",
  exact = false,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname?.startsWith(href);
  const combined = clsx(className, isActive && activeClassName);

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
