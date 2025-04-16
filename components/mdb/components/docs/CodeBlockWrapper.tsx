"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";

interface CodeBlockWrapperProps {
  children: ReactNode;
  className?: string;
  language?: string;
}

export default function CodeBlockWrapper({
  children,
  className,
  language,
}: CodeBlockWrapperProps) {
  const [copied, setCopied] = useState(false);

  const codeText = ((): string => {
    if (typeof children === "string") return children;
    if (
      typeof children === "object" &&
      "props" in children &&
      typeof children.props.children === "string"
    ) {
      return children.props.children;
    }
    return "";
  })();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={clsx(
        "relative rounded-lg overflow-hidden shadow-lg border border-white/10 bg-gray-900 p-0",
        className
      )}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-white/10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-white/60 font-mono">
          {language || "Code"}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-white/70 hover:text-white transition"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

      {/* Highlighted code block from rehype-pretty-code */}
      <pre className="overflow-x-auto p-4">{children}</pre>
    </div>
  );
}
