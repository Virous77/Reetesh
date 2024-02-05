import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

const computedFields: any = {
  slug: {
    type: "string",
    resolve: (doc: any) => `/${doc.title.toLowerCase().replace(/ /g, "-")}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc: any) => doc.title.toLowerCase().replace(/ /g, "-"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    about: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    blogImage: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    authorImage: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.taw = codeEl?.children?.[0]?.value;
          }
        });
      },
      rehypeSlug,
      [
        rehypePrettyCode as any,
        {
          theme: "one-dark-pro",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
