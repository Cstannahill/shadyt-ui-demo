"use client";

import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  brand?: ReactNode;
  links?: FooterLink[];
  copyright?: string;
  className?: string;
}

/**
 * Footer
 * ---------------------
 * A clean, centered site or app footer with links and branding.
 *
 * ✅ Use for:
 * - Portfolio/demo site bottom sections
 * - Branding + navigation + copyright
 * - Pairing with CalloutBanner, TestimonialsRow, etc.
 *
 * 🧠 Design Notes:
 * - Automatically stacks on mobile
 * - `brand` can be logo, text, or component
 * - Link styling and layout is overrideable
 *
 * 🛠️ Props:
 * - brand?: ReactNode — logo or site name
 * - links?: { label, href }[] — footer nav links
 * - copyright?: string — legal / copyright string
 * - className?: string — outer styling override
 *
 * 🚀 Example Usage:
 * <Footer
 *   brand={<span className="font-mono text-brand">/components</span>}
 *   links={[{ label: 'GitHub', href: 'https://github.com' }]}
 * />
 *-----------------------------------
*<Footer
*  brand={<span className="font-mono text-brand">once-ui</span>}
*  links={[
*    { label: 'GitHub', href: 'https://github.com/your-org' },
*    { label: 'Docs', href: '/docs' },
*    { label: 'License', href: '/license' },
*  ]}
*  copyright="2025 Christian Tannahill"
/>
*
 */

export default function Footer({
  brand,
  links,
  copyright,
  className,
}: FooterProps) {
  return (
    <footer
      className={clsx(
        "w-full border-t border-white/10 bg-brand-dark text-white py-10 px-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center">
        {brand && <div className="text-xl font-bold">{brand}</div>}

        {links && links.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {copyright && (
          <p className="text-xs text-white/50 mt-2">&copy; {copyright}</p>
        )}
      </div>
    </footer>
  );
}
