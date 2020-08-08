/** @jsx jsx */

import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const IndexPage = ({ data: { articles } }) => {
  return (
    <Layout>
      <SEO title="Gatsby Prismic Blog Starter | Home" />
      <Styled.p
        sx={{
          fontSize: [2, 3, 4],
          textAlign: 'center'
        }}
      >
        <Styled.em>
          Dive into many interesting articles related to Web Development,
          Software Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
        </Styled.em>
      </Styled.p>
      <Listing articles={articles} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    articles: allPrismicArticle(sort: { order: DESC, fields: data___created }) {
      edges {
        node {
          ...ArticleFragment
        }
      }
    }
  }
`
