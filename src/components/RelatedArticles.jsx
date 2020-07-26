/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import Listing from './Listing'
// import { Link } from 'gatsby'
// import { FiClock } from 'react-icons/fi'
// import formatDate from '../utils/formatDate'
// import Chip from './Chip'

const RelatedArticles = ({ uid, categories, tags: articleTags, related }) => {
  // get slugs from categories of the current article
  const articleSlugs = categories.map(({ slug }) => slug)
  let relatedArticles = {}

  relatedArticles.edges = related.edges
    .filter((article) => article.node.uid !== uid) // remove current article from articles list
    .map((article) => {
      const { categories } = article.node.data
      const { tags } = article.node
      let categoryMatch = false
      let tagMatch = false

      // check article categories slug inclluded in articleSlugs
      categories.forEach(({ slug }) => {
        if (articleSlugs.includes(slug)) {
          categoryMatch = true
        }
      })

      // check article tag included in articleTags
      tags.forEach((tag) => {
        if (articleTags.includes(tag)) {
          tagMatch = true
        }
      })

      if (categoryMatch || tagMatch) {
        return article
      }
    })
    .filter((article) => article !== undefined) // for articles that don't match both category & tag will be undefined
    .slice(0, 3) // limit relatedArticles number to 3

  return (
    <>
      <h3 sx={{ textAlign: 'center', variant: 'styles.h3' }}>
        Related Articles
      </h3>
      <div>
        {relatedArticles.edges.length > 0 ? (
          <Listing articles={relatedArticles} />
        ) : (
          // relatedArticles.slice(0, 3).map((article, index) => {
          //   return (
          //     <div
          //       key={index}
          //       sx={{
          //         mx: 3,
          //         my: 2,
          //         p: 2,
          //         minWidth: '300px',
          //         borderWidth: '1px',
          //         borderStyle: 'solid',
          //         borderColor: 'shade2',
          //         borderRadius: '1rem'
          //       }}
          //     >
          //       <h2
          //         sx={{
          //           m: 0,
          //           pt: 2,
          //           fontSize: [2, 3]
          //         }}
          //       >
          //         <Link
          //           to={`article/${article.node.uid}`}
          //           sx={{
          //             color: 'inherit',
          //             textDecoration: 'none',
          //             ':hover,:focus': {
          //               color: 'secondary',
          //               textDecoration: 'underline'
          //             }
          //           }}
          //         >
          //           {article.node.data.title.text}
          //         </Link>
          //       </h2>
          //       {article.node.data.categories.map((data, index) => {
          //         return (
          //           data.category.document && (
          //             <Chip
          //               name={data.category.document.data.name}
          //               slug={data.slug}
          //               type="category"
          //               page="listing"
          //               key={index}
          //             />
          //           )
          //         )
          //       })}

          //       <p
          //         sx={{
          //           fontSize: 0,
          //           fontWeight: 'bold',
          //           mb: 1,
          //           ml: 1,
          //           py: 1
          //         }}
          //       >
          //         <em
          //           title={formatDate(article.node.data.created)}
          //           aria-label={formatDate(article.node.data.created)}
          //         >
          //           {formatDate(article.node.data.created)}
          //         </em>
          //         <em
          //           sx={{ mx: 4 }}
          //           title="Time to read the article"
          //           aria-label="Time to read the article"
          //         >
          //           <FiClock style={{ marginBottom: '-0.1rem' }} />
          //           &nbsp;{article.node.data.read_time}&nbsp;min read
          //         </em>
          //       </p>
          //     </div>
          //   )
          // })
          <p
            style={{
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            No related articles found!
          </p>
        )}
      </div>
    </>
  )
}

export default RelatedArticles
