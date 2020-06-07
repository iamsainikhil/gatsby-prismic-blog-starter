import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles upTolerance={10} downTolerance={10}>
    <header className="header">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 2rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
