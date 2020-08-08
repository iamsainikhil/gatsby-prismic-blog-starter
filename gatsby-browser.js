// custom typefaces
require('typeface-inter')
require('typeface-fira-code')

/**
 * Should return either an [x, y] Array of coordinates to scroll to,
 * a string of the id or name of an element to scroll to,
 * a boolean value of the scrollBehavior
 */
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location) || [0, 0]
  // const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

  // false to not update the scroll position,
  // or true for the default behavior of gatsby to scroll to the last saved location.
  const defaultScrollBehavior = true

  window.scrollTo(...(defaultScrollBehavior ? currentPosition : [0, 0]))

  return defaultScrollBehavior
}
