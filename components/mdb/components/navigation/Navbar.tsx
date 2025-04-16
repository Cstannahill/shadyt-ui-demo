"use client";

import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import NavItem from "./NavItem";
import { Divider } from "../docs/Divider";
import BrandHeader from "../blocks/BrandHeader";
import Image from "next/image";

type LayoutMode = "top" | "side" | "both";

interface NavbarProps {
  brand?: ReactNode;
  menuItems: { label: string; href: string }[];
  layout?: LayoutMode;
  cta?: ReactNode;
  className?: string;
}

/**
 * Navbar
 * ---------------------
 * A responsive navigation bar with top, side, or hybrid layout modes.
 *
 * ✅ Use for:
 * - Application shell or site-wide navigation
 * - Header + side menu combo layouts
 * - Full-brand nav with optional CTA
 *
 * 🧠 Design Notes:
 * - Supports layout mode: 'top', 'side', or 'both'
 * - Mobile menu toggle built-in
 * - Fully composable with `NavItem`, `CTAButton`, logo slot, etc.
 *
 * 🛠️ Props:
 * - brand?: ReactNode — left logo or brand slot
 * - menuItems: { label: string; href: string }[] — nav links
 * - layout?: 'top' | 'side' | 'both' (default: 'top')
 * - cta?: ReactNode — optional call-to-action button
 * - className?: string — wrapper styling
 *
 * 🚀 Example Usage:
 * <Navbar
 *   brand={<Logo />}
 *   menuItems={[{ label: 'Docs', href: '/docs' }]}
 *   layout="top"
 *   cta={<CTAButton>Get Started</CTAButton>}
 * />
 */
const getIcon = () => {
  return (
    <>
      <Image
        src="/icons/shadyt-fng.png"
        alt="Logo"
        width={170}
        height={170}
        objectFit="cover"
        className="rounded-2xl border border-slate-300/50 shadow-sm shadow-slate-300/80 p-1"
      />
    </>
  );
};
const brandIcon = getIcon();
export default function Navbar({
  brand,
  menuItems,
  layout = "top",
  cta,
  className,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTop = layout === "top" || layout === "both";
  const isSide = layout === "side" || layout === "both";

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const linkCount = menuItems.length;
  const mapNavItems = (menuItem) => {
    return (
      <NavItem key={menuItem.href} href={menuItem.href}>
        {menuItem.label}
      </NavItem>
    );
  };

  const mapSideNavItems = (menuItem, index) => {
    // if (index === linkCount - 1) {
    //   return (
    //     <React.Fragment key={menuItem.href}>
    //       <NavItem
    //         key={menuItem.href}
    //         href={menuItem.href}
    //         className="text-center"
    //       >
    //         {menuItem.label}
    //       </NavItem>
    //     </React.Fragment>
    //   );
    if (index === 0) {
      return (
        <React.Fragment key={menuItem.href}>
          <Divider
            spacing={1}
            key={menuItem.href + "divivder"}
            className="my-0"
          />
          <NavItem
            key={menuItem.href}
            href={menuItem.href}
            className="text-center active:bg-slate-400"
          >
            {menuItem.label}
          </NavItem>
          <Divider
            spacing={1}
            key={menuItem.href + "divivder"}
            className="my-0"
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={menuItem.href}>
          <NavItem
            key={menuItem.href}
            href={menuItem.href}
            className="text-center"
          >
            {menuItem.label}
          </NavItem>
          <Divider
            spacing={1}
            key={menuItem.href + "divivder"}
            className="my-0"
          />
        </React.Fragment>
      );
    }
  };
  return (
    <>
      {/* Top Navigation */}
      {isTop && (
        <header
          className={clsx(
            "w-full flex bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 items-center justify-between px-4 py-3 bg-brand-dark text-white shadow-md",
            className
          )}
        >
          <div className="flex items-center gap-4">
            {brand && <div className="text-lg font-bold">{brand}</div>}
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map(mapNavItems)}
          </nav>

          <div className="hidden md:flex items-center gap-2">{cta}</div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </header>
      )}

      {/* Side Drawer */}
      {isSide && (
        <aside
          className="bg-gradient-to-b from-[#0f172a] to-[#1e293b]

 text-white w-full  rounded-xl"
        >
          <BrandHeader
            icon={brandIcon}
            brandName="shadyt-ui"
            subtitle="ai, ui, db, api"
            className="mb-6 w-full"
          />
          <nav className="flex flex-col gap-4 ">
            {menuItems.map(mapSideNavItems)}
            {cta && <div className="mt-4">{cta}</div>}
          </nav>
        </aside>
      )}
    </>
  );
}
