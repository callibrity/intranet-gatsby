const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      postgres {
        allWikitestsList {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  result.data.postgres.allWikitestsList.forEach( (post) => {
    const { slug } = post
    createPage({
      path: `/wiki/${slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug
      },
    })
  })
}