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
            fontFamily: 'light',
            fontSize: [2, 3, 4],
            textAlign: 'center'
          }}
        >
          The articles related to <strong>{pageContext.slug}</strong> tag.
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
