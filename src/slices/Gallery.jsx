import React, { useState } from 'react'
import { useThemeUI } from 'theme-ui'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'

const Gallery = ({ data: { items, primary } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { theme } = useThemeUI()
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const images = items.map((item) => {
    return {
      caption: item.gallery_image.alt,
      alt: item.image_caption.text,
      source: item.gallery_image.url
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
      width: '75%',
      margin: '0 auto',
      backgroundColor: theme.colors.accent
    }),
    footer: (base, state) => {
      const opacity = state.interactionIsIdle ? 0 : 1
      const transition = 'opacity 300ms'

      return {
        ...base,
        opacity,
        transition,
        fontFamily: theme.fonts.title,
        fontSize: theme.fontSizes[5],
        letterSpacing: '0.15rem'
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

      <p
        style={{
          textAlign: 'center',
          margin: '2rem auto 0 auto',
          fontFamily: theme.fonts.title,
          fontSize: theme.fontSizes[5],
          letterSpacing: '0.1rem'
        }}
      >
        {primary.name_of_the_gallery.text}
      </p>
      <div
        style={{
          width: '75%',
          height: 'auto',
          margin: '0 auto 2rem auto',
          paddingBottom: '1rem',
          cursor: 'pointer',
          borderRadius: '25px',
          boxShadow: `inset -5px -5px 12px ${theme.colors.shade1},
      inset 5px 5px 12px ${theme.colors.shade2}`
        }}
        onClick={toggleModal}
      >
        <Img
          fluid={items[0].gallery_image.localFile.childImageSharp.fluid}
          alt={items[0].gallery_image.alt}
          title={items[0].gallery_image.alt}
        />
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.colors.highlight,
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

export default Gallery
