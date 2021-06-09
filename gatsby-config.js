module.exports = {
  pathPrefix: "/library-development-plan",
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `Barnet Libraries Library Development Plans data`,
    author: `github.com/0sumrich`,
    description: "LDP Plan data",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
