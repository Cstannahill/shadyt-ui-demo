"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Link from "next/link";

type CTALink = {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
};
interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  link?: CTALink;
}

/**
 * CTAButton
 * ---------------------
 * A stylized, brand-friendly action button for landing pages, modals, and cards.
 *
 * ✅ Use for:
 * - Signup, Try Now, or Learn More actions
 * - Prominent actions in Hero or SpotlightCard
 * - Inline callouts inside FloatingCards
 *
 * 🧠 Design Notes:
 * - `primary`: solid green background
 * - `secondary`: semi-transparent background
 * - `ghost`: no background, bordered
 * - `glow`: adds glow ring on hover
 * - `icon`: left or right slot for icon (ReactNode)
 *
 * 🛠️ Props:
 * - variant?: 'primary' | 'secondary' | 'ghost' (default: 'primary')
 * - size?: 'sm' | 'md' | 'lg' (default: 'md')
 * - glow?: boolean — adds glow ring on hover
 * - icon?: ReactNode — icon element to render
 * - iconPosition?: 'left' | 'right' (default: 'left')
 * - className?: string — utility class override
 * - ...rest: standard <button> props
 *
 * 🚀 Example Usage:
 * <CTAButton>Get Started</CTAButton>
 *
 * <CTAButton
 *   variant="secondary"
 *   glow
 *   icon={<ArrowRightIcon className="w-4 h-4" />}
 *   iconPosition="right"
 *   className="text-white"
 * >
 *   Try Free
 * </CTAButton>
 */

export default function CTAButton({
  variant = "primary",
  size = "md",
  glow = false,
  icon,
  iconPosition = "left",
  className,
  children,
  onClick,
  link,
  ...rest
}: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Button clicked!");
    }
  };
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClass = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  }[size];

  const variantClass = {
    primary: "bg-brand text-white hover:bg-brand/90",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    ghost: "border border-white/20 text-white hover:border-white/40",
  }[variant];

  const glowStyle = glow ? "hover:shadow-[0_0_0_4px_rgba(0,237,100,0.4)]" : "";

  return link ? (
    <Link
      href={link.href}
      target={link.target || "_blank"}
      rel="noopener noreferer"
    >
      <button
        onClick={handleClick}
        type="button"
        className={clsx(base, sizeClass, variantClass, glowStyle, className)}
        {...rest}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2 -ml-1">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2 -mr-1">{icon}</span>
        )}
      </button>
    </Link>
  ) : (
    <button
      onClick={handleClick}
      type="button"
      className={clsx(base, sizeClass, variantClass, glowStyle, className)}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 -ml-1">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 -mr-1">{icon}</span>
      )}
    </button>
  );
}
