/** @jsx jsx */

import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  SEO,
  SliceZone,
  Chip,
  Author,
  Share,
  DisqusComments,
  RelatedArticles
} from '../components'
import { jsx, Styled } from 'theme-ui'
import { FiClock } from 'react-icons/fi'
import formatDate from '../utils/formatDate'
import Img from 'gatsby-image'
import Snakke from 'react-snakke'
import { Banner } from '../slices'

const Article = ({
  data: { article, relatedArticles },
  pageContext,
  location
}) => {
  const [showComments, setShowComments] = useState(false)
  const toggleComments = () => {
    setShowComments(!showComments)
  }
  return (
    <>
      <Snakke
        color="#484848"
        top="0px"
        height="5px"
        opacity="1"
        zIndex="10"
        shadow={false}
      />
      <Layout>
        <SEO
          title={`${article.data.title.text} | Article | Blog`}
          description={article.data.excerpt.text}
          image={article.data.article_image.url}
        />
        <Styled.h1 sx={{ textAlign: 'center', mb: 3 }}>
          {article.data.title.text}
        </Styled.h1>
        <p sx={{ fontWeight: 'bold', my: 0, pt: 0, textAlign: 'center' }}>
          <Styled.em
            title={formatDate(article.data.created)}
            aria-label={formatDate(article.data.created)}
          >
            {formatDate(article.data.created)}
          </Styled.em>
          <Styled.em
            sx={{ mx: 4 }}
            title="Time to read the article"
            aria-label="Time to read the article"
          >
            <FiClock style={{ marginBottom: '-0.15rem' }} />
            &nbsp;{article.data.read_time}&nbsp;min read
          </Styled.em>
        </p>

        {/* categories */}
        <div
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2
          }}
        >
          {article.data.categories.map((data, index) => {
            return (
              data.category.document && (
                <Chip
                  name={data.category.document.data.name}
                  slug={data.slug}
                  type="category"
                  key={index}
                />
              )
            )
          })}
        </div>
        <Styled.p sx={{ my: 4 }}>{article.data.excerpt.text}</Styled.p>

        <Banner image={article.data.article_image} />

        {/* slices */}
        <SliceZone slices={article.data.body} />

        <Styled.em sx={{ color: 'gray' }}>
          This article was last updated on {formatDate(article.data.modified)}
        </Styled.em>

        {/* tags */}
        <div
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            my: 2
          }}
        >
          {article.tags.map((tag, index) => {
            return <Chip name={tag} slug={tag} type="tag" key={index} />
          })}
        </div>

        {/* Share */}
        <Share
          articleURL={location.href}
          articleName={article.data.title.text}
        />

        {article.data.author.document && (
          <Author author={article.data.author.document.data} />
        )}

        <RelatedArticles
          uid={pageContext.slug}
          categories={article.data.categories}
          tags={article.tags}
          related={relatedArticles}
        />

        <p style={{ textAlign: 'center' }}>
          <button
            onClick={toggleComments}
            sx={{
              margin: '1rem auto 0.5rem auto',
              py: 2,
              px: 4,
              color: 'text',
              backgroundColor: 'shade2',
              fontFamily: 'light',
              fontSize: [1, 2],
              textTransform: 'uppercase',
              letterSpacing: '2px',
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              '&:hover': {
                color: 'accent',
                backgroundColor: 'shade1'
              }
            }}
          >
            {showComments ? 'Hide' : 'Show'} Comments
          </button>
        </p>

        {/* Disqus comments */}
        {showComments ? (
          <div sx={{ mt: 4 }}>
            <DisqusComments
              slug={pageContext.slug}
              title={article.data.title.text}
              pathname={location.pathname}
            />
          </div>
        ) : null}
      </Layout>
    </>
  )
}

export default Article

export const articleQuery = graphql`
  query Article($slug: String) {
    article: prismicArticle(uid: { eq: $slug }) {
      data {
        excerpt {
          text
        }
        title {
          text
        }
        created
        modified
        read_time
        article_image {
          alt
          fluid(maxWidth: 1280) {
            ...GatsbyPrismicImageFluid
          }
          url
        }
        body {
          ... on PrismicArticleBodyCode {
            slice_type
            primary {
              lang
              type
              code {
                text
              }
            }
          }
          ... on PrismicArticleBodyEmbed {
            slice_type
            primary {
              type
              embed_title
              embed_url
            }
          }
          ... on PrismicArticleBodyMetaInformation {
            slice_type
            primary {
              website_url
              website_title {
                text
              }
              website_image {
                alt
                fluid(maxWidth: 200, maxHeight: 100) {
                  ...GatsbyPrismicImageFluid
                }
              }
              website_description {
                text
              }
            }
          }
          ... on PrismicArticleBodyContent {
            slice_type
            primary {
              type
              content {
                raw
              }
            }
          }
          ... on PrismicArticleBodyAlert {
            slice_type
            primary {
              type
              content {
                raw
              }
            }
          }
          ... on PrismicArticleBodyImage {
            slice_type
            primary {
              type
            }
            items {
              image {
                alt
                fluid(maxWidth: 1280) {
                  ...GatsbyPrismicImageFluid
                }
                url
              }
            }
          }
        }
        categories {
          category {
            document {
              ... on PrismicCategory {
                data {
                  name
                }
              }
            }
          }
          slug
        }
        author {
          document {
            ... on PrismicAuthor {
              data {
                name
                social_links {
                  platform_name
                  platform_url
                }
                bio {
                  raw
                }
                avatar {
                  alt
                  fluid(maxWidth: 100, maxHeight: 75) {
                    ...GatsbyPrismicImageFluid
                  }
                }
              }
            }
          }
        }
      }
      tags
    }
    relatedArticles: allPrismicArticle {
      edges {
        node {
          ...ArticleFragment
          tags
        }
      }
    }
  }
`
