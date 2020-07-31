/** @jsx jsx */

import React from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'

const Banner = ({ image }) => {
  return (
    <div
      sx={{
        pb: 2,
        my: 4,
        mx: 'auto',
        borderRadius: '15px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'highlight'
      }}
    >
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt={image.alt}
        title={image.alt}
      />
      <p
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          fontFamily: 'heading',
          fontSize: [2, 3]
        }}
      >
        {image.alt}
      </p>
    </div>
  )
}

export default Banner
