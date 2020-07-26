/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const Tag = ({ data: { articles }, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={`${pageContext.slug} | Tag`}
        description={`Articles related to ${pageContext.slug} tag.`}
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
              fontFamily: 'heading',
              fontWeight: 'bold',
              fontSize: [1, 2, 3]
            }}
          >
            {pageContext.slug}
          </span>{' '}
          tag.
        </Styled.p>
      </div>
      <Listing articles={articles} />
    </Layout>
  )
}

export default Tag

export const TagQuery = graphql`
  query TagQuery($tag: String) {
    articles: allPrismicArticle(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          uid
          tags
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
