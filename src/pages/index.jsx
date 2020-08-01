/** @jsx jsx */

import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Listing } from '../components'
import { jsx, Styled } from 'theme-ui'

const IndexPage = ({ data: { articles } }) => {
  return (
    <Layout>
      <SEO title="Sai Nikhil | Blog" />
      <Styled.p
        sx={{
          fontFamily: 'title',
          fontSize: [2, 3, 4],
          letterSpacing: '0.15rem',
          textAlign: 'center'
        }}
      >
        Dive into many interesting articles related to Web Development, Software
        Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
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
