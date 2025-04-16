import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import TexturedOverlay from "@/components/mdb/components/overlays/TexturedOverlay";
import PaperBlock from "@/components/mdb/components/blocks/PaperBlock";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import { Divider } from "@/components/mdb/components/docs/Divider";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/docs");
  const files = await fs.readdir(dir);
  return files.map((f) => ({
    slug: f.replace(/\.mdx$/, ""),
  }));
}

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/docs", `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(source);
    const compiled = await compileMDX({
      source: content,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
                keepBackground: true,
                onVisitLine(node) {
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                  }
                },
                onVisitHighlightedLine(node) {
                  node.properties.className.push("line--highlighted");
                },
                onVisitHighlightedWord(node) {
                  node.properties.className = ["word--highlighted"];
                },
              },
            ],
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "prepend", // or 'prepend' or 'append'
                properties: {
                  className: ["heading-anchor"],
                },
              },
            ],
          ],
        },
      },
    });

    return (
      <div className="flex flex-col min-h-screen doc-content rounded-4xl overflow-hidden border border-gray-300/10 backdrop-blur-md">
        <TexturedOverlay
          position="below"
          textureUrl="/textures/paper.png"
          className="rounded-2xl min-h-screen grow bg-stone-800"
          styles={{
            padding: "-5px",
          }}
          opacity={0.15}
        >
          <PaperBlock
            id="doc-content"
            background="default"
            className="flex-1 min-h-screen mx-auto px-10 py-15 prose prose-invertdoc-content "
            color="[#201e1e]"
          >
            <h1 className="text-3xl decoration-solid underline font-bold text-center">
              {data.title}
            </h1>
            <br />
            <h1 className="text-xl font-bold ">{data.description}</h1>
            <Divider className="my-4" />
            {compiled.content}
          </PaperBlock>
        </TexturedOverlay>
      </div>
    );
  } catch {
    notFound();
  }
}
