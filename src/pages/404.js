/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Listing } from '../components'

const NotFoundPage = ({ data: { articles } }) => (
  <Layout>
    <SEO title="404: Not found | Blog" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p
      sx={{
        fontFamily: 'title',
        fontSize: [2, 3, 4],
        letterSpacing: '0.1rem',
        textAlign: 'center'
      }}
    >
      Dive into many interesting articles related to Web Development, Software
      Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
    </p>
    <Listing articles={articles} />
  </Layout>
)

export default NotFoundPage

export const listQuery = graphql`
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
