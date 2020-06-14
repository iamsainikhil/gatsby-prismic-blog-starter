/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "../components/listing"
import { jsx, Styled } from "theme-ui"

const IndexPage = ({ data: { articles } }) => {
  console.log(articles)

  return (
    <Layout>
      <SEO title="Home" />
      <Styled.p
        sx={{
          fontFamily: "title",
          fontSize: 4,
          letterSpacing: "0.1rem",
          textAlign: "center",
        }}
      >
        Dive into many interesting articles related to Web Development, Software
        Tools, Tips&nbsp;&&nbsp;Tricks, etc.
      </Styled.p>
      <Listing articles={articles} />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          uid
          tags
          data {
            title {
              text
            }
            excerpt {
              text
            }
            read_time
            created
          }
        }
      }
    }
  }
`
