/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'

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
        my: 2
      }}
    >
      <div sx={{ px: 2 }}>
        <h5 sx={{ fontSize: [2], my: 0 }}>{meta.website_title.text}</h5>
        <p>{meta.website_description.text}</p>
        <a href={meta.website_url} sx={{ variant: 'styles.a' }}>
          {meta.website_url}
        </a>
      </div>
      <div>
        <img
          src={meta.website_image}
          alt={meta.website_title.text}
          sx={{ width: '200px', maxHeight: '125px' }}
        />
      </div>
    </div>
  )
}

export default MetaInfo
