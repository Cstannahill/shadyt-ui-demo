"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface EmailInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  required?: boolean;
  autoComplete?: string;
  dataType?: string;
  className?: string;
  inputClassName?: string;
}

/**
 * EmailInput
 * ---------------------
 * A styled email input with optional label, browser autofill, and internal data-type support.
 *
 * ✅ Use for:
 * - Newsletter signup forms
 * - Auth/login modals
 * - Form rows inside CTA or SpotlightCards
 *
 * 🧠 Design Notes:
 * - Uses HTML `type="email"` for autofill + keyboard support
 * - Supports browser autofill and password managers via `autocomplete` + `name`
 * - `data-type` allows internal mapping or analytics
 * - Customizable outer + inner styles
 *
 * 🛠️ Props:
 * - label?: string — optional label above input
 * - name?: string — input name (important for autofill; default: "email")
 * - autoComplete?: string — hint for autofill (default: "email")
 * - dataType?: string — adds `data-type="..."` attribute
 * - required?: boolean — native HTML required
 * - className?: string — outer container styles
 * - inputClassName?: string — input field styles
 * - ...rest: other <input> props
 *
 * 🚀 Example Usage:
 * <EmailInput label="Email" name="email" autoComplete="email" />
 *
 * <EmailInput
 *   label="Your email"
 *   required
 *   name="contactEmail"
 *   autoComplete="email"
 *   dataType="marketing"
 *   inputClassName="bg-white/10 border border-white/20 text-white"
 *   className="w-full max-w-sm"
 * />
 */

export default function EmailInput({
  label,
  required = false,
  name = "email",
  autoComplete = "email",
  dataType,
  className,
  inputClassName,
  ...rest
}: EmailInputProps) {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium opacity-80">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type="email"
        autoComplete={autoComplete}
        data-type={dataType}
        required={required}
        className={clsx(
          "rounded-md px-4 py-2 bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand",
          inputClassName
        )}
        {...rest}
      />
    </div>
  );
}
