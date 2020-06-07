import React from "react"
import { Link } from "gatsby"

const Listing = ({ slug, data: { created, title, content } }) => {
  return (
    <div>
      <h2>{title.text}</h2>
      <p>{content.text}</p>
      <p>{created}</p>
      <Link to={`/article/${slug}`}>view</Link>
    </div>
  )
}

export default Listing
