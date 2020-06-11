import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Highlight, { defaultProps } from "prism-react-renderer"
import "prismjs/themes/prism-solarizedlight.css"

const Article = ({ data: { article } }) => {
  console.log(article)
  return (
    <Layout>
      <SEO
        title={article.data.title.text}
        description={article.data.excerpt.text}
      />
      <h1>{article.data.title.text}</h1>
      <p>{article.data.excerpt.text}</p>
      <p>Created: {article.data.created}</p>
      {article.data.body.map((slice, index) => {
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
          case "quote":
            return (
              <blockquote
                key={index}
                dangerouslySetInnerHTML={{
                  __html: `${slice.primary.quote.html}`,
                }}
              ></blockquote>
            )
          case "text":
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${slice.primary.content.text}`,
                }}
                key={index}
              ></div>
            )
          case "code":
            return (
              <div key={index}>
                <Highlight
                  {...defaultProps}
                  theme={undefined}
                  code={slice.primary.code.text}
                  language={slice.primary.lang}
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre className={className} style={style}>
                      <span
                        className={className}
                        style={{
                          ...style,
                          margin: "3rem auto",
                          color: "#181818",
                        }}
                      >
                        {slice.primary.lang.toUpperCase()}
                      </span>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
                {/* <pre className={`language-${slice.primary.lang}`}>
                  <code className={`language-${slice.primary.lang}`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${slice.primary.code.html}`,
                      }}
                    ></div>
                  </code>
                </pre> */}
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
      })}
      {article.tags.map((tag, index) => (
        <Link to={`/tag/${tag}`} key={index}>
          {tag}
        </Link>
      ))}
    </Layout>
  )
}

export default Article

export const articleQuery = graphql`
  query Article($uid: String) {
    article: prismicArticle(uid: { eq: $uid }) {
      data {
        created
        excerpt {
          text
        }
        title {
          text
        }
        modified
        body {
          ... on PrismicArticleBodyText {
            slice_type
            primary {
              content {
                raw
                text
              }
            }
          }
          ... on PrismicArticleBodyQuote {
            slice_type
            primary {
              quote {
                raw
                text
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
              image_captions {
                text
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
              }
              lang
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
        }
      }
      tags
    }
  }
`
