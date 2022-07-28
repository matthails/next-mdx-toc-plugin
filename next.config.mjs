import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [
              remarkFrontmatter,
              remarkMdxFrontmatter,
              remarkToc,
              remarkSlug,
            ],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

export default nextConfig;
