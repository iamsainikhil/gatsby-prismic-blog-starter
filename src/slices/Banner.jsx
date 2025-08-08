/** @jsx jsx */

import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Banner = ({ image }) => {
  const { alt, gatsbyImageData } = image
  return (
    <div
      sx={{
        pb: 2,
        my: 4,
        mx: 'auto',
        borderRadius: '15px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'highlight',
        overflow: 'hidden'
      }}
    >
      <GatsbyImage image={getImage(gatsbyImageData)} alt={alt} title={alt} />

      <p
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          pt: 2,
          fontFamily: 'heading',
          fontSize: [2, 3]
        }}
      >
        {alt}
      </p>
    </div>
  )
}

Banner.defaultProps = {
  image: {
    alt: '',
    gatsbyImageData: null
  }
}

Banner.propTypes = {
  image: PropTypes.object
}

export default Banner
