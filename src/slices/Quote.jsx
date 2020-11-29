/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

const Quote = ({ data: { primary } }) => {
  return (
    <blockquote sx={{ variant: 'styles' }}>
      <RichText render={primary.content.raw} htmlSerializer={htmlSerializer} />
    </blockquote>
  )
}

export default Quote
