/** @jsx jsx */

import React from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'

const Banner = ({ data: { primary } }) => {
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
        fluid={primary.image_banner.localFile.childImageSharp.fluid}
        alt={primary.image_banner.alt}
        title={primary.image_banner.alt}
      />
      <p
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          fontFamily: 'heading',
          fontSize: [2, 3]
        }}
      >
        {primary.title_of_banner.text}
      </p>
    </div>
  )
}

export default Banner
