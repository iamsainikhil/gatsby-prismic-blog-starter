/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const Chip = ({ name, slug, type }) => {
  return (
    <div sx={{ m: 2 }}>
      <a
        href={`/${type}/${slug}`}
        sx={{ textDecoration: "none" }}
        target="_blank"
      >
        <span
          sx={{
            color: "muted",
            backgroundColor: "accent",
            py: 1,
            px: 3,
            borderRadius: "2rem",
            cursor: "pointer",
            "&:hover": {
              color: "accent",
              backgroundColor: "shade1",
            },
          }}
        >
          {name}
        </span>
      </a>
    </div>
  )
}

export default Chip
