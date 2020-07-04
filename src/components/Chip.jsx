/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"

const Chip = ({ name, slug, type, page = "article" }) => {
  return (
    <div>
      <a
        href={`/${type}/${slug}`}
        sx={{ textDecoration: "none", mx: 1 }}
        target="_blank"
      >
        <span
          sx={{
            color: "muted",
            backgroundColor: "accent",
            fontSize: page === "article" ? [0, 1, 2] : [0],
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
