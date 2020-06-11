import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "./../components/listing"
import { Styled } from "theme-ui"

const Category = ({ data: { articles }, pageContext }) => {
  console.log(articles, pageContext)
  return (
    <Layout>
      <SEO
        title={`${pageContext.slug} | Category`}
        description={`Articles related to ${pageContext.slug}`}
      />
      <div style={{ textAlign: "center" }}>
        <Styled.h2 style={{ marginBottom: "0.25rem" }}>
          {pageContext.slug}
        </Styled.h2>
        <Styled.p>The articles related to {pageContext.slug}.</Styled.p>
      </div>
      <Listing articles={articles} />
    </Layout>
  )
}

export default Category

export const CategoryQuery = graphql`
  query CategoryQuery($category: String) {
    articles: allPrismicArticle(
      filter: {
        data: { categories: { elemMatch: { slug: { eq: $category } } } }
      }
    ) {
      edges {
        node {
          tags
          uid
          data {
            excerpt {
              text
            }
            title {
              text
            }
            created
          }
        }
      }
    }
  }
`
