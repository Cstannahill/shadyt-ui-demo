import type { MDXComponents } from "mdx/types";
import PropsTable from "@/components/mdb/components/docs/PropsTable";
import { Divider } from "@/components/mdb/components/docs/Divider";
import CodeBlockWrapper from "@/components/mdb/components/docs/CodeBlockWrapper";

// Only map component shortcodes (no code/pre overrides needed anymore)
export const mdxComponents: MDXComponents = {
  PropsTable,
  Divider,
  CodeBlockWrapper,
};
