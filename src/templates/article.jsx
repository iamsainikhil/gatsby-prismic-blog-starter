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
import { Banner } from '../slices'

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
          url
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
          ... on PrismicArticleBodyBanner {
            slice_type
            primary {
              image_banner {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                  extension
                  publicURL
                }
              }
            }
          }
          ... on PrismicArticleBodyImageGallery {
            slice_type
            primary {
              name_of_the_gallery {
                text
              }
            }
            items {
              gallery_image {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image_caption {
                text
              }
            }
          }
          ... on PrismicArticleBodyRawText {
            slice_type
            primary {
              raw_content {
                raw
              }
            }
          }
          ... on PrismicArticleBodyCode {
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
            slice_type
            primary {
              embed {
                embed_url
              }
              platform
            }
          }
          ... on PrismicArticleBodyMetaInformation {
            slice_type
            primary {
              website_description {
                text
              }
              website_image
              website_url
              website_title {
                text
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
