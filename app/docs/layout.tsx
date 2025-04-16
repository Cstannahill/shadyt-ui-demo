import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import TableOfContents from "@/components/mdb/components/docs/TableOfContents";

interface DocLink {
  slug: string;
  title: string;
}

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const contentDir = path.join(process.cwd(), "content/docs");
  const files = await fs.readdir(contentDir);

  const links: DocLink[] = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(contentDir, file);
        const raw = await fs.readFile(filePath, "utf8");
        const { data } = matter(raw);
        console.log(data);
        return {
          slug: file.replace(/\.mdx$/, ""),
          title: data.title || file.replace(/\.mdx$/, ""),
        };
      })
  );

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-white/10 rounded-lg p-6 space-y-4 bg-black/30 backdrop-blur-md">
        <h1 className="text-lg font-bold mb-4">
          <p>Docs</p>
        </h1>
        <nav className="space-y-2">
          {links.map(({ slug, title }) => (
            <Link
              key={slug}
              href={`/docs/${slug}`}
              className="block px-3 py-1 rounded hover:bg-white/10 transition text-sm"
            >
              {title}
            </Link>
          ))}
        </nav>
      </aside>

      <main
        className={
          GeistMono.className +
          " " +
          "flex-1 p-8 overflow-y-auto font-light text-white"
        }
      >
        <div className="prose prose-invert flex grow doc-content mx-auto">
          {children}
        </div>
      </main>
      <aside className="hidden xl:block w-64 shrink-0">
        <TableOfContents />
      </aside>
    </div>
  );
}
