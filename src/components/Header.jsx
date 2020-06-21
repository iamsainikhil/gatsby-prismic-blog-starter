import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import { Styled, useThemeUI } from "theme-ui"
// import { GoSearch } from "react-icons/go"
import { FiSun, FiMoon } from "react-icons/fi"
import "../styles/header.scss"

const Header = ({ siteTitle }) => {
  const { theme, colorMode, setColorMode } = useThemeUI()

  return (
    <Headroom disableInlineStyles upTolerance={10} downTolerance={10}>
      <header
        style={{ background: `${theme.colors.muted}` }}
        className="header"
      >
        <div className="header-content">
          <div>
            <Styled.h1 style={{ margin: "0" }}>
              <Styled.a as={Link} to="/" style={{ textDecoration: "none" }}>
                {siteTitle}
              </Styled.a>
            </Styled.h1>
          </div>
          <div className="header-links">
            {/* <Styled.h2 style={{ margin: "0 1rem" }}>
              <Styled.a as={Link} to="/">
                Tags
              </Styled.a>
            </Styled.h2> */}
            {/* <p>
              <GoSearch
                title="Search"
                style={{
                  fontSize: "1.2rem",
                  verticalAlign: "middle",
                  marginTop: "0.2rem",
                }}
              />
            </p> */}
            <p>
              {colorMode === "dark" ? (
                <Styled.a title="Light Mode" aria-label="Enable Light Mode">
                  <FiSun
                    className="theme-icon"
                    onClick={() => {
                      setColorMode("light")
                    }}
                  />
                </Styled.a>
              ) : (
                <Styled.a title="Dark Mode" aria-label="Enable Dark Mode">
                  <FiMoon
                    className="theme-icon"
                    onClick={() => {
                      setColorMode("dark")
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
