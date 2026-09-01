import remarkGfm from 'remark-gfm';

export const guideMdxOptions = {
  blockJS: true,
  blockDangerousJS: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};
