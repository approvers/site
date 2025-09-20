import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "site",
    siteUrl: "https://approvers.dev",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "assets/android-chrome-512x512.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./data",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        web: [
          {
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;
