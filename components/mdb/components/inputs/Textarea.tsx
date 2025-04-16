"use client";

import { TextareaHTMLAttributes, useRef, ChangeEvent, useState } from "react";
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  required?: boolean;
  description?: string;
  className?: string;
  textareaClassName?: string;
}

/**
 * Textarea
 * ---------------------
 * A multi-line input component for freeform text like notes or comments.
 *
 * ✅ Use for:
 * - Contact forms
 * - Longer messages or bios
 * - Admin dashboards or feedback widgets
 *
 * 🧠 Design Notes:
 * - Accessible label support
 * - Extracted handlers for stability
 * - Optional description and full styling control
 *
 * 🛠️ Props:
 * - name: string — required field name
 * - label?: string — optional field label
 * - required?: boolean — mark field as required
 * - description?: string — optional help text below
 * - className?: string — outer wrapper styling
 * - textareaClassName?: string — field styling
 *
 * 🚀 Example Usage:
 * <Textarea name="notes" label="Notes" />
 *
 * <Textarea
 *   name="message"
 *   label="Your Message"
 *   description="Let us know how we can help."
 *   required
 *   rows={4}
 *   className="max-w-lg"
 *   textareaClassName="bg-brand-dark text-white border-white/20"
 * />
 */

export default function Textarea({
  label,
  name,
  required = false,
  description,
  className,
  textareaClassName,
  ...rest
}: TextareaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    rest.onChange?.(e);
  };

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium opacity-80">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        ref={inputRef}
        id={name}
        name={name}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={clsx(
          "w-full rounded-md px-4 py-2 bg-white/10 text-white placeholder-white/50 border border-white/10 transition",
          focused && "ring-2 ring-brand",
          textareaClassName
        )}
        {...rest}
      />

      {description && <p className="text-xs opacity-70 mt-1">{description}</p>}
    </div>
  );
}
