"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface FieldGroupProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  border?: boolean;
  spacing?: string;
}

/**
 * FieldGroup
 * ---------------------
 * Visually and semantically groups a set of form rows under a labeled block.
 *
 * ✅ Use for:
 * - Chunking forms into sections (e.g. Account Info, Preferences)
 * - Creating accessible, labeled form groups
 * - Improving readability of long forms
 *
 * 🧠 Design Notes:
 * - Optional top title + description
 * - Optional border (default: false)
 * - Pass any `FormRow`, `TextInput`, `Toggle`, or field elements as children
 *
 * 🛠️ Props:
 * - title?: string — section heading
 * - description?: string — short description below heading
 * - children: ReactNode — form rows, toggles, etc.
 * - border?: boolean — adds border/padding to group (default: false)
 * - spacing?: string — custom gap between children (default: 'gap-4')
 * - className?: string — wrapper styling override
 * - headingClassName?: string — override for title styling
 *
 * 🚀 Example Usage:
 * <FieldGroup title="Profile Info">
 *   <FormRow label="Name"><TextInput /></FormRow>
 *   <FormRow label="Email"><EmailInput /></FormRow>
 * </FieldGroup>
 *
 * <FieldGroup
 *   title="Preferences"
 *   description="These apply to your account only"
 *   border
 *   className="bg-white/5 rounded-lg p-6"
 * >
 *   <Toggle name="newsletter" label="Receive updates" />
 *   <Checkbox name="tos" label="Agree to terms" checked onChange={() => {}} />
 * </FieldGroup>
 */

export default function FieldGroup({
  title,
  description,
  children,
  border = false,
  spacing = "gap-4",
  className,
  headingClassName,
}: FieldGroupProps) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full",
        spacing,
        border && "border border-white/10 rounded-md p-4 sm:p-6",
        className
      )}
    >
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3
              className={clsx(
                "text-sm font-semibold uppercase tracking-wide opacity-80",
                headingClassName
              )}
            >
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs opacity-60 mt-1">{description}</p>
          )}
        </div>
      )}

      <div className={clsx("flex flex-col", spacing)}>{children}</div>
    </div>
  );
}
