/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const RawContent = ({ data: { primary } }) =>
  primary.raw_content.raw.map((block, index) => {
    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: block.text }}
        sx={{ variant: "styles", my: 4 }}
      ></div>
    )
  })

export default RawContent
