/** @jsx jsx */

import React from 'react'
import Img from 'gatsby-image'
import { jsx } from 'theme-ui'

const Banner = ({ image: { localFile, alt } }) => {
  return (
    localFile.childImageSharp && (
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
        {
          // svg support
          !localFile.childImageSharp && localFile.extension === 'svg' ? (
            <img src={localFile.publicURL} alt={alt} title={alt} />
          ) : (
            <Img
              fluid={localFile.childImageSharp.fluid}
              alt={alt}
              title={alt}
            />
          )
        }

        <p
          sx={{
            textAlign: 'center',
            margin: '0 auto',
            fontFamily: 'heading',
            fontSize: [2, 3]
          }}
        >
          {alt}
        </p>
      </div>
    )
  )
}

export default Banner
