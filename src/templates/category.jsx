/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const Category = ({ data: { articles }, pageContext: { slug, name } }) => {
  return (
    <Layout>
      <SEO
        title={`${name || slug} | Category | Blog`}
        description={`Articles related to ${name || slug} category.`}
      />
      <div style={{ textAlign: 'center' }}>
        <Styled.p
          sx={{
            fontFamily: 'light',
            fontSize: [2, 3, 4],
            textAlign: 'center'
          }}
        >
          The articles related to <strong>{name || slug}</strong> category.
        </Styled.p>
      </div>
      <Listing articles={articles} />
    </Layout>
  )
}

export default Category

export const CategoryQuery = graphql`
  query CategoryQuery($slug: String) {
    articles: allPrismicArticle(
      filter: { data: { categories: { elemMatch: { slug: { eq: $slug } } } } }
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
