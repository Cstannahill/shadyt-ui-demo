// components/layout/BrandHeader.tsx
import { ReactNode } from "react";
import clsx from "clsx";

interface BrandHeaderProps {
  icon: ReactNode;
  brandName: string;
  subtitle?: string;
  className?: string;
}

export default function BrandHeader({
  icon,
  brandName,
  subtitle,
  className,
}: BrandHeaderProps) {
  return (
    <div
      className={clsx(
        "flex items-center w-full gap-4  rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-md border border-white/10",
        className
      )}
    >
      <div className=" mx-0 w-20 h- flex items-center justify-center rounded-lg bg-white/10">
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight">{brandName}</span>
        {subtitle && (
          <span className="text-xs opacity-60 leading-tight">{subtitle}</span>
        )}
      </div>
    </div>
  );
}
