/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const Category = ({ data: { articles }, pageContext: { slug, name } }) => {
  return (
    <Layout>
      <SEO
        title={`${name} | Category | Blog`}
        description={`Articles related to ${name} category.`}
      />
      <div style={{ textAlign: 'center' }}>
        <Styled.p
          sx={{
            fontFamily: 'title',
            fontSize: [2, 3, 4],
            letterSpacing: '0.1rem',
            textAlign: 'center'
          }}
        >
          The articles related to{' '}
          <span
            sx={{
              variant: 'textStyles.heading',
              fontWeight: 'bold',
              fontSize: [1, 2, 3],
              letterSpacing: '0.05rem'
            }}
          >
            {name}
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
