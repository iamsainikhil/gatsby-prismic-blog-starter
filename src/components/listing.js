/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const Listing = ({ articles }) => {
  return (
    <ul
      sx={{
        listStyle: "none",
        m: 0,
        px: 0,
        py: 4,
      }}
    >
      {articles.edges.map(article => (
        <li
          key={article.node.uid}
          sx={{
            mb: 4,
          }}
        >
          <Styled.h2
            sx={{
              m: 0,
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
          <small sx={{ fontWeight: "bold" }}>{article.node.data.created}</small>
          <div
            dangerouslySetInnerHTML={{
              __html: `${article.node.data.excerpt.text}`,
            }}
          ></div>
        </li>
      ))}
    </ul>
  )
}

export default Listing
