const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allWordpressPage.edges.forEach(({ node: page }) => {
        createPage({
          path: `/wiki/${page.slug}/`,
          component: path.resolve("./src/templates/page.js"),
          context: {
            id: page.id,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    })
    .then(result => {
      result.data.allWordpressPost.edges.forEach(({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/wiki/${post.slug}/`,
          component: path.resolve("./src/templates/post.js"),
          context: {
            id: post.id,
          },
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
