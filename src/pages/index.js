import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Listing from "../components/listing"

const IndexPage = ({ data: { articles } }) => {
  console.log(articles)

  return (
    <Layout>
      <SEO title="Home" />
      <em>
        Dive into many interesting articles related to Web Development, Software
        Tools, Tips & Tricks, etc.
      </em>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
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
            created
          }
        }
      }
    }
  }
`
