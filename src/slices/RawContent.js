/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const RawContent = ({ data: { primary } }) =>
  primary.raw_content.raw.map((block, index) => {
    switch (block.type) {
      case "list-item":
        return (
          <ul>
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: block.text }}
              sx={{ variant: "styles", my: 4 }}
            ></li>
          </ul>
        )
      default:
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: block.text }}
            sx={{ variant: "styles", my: 4 }}
          ></div>
        )
    }
  })

export default RawContent
