"use client";

import { ChangeEvent, InputHTMLAttributes, useRef } from "react";
import clsx from "clsx";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  description?: string;
}

/**
 * Checkbox
 * ---------------------
 * A fully stylable and accessible checkbox with label and optional description.
 *
 * ✅ Use for:
 * - Terms/agreements
 * - Filter selections
 * - Toggle-able settings in UI forms
 *
 * 🧠 Design Notes:
 * - Uses native checkbox for a11y
 * - Allows custom label, optional description, and layout control
 * - Pair with `FormRow` or `FieldGroup` for larger layouts
 *
 * 🛠️ Props:
 * - label: string — visible label
 * - name: string — form field name
 * - checked: boolean — controlled checked state
 * - onChange: function — handles value change
 * - description?: string — optional sublabel
 * - className?: string — outer wrapper style
 * - inputClassName?: string — input element style
 *
 * 🚀 Example Usage:
 * <Checkbox
 *   label="I accept the terms"
 *   name="terms"
 *   checked={acceptTerms}
 *   onChange={(e) => setAcceptTerms(e.target.checked)}
 * />
 */

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
  description,
  className,
  inputClassName,
  ...rest
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <label htmlFor={name} className={clsx("flex items-start gap-3", className)}>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={clsx(
          "h-5 w-5 mt-1 accent-brand border border-white/20 rounded-sm bg-white/10",
          inputClassName
        )}
        {...rest}
      />

      <div className="flex flex-col text-sm leading-tight">
        <span className="font-medium">{label}</span>
        {description && <span className="opacity-70">{description}</span>}
      </div>
    </label>
  );
}
