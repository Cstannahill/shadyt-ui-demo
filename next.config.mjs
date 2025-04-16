import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const plugins = [];
const options = {
  keepBackground: true,
  theme: { light: "github-light", dark: "github-dark" },
};

plugins.push(
  createMDX({
    extension: /\.(md|mdx)$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
  })
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  plugins: plugins,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  turbopack: {
    resolveAlias: {
      "@": "./",
      "@components": "./components/mdb/components",
      "@lib": "./lib",
    },
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".mdx"],
    rules: {
      "*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.js",
      },
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};
const plugs = plugins.reduce((_, plugin) => plugin(_), nextConfig);
console.log(plugs);

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
