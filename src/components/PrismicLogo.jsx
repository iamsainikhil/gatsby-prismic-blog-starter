import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'

const PrismicLogo = ({ style, title }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "prismic-icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 18, height: 18, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `}
    render={(data) => (
      <GatsbyImage
        image={getImage(data.file.childImageSharp)}
        style={style}
        alt={title}
        title={title}
      />
    )}
  />
)

PrismicLogo.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string
}

export default PrismicLogo
