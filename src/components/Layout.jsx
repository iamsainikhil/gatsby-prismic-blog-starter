/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Footer } from '../components'
import '../styles/layout.scss'
import { IoIosArrowDropupCircle } from 'react-icons/io'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="content-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <Footer />
      <IoIosArrowDropupCircle
        className="scroll-top-icon"
        onClick={() =>
          scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
