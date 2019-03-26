module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "My Blog",
    description: "gatsby reza khosroshahi blog",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "بلاگ رضا خسروشاهی",
        short_name: "بلاگ",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: `standalone`,
        icon: "static/icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- excerpt -->`,
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
