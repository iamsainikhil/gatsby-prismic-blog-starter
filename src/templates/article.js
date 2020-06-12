import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Highlight, { defaultProps } from "prism-react-renderer"
import "prismjs/themes/prism-solarizedlight.css"
import Gist from "react-gist"

const iframeStyle = {
  minWidth: "200px",
  minHeight: "500px",
  width: "100%",
  height: "100%",
  border: "0",
  borderRadius: "4px",
  overflow: "auto",
  margin: "1rem auto",
}

/**
 * return the ID part of the URL
 * @param {*} url
 */
const getGistId = url => {
  return url.split("/").slice(-1).join("")
}

const Article = ({ data: { article } }) => {
  console.log(article)

  return (
    <Layout>
      <SEO
        title={article.data.title.text}
        description={article.data.excerpt.text}
      />
      <h1 style={{ textAlign: "center" }}>{article.data.title.text}</h1>
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
                  __html: `${slice.primary.quote.text}`,
                }}
              ></blockquote>
            )
          case "text":
            return slice.primary.content.raw.map((block, index) => {
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${block.text}`,
                  }}
                  key={index}
                ></div>
              )
            })
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
          case "embed":
            if (slice.primary.platform === "CodeSandbox") {
              return (
                <iframe
                  key={index}
                  src={slice.primary.embed.embed_url}
                  style={iframeStyle}
                  title={`${slice.primary.platform} Embed`}
                ></iframe>
              )
            }
            return (
              // <iframe
              //   key={index}
              //   style={iframeStyle}
              //   scrolling="no"
              //   seamless="seamless"
              //   srcdoc={`<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src=${slice.primary.embed.embed_url}.js></script></body></html>`}
              // ></iframe>
              <Gist id={getGistId(slice.primary.embed.embed_url)} />
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
                html
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
        }
      }
      tags
    }
  }
`
