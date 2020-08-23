/** @jsx jsx */

import React from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Banner = ({ image: { alt, fluid } }) => {
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
      <Img fluid={fluid} alt={alt} title={alt} />

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
    fluid: null
  }
}

Banner.propTypes = {
  image: PropTypes.object
}

export default Banner
