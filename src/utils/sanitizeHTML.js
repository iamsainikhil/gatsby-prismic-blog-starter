import DOMPurify from 'dompurify'

/**
 * sanitize HTML
 * @param {String} html
 */
const sanitizeHTML = (html) => { return DOMPurify.sanitize(html) }

export default sanitizeHTML
