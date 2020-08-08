/** @jsx jsx */

import React, { useRef, useEffect } from 'react'
import { jsx } from 'theme-ui'

const Content = ({ data: { primary } }) => {
  const contentRef = useRef(null)

  /**
   * hyperlinks with target _blank cannot be set when parsing the HTML directly
   * raw content should be used which gives more control over the elements but is so tedious
   * TODO: remove this temporary fix in future and use raw content instead of HTML
   */
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
