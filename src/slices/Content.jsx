/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'

const Content = ({ data: { primary } }) => {
  return (
    <div sx={{ variant: 'styles', mt: 4 }}>
      <RichText render={primary.content.raw} htmlSerializer={htmlSerializer} />
    </div>
  )
}

export default Content
