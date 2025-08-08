/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import GistEmbed from '../components/GistEmbed'

const iframeStyle = {
  minWidth: '200px',
  minHeight: '500px',
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '4px',
  overflow: 'auto',
  margin: '1rem auto'
}

/**
 * return the ID part of the URL
 * @param {*} url
 */
const getGistId = (url) => {
  return url.split('/').slice(-1).join('')
}

const Embed = ({ data: { primary } }) => {
  {
    if (primary.type === 'GitHub Gist') {
      return (
        <GistEmbed gist={getGistId(primary.embed_url)} />
      )
    }
    return (
      <>
        <iframe
          src={primary.embed_url}
          style={iframeStyle}
          alt={primary.embed_title}
        ></iframe>

        <p
          sx={{
            textAlign: 'center',
            margin: '0 auto',
            fontFamily: 'heading',
            fontSize: [2, 3]
          }}
        >
          {primary.embed_title}
        </p>
      </>
    )
  }
}

Embed.defaultProps = {
  data: {
    primary: {
      type: 'Default',
      embed_title: '',
      embed_url: ''
    }
  }
}

Embed.propTypes = {
  data: PropTypes.object
}

export default Embed
