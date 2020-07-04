/** @jsx jsx */

import React, { Fragment } from "react"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
import { jsx, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import { FiClock } from "react-icons/fi"
import formatDate from "../utils/formatDate"
import Chip from "./Chip"

/**
 * Programmatic navigation to given path of the article
 * @param {String} path
 */
const readArticle = path => {
  navigate(path)
}

/**
 * Truncate the excerpt text based on character count
 * @param {String} text
 */
const truncateText = text => {
  if (text.length > 250) {
    return text.slice(0, 250).concat("...")
  }
  return text
}

const Listing = ({ articles }) => {
  const { theme } = useThemeUI()

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1.25rem;
    margin: auto;

    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
    }

    @media (min-width: ${theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 0.7fr));
    }
  `

  const ArticleCard = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-template-rows: auto;
    grid-gap: 0;
    border-radius: 25px;
    box-shadow: inset -5px -5px 12px ${theme.colors.shade1},
      inset 5px 5px 12px ${theme.colors.shade2};

    @media (max-width: ${theme.breakpoints[1]}) {
      grid-template-columns: 300px;
      margin: 0 auto;
    }
  `

  return (
    <GridLayout>
      {articles.edges.map(article => (
        <Fragment>
          <ArticleCard
            aria-label={`Read article ${article.node.uid}`}
            title={article.node.uid}
            key={article.node.uid}
          >
            <Link to={`article/${article.node.uid}`}>
              <Img
                fluid={
                  article.node.data.article_image.localFile.childImageSharp
                    .fluid
                }
                alt={article.node.data.article_image.alt}
                title={article.node.data.article_image.alt}
                sx={{
                  height: "100%",
                  "@media screen and (max-width: 47rem)": {
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                  },
                  "@media screen and (min-width: 48rem)": {
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                  },
                }}
              />
            </Link>
            <div
              sx={{
                flex: "1 1 auto",
                px: 3,
                py: 2,

                "@media (max-width: 30rem)": {
                  px: 3,
                },
              }}
            >
              <h2
                sx={{
                  m: 0,
                  pt: 2,
                  fontSize: [2, 3],
                  "@media (max-width: 30rem)": {
                    pt: 0,
                  },
                }}
              >
                <Link
                  to={`article/${article.node.uid}`}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    ":hover,:focus": {
                      color: "primary",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {article.node.data.title.text}
                </Link>
              </h2>
              <p
                sx={{
                  fontSize: [1, 2],
                  height: "6rem",
                  "@media screen and (max-width: 30rem)": {
                    height: "auto",
                  },
                }}
              >
                {truncateText(article.node.data.excerpt.text)}
              </p>
              <p
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "-0.75rem auto 0 -0.5rem",
                }}
              >
                {article.node.data.categories.map((data, index) => {
                  return (
                    <Chip
                      name={data.category.document.data.name}
                      slug={data.slug}
                      type="category"
                      key={index}
                    />
                  )
                })}
              </p>
              <p
                sx={{
                  fontSize: 0,
                  fontWeight: "bold",
                  mb: 1,
                  py: 1,
                }}
              >
                <em
                  title={formatDate(article.node.data.created)}
                  aria-label={formatDate(article.node.data.created)}
                >
                  {formatDate(article.node.data.created)}
                </em>
                <em
                  sx={{ mx: 4 }}
                  title="Time to read the article"
                  aria-label="Time to read the article"
                >
                  <FiClock style={{ marginBottom: "-0.1rem" }} />
                  &nbsp;{article.node.data.read_time}&nbsp;min read
                </em>
              </p>
            </div>
          </ArticleCard>
        </Fragment>
      ))}
    </GridLayout>
  )
}

export default Listing
