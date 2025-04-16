"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface FormRowProps {
  label: string;
  children: ReactNode;
  description?: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
}

/**
 * FormRow
 * ---------------------
 * A layout helper that aligns a label and its corresponding field/input.
 * Use inside forms to keep vertical spacing and alignment consistent.
 *
 * ✅ Use for:
 * - TextInput, EmailInput, PasswordInput, etc.
 * - Consistent stacking and spacing of field elements
 * - Optional field description or hint
 *
 * 🧠 Design Notes:
 * - Styled as a single vertical block with optional description
 * - Use `htmlFor` to link label to field (accessibility)
 * - Pairs perfectly with FieldGroup or Form wrapper
 *
 * 🛠️ Props:
 * - label: string — visible label text
 * - children: ReactNode — form element (input, select, etc.)
 * - htmlFor?: string — input id for a11y
 * - description?: string — helper or guidance text
 * - required?: boolean — optional `*` mark
 * - className?: string — wrapper override
 * - labelClassName?: string — label override
 * - contentClassName?: string — input wrapper override
 *
 * 🚀 Example Usage:
 * <FormRow label="Email" htmlFor="email">
 *   <EmailInput id="email" />
 * </FormRow>
 *
 * <FormRow
 *   label="Username"
 *   htmlFor="username"
 *   required
 *   description="Must be unique and contain no spaces"
 * >
 *   <TextInput id="username" name="username" autoComplete="username" />
 * </FormRow>
 */

export default function FormRow({
  label,
  children,
  description,
  htmlFor,
  required = false,
  className,
  labelClassName,
  contentClassName,
}: FormRowProps) {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <label
        htmlFor={htmlFor}
        className={clsx("text-sm font-medium opacity-80", labelClassName)}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className={clsx("mt-1", contentClassName)}>{children}</div>

      {description && (
        <p className="text-xs opacity-70 mt-1 leading-tight">{description}</p>
      )}
    </div>
  );
}
