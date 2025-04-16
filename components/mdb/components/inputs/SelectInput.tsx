"use client";

import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "type"> {
  label?: string;
  name: string;
  options: Option[];
  required?: boolean;
  placeholder?: string;
  className?: string;
  selectClassName?: string;
  optionsClassName?: string;
  description?: string;
}

/**
 * SelectInput
 * ---------------------
 * A styled <select> element for choosing from defined options.
 *
 * ✅ Use for:
 * - Role selectors, regions, categories, preferences
 * - Settings and filters
 *
 * 🧠 Design Notes:
 * - Accepts an array of `{ label, value }` objects
 * - Optional label, placeholder, and subtext
 * - Fully stylable via className and selectClassName
 *
 * 🛠️ Props:
 * - name: string — form field name
 * - label?: string — visible label text
 * - options: { label, value }[] — options to render
 * - placeholder?: string — optional unselectable first value
 * - required?: boolean — HTML required attribute
 * - description?: string — small help text
 * - className?: string — wrapper div styling
 * - selectClassName?: string — <select> element styling
 *
 * 🚀 Example Usage:
 * <SelectInput name="role" options={[{ label: 'Admin', value: 'admin' }]} />
 *
 * <SelectInput
 *   name="region"
 *   label="Data Region"
 *   placeholder="Choose a region"
 *   options={[
 *     { label: 'US East', value: 'us-east' },
 *     { label: 'Europe', value: 'eu' },
 *   ]}
 *   className="max-w-sm"
 *   selectClassName="bg-brand-dark text-white border-white/20"
 * />
 */

export default function SelectInput({
  label,
  name,
  options,
  placeholder,
  required = false,
  description,
  className,
  selectClassName,
  optionsClassName,
  ...rest
}: SelectInputProps) {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium opacity-80">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        required={required}
        className={clsx(
          "rounded-md px-4 py-2 bg-white/10 text-white border border-white/10 transition",
          selectClassName
        )}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className={optionsClassName || "text-black"}
          >
            {opt.label}
          </option>
        ))}
      </select>

      {description && <p className="text-xs opacity-70 mt-1">{description}</p>}
    </div>
  );
}
