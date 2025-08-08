/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import PropTypes from 'prop-types'

const Gallery = ({ data: { items } }) => {
  const [open, setOpen] = useState(false)
  const { theme } = useThemeUI()
  const toggleModal = () => setOpen((v) => !v)

  const slides = items.map(({ image }) => ({
    src: image.url,
    alt: image.alt,
    description: image.alt
  }))

  const navigationStyle = {
    backgroundColor: theme.colors.highlight,
    color: theme.colors.text,
    ':hover': {
      backgroundColor: theme.colors.gray
    }
  }
  const galleryStyles = {
    header: (base, state) => ({
      ...base,
      padding: 20
    }),
    navigationPrev: (base) => ({
      ...base,
      ...navigationStyle
    }),
    navigationNext: (base) => ({
      ...base,
      ...navigationStyle
    }),
    view: () => ({
      height: 'auto',
      width: '100%',
      margin: '0 auto -1rem auto',
      backgroundColor: theme.colors.accent
    }),
    footer: (base, state) => {
      const opacity = state.interactionIsIdle ? 0 : 1
      const transition = 'opacity 300ms'

      return {
        ...base,
        opacity,
        transition,
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes[(3, 4)]
      }
    }
  }

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
      <div
        style={{
          position: 'relative',
          margin: '0 auto 2rem auto',
          cursor: 'pointer',
          borderRadius: '25px',
          boxShadow: `inset -5px -5px 12px ${theme.colors.shade1},      inset 5px 5px 12px ${theme.colors.shade2}`,
          overflow: 'hidden'
        }}
        onClick={toggleModal}
      >
        <GatsbyImage
          image={getImage(items[0].image.gatsbyImageData)}
          alt={items[0].image.alt}
          title={items[0].image.alt}
        />
        <p
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#f7f8f9',
            borderRadius: '25px',
            width: '200px',
            height: '40px',
            padding: '0.5rem',
            margin: '0 auto 0 auto',
            cursor: 'pointer'
          }}
          onClick={toggleModal}
        >
          View Gallery
        </p>
      </div>
    </>
  )
}

Gallery.defaultProps = {
  data: {
    items: {
      alt: '',
      url: ''
    }
  }
}

Gallery.propTypes = {
  data: PropTypes.object
}

export default Gallery
