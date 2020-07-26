/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const Category = ({ data: { articles }, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={`${pageContext.slug} | Category`}
        description={`Articles related to ${pageContext.slug} category.`}
      />
      <div style={{ textAlign: 'center' }}>
        <Styled.p
          sx={{
            fontFamily: 'title',
            fontSize: [2, 3, 4],
            letterSpacing: '0.05rem',
            textAlign: 'center'
          }}
        >
          The articles related to{' '}
          <span
            sx={{
              variant: 'textStyles.heading',
              fontWeight: 'bold'
            }}
          >
            {pageContext.slug}
          </span>{' '}
          category.
        </Styled.p>
      </div>
      <Listing articles={articles} />
    </Layout>
  )
}

export default Category

export const CategoryQuery = graphql`
  query CategoryQuery($category: String) {
    articles: allPrismicArticle(
      filter: {
        data: { categories: { elemMatch: { slug: { eq: $category } } } }
      }
    ) {
      edges {
        node {
          tags
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
      }
    }
  }
`
