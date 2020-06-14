/** @jsx jsx */

import React from "react"
import { Link, navigate } from "gatsby"
import { jsx, Styled, useThemeUI } from "theme-ui"
import styled from "@emotion/styled"
import { FiClock } from "react-icons/fi"

/**
 * Programmatic navigation to given path of the article
 * @param {String} path
 */
const readArticle = path => {
  navigate(path)
}

// #0a0a0a #262626
// #e6e6e6  #e9e9e9

const Listing = ({ articles }) => {
  const { theme } = useThemeUI()

  const List = styled.div`
    cursor: pointer;
    border: 1px solid ${theme.colors.gray};
    border-radius: 25px;
    &:hover {
      transition: all 0.1s ease-in-out 0.2s;
      border-color: transparent;
      box-shadow: inset -5px -5px 12px ${theme.colors.shade1},
        inset 5px 5px 12px ${theme.colors.shade2};
    }
  `

  return (
    <ul
      sx={{
        listStyle: "none",
        mx: 2,
        my: 4,
        p: 0,
      }}
    >
      {articles.edges.map(article => (
        <List
          aria-label={`Read article ${article.node.uid}`}
          title={article.node.uid}
          key={article.node.uid}
          onClick={() => readArticle(`article/${article.node.uid}`)}
        >
          <li
            sx={{
              mx: "auto",
              my: 4,
              px: 4,
              py: 2,
            }}
          >
            <Styled.h2
              sx={{
                m: 0,
                pt: 1,
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
            </Styled.h2>
            <p sx={{ fontWeight: "bold", my: 0, pt: 1 }}>
              <Styled.em
                title={`${article.node.data.created} (yyyy-mm-dd)`}
                aria-label={`${article.node.data.created} (yyyy-mm-dd)`}
              >
                {article.node.data.created}
              </Styled.em>
              <Styled.em sx={{ mx: 4 }}>
                <FiClock style={{ marginBottom: "-0.1rem" }} />
                &nbsp;{article.node.data.read_time}&nbsp;min read
              </Styled.em>
            </p>
            <Styled.p
              as="div"
              sx={{ py: 2 }}
              dangerouslySetInnerHTML={{
                __html: `${article.node.data.excerpt.text}`,
              }}
            ></Styled.p>
          </li>
        </List>
      ))}
    </ul>
  )
}

export default Listing
