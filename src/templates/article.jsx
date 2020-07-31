/** @jsx jsx */

import React from 'react'
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

const Article = ({
  data: { article, relatedArticles },
  pageContext,
  location
}) => {
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
          title={`${article.data.title.text} | Article`}
          description={article.data.excerpt.text}
        />
        <Styled.h1 sx={{ textAlign: 'center', letterSpacing: '0.1rem', mb: 3 }}>
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
            <FiClock style={{ marginBottom: '-0.1rem' }} />
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
              <Chip
                name={data.category.document.data.name}
                slug={data.slug}
                type="category"
                key={index}
              />
            )
          })}
        </div>
        <Styled.p sx={{ my: 4 }}>{article.data.excerpt.text}</Styled.p>

        <Img
          fluid={article.data.article_image.localFile.childImageSharp.fluid}
          alt={article.data.article_image.alt}
          title={article.data.article_image.alt}
          sx={{
            margin: '2rem auto'
          }}
        />

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

        <Author author={article.data.author.document.data} />

        {/* {article.data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case "banner_with_caption":
            return (
              <div key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${slice.primary.title_of_banner.text}`,
                  }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${slice.primary.description.text}`,
                  }}
                ></div>
              </div>
            )
          case "image_gallery":
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: `${slice.primary.name_of_the_gallery.html}`,
                }}
              ></div>
            )
          default:
            return null
        }
      })}*/}

        <RelatedArticles
          uid={pageContext.slug}
          categories={article.data.categories}
          tags={article.tags}
          related={relatedArticles}
        />

        {/* Disqus comments */}
        <div sx={{ mt: 6 }}>
          <DisqusComments
            slug={pageContext.slug}
            title={article.data.title.text}
            pathname={location.pathname}
          />
        </div>
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
          localFile {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        body {
          ... on PrismicArticleBodyText {
            slice_type
            primary {
              content {
                html
                raw
              }
            }
          }
          ... on PrismicArticleBodyQuote {
            slice_type
            primary {
              quote {
                html
              }
            }
          }
          ... on PrismicArticleBodyBannerWithCaption {
            id
            slice_type
            primary {
              description {
                text
              }
              image_banner {
                alt
                thumbnails
                url
              }
              title_of_banner {
                text
              }
            }
          }
          ... on PrismicArticleBodyImageGallery {
            id
            slice_type
            primary {
              name_of_the_gallery {
                text
              }
            }
            items {
              gallery_image {
                alt
                thumbnails
                url
              }
              image_caption {
                text
              }
            }
          }
          ... on PrismicArticleBodyRawText {
            id
            slice_type
            primary {
              raw_content {
                raw
              }
            }
          }
          ... on PrismicArticleBodyCode {
            id
            slice_type
            primary {
              code {
                raw
                text
                html
              }
              lang
              type
            }
          }
          ... on PrismicArticleBodyEmbed {
            id
            slice_type
            primary {
              embed {
                embed_url
              }
              platform
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
                  platform_url {
                    url
                  }
                }
                bio {
                  html
                }
                avatar {
                  alt
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 100, maxHeight: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
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
