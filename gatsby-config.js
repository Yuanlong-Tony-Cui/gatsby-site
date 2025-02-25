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
    { // Create `File` nodes from files under `blog`:
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
