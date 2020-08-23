import { graphql } from 'gatsby'

export const ArticleFragment = graphql`
  fragment ArticleFragment on PrismicArticle {
    uid
    data {
      excerpt {
        text
      }
      title {
        text
      }
      read_time
      created
      article_image {
        alt
        fluid(maxWidth: 300) {
          ...GatsbyPrismicImageFluid
        }
        url
      }
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
`
