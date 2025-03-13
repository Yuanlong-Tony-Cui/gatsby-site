/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anthony's Blog Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `career`,
        path: `${__dirname}/blog/career`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `library`,
        path: `${__dirname}/blog/library`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `studio`,
        path: `${__dirname}/blog/studio`,
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/bayan-studio-logo.webp"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-", // ✅ Adds correct class names
              inlineCodeMarker: null, // ✅ Allows inline code highlighting
              showLineNumbers: true, // ✅ Enables line numbers
              noInlineHighlight: false, // ✅ Ensures inline highlighting works
              aliases: { py: "python" }, // ✅ Ensures Python is recognized correctly
            },
          },
        ],
      },
    },
  ],
}
