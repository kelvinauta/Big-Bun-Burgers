module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "bbb",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-theme-ui",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "fxd0zoye",
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITYTOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
