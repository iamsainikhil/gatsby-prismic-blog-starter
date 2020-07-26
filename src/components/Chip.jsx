/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

/**
 *
 * @param {String} tag (category | tag)
 */
const Chip = ({ name, slug, type, page = 'article' }) => {
  return (
    <p sx={{ m: 1 }}>
      <a
        href={`/${type}/${slug}`}
        sx={{ textDecoration: 'none' }}
        target="_blank"
      >
        <span
          sx={{
            color: 'muted',
            backgroundColor: 'accent',
            fontSize: page === 'article' ? [0, 1, 2] : [0],
            py: 1,
            px: 3,
            borderRadius: '2rem',
            cursor: 'pointer',
            '&:hover': {
              color: 'accent',
              backgroundColor: 'shade1'
            }
          }}
        >
          {name}
        </span>
      </a>
    </p>
  )
}

export default Chip

Chip.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string
}
