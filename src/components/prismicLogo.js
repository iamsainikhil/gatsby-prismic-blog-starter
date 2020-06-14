import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PrismicLogo = ({ style, title }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "prismic-icon.png" }) {
          childImageSharp {
            fixed(width: 18, height: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={style}
        aria-label={title}
        title={title}
      />
    )}
  />
)
export default PrismicLogo