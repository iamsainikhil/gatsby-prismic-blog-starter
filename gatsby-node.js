// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articleTemplate = require.resolve('./src/templates/article.jsx')
  const tagTemplate = require.resolve('./src/templates/tag.jsx')
  const categoryTemplate = require.resolve('./src/templates/category.jsx')

  const result = await wrapper(
    graphql(
      `
        {
          allPrismicArticle {
            edges {
              node {
                uid
                tags
                data {
                  categories {
                    category {
                      document {
                        ... on PrismicCategory {
                          data {
                            name
                          }
                        }
                      }
                    }
                    slug
                  }
                }
              }
            }
          }
        }
      `
    )
  )

  const articles = result.data.allPrismicArticle.edges

  articles.forEach((article) => {
    // article pages
    createPage({
      path: `/article/${article.node.uid}/`,
      component: articleTemplate,
      context: {
        slug: article.node.uid
      }
    })

    // tag pages
    article.node.tags.forEach((tag) => {
      createPage({
        path: `/tag/${tag}/`,
        component: tagTemplate,
        context: {
          slug: tag
        }
      })
    })

    // category pages
    article.node.data.categories.forEach(({ category, slug }) => {
      createPage({
        path: `/category/${slug}/`,
        component: categoryTemplate,
        context: {
          slug: slug,
          name: category.document ? category.document.data.name : slug
        }
      })
    })
  })
}
