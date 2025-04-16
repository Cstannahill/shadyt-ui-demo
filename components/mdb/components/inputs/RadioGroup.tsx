"use client";

import { ReactNode, useId, ChangeEvent } from "react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
  description?: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  optionClassName?: string;
  required?: boolean;
}

/**
 * RadioGroup
 * ---------------------
 * A styled group of radio buttons for selecting one of many options.
 *
 * ✅ Use for:
 * - Plan selection, roles, preferences
 * - Survey-style UI or single-choice filter
 *
 * 🧠 Design Notes:
 * - Each option can have label + optional description
 * - Fully stylable via className overrides
 * - Supports a11y with proper grouping + label linking
 *
 * 🛠️ Props:
 * - name: string — shared input group name
 * - options: { label, value, description? }[] — choices to render
 * - value: string — current selected value
 * - onChange: (value: string) => void — update handler
 * - label?: string — group-level label
 * - required?: boolean — mark as required
 * - className?: string — outer wrapper
 * - optionClassName?: string — option item override
 *
 * 🚀 Example Usage:
 * <RadioGroup name="plan" value={plan} onChange={setPlan} options={[...]} />
 *
 * <RadioGroup
 *   name="theme"
 *   label="Select a theme"
 *   value={theme}
 *   onChange={setTheme}
 *   required
 *   options={[
 *     { label: 'Dark Mode', value: 'dark' },
 *     { label: 'Light Mode', value: 'light' }
 *   ]}
 *   className="text-white"
 * />
 */

export default function RadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  className,
  optionClassName,
  required = false,
}: RadioGroupProps) {
  const groupId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && (
        <p className="text-sm font-medium opacity-80">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}

      {options.map((opt) => {
        const id = `${groupId}-${opt.value}`;
        return (
          <label
            key={opt.value}
            htmlFor={id}
            className={clsx(
              "flex items-start gap-3 cursor-pointer",
              optionClassName
            )}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-brand"
              required={required}
            />
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-medium">{opt.label}</span>
              {opt.description && (
                <span className="opacity-70">{opt.description}</span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}
