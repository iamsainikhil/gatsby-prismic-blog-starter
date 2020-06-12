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
            title="Love"
          />{" "}
          using{" "}
          <GrGatsbyjs
            sx={{
              color: "gatsby",
              marginBottom: "-0.25rem",
            }}
            title="Gatsby"
          />{" "}
          and Prismic
        </div>

        <div className="social-row">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            title="Facebook"
          >
            <GrFacebookOption
              sx={{
                color: "primary",
                fontSize: "1.75rem",
                "&:hover": {
                  color: "#3b5998",
                },
              }}
            />
          </a>

          <a
            href="https://twitter.com/iamsainikhil12"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter"
            title="Twitter"
          >
            <GrTwitter
              sx={{
                color: "primary",
                fontSize: "1.5rem",
                "&:hover": {
                  color: "#1da1f2",
                },
              }}
            />
          </a>

          <a
            href="https://medium.com/@iamsainikhil"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Medium"
            title="Medium"
          >
            <GrMedium
              sx={{
                color: "primary",
                fontSize: "1.5rem",
                "&:hover": {
                  color: "#00ab6c",
                },
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/iamsainikhil"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <GrLinkedinOption
              sx={{
                color: "primary",
                fontSize: "1.70rem",
                marginBottom: "0.25rem",
                "&:hover": {
                  color: "#0077b5",
                },
              }}
            />
          </a>
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
          >
            Sai&nbsp;Nikhil
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
