// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve("./src/templates/article.js")
  const tagTemplate = require.resolve("./src/templates/tag.js")

  const result = await wrapper(
    graphql(
      `
        {
          allPrismicPost {
            edges {
              node {
                uid
                tags
              }
            }
          }
        }
      `
    )
  )

  const posts = result.data.allPrismicPost.edges

  posts.forEach(post => {
    // post pages
    createPage({
      path: `/article/${post.node.uid}/`,
      component: postTemplate,
      context: {
        slug: post.node.uid,
      },
    })

    // tag pages
    post.node.tags.forEach(tag => {
      createPage({
        path: `/tag/${tag}/`,
        component: tagTemplate,
        context: {
          slug: tag,
        },
      })
    })
  })
}
