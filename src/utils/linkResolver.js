export default () => (doc) => {
  console.log(doc)
  // Route for blog articles
  if (doc.type === 'article') {
    return '/article/' + doc.uid
  } else if (doc.type === 'tag') {
    return '/tag/' + doc.uid
  } else if (doc.type === 'category') {
    return '/category' + doc.uid
  }
  // Homepage route fallback
  return '/'
}
