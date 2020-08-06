import React from 'react'
import PropTypes from 'prop-types'
import {
  Quote,
  Content,
  RawContent,
  Code,
  Embed,
  Gallery,
  Banner,
  MetaInfo
} from '../slices'

const SliceZone = ({ slices }) => {
  console.log(slices)
  return slices.map((slice, index) => {
    if (!slice) return null
    switch (slice.slice_type) {
      case 'quote':
        return <Quote key={index} data={slice} />
      case 'text':
        return <Content key={index} data={slice} />
      case 'raw_text':
        return <RawContent key={index} data={slice} />
      case 'code':
        return <Code key={index} data={slice} />
      case 'embed':
        return <Embed key={index} data={slice} />
      case 'image_gallery':
        return <Gallery key={index} data={slice} />
      case 'banner':
        return <Banner key={index} image={slice.primary.image_banner} />
      case 'meta_information':
        return <MetaInfo key={index} meta={slice.primary} />
      default:
        return null
    }
  })
}

SliceZone.propTypes = {
  slices: PropTypes.array
}

export default SliceZone
