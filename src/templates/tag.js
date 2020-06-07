import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tag = ({ data: { posts }, pageContext }) => {
  // console.log(posts, pageContext)
  return (
    <Layout>
      <SEO
        title={`Tags | ${pageContext.slug}`}
        description={`Posts tagged with ${pageContext.slug}`}
      />
      {posts.edges.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.node.data.title.text}</h1>
            <p>{post.node.data.content.text}</p>
            <p>Created: {post.node.data.created}</p>
            <Link to={`/article/${post.node.uid}`}>View</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default Tag

export const TagQuery = graphql`
  query TagPosts($tag: String) {
    posts: allPrismicPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          uid
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
