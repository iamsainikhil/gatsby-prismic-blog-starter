const linkResolver = ({ node, key, value }) => (doc) => {
  // Route for blog articles
  if (doc.type === 'article') {
    return `/article/${doc.uid}`
  } else if (doc.type === 'category') {
    return `/category/${doc.uid}`
  }
  // Homepage route fallback
  return '/'
}

export default linkResolver
