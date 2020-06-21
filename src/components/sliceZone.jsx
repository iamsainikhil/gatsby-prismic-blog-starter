import React from "react"
import {
  Quote,
  Content,
  RawContent,
  Code,
  Embed,
  Gallery,
  Banner,
} from "../slices"

const SliceZone = ({ slices }) => {
  console.log(slices)
  return slices.map((slice, index) => {
    switch (slice.slice_type) {
      case "quote":
        return <Quote key={index} data={slice} />
      case "text":
        return <Content key={index} data={slice} />
      case "raw_text":
        return <RawContent key={index} data={slice} />
      case "code":
        return <Code key={index} data={slice} />
      case "embed":
        return <Embed key={index} data={slice} />
      case "image_gallery":
        return <Gallery key={index} data={slice} />
      case "banner_with_caption":
        return <Banner key={index} data={slice} />
      default:
        return null
    }
  })
}

export default SliceZone
