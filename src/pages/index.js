import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Listing from "../components/listing"

const IndexPage = ({ data: { posts } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <p>Welcome to my Blog.</p>
    <p>
      Dive into many interesting articles related to Web Development, Software
      Tools, Tips & Tricks, etc.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {posts.edges.map((post, index) => (
      <Listing slug={post.node.uid} data={post.node.data} key={index} />
    ))}
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Posts {
    posts: allPrismicPost {
      edges {
        node {
          uid
          tags
          data {
            title {
              text
            }
            content {
              text
            }
            created
          }
        }
      }
    }
  }
`
