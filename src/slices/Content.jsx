/** @jsx jsx */

import React, { useRef, useEffect } from 'react'
import { jsx } from 'theme-ui'

const Content = ({ data: { primary } }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    const links = contentRef.current.querySelectorAll('a')
    // add target and rel attributes to all anchor tags
    links.forEach((link) => {
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
    })
  }, [])

  return (
    <div
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: primary.content.html }}
      sx={{
        variant: 'styles'
      }}
    ></div>
  )
}

export default Content
