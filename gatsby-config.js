module.exports = {
  siteMetadata: {
    title: "My Blog",
    description: "gatsby reza khosroshahi blog",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- excerpt -->`
      }
    }
  ],
}
