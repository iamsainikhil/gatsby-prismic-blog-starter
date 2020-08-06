import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Headroom from 'react-headroom'
import { Styled, useThemeUI } from 'theme-ui'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../styles/header.scss'

const Header = () => {
  const { theme, colorMode, setColorMode } = useThemeUI()
  // Gatsby's useStaticQuery component
  // See: https://www.gatsbyjs.org/docs/use-static-query/
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
    <Headroom disableInlineStyles upTolerance={10} downTolerance={10}>
      <header
        style={{ background: `${theme.colors.muted}` }}
        className="header"
      >
        <div className="header-content">
          <div>
            <Styled.h1 style={{ margin: '0' }}>
              <Styled.a as={Link} to="/" style={{ textDecoration: 'none' }}>
                {data.site.siteMetadata.title}
              </Styled.a>
            </Styled.h1>
          </div>
          <div className="header-links">
            <p>
              {colorMode === 'dark' ? (
                <Styled.a title="Light Mode" aria-label="Enable Light Mode">
                  <FiSun
                    className="theme-icon"
                    onClick={() => {
                      setColorMode('light')
                    }}
                  />
                </Styled.a>
              ) : (
                <Styled.a title="Dark Mode" aria-label="Enable Dark Mode">
                  <FiMoon
                    className="theme-icon"
                    onClick={() => {
                      setColorMode('dark')
                    }}
                  />
                </Styled.a>
              )}
            </p>
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
