/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'

const Gallery = ({ data: { items } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { theme } = useThemeUI()
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const images = items.map(({ image }) => {
    return {
      caption: image.alt,
      alt: image.alt,
      source: image.url
    }
  })

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
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel views={images} styles={galleryStyles} />
          </Modal>
        ) : null}
      </ModalGateway>

      <div
        style={{
          position: 'relative',
          margin: '0 auto 2rem auto',
          cursor: 'pointer',
          borderRadius: '25px',
          boxShadow: `inset -5px -5px 12px ${theme.colors.shade1},
      inset 5px 5px 12px ${theme.colors.shade2}`,
          overflow: 'hidden'
        }}
        onClick={toggleModal}
      >
        <Img
          fluid={items[0].image.fluid}
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
      fluid: null,
      url: ''
    }
  }
}

Gallery.propTypes = {
  data: PropTypes.object
}

export default Gallery
