/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { GrGatsbyjs } from 'react-icons/gr'
import { FaHeart } from 'react-icons/fa'
import '../styles/footer.scss'
import PrismicLogo from './PrismicLogo'
import Icon from './Icon'
import trackGAEvent from './../utils/trackGAEvent'

/**
 * you can customize the icons, links, GA tracking events and entire content
 */
const Footer = () => {
  return (
    <footer
      sx={{
        bg: 'muted'
      }}
    >
      <div className="footer">
        <div className="links-row">
          <div>
            <a
              href="https://github.com/iamsainikhil/gatsby-prismic-blog-starter"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="GitHub"
              title="GitHub"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on GitHub link in Footer`,
                  'link click'
                )
              }
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://github.com/iamsainikhil/gatsby-prismic-blog-starter/blob/master/README.md"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="Documentation"
              title="Documentation"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on Documentation link in Footer`,
                  'link click'
                )
              }
            >
              Documentation
            </a>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            margin: '0.25rem auto',
            wordSpacing: '0.2rem'
          }}
        >
          Made with{' '}
          <FaHeart
            style={{ color: '#CC3D5C', marginBottom: '-0.25rem' }}
            aria-label="Love"
            title="Love"
          />{' '}
          using{' '}
          <GrGatsbyjs
            sx={{
              color: 'gatsby',
              marginBottom: '-0.25rem'
            }}
            aria-label="Gatsby"
            title="Gatsby"
          />{' '}
          and{' '}
          <PrismicLogo style={{ marginBottom: '-0.25rem' }} title="Prismic" />
        </div>

        <div className="social-row">
          <Icon
            name="Facebook"
            url="https://facebook.com"
            style={{
              color: 'primary',
              fontSize: '1.75rem'
            }}
          />

          <Icon
            name="Twitter"
            url="https://twitter.com"
            style={{
              color: 'primary',
              fontSize: '1.5rem'
            }}
          />

          <Icon
            name="Medium"
            url="https://medium.com"
            style={{
              color: 'primary',
              fontSize: '1.5rem'
            }}
          />

          <Icon
            name="LinkedIn"
            url="https://www.linkedin.com/"
            style={{
              color: 'primary',
              fontSize: '1.70rem',
              marginBottom: '0.25rem'
            }}
          />
        </div>

        <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/iamsainikhil/gatsby-prismic-blog-starter"
            target="_blank"
            rel="noreferrer noopener"
            className="special-link"
            aria-label="Portfolio"
            title="Portfolio"
            sx={{ color: 'primary' }}
            onClick={() =>
              trackGAEvent(
                'footer links',
                `clicked on copyright link in Footer`,
                'text click'
              )
            }
          >
            Gatsby Prismic Blog Starter
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
