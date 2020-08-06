/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { jsx, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'
import { FiClock } from 'react-icons/fi'
import formatDate from '../utils/formatDate'
import Chip from './Chip'

/**
 * Truncate the excerpt text based on character count
 * @param {String} text
 */
const truncateText = (text) => {
  if (text.length > 175) {
    return text.slice(0, 175).concat('...')
  }
  return text
}

const Listing = ({ articles }) => {
  const { theme } = useThemeUI()

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: auto;
    grid-gap: 1.25rem;
    justify-content: center;
    margin: auto;

    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
    }
  `

  const ArticleCard = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 200px auto;
    grid-gap: 0;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: inset -5px -5px 12px ${theme.colors.shade1},
      inset 5px 5px 12px ${theme.colors.shade2};
  `

  return (
    <GridLayout>
      {articles.edges.map((article) => (
        <ArticleCard
          aria-label={`Read article ${article.node.uid}`}
          title={article.node.uid}
          key={article.node.uid}
        >
          <div>
            <Link to={`article/${article.node.uid}`}>
              <Img
                fluid={
                  article.node.data.article_image.localFile.childImageSharp
                    .fluid
                }
                alt={article.node.data.article_image.alt}
                title={article.node.data.article_image.alt}
                sx={{
                  height: '100%',
                  borderTopLeftRadius: '25px',
                  borderTopRightRadius: '25px',
                  filter: 'none',
                  ':hover, :focus': {
                    filter: 'grayscale(100%)'
                  }
                }}
              />
            </Link>
          </div>
          <div
            sx={{
              px: 3,
              py: 2,

              '@media (max-width: 30rem)': {
                px: 3
              }
            }}
          >
            <h2
              sx={{
                m: 0,
                pt: 2,
                height: '6rem',
                fontSize: [2, 3],
                '@media (max-width: 30rem)': {
                  pt: 0,
                  height: 'auto'
                }
              }}
            >
              <Link
                to={`article/${article.node.uid}`}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'secondary',
                    textDecoration: 'underline'
                  }
                }}
              >
                {article.node.data.title.text}
              </Link>
            </h2>
            <p
              sx={{
                fontSize: [1, 2],
                height: '8rem',
                '@media screen and (max-width: 30rem)': {
                  height: 'auto'
                }
              }}
            >
              {truncateText(`${article.node.data.excerpt.text}`)}&nbsp;
              <Link
                to={`article/${article.node.uid}`}
                sx={{ variant: 'styles.a' }}
              >
                Read More
              </Link>
            </p>
            <div
              sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0 auto 0 -0.5rem'
              }}
            >
              {article.node.data.categories.map((data, index) => {
                return (
                  data.category.document && (
                    <Chip
                      name={data.category.document.data.name}
                      slug={data.slug}
                      type="category"
                      page="listing"
                      key={index}
                    />
                  )
                )
              })}
            </div>
            <p
              sx={{
                fontSize: 0,
                fontWeight: 'bold',
                mb: 1,
                py: 1
              }}
            >
              <em
                title={formatDate(article.node.data.created)}
                aria-label={formatDate(article.node.data.created)}
              >
                {formatDate(article.node.data.created)}
              </em>
              <span sx={{ mx: 2, fontSize: '10px' }}>|</span>
              <em
                title="Time to read the article"
                aria-label="Time to read the article"
              >
                <FiClock style={{ marginBottom: '-0.15rem' }} />
                &nbsp;{article.node.data.read_time}&nbsp;min read
              </em>
            </p>
          </div>
        </ArticleCard>
      ))}
    </GridLayout>
  )
}

Listing.propTypes = {
  articles: PropTypes.array
}

export default Listing
