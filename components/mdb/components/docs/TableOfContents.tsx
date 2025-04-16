// components/docs/TableOfContents.tsx

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const pathname = usePathname();
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const extracted = headingElements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName === "H3" ? 3 : 2,
    }));

    setHeadings(extracted);
  }, [pathname]);
  console.log(headings);

  return (
    <nav className="sticky top-24 max-w-s space-y-2 text-sm text-muted min-h-screen">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/70 sticky top-0 bg-background/90 backdrop-blur-md rounded-lg p-2"></h3>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li
            key={h.id + Math.random()}
            className={h.level === 3 ? "ml-4 sticky top-0" : "sticky top-0"}
          >
            <a
              href={`#${h.id}`}
              className="hover:text-foreground transition-colors block"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
