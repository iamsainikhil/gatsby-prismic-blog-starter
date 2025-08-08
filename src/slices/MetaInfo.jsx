/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const MetaInfo = ({ meta }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'highlight',
        fontSize: [1],
        p: 3,
        my: 2,
        '@media (max-width: 30em)': {
          flexFlow: 'column-reverse wrap'
        }
      }}
    >
      <div sx={{ px: 2 }}>
        <h5 sx={{ fontSize: [2], my: 0 }}>{meta.website_title.text}</h5>
        <p>{meta.website_description.text}</p>
        <a
          href={meta.website_url}
          sx={{ variant: 'styles.a' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {meta.website_url}
        </a>
      </div>
      <div>
        <GatsbyImage
          image={getImage(meta.website_image.gatsbyImageData)}
          alt={meta.website_title.alt}
          title={meta.website_title.alt}
          style={{ width: '200px', maxHeight: '125px', background: 'gray' }}
        />
      </div>
    </div>
  )
}

MetaInfo.defaultProps = {
  meta: {
    website_title: '',
    website_image: {
      alt: '',
      gatsbyImageData: null,
      url: ''
    },
    website_description: '',
    website_url: ''
  }
}

MetaInfo.propTypes = {
  meta: PropTypes.object
}

export default MetaInfo
