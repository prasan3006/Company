module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://strategyfox.in`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      options: {
        excludedPaths: [`/404.html`],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        start_url: `/`,
        icon: `./src/assets/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
  ],
};
