"use client";

import { useState, useRef, InputHTMLAttributes, ChangeEvent } from "react";
import clsx from "clsx";

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  dataType?: string;
  className?: string;
  inputClassName?: string;
}

/**
 * PasswordInput
 * ---------------------
 * A password input with show/hide toggle and accessible styling.
 *
 * ✅ Use for:
 * - Login, signup, and password reset forms
 * - Secure fields where visibility toggle improves UX
 *
 * 🧠 Design Notes:
 * - Uses `type="password"` + toggle to `type="text"`
 * - Extracted event handlers
 * - Fully extendable via className
 *
 * 🛠️ Props:
 * - label?: string — optional label
 * - name?: string — input name (default: 'password')
 * - required?: boolean — HTML required attribute
 * - autoComplete?: string — hint to browser (default: 'current-password')
 * - dataType?: string — optional `data-type`
 * - className?: string — container styling
 * - inputClassName?: string — field styling
 * - ...rest: Other <input> props
 *
 * 🚀 Example Usage:
 * <PasswordInput label="Password" />
 *
 * <PasswordInput
 *   label="New Password"
 *   name="newPassword"
 *   autoComplete="new-password"
 *   className="max-w-sm"
 *   inputClassName="bg-brand-dark text-white border-white/20"
 * />
 */

export default function PasswordInput({
  label,
  required = false,
  name = "password",
  autoComplete = "current-password",
  dataType,
  className,
  inputClassName,
  ...rest
}: PasswordInputProps) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleToggleVisibility = () => setVisible((prev) => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    rest.onChange?.(e);
  };

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium opacity-80">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          required={required}
          autoComplete={autoComplete}
          data-type={dataType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={clsx(
            "w-full rounded-md px-4 py-2 pr-10 bg-white/10 text-white placeholder-white/50 border border-white/10 transition",
            focused && "ring-2 ring-brand",
            inputClassName
          )}
          {...rest}
        />

        <button
          type="button"
          onClick={handleToggleVisibility}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90 text-sm"
        >
          {visible ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
}
