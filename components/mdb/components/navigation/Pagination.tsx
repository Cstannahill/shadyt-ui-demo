"use client";

import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  maxVisible?: number;
  index?: number;
}

/**
 * Pagination
 * ---------------------
 * A numbered pagination component with prev/next buttons and ellipsis logic.
 *
 * ✅ Use for:
 * - Paginated results (tables, lists, search)
 * - Navigating pages in blogs or directories
 *
 * 🧠 Design Notes:
 * - Includes prev/next buttons with range overflow handling
 * - Respects `maxVisible` for compact UIs
 * - Active button gets visual treatment
 *
 * 🛠️ Props:
 * - currentPage: number — current active page
 * - totalPages: number — total available pages
 * - onPageChange: (page) => void — callback when a page is selected
 * - className?: string — container styling
 * - maxVisible?: number — limit number of page buttons (default: 5)
 *
 * 🚀 Example Usage:
 * <Pagination currentPage={1} totalPages={10} onPageChange={(page) => setPage(page)} />
 *
 * <Pagination
 *   currentPage={4}
 *   totalPages={12}
 *   onPageChange={setPage}
 *   maxVisible={7}
 *   className="text-white"
/>
 */

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  maxVisible = 5,
  index,
}: PaginationProps) {
  const getPages = () => {
    const pages = [];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <nav className={clsx("flex items-center gap-2", className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-40"
      >
        ‹
      </button>

      {pages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
          >
            1
          </button>
          {pages[0] > 2 && <span className="px-1 opacity-50">…</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "px-3 py-1 rounded",
            page === currentPage
              ? "bg-slate-400/70 text-white font-bold"
              : "bg-white/10 hover:bg-white/20"
          )}
        >
          {page}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="px-1 opacity-50">…</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 active:bg-stone-300/50 active:text-stone-900"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-40"
      >
        ›
      </button>
    </nav>
  );
}
