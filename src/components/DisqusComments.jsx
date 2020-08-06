/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const DisqusComments = ({ slug, title, pathname }) => {
  const data = useStaticQuery(graphql`
    query SiteUrlQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  let disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + pathname}`,
    identifier: slug,
    title: title
  }
  return (
    <>
      {/* enable the below commentCount component if you want to show count of comments  */}
      {/* <CommentCount config={disqusConfig} placeholder={"..."} /> */}
      {/* Post Contents */}
      <Disqus config={disqusConfig} sx={{ variant: 'styles' }} />
    </>
  )
}

DisqusComments.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string
}

export default DisqusComments
