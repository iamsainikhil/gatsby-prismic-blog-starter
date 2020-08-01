/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const Tag = ({ data: { articles }, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={`${pageContext.slug} | Tag | Blog`}
        description={`Articles related to ${pageContext.slug} tag.`}
      />
      <div style={{ textAlign: 'center' }}>
        <Styled.p
          sx={{
            fontFamily: 'title',
            fontSize: [2, 3, 4],
            letterSpacing: '0.15rem',
            textAlign: 'center'
          }}
        >
          The articles related to{' '}
          <span
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              fontSize: [1, 2, 3],
              letterSpacing: '0.05rem'
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
  query TagQuery($slug: String) {
    articles: allPrismicArticle(
      filter: { tags: { eq: $slug } }
      sort: { order: DESC, fields: data___created }
    ) {
      edges {
        node {
          ...ArticleFragment
        }
      }
    }
  }
`
