"use client";

import clsx from "clsx";

interface PropRow {
  name: string;
  type: string;
  required?: boolean;
  default?: string;
  description?: string;
}

interface PropsTableProps {
  rows: PropRow[];
  of?: string;
  className?: string;
}

/**
 * PropsTable
 * ---------------------
 * A reusable props table for documenting component APIs inside MDX.
 *
 * ✅ Use in:
 * - MDX docs
 * - Internal dev UI
 *
 * 🧠 Highlights:
 * - Required props are bold and show red asterisk
 * - Type and default are monospace
 * - Description supports multiline blocks
 */

export default function PropsTable({ rows, of, className }: PropsTableProps) {
  return (
    <div
      className={clsx(
        "text-sm border border-white/10 rounded-md overflow-hidden",
        className
      )}
    >
      <div className="bg-white/5 text-white px-4 py-2 font-semibold">
        Props{of ? ` – ${of}` : ""}
      </div>
      <table className="w-full text-left text-white/80 bg-white/5">
        <thead className="text-white/60 border-b border-white/10">
          <tr>
            <th className="px-4 py-2">Prop</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Default</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-t border-white/10 hover:bg-white/5 transition"
            >
              <td className="px-4 py-2">
                <span className={row.required ? "font-bold text-red-400" : ""}>
                  {row.name}
                  {row.required && "*"}
                </span>
              </td>
              <td className="px-4 py-2 font-mono text-green-400">{row.type}</td>
              <td className="px-4 py-2 font-mono text-yellow-300">
                {row.default ?? "-"}
              </td>
              <td className="px-4 py-2 text-white/70">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
