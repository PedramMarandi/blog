const path = require("path")

const createTagPages = (createPage, posts) => {
  const allTagIndexTemplate = path.resolve("src/templates/allTagsIndex.js")
  const singleTagIndexTemplate = path.resolve("src/templates/singleTagsIndex.js")

  const postByTags = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postByTags[tag]) {
          postByTags[tag] = []
        }

        postByTags[tag].push(node)
      })
    }
  })
  const tags = Object.keys(postByTags)
  createPage({
    path: "/tags",
    component: allTagIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tagName => {
    const posts = postByTags[tagName]
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")
    const AboutPostTemplate = path.resolve("src/templates/about.js")

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges
        createTagPages(createPage, posts)
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: path !== "/about" ? blogPostTemplate : AboutPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })

          resolve()
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
