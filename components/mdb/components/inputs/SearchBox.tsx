"use client";

import { useState, InputHTMLAttributes, useRef, ChangeEvent } from "react";
import clsx from "clsx";

interface SearchBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  placeholder?: string;
  onClear?: () => void;
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
}

/**
 * SearchBox
 * ---------------------
 * A stylized input with search icon + optional clear button.
 *
 * ✅ Use for:
 * - Filtering cards, rows, or content
 * - Command bar triggers or quick search
 * - Navbar search in docs or dashboards
 *
 * 🧠 Design Notes:
 * - Uses `type="search"` for mobile keyboard support
 * - Includes optional clear button (resets input)
 * - Fully customizable styles via `inputClassName` and `className`
 *
 * 🛠️ Props:
 * - placeholder?: string — input hint (default: 'Search...')
 * - value?: string — current input value
 * - onChange: (e) => void — controlled updates
 * - onClear?: () => void — optional clear/reset
 * - autoFocus?: boolean — focuses on mount
 * - className?: string — wrapper div styling
 * - inputClassName?: string — input field styling
 *
 * 🚀 Example Usage:
 * <SearchBox placeholder="Search docs" value={search} onChange={(e) => setSearch(e.target.value)} />
 *
 * <SearchBox
 *   placeholder="Search..."
 *   autoFocus
 *   className="max-w-sm"
 *   inputClassName="bg-white/10 text-white border-white/20"
 *   onClear={() => setQuery('')}
 *   value={query}
 *   onChange={(e) => setQuery(e.target.value)}
 * />
 */

export default function SearchBox({
  placeholder = "Search...",
  value,
  onChange,
  onClear,
  autoFocus = false,
  className,
  inputClassName,
  ...rest
}: SearchBoxProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClear = () => {
    if (onClear) onClear();
    inputRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e); // optional chaining in case onChange isn't passed
  };

  return (
    <div className={clsx("relative w-full flex items-center", className)}>
      <span className="absolute left-3 text-white/60 pointer-events-none">
        🔍
      </span>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={clsx(
          "w-full rounded-md pl-9 pr-9 py-2 text-sm border bg-white/10 text-white border-white/10 transition",
          focused && "ring-2 ring-brand",
          inputClassName
        )}
        {...rest}
      />

      {value && onClear && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 text-white/50 hover:text-white/90 text-sm"
        >
          ✖
        </button>
      )}
    </div>
  );
}
