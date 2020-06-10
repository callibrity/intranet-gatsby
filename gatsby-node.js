const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return (
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
              content
            }
          }
        }
      }
    `)
      .then(({data: {allWordpressPost: {edges}}}) => {
        edges.forEach(({node: {id, slug, title, content}}) => {
          createPage({
            path: `/wiki/${slug}/`,
            component: path.resolve("./src/templates/post.js"),
            context: {
              id,
              slug,
              title,
              content
            }
          })
        })
      })
      .then(() => 
        graphql(`
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
                content
              }
            }
          }
        }
      `))
      .then(({data: {allWordpressPage: {edges}}}) => {
        edges.forEach(({node: {id, slug, title, content}}) => {
          createPage({
            path: `/wiki/${slug}/`,
            component: path.resolve("./src/templates/page.js"),
            context: {
              id,
              slug,
              title,
              content
            }
          })
        })
      })
  )
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
