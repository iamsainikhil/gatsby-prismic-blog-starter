/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const Content = ({ data: { primary } }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: primary.content.html }}
      sx={{
        variant: "styles",
      }}
    ></div>
  )
}

export default Content
