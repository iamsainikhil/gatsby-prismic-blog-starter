/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const Quote = ({ data: { primary } }) => {
  return (
    <blockquote
      dangerouslySetInnerHTML={{ __html: primary.quote.html }}
      sx={{ variant: "styles" }}
    ></blockquote>
  )
}

export default Quote
