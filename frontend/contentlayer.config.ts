import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import readingTime from 'reading-time';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 200 }),
  },

  slug: {
    type: 'string',
    resolve: (doc) => `/${doc.title.toLowerCase().replace(/ /g, '-')}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => {
      if (
        doc.title.includes(
          'Docker - The Complete Guide to Build and Deploy your Application'
        )
      ) {
        return 'docker-the-complete-guide-to-build-and-deploy-your-application';
      } else {
        return doc.title.toLowerCase().replace(/ /g, '-');
      }
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    about: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    blogImage: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImage: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    related: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') return;

            node.taw = codeEl?.children?.[0]?.value;
          }
        });
      },
      rehypeSlug,
      [
        rehypePrettyCode as any,
        {
          theme: 'one-dark-pro',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['icon-link'],
              children: ['#'],
            },
          },
          properties: {
            ariaLabel: 'Link to heading',
          },
          behavior: 'append',
        },
      ],
    ],
  },
});
