import React, { useState } from 'react'
import { useThemeUI } from 'theme-ui'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { StackCard } from 'react-stack-cards'

const Gallery = ({ data: { items } }) => {
  const isMobile = () => screen.width < 600
  // screen width & height for stackCard images
  const [screenDimensions, setScreenDimensions] = useState(screen)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { theme } = useThemeUI()
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const images = items.map((item) => {
    return {
      caption: item.image_caption.text,
      alt: item.image_caption.text,
      source: item.gallery_image.url
    }
  })
  const cardImages = images.map((image) => image.source)

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

  window.onresize = () => {
    setScreenDimensions(screen)
    console.log(screenDimensions)
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
          margin: '3rem auto',
          width: '50%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <StackCard
          images={cardImages}
          width={isMobile() ? '300' : screenDimensions.width}
          height={
            isMobile() ? '200' : Math.round(screenDimensions.height / 2.5)
          }
          direction="center"
          duration={0}
          color={theme.colors.muted}
          isOpen={true}
          onClick={toggleModal}
        >
          <p
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              marginBottom: 0,
              marginRight: '1rem',
              padding: '0.5rem',
              backgroundColor: theme.colors.background
            }}
            onClick={toggleModal}
          >
            View Gallery
          </p>
        </StackCard>
      </div>
    </>
  )
}

export default Gallery
