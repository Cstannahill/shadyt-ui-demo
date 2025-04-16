// components/layout/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/mdb/components/navigation/Navbar";
import SidebarLayout from "./SidebarLayout";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Forms", href: "/demo/forms" },
  { label: "Navigation", href: "/demo/navigation" },
  { label: "Blocks", href: "/demo/blocks" },
  { label: "Cards", href: "/demo/ui/cards" },
  { label: "Docs", href: "/docs" },
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSidebarRoute =
    pathname.startsWith("/docs") || pathname.startsWith("/demo");

  if (isSidebarRoute) {
    return <SidebarLayout sidebarItems={navItems}>{children}</SidebarLayout>;
  }

  return (
    <>
      <Navbar menuItems={navItems} layout="top" />
      <main>{children}</main>
    </>
  );
}
