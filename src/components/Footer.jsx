/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import {
  GrLinkedinOption,
  GrMedium,
  GrFacebookOption,
  GrTwitter,
  GrGatsbyjs,
} from "react-icons/gr"
import { FaHeart } from "react-icons/fa"
import "../styles/footer.scss"
import PrismicLogo from "./PrismicLogo"
import Icon from "./Icon"

const Footer = () => {
  return (
    <footer
      sx={{
        bg: "muted",
      }}
    >
      <div className="footer">
        <div className="links-row">
          <div>
            <a
              href="https://github.com/iamsainikhil/blog"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="GitHub"
              title="GitHub"
              sx={{ color: "primary" }}
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://iamsainikhil.github.io/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="Privacy Policy"
              title="Privacy Policy"
              sx={{ color: "primary" }}
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            margin: "0.25rem auto",
            wordSpacing: "0.2rem",
          }}
        >
          Made with{" "}
          <FaHeart
            style={{ color: "#CC3D5C", marginBottom: "-0.25rem" }}
            aria-label="Love"
            title="Love"
          />{" "}
          using{" "}
          <GrGatsbyjs
            sx={{
              color: "gatsby",
              marginBottom: "-0.25rem",
            }}
            aria-label="Gatsby"
            title="Gatsby"
          />{" "}
          and{" "}
          <PrismicLogo style={{ marginBottom: "-0.25rem" }} title="Prismic" />
        </div>

        <div className="social-row">
          <Icon
            name="Facebook"
            url="https://facebook.com"
            style={{
              color: "primary",
              fontSize: "1.75rem",
            }}
          />

          <Icon
            name="Twitter"
            url="https://twitter.com/iamsainikhil12"
            style={{
              color: "primary",
              fontSize: "1.5rem",
            }}
          />

          <Icon
            name="Medium"
            url="https://medium.com/@iamsainikhil"
            style={{
              color: "primary",
              fontSize: "1.5rem",
            }}
          />

          <Icon
            name="LinkedIn"
            url="https://www.linkedin.com/in/iamsainikhil"
            style={{
              color: "primary",
              fontSize: "1.70rem",
              marginBottom: "0.25rem",
            }}
          />
        </div>

        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://iamsainikhil.com"
            target="_blank"
            rel="noreferrer noopener"
            className="special-link"
            aria-label="Portfolio"
            title="Portfolio"
            sx={{ color: "primary" }}
          >
            Sai&nbsp;Nikhil
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
