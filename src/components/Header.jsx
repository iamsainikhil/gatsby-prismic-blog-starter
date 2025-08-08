import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Headroom from 'react-headroom'
import { useThemeUI } from 'theme-ui'
import { FiSun, FiMoon } from 'react-icons/fi'
import trackGAEvent from '../utils/trackGAEvent'
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
            <h1 style={{ margin: '0' }}>
              <Link
                to="/"
                style={{ fontFamily: `'Damion', 'Rubik', sans-serif`, textDecoration: 'none', color: `${theme.colors.text} !important` }}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
          </div>
          <div className="header-links">
            <p>
              {colorMode === 'light' ? (
                <a
                  title="Switch to Dark Mode"
                  aria-label="Switch to Dark Mode"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setColorMode('dark')
                    trackGAEvent(
                      'toggle theme',
                      `enabled dark theme`,
                      'icon click'
                    )
                  }}
                >
                  <FiSun className="theme-icon" />
                </a>
              ) : (
                <a
                  title="Switch to Light Mode"
                  aria-label="Switch to Light Mode"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setColorMode('light')
                    trackGAEvent(
                      'toggle theme',
                      `enabled light theme`,
                      'icon click'
                    )
                  }}
                >
                  <FiMoon className="theme-icon" />
                </a>
              )}
            </p>
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
