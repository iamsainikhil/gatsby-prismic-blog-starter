import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
// import Highlight, { defaultProps } from 'prism-react-renderer'
import "prismjs/themes/prism-solarizedlight.css"

const Article = ({ data: { post } }) => {
  console.log(post)
  return (
    <Layout>
      <SEO title={post.data.title.text} description={post.data.content.text} />
      <h1>{post.data.title.text}</h1>
      <p>{post.data.content.text}</p>
      <p>Created: {post.data.created}</p>
      {post.data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case "banner_with_caption":
            return (
              <div key={index}>
                <h1>{slice.primary.title_of_banner.text}</h1>
                <p>{slice.primary.description.text}</p>
              </div>
            )
          case "quote":
            return (
              <blockquote key={index}>
                <p>{slice.primary.text.text}</p>
              </blockquote>
            )
          case "text":
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${slice.primary.text.html}`,
                }}
                key={index}
              ></div>
            )
          case "code":
            return (
              <div key={index}>
                {/* <Highlight
                  {...defaultProps}
                  theme={undefined}
                  code={slice.primary.block.raw[0].text}
                  language={slice.primary.lang.text}
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
                          margin: '3rem auto',
                          color: '#181818',
                        }}
                      >
                        {slice.primary.lang.text.toUpperCase()}
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
                </Highlight> */}
                <pre className={`language-${slice.primary.lang.text}`}>
                  <code className={`language-${slice.primary.lang.text}`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${slice.primary.block.html}`,
                      }}
                    ></div>
                  </code>
                </pre>
              </div>
            )
          case "image_gallery":
            return (
              <div key={index}>
                <p>{slice.primary.name_of_the_gallery.text}</p>
              </div>
            )
          default:
            return null
        }
      })}
      {post.tags.map((tag, index) => (
        <Link to={`/tag/${tag}`} key={index}>
          {tag}
        </Link>
      ))}
    </Layout>
  )
}

export default Article

export const PostQuery = graphql`
  query Post($uid: String) {
    post: prismicPost(uid: { eq: $uid }) {
      data {
        body {
          ... on PrismicPostBodyQuote {
            id
            slice_type
            primary {
              text {
                text
              }
            }
          }
          ... on PrismicPostBodyCode {
            id
            slice_type
            primary {
              block {
                raw
                html
              }
              lang {
                text
              }
            }
            slice_label
          }
          ... on PrismicPostBodyImageGallery {
            id
            primary {
              name_of_the_gallery {
                text
              }
            }
            slice_type
            items {
              gallery_image {
                alt
                copyright
                url
                thumbnails
              }
              image_captions {
                html
                text
                raw
              }
            }
          }
          ... on PrismicPostBodyBannerWithCaption {
            id
            primary {
              button_label {
                text
              }
              button_link {
                url
              }
              description {
                text
              }
              image_banner {
                alt
                copyright
                url
                thumbnails
              }
              title_of_banner {
                text
              }
            }
            slice_type
          }
          ... on PrismicPostBodyText {
            id
            slice_type
            primary {
              text {
                html
              }
            }
          }
        }
        created
        modified
        share_links {
          name
        }
        title {
          text
        }
        content {
          text
        }
      }
      tags
      uid
    }
  }
`
